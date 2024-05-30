import Menu from "../interfaces/Menu";

export default class MenuListarCliente implements Menu {
    public mostrar(): void {
        console.clear();
        console.log("Listar cliente");
        console.log("[1] Listar titulares");
        console.log("[2] Listar dependente de um titular");
        console.log("[0] Voltar");
    }
}