export default class Endereco {
    private rua: string;
    private bairro: string;
    private cidade: string;
    private estado: string;
    private pais: string;
    private codigoPostal: string;

    constructor(rua: string, bairro: string, cidade: string, estado: string, pais: string, codigoPostal: string) {
        this.rua = rua
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
        this.pais = pais
        this.codigoPostal = codigoPostal
    }

    get getRua(): string { return this.rua }
    get getBairro(): string { return this.bairro }
    get getCidade(): string { return this.cidade }
    get getEstado(): string { return this.estado }
    get getPais(): string { return this.pais }
    get getCodigoPostal(): string { return this.codigoPostal }

    set setRua(rua: string) { this.rua = rua }
    set setBairro(bairro: string) { this.bairro = bairro }
    set setCidade(cidade: string) { this.cidade = cidade }
    set setEstado(estado: string) { this.estado = estado }
    set setPais(pais: string) { this.pais = pais }
    set setCodigoPostal(codigoPostal: string) { this.codigoPostal = codigoPostal }
}