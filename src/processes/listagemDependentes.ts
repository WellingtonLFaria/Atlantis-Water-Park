import Cliente from "../abstraction/cliente";
import Processo from "../abstraction/processo";
import Armazem from "../domain/armazem";
import Dependente from "../entities/dependente";
import Impressor from "../interfaces/impressor";
import ImpressorCliente from "../printers/impressorCliente";

export default class ListagemDependentes extends Processo {
    private clientes: Dependente[]
    private impressor!: Impressor
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.getDependentes
    }
    public processar(): void {
        console.clear()
        console.log('Iniciando a listagem dos clientes dependentes...')
        this.clientes.forEach(cliente => {
            this.impressor = new ImpressorCliente(cliente)
            console.log(this.impressor.imprimir())
        })
    }
}