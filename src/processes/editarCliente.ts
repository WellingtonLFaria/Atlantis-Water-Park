import Processo from "../abstraction/processo";
import MenuTipoEditarCliente from "../menus/menuTipoEditarCliente";
import EditarTitular from "./editarTitular";

export default class EditarCliente extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoEditarCliente();
    }

    processar(): void {
        this.menu.mostrar();
        this.opcao = this.entrada.receberNumero("Selecione a opção desejada");

        switch (this.opcao) {
            case 1:
                this.processo = new EditarTitular();
                this.processo.processar();
                break;
            case 2:
                // Editar dependente
                break;
            default:
                console.log("Opção inválida");
                break;               
        }
    }
}