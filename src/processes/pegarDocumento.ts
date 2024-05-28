import Documento from "../entities/documento";
import { tipoDocumento } from "../enumerations/tipoDocumento";
import Entrada from "../input";

export default function pegarDocumento(entrada: Entrada): Documento {
    console.log("[1] - CPF");
    console.log("[2] - RG");
    console.log("[3] - Passaporte");

    let tipoIndex = entrada.receberNumero("Selecione o tipo pelo número a esquerda da opção");
    let tipo: tipoDocumento;

    switch (tipoIndex) {
        case 1:
            tipo = tipoDocumento.CPF;
            break;
        case 2:
            tipo = tipoDocumento.RG;
            break;
        case 3:
            tipo = tipoDocumento.Passaporte;
            break;
        default:
            throw new Error("Tipo de documento inválido");
    }

    let numero = entrada.receberTexto("Número do documento");
    let dataExpedicao = entrada.receberData("Data de expedição do documento");

    let documento = new Documento();
    documento.tipo = tipo;
    documento.numero = numero;
    documento.dataExpedicao = dataExpedicao;

    return documento;
}