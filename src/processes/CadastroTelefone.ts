import Telefone from "../entities/Telefone";
import Cadastro from "../interfaces/Cadastro";
import Input from "../io/Input";

export default class CadastroTelefone implements Cadastro {
    private entrada: Input = new Input();

    public cadastrar(): Telefone {
        console.log("Cadastro de telefone");
        let ddd = this.entrada.receberTexto("Digite o DDD do telefone: ");
        let numero = this.entrada.receberTexto("Digite o número do telefone: ");
        let telefone = new Telefone(ddd, numero);

        console.log("Telefone cadastrado com sucesso");

        return telefone;
    }
}