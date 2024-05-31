import Menu from "../interfaces/Menu";

export default class MenuCadastrarCliente implements Menu {
    public mostrar(): void {
        console.log("--------------------------------------");
        console.log("Cadastrar cliente");
        console.log("--------------------------------------");
        console.log("[1] Cadastrar titular");
        console.log("[2] Cadastrar dependente");
        console.log("[0] Voltar");
    }
}