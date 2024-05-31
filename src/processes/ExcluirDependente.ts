import Storage from "../domain/Storage";
import Dependente from "../entities/Dependente";
import Excluir from "../interfaces/Excluir";
import Input from "../io/Input";
import ListagemDependentes from "./ListagemDependentes";

export default class ExcluirDependente implements Excluir {
    private listagemDependentes: ListagemDependentes = new ListagemDependentes();
    private armazem: Storage = Storage.UniqueInstance;
    private entrada: Input = new Input();
    private opcao!: number;

    public excluir(): void {
        // Listar dependentes
        this.listagemDependentes.listar();
        // Selecionar dependente a ser excluído
        this.opcao = this.entrada.receberNumero("Digite o número do dependente a ser excluído: ");
        let dependente = this.armazem.Dependentes[this.opcao];
        let titular = dependente.Titular;

        // Excluir dependente do storage de dependentes
        this.armazem.Dependentes.splice(this.opcao, 1);

        // Excluir dependente da lista de dependentes do titular
        let index = titular.Dependentes.indexOf(dependente);
        titular.Dependentes.splice(index, 1);

        console.log("Dependente excluído com sucesso");
    }
}
