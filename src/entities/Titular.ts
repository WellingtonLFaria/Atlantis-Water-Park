import Cliente from "../abstractions/Cliente";
import Acomodacao from "./Acomodacao";
import Dependente from "./Dependente";
import Documento from "./Documento";
import Endereco from "./Endereco";
import Telefone from "./Telefone";

export default class Titular extends Cliente {
    private dependentes: Dependente[] = [];

    constructor(nome: string, nomeSocial: string, dataNascimento: Date, dataCadastro: Date, endereco: Endereco, documentos: Documento[], telefones: Telefone[], acomodacao: Acomodacao, dependentes: Dependente[]) {
        super(nome, nomeSocial, dataNascimento, dataCadastro, endereco, documentos, telefones, acomodacao);
        this.dependentes = dependentes;
    }

    get Dependentes(): Dependente[] {
        return this.dependentes;
    }

    set Dependentes(dependentes: Dependente[]) {
        this.dependentes = dependentes;
    }
}