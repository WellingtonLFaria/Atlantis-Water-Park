import Cliente from "../abstraction/cliente";
import Documento from "./documento";
import Endereco from "./endereco";
import Telefone from "./telefone";
import Titular from "./titular";

export default class Dependente extends Cliente {
    private titular: Titular;

    constructor(nome: string, nomeSocial: string, dataNascimento: Date, dataCadastro: Date, titular: Titular) {
        super(nome, nomeSocial, dataNascimento, dataCadastro);
        this.titular = titular;
    }

    get getTitular(): Titular { return this.titular }

    set setTitular(titular: Titular) { this.titular = titular }
}