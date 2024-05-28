import Endereco from "../entities/endereco";
import Impressor from "../interfaces/impressor";

export default class ImpressorEndereco implements Impressor {
    private endereco: Endereco
    constructor(endereco: Endereco) {
        this.endereco = endereco
    }
    imprimir(): string {
        let impressao = `| Endereco:\n`
            + `| Rua: ${this.endereco.getRua}\n`
            + `| Bairro: ${this.endereco.getBairro}\n`
            + `| Cidade: ${this.endereco.getCidade}\n`
            + `| Estado: ${this.endereco.getEstado}\n`
            + `| País: ${this.endereco.getPais}\n`
            + `| Código postal: ${this.endereco.getCodigoPostal}`
        return impressao
    }
}