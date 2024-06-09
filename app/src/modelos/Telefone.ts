export default class Telefone {
    private ddd: string;
    private numero: string;

    constructor(ddd: string, numero: string) {
        this.ddd = ddd;
        this.numero = numero;
    }

    get Ddd(): string { return this.ddd }
    set Ddd(ddd: string) { this.ddd = ddd }

    get Numero(): string { return this.numero }
    set Numero(numero: string) { this.numero = numero }
}