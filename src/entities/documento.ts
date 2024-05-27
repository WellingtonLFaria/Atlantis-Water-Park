import { tipoDocumento } from "../enumerations/tipoDocumento";

export default class Documento {
    public tipo!: tipoDocumento;
    public numero!: string;
    public dataExpedicao!: Date
}