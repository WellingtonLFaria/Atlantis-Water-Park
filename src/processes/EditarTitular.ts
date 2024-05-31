import Storage from "../domain/Storage";
import Editar from "../interfaces/Editar";
import Menu from "../interfaces/Menu";
import Input from "../io/Input";
import MenuEditarTitular from "../menus/MenuEditarTitular";
import CadastroEndereco from "./CadastroEndereco";
import EditarDocumentos from "./EditarDocumentos";
import EditarTelefones from "./EditarTelefones";
import ListagemTitulares from "./ListagemTitulares";

export default class EditarTitular implements Editar {
    private listagemTitulares: ListagemTitulares = new ListagemTitulares();
    private armazem: Storage = Storage.UniqueInstance;
    private entrada: Input = new Input();
    private edicao: boolean = true;
    private opcao!: number;
    private menu: Menu = new MenuEditarTitular();
    private cadastroEndereco = new CadastroEndereco();

    public editar(): void {
        // Listar titulares
        this.listagemTitulares.listar();

        // Selecionar o titular a ser editado
        this.opcao = this.entrada.receberNumero("Digite o número do titular a ser editado: ");
        let titular = this.armazem.Titulares[this.opcao];

        // Enquanto this.edicao for verdadeiro
        while (this.edicao) {
            // Mostrar menu de edição de titular
            this.menu.mostrar();

            // Receber opção de edição
            this.opcao = this.entrada.receberNumero("Digite a opção desejada: ");

            // Switch case para opção de edição
            switch (this.opcao) {
                case 1:
                    // Editar nome
                    let nome = this.entrada.receberTexto("Digite o novo nome: ");
                    titular.Nome = nome;
                    console.log("Nome editado com sucesso");
                    break;
                case 2:
                    // Editar nome social
                    let nomeSocial = this.entrada.receberTexto("Digite o novo nome social: ");
                    titular.NomeSocial = nomeSocial;
                    console.log("Nome social editado com sucesso");
                    break;
                case 3:
                    // Editar data de nascimento
                    let dataNascimento = this.entrada.receberData("Digite a nova data de nascimento");
                    titular.DataNascimento = dataNascimento;
                    console.log("Data de nascimento editada com sucesso");
                    break;
                case 4:
                    // Editar endereço
                    let endereco = this.cadastroEndereco.cadastrar();
                    titular.Endereco = endereco;
                    console.log("Endereço editado com sucesso");
                    break;
                case 5:
                    // Editar documentos
                    let editorDocumentos = new EditarDocumentos(titular.Documentos);
                    titular.Documentos = editorDocumentos.editar();
                    console.log("Documentos editados com sucesso");
                    break;
                case 6:
                    // Editar telefones
                    let editorTelefones = new EditarTelefones(titular.Telefones);
                    titular.Telefones = editorTelefones.editar();
                    console.log("Telefones editados com sucesso");
                    break;
                case 0:
                    // Voltar
                    this.edicao = false;
                    break;
                default:
                    console.log("Opção inválida");
                    break;
            }
        }
    }
}