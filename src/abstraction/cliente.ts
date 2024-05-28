import Documento from "../entities/documento"
import Endereco from "../entities/endereco"
import Telefone from "../entities/telefone"

export default abstract class Cliente {
    private nome: string
    private nomeSocial: string
    private dataNascimento: Date
    private dataCadastro: Date
    private endereco!: Endereco
    private documentos: Documento[] = []
    private telefones: Telefone[] = []

    constructor(nome: string, nomeSocial: string, dataNascimento: Date, dataCadastro: Date) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.dataNascimento = dataNascimento
        this.dataCadastro = dataCadastro
    }

    get getNome(): string { return this.nome }
    get getNomeSocial(): string { return this.nomeSocial }
    get getDataNascimento(): Date { return this.dataNascimento }
    get getDataCadastro(): Date { return this.dataCadastro }
    get getEndereco(): Endereco { return this.endereco }
    get getDocumentos(): Documento[] { return this.documentos }
    get getTelefones(): Telefone[] { return this.telefones }

    set setNome(nome: string) { this.nome = nome }
    set setNomeSocial(nomeSocial: string) { this.nomeSocial = nomeSocial }
    set setDataNascimento(dataNascimento: Date) { this.dataNascimento = dataNascimento }
    set setDataCadastro(dataCadastro: Date) { this.dataCadastro = dataCadastro }
    set setEndereco(endereco: Endereco) { this.endereco = endereco }
    set setDocumentos(documentos: Documento[]) { this.documentos = documentos }
    set setTelefones(telefones: Telefone[]) { this.telefones = telefones }
}