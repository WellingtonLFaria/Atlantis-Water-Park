import Processo from "../abstraction/processo";
import Armazem from "../domain/armazem";
import Titular from "../entities/titular";
import Impressor from "../interfaces/impressor";
import MenuEditarTitular from "../menus/menuEditarTitular";
import ImpressorCliente from "../printers/impressorCliente";
import CadastroDocumentos from "./cadastroDocumentos";
import CadastroEndereco from "./cadastroEndereco";
import CadastroTelefones from "./cadastroTelefones";
import CadastroTelefonesEditar from "./cadastroTelefonesEditar";
import ListagemTitulares from "./listagemTitulares";

export default class EditarTitular extends Processo {
    constructor() {
        super();
        this.execucao = true;
    }
    
    processar(): void {
        // Listar titulares
        this.processo = new ListagemTitulares();
        this.processo.processar();

        // Usuário seleciona titular
        let indexTitular = this.entrada.receberNumero("Informe o ID do cliente titular que deseja atualizar:");
        let titular: Titular = new Titular("foo-bar", "foo-bar", new Date(), new Date());
        
        try {
            titular = Armazem.InstanciaUnica.getTitulares[indexTitular];
        } catch (error) {
            console.log("Cliente selecionado inválido, cancelando edição de cliente titular");
            return;
        }

        // Abre menu de edição de titular enquanto this.execução for true
        while (this.execucao) {
            // Imprime as informações atuais do titular
            let impressor = new ImpressorCliente(titular, Armazem.InstanciaUnica.getTitulares.indexOf(titular));
            impressor.imprimir();
            
            // Mostra as opções de edição do titular
            this.menu = new MenuEditarTitular();
            this.menu.mostrar();
            
            // Usuário seleciona a opção desejada
            this.opcao = this.entrada.receberNumero("Seleciona a opção desejada");

            // switch de opcao
            switch (this.opcao) {
                case 1:
                    // Editar nome
                    let novoNome = this.entrada.receberTexto("Digite o novo nome");
                    titular.setNome = novoNome;
                    console.log("Nome alterado com sucesso!");
                    break;
                case 2:
                    // Editar nome social
                    let novoNomeSocial = this.entrada.receberTexto("Digite o novo nome");
                    titular.setNome = novoNomeSocial;
                    console.log("Nome social alterado com sucesso!");
                    break;
                case 3:
                    // Editar data de nascimento
                    let novaDataNascimento = this.entrada.receberData("Digite a nova data de nascimento");
                    titular.setDataNascimento = novaDataNascimento;
                    console.log("Data de nascimento alterada com sucesso!");
                    break;
                case 4:
                    // Editar endereco
                    let proc = new CadastroEndereco();
                    let novoEndereco = proc.processar();
                    titular.setEndereco = novoEndereco;
                    console.log("Endereço atualizado com sucesso!");
                    break;
                case 5:
                    // Editar documentos
                    let proc2 = new CadastroDocumentos();
                    let novosDocumentos = proc2.processar();
                    titular.setDocumentos = novosDocumentos;
                    console.log("Documentos atualizados com sucesso!");
                    break;
                case 6:
                    // Editar telefones
                    let proc3 = new CadastroTelefonesEditar();
                    let novosTelefones = proc3.processar();
                    titular.setTelefones = novosTelefones;
                    console.log("Telefones atualizados com sucesso!");
                    break;
                case 0:
                    // Sair
                    this.execucao = false;
                    console.log("Encerrando edição de cliente titular...");
                    break;
                default:
                    console.log("Opção inválida!");
                    break;
            }
        }
    }
}