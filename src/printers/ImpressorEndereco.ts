import Endereco from "../entities/Endereco";

export default class ImpressorEndereco {
    public imprimir(endereco: Endereco): void {
        console.log("Endereço");
        console.log("Rua:", endereco.Rua);
        console.log("Bairro:", endereco.Bairro);
        console.log("Cidade:", endereco.Cidade);
        console.log("Estado:", endereco.Estado);
        console.log("País:", endereco.Pais);
        console.log("Código postal:", endereco.CodigoPostal);
    }
}