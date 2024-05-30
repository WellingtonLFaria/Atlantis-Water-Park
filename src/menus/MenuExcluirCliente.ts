import Menu from "../interfaces/Menu";

export default class MenuExcluirCliente implements Menu {
    public mostrar(): void {
        console.clear();
        console.log("Excluir cliente");
        console.log("[1] Excluir titular");
        console.log("[2] Excluir dependente");
        console.log("[0] Voltar");
    }
}