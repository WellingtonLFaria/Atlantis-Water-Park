import Documento from "../entities/Documento";
import Telefone from "../entities/Telefone";
import Titular from "../entities/Titular";
import Cadastro from "../interfaces/Cadastro";
import Input from "../io/Input";
import CadastroDocumento from "./CadastroDocumento";
import CadastroEndereco from "./CadastroEndereco";
import CadastroTelefone from "./CadastroTelefone";

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

        let titular = new Titular(nome, nomeSocial, dataNascimento, dataCadastro, endereco, documentos, telefones, []);

        console.log("Titular cadastrado com sucesso");

        return titular;
    } 
}