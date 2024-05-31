import Menu from "../interfaces/Menu";

export default class MenuEditarDependente implements Menu {
    public mostrar(): void {
        console.log("--------------------------------------");
        console.log("Editar dependente");
        console.log("--------------------------------------");
        console.log("[1] Editar nome");
        console.log("[2] Editar nome social");
        console.log("[3] Editar data de nascimento");
        console.log("[4] Editar documentos");
        console.log("[5] Editar titular");
        console.log("[0] Voltar");
    }
}