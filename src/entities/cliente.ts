import Documento from "./documento";
import Endereco from "./endereco";
import Telefone from "./telefone";

export default class Cliente {
    private nome: string;
    private nomeSocial: string;
    private dataNascimento: Date;
    private dataCadastro: Date;
    private telefones: Telefone[] = [];
    private endereco: Endereco;
    private documentos: Documento[] = [];
    private dependentes!: Cliente[];
    private titular!: Cliente;

    constructor(nome: string, nomeSocial: string, dataNascimento: Date, dataCadastro: Date, telefones: Telefone[], endereco: Endereco, documentos: Documento[]) {
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.dataNascimento = dataNascimento;
        this.dataCadastro = dataCadastro;
        this.telefones = telefones;
        this.endereco = endereco;
        this.documentos = documentos;
    }

    get getNome(): string { return this.nome }
    get getNomeSocial(): string { return this.nomeSocial }
    get getDataNascimento(): Date { return this.dataNascimento }
    get getDataCadastro(): Date { return this.dataCadastro }
    get getTelefones(): Telefone[] { return this.telefones }
    get getEndereco(): Endereco { return this.endereco }
    get getDocumentos(): Documento[] { return this.documentos }
    get getDependentes(): Cliente[] { return this.dependentes }
    get getTitular(): Cliente { return this.titular }

    set setNome(nome: string) { this.nome = nome }
    set setNomeSocial(nomeSocial: string) { this.nomeSocial = nomeSocial }
    set setDataNascimento(dataNascimento: Date) { this.dataNascimento = dataNascimento }
    set setDataCadastro(dataCadastro: Date) { this.dataCadastro = dataCadastro }
    set setTelefones(telefones: Telefone[]) { this.telefones = telefones }
    set setEndereco(endereco: Endereco) { this.endereco = endereco }
    set setDocumentos(documentos: Documento[]) { this.documentos = documentos }
    set setDependentes(dependentes: Cliente[]) { this.dependentes = dependentes }
    set setTitular(titular: Cliente) { this.titular = titular }
}