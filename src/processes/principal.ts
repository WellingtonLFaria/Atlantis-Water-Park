import Processo from "../abstraction/processo"
import MenuPrincipal from "../menus/menuPrincipal"
import EditarCliente from "./editarCliente"
import TipoCadastroCliente from "./tipoCadastroCliente"
import TipoDeletarCliente from "./tipoDeletarCliente"
import TipoListagemClientes from "./tipoListagemClientes"

export default class Principal extends Processo {
    constructor() {
        super()
        this.execucao = true
        this.menu = new MenuPrincipal()
    }

    public processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')
        switch (this.opcao) {
            case 1:
                // Cadastro de cliente
                this.processo = new TipoCadastroCliente()
                this.processo.processar()
                break
            case 2:
                // Editar cliente
                this.processo = new EditarCliente();
                this.processo.processar();
                break
            case 3:
                // Listar clientes
                this.processo = new TipoListagemClientes()
                this.processo.processar()
                break
            case 4:
                // Excluir cliente
                this.processo = new TipoDeletarCliente();
                this.processo.processar();
                break
            case 0:
                this.execucao = false
                console.log('Até logo!')
                console.clear()
                break
            default:
                console.log('Opção não entendida :(')
                break;
        }
    }
}