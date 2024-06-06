import DiretorCasalSimples from "../diretores/DiretorCasalSimples";
import DiretorFamiliaMais from "../diretores/DiretorFamiliaMais";
import DiretorFamiliaSimples from "../diretores/DiretorFamiliaSimples";
import DiretorFamiliaSuper from "../diretores/DiretorFamiliaSuper";
import DiretorSolteiroMais from "../diretores/DiretorSolteiroMais";
import DiretorSolteiroSimples from "../diretores/DiretorSolteiroSimples";
import Acomodacao from "../entities/Acomodacao";
import Documento from "../entities/Documento";
import Telefone from "../entities/Telefone";
import Titular from "../entities/Titular";
import Cadastro from "../interfaces/Cadastro";
import Input from "../io/Input";
import CadastroDocumento from "./CadastroDocumento";
import CadastroEndereco from "./CadastroEndereco";
import CadastroTelefone from "./CadastroTelefone";
import ListagemAcomodacoes from "./ListagemAcomodacoes";

export default class CadastroTitular implements Cadastro {
    private entrada: Input = new Input();
    private cadastroEndereco: CadastroEndereco = new CadastroEndereco();
    private cadastroTelefone: CadastroTelefone = new CadastroTelefone();
    private cadastroDocumento: CadastroDocumento = new CadastroDocumento();

    public cadastrar(): Titular {
        console.log("Cadastro de titular");
        let nome = this.entrada.receberTexto("Digite o nome do titular: ");
        let nomeSocial = this.entrada.receberTexto("Digite o nome social do titular: ");
        let dataNascimento = this.entrada.receberData("Digite a data de nascimento do titular");
        let dataCadastro = new Date();
        let endereco = this.cadastroEndereco.cadastrar();

        let telefones: Array<Telefone> = new Array<Telefone>();
        let telefone = this.cadastroTelefone.cadastrar();
        telefones.push(telefone);
        while (this.entrada.receberTexto("Deseja cadastrar outro telefone? (s/n): ") === "s") {
            telefone = this.cadastroTelefone.cadastrar();
            telefones.push(telefone);
        }

        let documentos: Array<Documento> = new Array<Documento>();
        let documento = this.cadastroDocumento.cadastrar();
        documentos.push(documento);
        while (this.entrada.receberTexto("Deseja cadastrar outro documento? (s/n): ") === "s") {
            documento = this.cadastroDocumento.cadastrar();
            documentos.push(documento);
        }

        let acomodacao = new DiretorSolteiroSimples().construir();
        let run: boolean = true;
        while (run) {
            new ListagemAcomodacoes().listar();
            let opcao = this.entrada.receberNumero("Selecione a acomodação desejada: ");
            switch (opcao) {
                case 0:
                    acomodacao = new DiretorSolteiroSimples().construir();
                    run = false;
                    break;
                case 1:
                    acomodacao = new DiretorSolteiroMais().construir();
                    run = false;
                    break;
                case 2:
                    acomodacao = new DiretorCasalSimples().construir();
                    run = false;
                    break;
                case 3:
                    acomodacao = new DiretorFamiliaSimples().construir();
                    run = false;
                    break;
                case 4:
                    acomodacao = new DiretorFamiliaMais().construir();
                    run = false;
                    break;
                case 5:
                    acomodacao = new DiretorFamiliaSuper().construir();
                    run = false;
                    break;
                default:
                    console.log("Opção inválida!")
            }
        }


        let titular = new Titular(nome, nomeSocial, dataNascimento, dataCadastro, endereco, documentos, telefones, acomodacao, []);

        console.log("Titular cadastrado com sucesso");

        return titular;
    }
}