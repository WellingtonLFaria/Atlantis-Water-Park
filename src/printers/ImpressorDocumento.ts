import Documento from "../entities/Documento";

export default class ImpressorDocumento {
    public imprimir(documento: Documento, index: number): void {
        console.log(`Documento - ${index}`);
        console.log(`Tipo: ${documento.Tipo}`);
        console.log(`Número: ${documento.Numero}`);
        console.log(`Data de expedição: ${documento.DataExpedicao.toLocaleDateString()}`);
    }
}