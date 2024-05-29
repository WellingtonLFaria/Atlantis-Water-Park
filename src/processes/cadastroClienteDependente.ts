import Processo from "../abstraction/processo";
import Armazem from "../domain/armazem";
import Dependente from "../entities/dependente";
import Titular from "../entities/titular";
import CadastrarDocumentosCliente from "./cadastrarDocumentoCliente";
import CadastroEnderecoTitular from "./cadastroEnderecoTitular";
import CadastroTelefones from "./cadastroTelefones";
import ListagemTitulares from "./listagemTitulares";

export default class CadastroClienteDependente extends Processo {
    private titulares: Titular[]

    constructor() {
        super()
        this.titulares = Armazem.InstanciaUnica.getTitulares
    }

    processar(): void {
        if (this.titulares.length === 0) {
            console.log("Não há titulares cadastrados, por favor cadastre um titular antes de cadastrar um dependente.");
        } else {
            console.log('Iniciando o cadastro de um novo titular...')
            let nome = this.entrada.receberTexto('Qual o nome do novo cliente?')
            let nomeSocial = this.entrada.receberTexto('Qual o nome social do novo cliente?')
            let dataNascimento = this.entrada.receberData('Qual a data de nascimento?')

            this.processo = new ListagemTitulares()
            this.processo.processar()
            let index = this.entrada.receberNumero("Informe o ID do cliente titular que deseja adicionar o dependente:");
            let titular = this.titulares[index];

            let cliente = new Dependente(nome, nomeSocial, dataNascimento, new Date(), titular)
            titular.getDependentes.push(cliente);

            cliente.setTelefones = cliente.getTitular.getTelefones
            cliente.setEndereco = cliente.getTitular.getEndereco

            this.processo = new CadastrarDocumentosCliente(cliente)
            this.processo.processar()

            let armazem = Armazem.InstanciaUnica
            armazem.getDependentes.push(cliente)

            console.log('Finalizando o cadastro do cliente...')
        }
    }
}