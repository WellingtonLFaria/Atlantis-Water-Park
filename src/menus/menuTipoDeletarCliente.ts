import Menu from "../interfaces/menu";

export default class MenuTipoDeletarCliente implements Menu {
    mostrar(): void {
        console.log('1 - Excluir titular');
        console.log('2 - Excluir dependente');
    }
}