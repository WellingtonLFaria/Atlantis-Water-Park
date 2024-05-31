import Storage from "../domain/Storage";
import Dependente from "../entities/Dependente";
import Documento from "../entities/Documento";
import Cadastro from "../interfaces/Cadastro";
import Input from "../io/Input";
import CadastroDocumento from "./CadastroDocumento";
import ListagemTitulares from "./ListagemTitulares";

export default class CadastroDependente implements Cadastro {
    private entrada: Input = new Input();
    private cadastroDocumento: CadastroDocumento = new CadastroDocumento();
    private armazem: Storage = Storage.UniqueInstance;
    private listagemTitulares: ListagemTitulares = new ListagemTitulares();

    public cadastrar(): Dependente {
        console.log("Cadastro de dependente");
        let nome = this.entrada.receberTexto("Digite o nome do dependente: ");
        let nomeSocial = this.entrada.receberTexto("Digite o nome social do dependente: ");
        let dataNascimento = this.entrada.receberData("Digite a data de nascimento do dependente");
        let dataCadastro = new Date();

        let documentos: Array<Documento> = new Array<Documento>();
        let documento = this.cadastroDocumento.cadastrar();
        documentos.push(documento);
        while (this.entrada.receberTexto("Deseja cadastrar outro documento? (s/n): ") === "s") {
            documento = this.cadastroDocumento.cadastrar();
            documentos.push(documento);
        }

        this.listagemTitulares.listar();
        let idTitular = this.entrada.receberNumero("Digite o ID do titular: ");
        let titular = this.armazem.Titulares[idTitular];

        let dependente = new Dependente(nome, nomeSocial, dataNascimento, dataCadastro, titular.Endereco, documentos, titular.Telefones, titular);

        titular.Dependentes.push(dependente);

        return dependente;
    }
}