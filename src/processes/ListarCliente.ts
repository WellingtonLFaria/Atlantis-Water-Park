import Storage from "../domain/Storage";
import Menu from "../interfaces/Menu";
import Input from "../io/Input";
import MenuListarCliente from "../menus/MenuListarCliente";
import ListagemDependenteTitular from "./ListagemDependenteTitular";
import ListagemTitulares from "./ListagemTitulares";

export default class ListarCliente {
    private entrada: Input = new Input();
    private armazem: Storage = Storage.UniqueInstance;
    private process: any;
    private menu: Menu = new MenuListarCliente();
    private execucao: boolean = true;

    public main(): void {
        while (this.execucao) {
            this.menu.mostrar();
            let opcaoCadastro = this.entrada.receberNumero("Digite a opção desejada: ");
            switch (opcaoCadastro) {
                case 1:
                    this.process = new ListagemTitulares();
                    this.process.listar();
                    this.execucao = false;
                    break;
                case 2:
                    this.process = new ListagemDependenteTitular();
                    this.process.listar();
                    this.execucao = false;
                    break;
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