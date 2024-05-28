import Menu from "../interfaces/menu";

export default class MenuTipoDocumento implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`Qual o tipo do documento para cadastro? `)
        console.log(`[1] - Cadastro de Pessoas Física`)
        console.log(`[2] - Registro Geral`)
        console.log(`[3] - Passaporte`)
        console.log(`[0] - Sair`)
    }
}