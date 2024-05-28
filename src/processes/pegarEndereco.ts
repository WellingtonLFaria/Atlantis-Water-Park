import Endereco from "../entities/endereco";
import Entrada from "../input";

export default function pegarEndereco(entrada: Entrada): Endereco {
    let rua = entrada.receberTexto("Rua");
    let bairro = entrada.receberTexto("Bairro");
    let cidade = entrada.receberTexto("Cidade");
    let estado = entrada.receberTexto("Estado");
    let pais = entrada.receberTexto("País");
    let codigoPostal = entrada.receberTexto("Código postal");

    let endereco = new Endereco();
    endereco.rua = rua;
    endereco.bairro = bairro;
    endereco.cidade = cidade;
    endereco.estado = estado;
    endereco.pais = pais;
    endereco.codigoPostal = codigoPostal;
    
    return endereco;
}