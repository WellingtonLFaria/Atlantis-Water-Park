import Processo from "../abstraction/processo";
import Endereco from "../entities/endereco";
import Entrada from "../io/entrada";

export default class CadastroEndereco {
    private entrada = new Entrada();

    processar(): Endereco {
        console.log('Coletando os dados de endereço...')
        let rua = this.entrada.receberTexto('Qual a rua?')
        let bairro = this.entrada.receberTexto('Qual o bairro?')
        let cidade = this.entrada.receberTexto('Qual a cidade?')
        let estado = this.entrada.receberTexto('Qual o estado?')
        let pais = this.entrada.receberTexto('Qual o país?')
        let codigoPostal = this.entrada.receberTexto('Qual o código postal?')
        let endereco = new Endereco(rua, bairro, cidade, estado, pais, codigoPostal)
        return endereco;
    }
}