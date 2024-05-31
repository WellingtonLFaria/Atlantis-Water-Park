import Documento from "../entities/Documento";
import Editar from "../interfaces/Editar";
import Input from "../io/Input";
import ImpressorDocumento from "../printers/ImpressorDocumento";
import CadastroDocumento from "./CadastroDocumento";

export default class EditarDocumentos implements Editar {
    private documentos: Documento[];
    private edicao: boolean = true;
    private entrada: Input = new Input();
    private cadastroDocumento = new CadastroDocumento();
    private impressorDocumento = new ImpressorDocumento();

    constructor(documentos: Documento[]) {
        this.documentos = documentos;
    }

    private adicionarDocumento(): void {
        let documento = this.cadastroDocumento.cadastrar();
        this.documentos.push(documento);
        console.log("Documento adicionado com sucesso");
    }

    private removerDocumento(): void {
        this.documentos.forEach(documento =>  this.impressorDocumento.imprimir(documento, this.documentos.indexOf(documento)));
        let indexDocumento = this.entrada.receberNumero("Selecione o documento a ser removido: ");

        this.documentos.splice(indexDocumento, 1);
        console.log("Documento removido com sucesso");
    }

    editar(): Documento[] {
        while (this.edicao) {
            console.log("--------------------------------------");
            console.log("Editar documentos");
            console.log("--------------------------------------");
            console.log("[1] Adicionar documento");
            console.log("[2] Remover documento");
            console.log("[0] Voltar");

            let opcaoEdicao = this.entrada.receberNumero("Digite a opção desejada: ");

            switch (opcaoEdicao) {
                case 1:
                    this.adicionarDocumento();
                    break;
                case 2:
                    this.removerDocumento();
                    break;
                case 0:
                    this.edicao = false;
                    break;
                default:
                    console.log("Opção inválida");
            }
        }

        return this.documentos;
    }
}