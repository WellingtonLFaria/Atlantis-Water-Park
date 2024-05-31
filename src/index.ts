import Storage from "./domain/Storage";
import Menu from "./interfaces/Menu";
import Input from "./io/Input";
import MainMenu from "./menus/MainMenu";
import CadastrarCliente from "./processes/CadastrarCliente";
import EditarCliente from "./processes/EditarCliente";
import ExcluirCliente from "./processes/ExcluirCliente";
import ListarCliente from "./processes/ListarCliente";


console.log("Atlantis Water Park");

let run: boolean = true;
let menu: Menu = new MainMenu();
let entrada: Input = new Input();
let armazem: Storage = Storage.UniqueInstance;
let process: any;

while (run) {
    menu.mostrar();
    let opcao = entrada.receberNumero("Digite a opção desejada: ");
    switch (opcao) {
        case 1:
            // Cadastrar cliente
            process = new CadastrarCliente();
            process.main();
            break;
        case 2:
            // Editar cliente
            process = new EditarCliente();
            process.main();
            break;
        case 3:
            // Excluir cliente
            process = new ExcluirCliente();
            process.main();
            break;
        case 4:
            // Listar cliente
            process = new ListarCliente();
            process.main();
            break;
        case 0:
            // Sair
            console.log("Saindo...");
            run = false;
            break;
        default:
            // Opção inválida
            console.log("Opção inválida");
            break;
    }
}