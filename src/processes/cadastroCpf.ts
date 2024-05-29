import Cliente from "../abstraction/cliente";
import Processo from "../abstraction/processo";
import Documento from "../entities/documento";
import { TipoDocumento } from "../enumerations/tipoDocumento";

export default class CadastroCpf extends Processo {
    private cliente: Cliente

    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }

    processar(): void {
        console.log(TipoDocumento.CPF)
        let numero = this.entrada.receberTexto('Qual o número do documento?')
        let dataExpedicao = this.entrada.receberData('Qual a data de expedição do documento?')
        let cpf = new Documento(TipoDocumento.CPF, numero, dataExpedicao)
        this.cliente.getDocumentos.push(cpf)
    }
}