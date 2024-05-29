import Processo from "../abstraction/processo"
import MenuTipoCadastroCliente from "../menus/menuTipoCadastroCliente"
import CadastroClienteDependente from "./cadastroClienteDependente"
import CadastroClienteTitular from "./cadastroClienteTitular"

export default class TipoCadastroCliente extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoCadastroCliente()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')

        switch (this.opcao) {
            case 1:
                this.processo = new CadastroClienteTitular()
                this.processo.processar()
                break
            case 2:
                this.processo = new CadastroClienteDependente()
            default:
                console.log('Opção não entendida :(')
        }
    }
}