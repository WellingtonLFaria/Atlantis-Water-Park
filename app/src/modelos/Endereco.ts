export default class Endereco {
    private rua: string;
    private bairro: string;
    private cidade: string;
    private estado: string;
    private pais: string;
    private codigoPostal: string;

    constructor(rua: string, bairro: string, cidade: string, estado: string, pais: string, codigoPostal: string) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.pais = pais;
        this.codigoPostal = codigoPostal;
    }

    get Rua(): string { return this.rua }
    set Rua(rua: string) { this.rua = rua }
    
    get Bairro(): string { return this.bairro }
    set Bairro(bairro: string) { this.bairro = bairro }

    get Cidade(): string { return this.cidade }
    set Cidade(cidade: string) { this.cidade = cidade }

    get Estado(): string { return this.estado }
    set Estado(estado: string) { this.estado = estado }

    get Pais(): string { return this.pais }
    set Pais(pais: string) { this.pais = pais }

    get CodigoPostal(): string { return this.codigoPostal }
    set CodigoPostal(codigoPostal: string) { this.codigoPostal = codigoPostal }
}