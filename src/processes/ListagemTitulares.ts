import Listagem from "../interfaces/Listagem";
import Storage from "../domain/Storage";
import ImpressorCliente from "../printers/ImpressorCliente";

export default class ListagemTitulares implements Listagem {
    armazem: Storage = Storage.UniqueInstance;
    private impressor: ImpressorCliente = new ImpressorCliente();

    public listar(): void {
        console.clear();
        console.log("Listagem de titulares");
        this.armazem.Titulares.forEach((titular) => {
            this.impressor.imprimir(titular, this.armazem.Titulares.indexOf(titular));
        });
    }
}