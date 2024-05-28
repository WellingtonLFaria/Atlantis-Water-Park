import Cliente from "../abstraction/cliente";
import Dependente from "./dependente";
import Documento from "./documento";
import Endereco from "./endereco";
import Telefone from "./telefone";

export default class Titular extends Cliente {
    private dependentes: Dependente[] = [];

    constructor(nome: string, nomeSocial: string, dataNascimento: Date, dataCadastro: Date) {
        super(nome, nomeSocial, dataNascimento, dataCadastro);
    }

    get getDependentes(): Dependente[] { return this.dependentes }

    set setDependentes(dependentes: Dependente[]) { this.dependentes = dependentes }
}