import Cliente from "../abstraction/cliente"
import Processo from "../abstraction/processo"
import MenuTipoDocumento from "../menus/menuTipoDocumento"
import CadastroCpf from "./cadastroCpf"
import CadastroPassaporte from "./cadastroPassaporte"
import CadastroRg from "./cadastroRg"


export default class CadastrarDocumentosCliente extends Processo {
    private cliente: Cliente
    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
        this.menu = new MenuTipoDocumento()
        this.execucao = true
    }

    processar(): void {
        console.log('Inciando o cadastro de documentos...')
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new CadastroCpf(this.cliente)
                this.processo.processar()
                break
            case 2:
                this.processo = new CadastroRg(this.cliente)
                this.processo.processar()
                break
            case 3:
                this.processo = new CadastroPassaporte(this.cliente)
                this.processo.processar()
                break
            case 0:
                this.execucao = false
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}