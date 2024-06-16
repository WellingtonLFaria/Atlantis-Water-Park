import Documento from "./Documento";
import Endereco from "./Endereco";
import Telefone from "./Telefone";

export default abstract class Cliente {
    private nome: string;
    private nomeSocial: string;
    private dataNascimento: Date;
    private endereco: Endereco;
    private telefones: Telefone[];
    private documentos: Documento[];

    constructor(nome: string, nomeSocial: string, dataNascimento: Date, endereco: Endereco, telefones: Telefone[], documentos: Documento[]) {
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.dataNascimento = dataNascimento;
        this.endereco = endereco;
        this.telefones = telefones;
        this.documentos = documentos;
    }

    get Nome(): string { return this.nome }
    set Nome(nome: string) { this.nome = nome }

    get NomeSocial(): string { return this.nomeSocial }
    set NomeSocial(nomeSocial: string) { this.nomeSocial = nomeSocial }

    get DataNascimento(): Date { return this.dataNascimento }
    set DataNascimento(dataNascimento: Date) { this.dataNascimento = dataNascimento }

    get Endereco(): Endereco { return this.endereco }
    set Endereco(endereco: Endereco) { this.endereco = endereco }

    get Telefones(): Telefone[] { return this.telefones }
    set Telefones(telefones: Telefone[]) { this.telefones = telefones }

    get Documentos(): Documento[] { return this.documentos }
    set Documentos(documentos: Documento[]) { this.documentos = documentos }
}