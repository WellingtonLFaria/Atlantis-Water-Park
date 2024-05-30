import Listagem from "../interfaces/Listagem";
import Storage from "../domain/Storage";
import ImpressorCliente from "../printers/ImpressorCliente";

export default class ListagemDependentes implements Listagem {
    armazem: Storage = Storage.UniqueInstance;
    private impressor: ImpressorCliente = new ImpressorCliente();

    public listar(): void {
        console.clear();
        console.log("Listagem de dependentes");
        this.armazem.Dependentes.forEach((dependente) => {
            this.impressor.imprimir(dependente, this.armazem.Dependentes.indexOf(dependente));
        });
    }
}