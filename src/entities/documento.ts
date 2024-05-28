import { TipoDocumento } from "../enumerations/tipoDocumento"

export default class Documento {
    private tipo: TipoDocumento;
    private numero: string;
    private dataExpedicao: Date;

    constructor(tipo: TipoDocumento, numero: string, dataExpedicao: Date) {
        this.tipo = tipo;
        this.numero = numero;
        this.dataExpedicao = dataExpedicao;
    }

    get getTipo(): TipoDocumento { return this.tipo }
    get getNumero(): string { return this.numero }
    get getDataExpedicao(): Date { return this.dataExpedicao }

    set setTipo(tipo: TipoDocumento) { this.tipo = tipo }
    set setNumero(numero: string) { this.numero = numero }
    set setDataExpedicao(dataExpedicao: Date) { this.dataExpedicao = dataExpedicao }
}