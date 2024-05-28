export default class Telefone {
    private ddd: string;
    private numero: string;

    constructor(ddd: string, numero: string) {
        this.ddd = ddd;
        this.numero = numero;
    }

    get getDdd(): string { return this.ddd };
    get getNumero(): string { return this.getNumero }

    set setDdd(ddd: string) { this.ddd = ddd }
    set setNumero(numero: string) { this.numero = numero }
}