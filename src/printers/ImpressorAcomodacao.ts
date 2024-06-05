import Acomodacao from "../entities/Acomodacao"

export default class ImpressorAcomodacao {
    private acomodacao: Acomodacao
    constructor(acomodacao: Acomodacao) {
        this.acomodacao = acomodacao
    }
    
    public imprimir() {
        let descricao = `Nomenclatura: ${this.acomodacao.NomeAcomodacao.toString()}\n`
            + `-- Quantidade de leitos para solteiros: ${this.acomodacao.CamaSolteiro}\n`
            + `-- Quantidade de leitos para casais: ${this.acomodacao.CamaCasal}\n`
            + `-- Climatização: ${this.converterBooleano(this.acomodacao.Climatizacao)}\n`
            + `-- Quantidade de garagens disponíveis: ${this.acomodacao.Garagem}\n`
            + `-- Quantidade de suites: ${this.acomodacao.Suite}\n`
        console.log(descricao);
    }

    private converterBooleano(valor: boolean) {
        if (valor) {
            return `sim`
        } else {
            return `não`
        }
    }
}