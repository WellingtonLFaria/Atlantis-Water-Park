import Menu from "../interfaces/menu";

export default class MenuTipoEditarCliente implements Menu {
    mostrar(): void {
        console.clear();
        console.log("[1] - Editar Titular");
        console.log("[2] - Editar Dependente");
    }
}