import Cliente from "../abstractions/Cliente";
import Acomodacao from "./Acomodacao";
import Documento from "./Documento";
import Endereco from "./Endereco";
import Telefone from "./Telefone";
import Titular from "./Titular";

export default class Dependente extends Cliente {
    private titular: Titular;

    constructor(nome: string, nomeSocial: string, dataNascimento: Date, dataCadastro: Date, endereco: Endereco, documentos: Documento[], telefones: Telefone[], acomodacao: Acomodacao, titular: Titular) {
        super(nome, nomeSocial, dataNascimento, dataCadastro, endereco, documentos, telefones, acomodacao);
        this.titular = titular;
    }

    get Titular(): Titular {
        return this.titular;
    }

    set Titular(titular: Titular) {
        this.titular = titular;
    }
}