import Menu from "../interfaces/Menu";

export default class MenuEditarCliente implements Menu {
    public mostrar(): void {
        console.log("--------------------------------------");
        console.log("Editar cliente");
        console.log("--------------------------------------");
        console.log("[1] Editar titular");
        console.log("[2] Editar dependente");
        console.log("[0] Voltar");
    }
}