import Processo from "../abstraction/processo"
import Armazem from "../domain/armazem"
import Titular from "../entities/titular"
import Impressor from "../interfaces/impressor"
import ImpressorCliente from "../printers/impressorCliente"

export default class ListagemTitulares extends Processo {
    private clientes: Titular[]
    private impressor!: Impressor
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.getTitulares
    }
    processar(): void {
        console.clear()
        if (this.clientes.length === 0) {
            console.log('Não há titulares cadastrados.')
            return
        } else {
            console.log('Iniciando a listagem dos clientes titulares...')
            this.clientes.forEach(cliente => {
                this.impressor = new ImpressorCliente(cliente, this.clientes.indexOf(cliente))
                console.log(this.impressor.imprimir())
            })
        }
    }
}