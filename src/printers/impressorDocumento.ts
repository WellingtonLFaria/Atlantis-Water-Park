import Documento from "../entities/documento";
import Impressor from "../interfaces/impressor";

export default class ImpressorDocumento implements Impressor {
    private documento: Documento

    constructor(documento: Documento) {
        this.documento = documento
    }

    imprimir(): string {
        let impressao = `| Documento:\n`
            + `| Tipo: ${this.documento.getTipo}\n`
            + `| Data expedição: ${this.documento.getDataExpedicao.toLocaleDateString()}\n`
            + `| Número: ${this.documento.getNumero}`
        return impressao
    }

}