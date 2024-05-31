import Storage from "../domain/Storage";
import Menu from "../interfaces/Menu";
import Input from "../io/Input";
import MenuEditarCliente from "../menus/MenuEditarCliente";
import EditarDependente from "./EditarDependente";
import EditarTitular from "./EditarTitular";

export default class EditarCliente {
    private entrada: Input = new Input();
    private armazem: Storage = Storage.UniqueInstance;
    private process: any;
    private menu: Menu = new MenuEditarCliente();
    private execucao: boolean = true;

    main(): void {
        while (this.execucao) {
            this.menu.mostrar();
            let opcaoEdicao = this.entrada.receberNumero("Digite a opção desejada: ");
            switch (opcaoEdicao) {
                case 1:
                    if (this.armazem.Titulares.length === 0) {
                        console.log("Não há titulares cadastrados");
                        break;
                    } else {
                        this.process = new EditarTitular();
                        this.process.editar();
                        this.execucao = false;
                        break;
                    }
                case 2:
                    if (this.armazem.Dependentes.length === 0) {
                        console.log("Não há dependentes cadastrados");
                        break;
                    } else {
                        this.process = new EditarDependente();
                        this.process.editar();
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