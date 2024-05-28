import Menu from "../interfaces/menu";

export default class MenuCadastroTelefone implements Menu {
    mostrar(): void {
        console.log("Deseja cadastrar mais um telefone?")
        console.log('[1] Sim')
        console.log('[0] Não')
    }
}