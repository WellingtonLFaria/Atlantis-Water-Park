import Menu from "../interfaces/Menu";

export default class MainMenu implements Menu {
    public mostrar(): void {
        console.log("--------------------------------------");
        console.log("[1] Cadastrar cliente");
        console.log("[2] Editar cliente");
        console.log("[3] Excluir cliente");
        console.log("[4] Listar clientes");
        console.log("[0] Sair");
    }
}