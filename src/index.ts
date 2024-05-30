import Storage from "./domain/Storage";
import Menu from "./interfaces/Menu";
import Input from "./io/Input";
import MainMenu from "./menus/MainMenu";
import CadastrarCliente from "./processes/CadastrarCliente";
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
            process = new CadastrarCliente();
            process.main();
        case 2:
            console.log("Editar cliente");
            break;
        case 3:
            console.log("Excluir cliente");
            break;
        case 4:
            process = new ListarCliente();
            process.main();
            break;
        case 0:
            console.log("Saindo...");
            run = false;
            break;
        default:
            console.log("Opção inválida");
            break;
    }
}