import Documento from "../entities/documento";
import { TipoDocumento } from "../enumerations/tipoDocumento";
import Entrada from "../io/entrada";
import MenuTipoDocumento from "../menus/menuTipoDocumento";

export default class CadastroDocumentos {
    private execucao: boolean = true;
    private documentos: Documento[] = [];
    private entrada: Entrada = new Entrada();
    private opcao!: number;

    public processar(): Documento[] {
        console.log("Cadastro de documentos...");
        console.log("Cadastre todos os documentos desejados novamente");

        while (this.execucao) {
            console.log("[1] - Adicionar documento");
            console.log("[2] - Sair");
            this.opcao = this.entrada.receberNumero("Seleciona a opção desejada");
            switch (this.opcao) {
                case 1:
                    let documento = this.cadastrarDocumento();
                    this.documentos.push(documento);
                    break;
                case 2:
                    if (this.documentos.length === 0) {
                        let opcao = this.entrada.receberNumero("Nenhum documento foi cadastrado ainda, deseja realmente encerrar o cadastro de documentos? 1 - Sim  | 2 - Não");
                        if (opcao === 1) this.execucao = false;
                    } else {
                        this.execucao = false;
                    }
                    break;
            }
        }
        console.log("Encerrando cadastro de documentos...");

        return this.documentos;
    }

    private cadastrarDocumento(): Documento {
        let run = true;
        let menu = new MenuTipoDocumento();
        let documento: Documento = new Documento(TipoDocumento.CPF, "foo-bar",  new Date());
        
        while (run) {
            menu.mostrar();
            this.opcao = this.entrada.receberNumero("");
            switch (this.opcao) {
                case 1:
                    // Cadastrar novo CPF
                    let tipo = TipoDocumento.CPF;
                    let numero = this.entrada.receberTexto('Qual o número do documento?');
                    let dataExpedicao = this.entrada.receberData('Qual a data de expedição do documento?');
                    documento = new Documento(tipo, numero, dataExpedicao);
                    run = false;
                    break;
                case 2:
                    // Cadastrar novo RG
                    tipo = TipoDocumento.RG;
                    numero = this.entrada.receberTexto('Qual o número do documento?');
                    dataExpedicao = this.entrada.receberData('Qual a data de expedição do documento?');
                    documento = new Documento(tipo, numero, dataExpedicao);
                    run = false;
                    break;
                case 3:
                    // Cadastrar novo Passaporte
                    tipo = TipoDocumento.Passaporte;
                    numero = this.entrada.receberTexto('Qual o número do documento?');
                    dataExpedicao = this.entrada.receberData('Qual a data de expedição do documento?');
                    documento = new Documento(tipo, numero, dataExpedicao);
                    run = false;
                    break;
                default:
                    console.log("Opção inválida!");
            }
        }

        return documento;
    }
}