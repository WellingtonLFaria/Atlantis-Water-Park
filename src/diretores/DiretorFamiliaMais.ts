import Diretor from "../abstractions/Diretor"
import ConstrutorAcomodacao from "../construtor/ConstrutorAcomodação"
import { NomeAcomodacao } from "../enumerations/NomeAcomodacao"
import Acomodacao from "../entities/Acomodacao"

export default class DiretorFamiliaMais extends Diretor<Acomodacao> {

    constructor() {
        super()
        this.construtor = new ConstrutorAcomodacao()
    }

    public construir(): Acomodacao {
        let objetoConstrutor = this.construtor as ConstrutorAcomodacao
        objetoConstrutor.NomeAcomodacao = NomeAcomodacao.FamiliaMais
        objetoConstrutor.CamaCasal = 1
        objetoConstrutor.CamaSolteiro = 5
        objetoConstrutor.Climatizacao = true
        objetoConstrutor.Garagem = 2
        objetoConstrutor.Suite = 2
        return objetoConstrutor.construir()
    }
}