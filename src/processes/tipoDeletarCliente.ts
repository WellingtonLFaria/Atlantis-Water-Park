import Processo from "../abstraction/processo";
import Armazem from "../domain/armazem";
import Dependente from "../entities/dependente";
import Titular from "../entities/titular";
import MenuTipoDeletarCliente from "../menus/menuTipoDeletarCliente";
import ListagemDependentes from "./listagemDependentes";
import ListagemTitulares from "./listagemTitulares";

export default class TipoDeletarCliente extends Processo {
    private titulares: Titular[];
    private dependentes: Dependente[];
    
    constructor() {
        super()
        this.menu = new MenuTipoDeletarCliente();
        this.dependentes = Armazem.InstanciaUnica.getDependentes;
        this.titulares = Armazem.InstanciaUnica.getTitulares;
    }

    processar(): void {
        console.log('Iniciando a exclusão de cliente...')
        this.menu.mostrar();
        this.opcao = this.entrada.receberNumero('Qual opção desejada?');
        switch (this.opcao) {
            case 1:
                console.log('Excluindo cliente titular...');
                this.processo = new ListagemTitulares();
                this.processo.processar();
                let indexTitular = this.entrada.receberNumero('Informe o ID do cliente titular que deseja excluir');
                Armazem.InstanciaUnica.getTitulares.splice(indexTitular, 1);
                console.log('Cliente titular excluído com sucesso!');
                break;
            case 2:
                console.log('Excluindo cliente dependente...');
                this.processo = new ListagemDependentes();
                this.processo.processar();
                let indexDependente = this.entrada.receberNumero('Informe o ID do cliente dependente que deseja excluir');
                Armazem.InstanciaUnica.getDependentes.splice(indexDependente, 1);
                console.log('Cliente dependente excluído com sucesso!');
                break;
            default:
                console.log('Opção não entendida :(');
        }
    }
}