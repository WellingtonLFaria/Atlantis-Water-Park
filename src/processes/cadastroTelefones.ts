import Cliente from "../abstraction/cliente";
import Processo from "../abstraction/processo";
import Telefone from "../entities/telefone";
import MenuCadastroTelefone from "../menus/menuCadastroTelefone";

export default class CadastroTelefones extends Processo {
    private cliente: Cliente

    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
        this.menu = new MenuCadastroTelefone()
        this.execucao = true
    }

    processar(): void {
        let ddd = this.entrada.receberTexto('Qual o DDD do telefone?')
        let numero = this.entrada.receberTexto('Qual o número do telefone?')
        let telefone = new Telefone(ddd, numero)
        this.cliente.getTelefones.push(telefone)

        while (this.getExecucao) {
            this.menu.mostrar()
            this.opcao = this.entrada.receberNumero('')
            switch (this.opcao) {
                case 1:
                    ddd = this.entrada.receberTexto('Qual o DDD do telefone?')
                    numero = this.entrada.receberTexto('Qual o número do telefone?')
                    telefone = new Telefone(ddd, numero)
                    this.cliente.getTelefones.push(telefone)
                    break;
                case 0:
                    this.execucao = false
                    break;
                default:
                    console.log('Opção não entendida :(')
                    break;
            }
        }
    }
}