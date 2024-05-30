import Endereco from "../entities/Endereco";
import Cadastro from "../interfaces/Cadastro";
import Input from "../io/Input";

export default class CadastroEndereco implements Cadastro {
    private entrada: Input = new Input();

    cadastrar(): Endereco {
        console.log("Cadastro de endereço");
        let rua = this.entrada.receberTexto("Digite o nome da rua: ");
        let bairro = this.entrada.receberTexto("Digite o nome do bairro: ");
        let cidade = this.entrada.receberTexto("Digite o nome da cidade: ");
        let estado = this.entrada.receberTexto("Digite o nome do estado: ");
        let pais = this.entrada.receberTexto("Digite o nome do país: ");
        let codigoPostal = this.entrada.receberTexto("Digite o código postal: ");
        let endereco = new Endereco(rua, bairro, cidade, estado, pais, codigoPostal);

        console.log("Endereço cadastrado com sucesso");

        return endereco;
    }
}