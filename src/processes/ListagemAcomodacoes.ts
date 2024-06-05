import DiretorCasalSimples from "../diretores/DiretorCasalSimples";
import DiretorFamiliaMais from "../diretores/DiretorFamiliaMais";
import DiretorFamiliaSimples from "../diretores/DiretorFamiliaSimples";
import DiretorFamiliaSuper from "../diretores/DiretorFamiliaSuper";
import DiretorSolteiroMais from "../diretores/DiretorSolteiroMais";
import DiretorSolteiroSimples from "../diretores/DiretorSolteiroSimples";
import Storage from "../domain/Storage";
import Listagem from "../interfaces/Listagem";
import ImpressorAcomodacao from "../printers/ImpressorAcomodacao";
import ImpressorCliente from "../printers/ImpressorCliente";

export default class ListagemAcomodacoes implements Listagem {
    armazem: Storage = Storage.UniqueInstance;
    private impressor: ImpressorCliente = new ImpressorCliente();

    listar(): void {
        let acomodacao = new DiretorSolteiroSimples().construir();
        new ImpressorAcomodacao(acomodacao).imprimir();

        acomodacao = new DiretorSolteiroMais().construir();
        new ImpressorAcomodacao(acomodacao).imprimir();

        acomodacao = new DiretorCasalSimples().construir();
        new ImpressorAcomodacao(acomodacao).imprimir();

        acomodacao = new DiretorFamiliaSimples().construir();
        new ImpressorAcomodacao(acomodacao).imprimir();

        acomodacao = new DiretorFamiliaMais().construir();
        new ImpressorAcomodacao(acomodacao).imprimir();

        acomodacao = new DiretorFamiliaSuper().construir();
        new ImpressorAcomodacao(acomodacao).imprimir();
    }
}