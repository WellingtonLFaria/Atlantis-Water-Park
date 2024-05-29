import Processo from "../abstraction/processo"
import Armazem from "../domain/armazem"
import Titular from "../entities/titular"
import CadastrarDocumentosCliente from "./cadastrarDocumentoCliente"
import CadastroEnderecoTitular from "./cadastroEnderecoTitular"
import CadastroTelefones from "./cadastroTelefones"


export default class CadastroClienteTitular extends Processo {
    processar(): void {
        console.log('Iniciando o cadastro de um novo titular...')
        let nome = this.entrada.receberTexto('Qual o nome do novo cliente?')
        let nomeSocial = this.entrada.receberTexto('Qual o nome social do novo cliente?')
        let dataNascimento = this.entrada.receberData('Qual a data de nascimento?')
        let cliente = new Titular(nome, nomeSocial, dataNascimento, new Date())

        this.processo = new CadastroTelefones(cliente)
        this.processo.processar()

        this.processo = new CadastroEnderecoTitular(cliente)
        this.processo.processar()

        this.processo = new CadastrarDocumentosCliente(cliente)
        this.processo.processar()

        let armazem = Armazem.InstanciaUnica
        armazem.getTitulares.push(cliente)

        console.log('Finalizando o cadastro do cliente...')
    }
}