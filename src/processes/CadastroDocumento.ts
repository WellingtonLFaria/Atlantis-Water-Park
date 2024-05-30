import Documento from "../entities/Documento";
import { TipoDocumento } from "../enumerations/TipoDocumento";
import Cadastro from "../interfaces/Cadastro";
import Input from "../io/Input";

export default class CadastroDocumento implements Cadastro {
    private entrada: Input = new Input();

    public cadastrar(): Documento {
        console.log("Cadastro de documento");
        console.log("Tipos de documento:");
        console.log("1 - RG");
        console.log("2 - CPF");
        console.log("3 - Passaporte");
        let opcao = this.entrada.receberNumero("Selecione o tipo do documento: ");
        let tipo: TipoDocumento = TipoDocumento.RG;
        let run: boolean = true;

        while (run) {
            switch (opcao) {
                case 1:
                    tipo = TipoDocumento.RG;
                    run = false;
                    break;
                case 2:
                    tipo = TipoDocumento.CPF;
                    run = false;
                    break;
                case 3:
                    tipo = TipoDocumento.PASSAPORTE;
                    run = false;
                    break;
                default:
                    console.log("Opção inválida")
                    break;
            }
        }

        let numero = this.entrada.receberTexto("Digite o número do documento: ");
        let dataEmissao = this.entrada.receberData("Digite a data de emissão do documento: ");
        let documento = new Documento(tipo, numero, dataEmissao);

        console.log("Documento cadastrado com sucesso");

        return documento;
    }
}