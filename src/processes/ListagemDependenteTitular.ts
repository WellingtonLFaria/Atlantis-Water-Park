import Storage from "../domain/Storage";
import Input from "../io/Input";
import ImpressorCliente from "../printers/ImpressorCliente";
import ListagemTitulares from "./ListagemTitulares";

export default class ListagemDependenteTitular {
    private armazem: Storage = Storage.UniqueInstance;
    private impressor: ImpressorCliente = new ImpressorCliente();
    private listagemTitulares: ListagemTitulares = new ListagemTitulares();
    private entrada: Input = new Input();

    public listar(): void {
        console.clear();

        this.listagemTitulares.listar();
        let idTitular = this.entrada.receberNumero("Digite o ID do titular: ");
        let titular = this.armazem.Titulares[idTitular];

        titular.Dependentes.forEach((dependente) => {
            this.impressor.imprimir(dependente, titular.Dependentes.indexOf(dependente));
        });
    }
}