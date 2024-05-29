import Menu from "../interfaces/menu";

export default class MenuEditarTitular implements Menu {
    mostrar(): void {
        console.log("[1] - Editar nome");
        console.log("[2] - Editar nome social");
        console.log("[3] - Editar data de nascimento");
        console.log("[4] - Editar endereço");
        console.log("[5] - Editar documentos");
        console.log("[6] - Editar telefones");
        console.log("[0] - Sair da edição de titular")
    }
}