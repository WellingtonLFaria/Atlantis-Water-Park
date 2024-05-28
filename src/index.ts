import Cliente from "./entities/cliente";
import Entrada from "./input";
import CadastrarDependente from "./processes/cadastrarDependente";
import CadastrarTitular from "./processes/cadastrarTitular";
import listarDependentes from "./processes/listarDependentes";
import listarTitulares from "./processes/listarTitulares";

const entrada = new Entrada();

let clientes: Cliente[] = [];

let run = true
while (run) {
    console.log("[1] - Cadastrar titular");
    console.log("[2] - Cadastrar dependente");
    console.log("[3] - Listar titulares");
    console.log("[4] - Listar dependentes");
    console.log("[0] - Sair");
    let opcaoUsuario = entrada.receberNumero("");
    switch (opcaoUsuario) {
        case 0:
            console.log("Saindo...");
            run = false;
            break;
        case 1:
            console.log("Cadastrar titular");
            let cadastrarTitular = new CadastrarTitular();
            let titular = cadastrarTitular.processar();
            clientes.push(titular);
            break;
        case 2:
            console.log("Cadastrar dependente");
            let cadastrarDependente = new CadastrarDependente(clientes);
            let dependente = cadastrarDependente.processar();
            clientes.push(dependente);
            break;
        case 3:
            console.log("Listar titulares");
            listarTitulares(clientes);
            break;
        case 4:
            console.log("Listar dependentes");
            listarDependentes(clientes);
            break;
        default:
            console.log("Opção inválida");
            break;
    }
}