import Cliente from "../entities/cliente";
import Documento from "../entities/documento";
import Telefone from "../entities/telefone";
import Entrada from "../input";
import pegarDocumento from "./pegarDocumento";
import pegarEndereco from "./pegarEndereco";
import pegarTelefone from "./pegarTelefone";

export default class CadastrarTitular {
    private entrada: Entrada = new Entrada();

    public processar(): Cliente {
        let nome = this.entrada.receberTexto("Nome");
        let nomeSocial = this.entrada.receberTexto("Nome social");
        let dataNascimento = this.entrada.receberData("Data de nascimento");
        let dataCadastro = new Date();
        let telefones: Telefone[] = [];

        console.log("Telefone");
        let telefone = pegarTelefone(this.entrada);
        telefones.push(telefone);

        let run = true;
        while (run) {
            console.log("[1] - Adicionar mais um telefone");
            console.log("[0] - Continuar cadastro");
            let opcaoUsuario = this.entrada.receberNumero("");
            switch (opcaoUsuario) {
                case 1:
                    console.log("Telefone");
                    telefone = pegarTelefone(this.entrada);
                    telefones.push(telefone);
                    break;
                case 0:
                    run = false;
                    break;
                default:
                    console.log("Opção inválida!")
            }
        }
        
        console.log("Endereço");
        let endereco = pegarEndereco(this.entrada);

        let documentos: Documento[] = [];

        console.log("Documento");
        let documento = pegarDocumento(this.entrada);
        documentos.push(documento);
        
        run = true;
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

        let dependentes: Cliente[] = [];

        let cliente = new Cliente();

        cliente.nome = nome;
        cliente.nomeSocial = nomeSocial;
        cliente.dataNascimento = dataNascimento;
        cliente.dataCadastro = dataCadastro;
        cliente.telefones = telefones;
        cliente.endereco = endereco;
        cliente.documentos = documentos;
        cliente.dependentes = dependentes;

        console.log("Cadastro finalizado!");
        return cliente;
    }
}