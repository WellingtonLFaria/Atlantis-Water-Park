import Storage from "../domain/Storage";
import Menu from "../interfaces/Menu";
import Input from "../io/Input";
import MenuCadastrarCliente from "../menus/MenuCadastrarCliente";
import CadastroDependente from "./CadastroDependente";
import CadastroTitular from "./CadastroTitular";

export default class CadastrarCliente {
    private entrada: Input = new Input();
    private armazem: Storage = Storage.UniqueInstance;
    private process: any;
    private menu: Menu = new MenuCadastrarCliente();
    private execucao: boolean = true;

    public main(): void {
        while (this.execucao) {
            this.menu.mostrar();
            let opcaoCadastro = this.entrada.receberNumero("Digite a opção desejada: ");
            switch (opcaoCadastro) {
                case 1:
                    this.process = new CadastroTitular();
                    let titular = this.process.cadastrar();
                    this.armazem.Titulares.push(titular);
                    this.execucao = false;
                    break;
                case 2:
                    this.process = new CadastroDependente();
                    let dependente = this.process.cadastrar();
                    this.armazem.Dependentes.push(dependente);
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