import Cliente from "./Cliente";
import Dependente from "./Dependente";
import Documento from "./Documento";
import Endereco from "./Endereco";
import Telefone from "./Telefone";

export default class Titular extends Cliente {
    private dependentes: Dependente[];

    constructor(nome: string, nomeSocial: string, dataNascimento: Date, endereco: Endereco, telefones: Telefone[], documentos: Documento[], dependentes: Dependente[]) {
        super(nome, nomeSocial, dataNascimento, endereco, telefones, documentos);
        this.dependentes = dependentes;
    }

    get Dependentes() { return this.dependentes }

    set Dependentes(dependentes: Dependente[]) { this.dependentes = dependentes }
}