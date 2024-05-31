import Storage from "../domain/Storage";
import Editar from "../interfaces/Editar";
import Menu from "../interfaces/Menu";
import Input from "../io/Input";
import MenuEditarDependente from "../menus/MenuEditarDependente";
import EditarDocumentos from "./EditarDocumentos";
import ListagemDependentes from "./ListagemDependentes";
import ListagemTitulares from "./ListagemTitulares";

export default class EditarDependente implements Editar {
    private listagemTitulares: ListagemTitulares = new ListagemTitulares();
    private listagemDependentes: ListagemDependentes = new ListagemDependentes();
    private armazem: Storage = Storage.UniqueInstance;
    private entrada: Input = new Input();
    private edicao: boolean = true;
    private opcao!: number;
    private menu: Menu = new MenuEditarDependente();

    editar(): void {
        // Listar dependentes
        this.listagemDependentes.listar();
        // Selecionar dependente a ser editado
        this.opcao = this.entrada.receberNumero("Digite o número do dependente a ser editado: ");
        let dependente = this.armazem.Dependentes[this.opcao];

        // Enquanto this.edicao for verdadeiro
        while (this.edicao) {
            // Mostrar menu de edição de dependente
            this.menu.mostrar();

            // Receber opção de edição
            this.opcao = this.entrada.receberNumero("Digite a opção desejada: ");

            // Switch case para opção de edição
            switch (this.opcao) {
                case 1:
                    // Editar nome
                    let nome = this.entrada.receberTexto("Digite o novo nome: ");
                    dependente.Nome = nome;
                    console.log("Nome editado com sucesso");
                    break;
                case 2:
                    // Editar nome social
                    let nomeSocial = this.entrada.receberTexto("Digite o novo nome social: ");
                    dependente.NomeSocial = nomeSocial;
                    console.log("Nome social editado com sucesso");
                    break;
                case 3:
                    // Editar data de nascimento
                    let dataNascimento = this.entrada.receberData("Digite a nova data de nascimento");
                    dependente.DataNascimento = dataNascimento;
                    console.log("Data de nascimento editada com sucesso");
                    break;
                case 4:
                    // Editar documentos
                    let editorDocumentos = new EditarDocumentos(dependente.Documentos);
                    dependente.Documentos = editorDocumentos.editar();
                    console.log("Documentos editados com sucesso");
                    break;
                case 5:
                    // Editar titular
                    this.listagemTitulares.listar();
                    let opcaoTitular = this.entrada.receberNumero("Digite o número do novo titular: ");
                    let titular = this.armazem.Titulares[opcaoTitular];
                    dependente.Titular = titular;
                    dependente.Telefones = titular.Telefones;
                    dependente.Endereco = titular.Endereco;
                    console.log("Titular editado com sucesso");
                    break;
                case 0:
                    this.edicao = false;
                    break;
                default:
                    console.log("Opção inválida");
                    break;
            }
        }
    }
}