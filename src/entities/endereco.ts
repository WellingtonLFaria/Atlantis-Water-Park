import Prototipo from "../interfaces/prototipo";

export default class Endereco implements Prototipo{
    public rua!: string;
    public bairro!: string;
    public cidade!: string;
    public estado!: string;
    public pais!: string;
    public codigoPostal!: string;

    public clonar() {
        let clone = new Endereco();
        clone.rua = this.rua;
        clone.bairro = this.bairro;
        clone.cidade = this.cidade;
        clone.estado = this.estado;
        clone.pais = this.pais;
        clone.codigoPostal = this.codigoPostal;
        return clone;
    };
}