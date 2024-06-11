import Cliente from "./Cliente";
import Documento from "./Documento";
import Endereco from "./Endereco";
import Telefone from "./Telefone";
import Titular from "./Titular";

export default class Dependente extends Cliente {
    private titular: Titular;

    constructor(nome: string, nomeSocial: string, dataNascimento: Date, endereco: Endereco, telefones: Telefone[], documentos: Documento[], titular: Titular) {
        super(nome, nomeSocial, dataNascimento, endereco, telefones, documentos);
        this.titular = titular;
    }

    get Titular(): Titular { return this.titular }

    set Titular(titular: Titular) { this.titular = titular }
}