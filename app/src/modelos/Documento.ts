import { TipoDocumento } from "./TipoDocumento";

export default class Documento {
    private tipo: TipoDocumento;
    private numero: string;
    private dataExpedicao: Date;

    constructor(tipo: TipoDocumento, numero: string, dataExpedicao: Date) {
        this.tipo = tipo;
        this.numero = numero;
        this.dataExpedicao = dataExpedicao;
    }

    get Tipo(): TipoDocumento { return this.tipo }
    set Tipo(tipo: TipoDocumento) { this.tipo = tipo }

    get Numero(): string { return this.numero }
    set Numero(numero: string) { this.numero = numero }

    get DataExpedicao(): Date { return this.dataExpedicao }
    set DataExpedicao(dataExpedicao: Date) { this.dataExpedicao = dataExpedicao }
}