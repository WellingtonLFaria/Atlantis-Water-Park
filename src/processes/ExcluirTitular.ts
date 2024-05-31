import Storage from "../domain/Storage";
import Titular from "../entities/Titular";
import Excluir from "../interfaces/Excluir";
import Input from "../io/Input";
import ListagemTitulares from "./ListagemTitulares";

export default class ExcluirTitular implements Excluir {
    private listagemTitulares: ListagemTitulares = new ListagemTitulares();
    private armazem: Storage = Storage.UniqueInstance;
    private entrada: Input = new Input();
    private opcao!: number;

    public excluir(): void {
        // Listar titulares
        this.listagemTitulares.listar();
        // Selecionar titular a ser excluído
        this.opcao = this.entrada.receberNumero("Digite o número do titular a ser excluído: ");
        let titular = this.armazem.Titulares[this.opcao];

        // Excluir titular do storage de titulares
        this.armazem.Titulares.splice(this.opcao, 1);

        // Excluir os dependentes do titular selecionado do storage de dependentes
        this.armazem.Dependentes.forEach((dependente, index) => {
            if (dependente.Titular === titular) {
                this.armazem.Dependentes.splice(index, 1);
            }
        });

        console.log("Titular excluído com sucesso");
    }
};