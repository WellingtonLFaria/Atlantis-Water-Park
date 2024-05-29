import Processo from "../abstraction/processo";
import Armazem from "../domain/armazem";
import Titular from "../entities/titular";
import Impressor from "../interfaces/impressor";
import ImpressorCliente from "../printers/impressorCliente";
import ListagemTitulares from "./listagemTitulares";

export default class ListagemDependenteTitular extends Processo {
    private impressor!: Impressor;
    private titulares: Titular[] = Armazem.InstanciaUnica.getTitulares;

    processar(): void {
        if (this.titulares.length === 0) {
            console.log('Não há titulares cadastrados.')
            return
        }

        this.processo = new ListagemTitulares();
        this.processo.processar();
        let indexTitular = this.entrada.receberNumero('Informe o ID do cliente titular que deseja listar os dependentes');
        let titular = this.titulares[indexTitular];

        if (titular.getDependentes.length === 0) {
            console.log('Não há dependentes cadastrados para este titular.')
            return
        }

        console.log("Listando dependentes...");
        titular.getDependentes.forEach(dependente => {
            this.impressor = new ImpressorCliente(dependente, titular.getDependentes.indexOf(dependente));
        });
    }
}