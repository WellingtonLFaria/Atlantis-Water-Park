import Cliente from "../entities/cliente";
import Documento from "../entities/documento";
import Endereco from "../entities/endereco";
import Telefone from "../entities/telefone";
import Entrada from "../input";
import listarTitulares from "./listarTitulares";
import pegarDocumento from "./pegarDocumento";
import pegarEndereco from "./pegarEndereco";
import pegarTelefone from "./pegarTelefone";

export default class CadastrarDependente {
    private entrada: Entrada = new Entrada();
    private clientes: Cliente[];

    constructor(clientes: Cliente[]) {
        this.clientes = clientes;
    }

    public processar(): Cliente {
        let nome = this.entrada.receberTexto("Nome");
        let nomeSocial = this.entrada.receberTexto("Nome social");
        let dataNascimento = this.entrada.receberData("Data de nascimento");
        let dataCadastro = new Date();
        let telefones: Telefone[] = [];
        let endereco: Endereco;

        listarTitulares(this.clientes);
        let titularIndex = this.entrada.receberNumero("Informe o número a esquerda do nome do titular do dependente");
        let titular = this.clientes[titularIndex];

        titular.telefones.forEach(telefone => {
            telefones.push(telefone.clonar());
        });

        endereco = titular.endereco.clonar();

        let documentos: Documento[] = [];

        console.log("Documento");
        let documento = pegarDocumento(this.entrada);
        documentos.push(documento);
        
        let run = true;
        while (run) {
            console.log("[1] - Adicionar mais um documento");
            console.log("[0] - Continuar cadastro");
            let opcaoUsuario = this.entrada.receberNumero("");
            switch (opcaoUsuario) {
                case 1:
                    console.log("Documento");
                    documento = pegarDocumento(this.entrada);
                    documentos.push(documento);
                    break;
                case 0:
                    run = false;
                    break;
                default:
                    console.log("Opção inválida!")
            }
        }


        let dependente = new Cliente();

        dependente.nome = nome;
        dependente.nomeSocial = nomeSocial;
        dependente.dataNascimento = dataNascimento;
        dependente.dataCadastro = dataCadastro;
        dependente.telefones = telefones;
        dependente.endereco = endereco;
        dependente.documentos = documentos;
        dependente.titular = titular;

        titular.dependentes.push(dependente);
        console.log("Cadastro finalizado!");
        return dependente;
    }
}