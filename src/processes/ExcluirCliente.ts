import Storage from "../domain/Storage";
import Menu from "../interfaces/Menu";
import Input from "../io/Input";
import MenuExcluirCliente from "../menus/MenuExcluirCliente";
import ExcluirDependente from "./ExcluirDependente";
import ExcluirTitular from "./ExcluirTitular";

export default class ExcluirCliente {
    private entrada: Input = new Input();
    private armazem: Storage = Storage.UniqueInstance;
    private process: any;
    private menu: Menu = new MenuExcluirCliente();
    private execucao: boolean = true;

    main(): void {
        while (this.execucao) {
            this.menu.mostrar();
            let opcaoExclusao = this.entrada.receberNumero("Digite a opção desejada: ");
            switch (opcaoExclusao) {
                case 1:
                    if (this.armazem.Titulares.length === 0) {
                        console.log("Não há titulares cadastrados");
                        break;
                    } else {
                        this.process = new ExcluirTitular();
                        this.process.excluir();
                        this.execucao = false;
                        break;
                    }
                case 2:
                    if (this.armazem.Dependentes.length === 0) {
                        console.log("Não há dependentes cadastrados");
                        break;
                    } else {
                        this.process = new ExcluirDependente();
                        this.process.excluir();
                        this.execucao = false;
                        break;
                    }
                case 0:
                    this.execucao = false;
                    break;
                default:
                    console.log("Opção inválida");
                    break;
            }
        }
    }
}