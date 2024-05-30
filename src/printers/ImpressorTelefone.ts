import Telefone from "../entities/Telefone";

export default class ImpressorTelefone {
    public imprimir(telefone: Telefone, index: number): void {
        console.log(`Telefone - ${index}`);
        console.log(`DDD: ${telefone.DDD}`);
        console.log(`Número: ${telefone.Numero}`);
    }
}