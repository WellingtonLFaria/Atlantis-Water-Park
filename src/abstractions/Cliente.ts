import Documento from "../entities/Documento";
import Endereco from "../entities/Endereco";
import Telefone from "../entities/Telefone";

export default abstract class Cliente {
    private nome: string;
    private nomeSocial: string;
    private dataNascimento: Date;
    private dataCadastro: Date;
    private endereco: Endereco;
    private documentos: Documento[];
    private telefones: Telefone[];

    constructor(nome: string, nomeSocial: string, dataNascimento: Date, dataCadastro: Date, endereco: Endereco, documentos: Documento[], telefones: Telefone[]) {
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.dataNascimento = dataNascimento;
        this.dataCadastro = dataCadastro;
        this.endereco = endereco;
        this.documentos = documentos;
        this.telefones = telefones;
    }
    
    get Nome(): string {
        return this.nome;
    }

    set Nome(nome: string) {
        this.nome = nome;
    }

    get NomeSocial(): string {
        return this.nomeSocial;
    }

    set NomeSocial(nomeSocial: string) {
        this.nomeSocial = nomeSocial;
    }

    get DataNascimento(): Date {
        return this.dataNascimento;
    }

    set DataNascimento(dataNascimento: Date) {
        this.dataNascimento = dataNascimento;
    }

    get DataCadastro(): Date {
        return this.dataCadastro;
    }

    set DataCadastro(dataCadastro: Date) {
        this.dataCadastro = dataCadastro;
    }

    get Endereco(): Endereco {
        return this.endereco;
    }

    set Endereco(endereco: Endereco) {
        this.endereco = endereco;
    }

    get Documentos(): Documento[] {
        return this.documentos;
    }

    set Documentos(documentos: Documento[]) {
        this.documentos = documentos;
    }

    get Telefones(): Telefone[] {
        return this.telefones;
    }

    set Telefones(telefones: Telefone[]) {
        this.telefones = telefones;
    }
}