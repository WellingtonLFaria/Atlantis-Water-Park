import Telefone from "../entities/telefone";
import Entrada from "../io/entrada";

export default class CadastroTelefonesEditar {
    private telefones: Telefone[] = [];
    private execucao: boolean = true;
    private opcao!: number;
    private entrada: Entrada = new Entrada();

    processar(): Telefone[] {
        console.log("Cadastro de documentos...");
        console.log("Cadastre todos os documentos desejados novamente");

        while (this.execucao) {
            console.log("[1] - Adicionar telefone");
            console.log("[2] - Sair");
            this.opcao = this.entrada.receberNumero("Seleciona a opção desejada");
            switch (this.opcao) {
                case 1:
                    let telefone = this.cadastrarTelefone();
                    this.telefones.push(telefone);
                    break;
                case 2:
                    if (this.telefones.length === 0) {
                        let opcao = this.entrada.receberNumero("Nenhum telefone foi cadastrado ainda, deseja realmente encerrar o cadastro de telefones? 1 - Sim  | 2 - Não");
                        if (opcao === 1) this.execucao = false;
                    } else {
                        this.execucao = false;
                    }
                    break;
            }
        }
        console.log("Encerrando cadastro de documentos...");

        return this.telefones;
    }

    private cadastrarTelefone(): Telefone {
        let ddd = this.entrada.receberTexto('Qual o DDD do telefone?');
        let numero = this.entrada.receberTexto('Qual o número do telefone?');
        let telefone = new Telefone(ddd, numero);
        
        return telefone;
    }
}