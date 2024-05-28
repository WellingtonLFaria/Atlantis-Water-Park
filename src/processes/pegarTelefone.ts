import Telefone from "../entities/telefone";
import Entrada from "../input";

export default function pegarTelefone(entrada: Entrada): Telefone {
    let telefoneDdd = entrada.receberTexto("DDD do telefone");
    let telefoneNumero = entrada.receberTexto("Número do telefone");

    let telefone = new Telefone();
    telefone.ddd = telefoneDdd;
    telefone.numero = telefoneNumero;

    return telefone;
}