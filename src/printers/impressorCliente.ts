import Cliente from "../abstraction/cliente";
import Impressor from "../interfaces/impressor";
import ImpressorDocumentos from "./impressorDocumentos";
import ImpressorEndereco from "./impressorEndereco";

export default class ImpressorCliente implements Impressor {
    private cliente: Cliente;
    private index: number;
    private impressor!: Impressor;

    constructor(cliente: Cliente, index: number) {
        this.cliente = cliente
        this.index = index
    }

    imprimir(): string {
        let impressao = `****************************\n`
            + `| ID: ${this.index}\n`
            + `| Nome: ${this.cliente.getNome}\n`
            + `| Nome social: ${this.cliente.getNomeSocial}\n`
            + `| Data de nascimento: ${this.cliente.getDataNascimento.toLocaleDateString()}\n`
            + `| Data de cadastro: ${this.cliente.getDataCadastro.toLocaleDateString()}`

        this.impressor = new ImpressorEndereco(this.cliente.getEndereco)
        impressao = impressao + `\n${this.impressor.imprimir()}`

        this.impressor = new ImpressorDocumentos(this.cliente.getDocumentos)
        impressao = impressao + `\n${this.impressor.imprimir()}`

        impressao = impressao + `\n****************************`
        return impressao
    }
}