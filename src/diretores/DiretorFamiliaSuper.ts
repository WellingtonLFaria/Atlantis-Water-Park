import Diretor from "../abstractions/Diretor"
import ConstrutorAcomodacao from "../construtor/ConstrutorAcomodação"
import { NomeAcomodacao } from "../enumerations/NomeAcomodacao"
import Acomodacao from "../entities/Acomodacao"

export default class DiretorFamiliaSuper extends Diretor<Acomodacao> {

    constructor() {
        super()
        this.construtor = new ConstrutorAcomodacao()
    }

    public construir(): Acomodacao {
        let objetoConstrutor = this.construtor as ConstrutorAcomodacao
        objetoConstrutor.NomeAcomodacao = NomeAcomodacao.FamiliaSuper
        objetoConstrutor.CamaCasal = 2
        objetoConstrutor.CamaSolteiro = 6
        objetoConstrutor.Climatizacao = true
        objetoConstrutor.Garagem = 2
        objetoConstrutor.Suite = 3
        return objetoConstrutor.construir()
    }
}