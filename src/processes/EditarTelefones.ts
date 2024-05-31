import Telefone from "../entities/Telefone";
import Editar from "../interfaces/Editar";
import Input from "../io/Input";
import ImpressorTelefone from "../printers/ImpressorTelefone";
import CadastroTelefone from "./CadastroTelefone";

export default class EditarTelefones implements Editar {
    private telefones: Telefone[];
    private edicao: boolean = true;
    private entrada: Input = new Input();
    private cadastroTelefone = new CadastroTelefone();
    private impressorTelefone = new ImpressorTelefone();

    private adicionarTelefone(): void {
        let telefone = this.cadastroTelefone.cadastrar();
        this.telefones.push(telefone);
        console.log("Telefone adicionado com sucesso");
    }

    private removerTelefone(): void {
        this.telefones.forEach(telefone =>  this.impressorTelefone.imprimir(telefone, this.telefones.indexOf(telefone)));
        let indexTelefone = this.entrada.receberNumero("Selecione o telefone a ser removido: ");

        this.telefones.splice(indexTelefone, 1);
        console.log("Telefone removido com sucesso");
    }

    constructor(telefones: Telefone[]) {
        this.telefones = telefones;
    }

    public editar(): Telefone[] {
        while (this.edicao) {
            console.log("--------------------------------------");
            console.log("Editar telefones");
            console.log("--------------------------------------");
            console.log("[1] Adicionar telefone");
            console.log("[2] Remover telefone");
            console.log("[0] Voltar");

            let opcaoEdicao = this.entrada.receberNumero("Digite a opção desejada: ");

            switch (opcaoEdicao) {
                case 1:
                    this.adicionarTelefone();
                    break;
                case 2:
                    this.removerTelefone();
                    break;
                case 0:
                    this.edicao = false;
                    break;
                default:
                    console.log("Opção inválida");
            }
        }

        return this.telefones;
    }
}