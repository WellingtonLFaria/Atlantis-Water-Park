import Cliente from "../abstraction/cliente";
import Dependente from "../entities/dependente";
import Titular from "../entities/titular";


export default class Armazem {
    private static uniqueInstance: Armazem = new Armazem()
    private titulares: Titular[] = []
    private dependentes: Dependente[] = []

    private constructor() { }

    static get InstanciaUnica(): Armazem {
        return this.uniqueInstance;
    }

    get getTitulares(): Titular[] { return this.titulares }

    get getDependentes(): Dependente[] { return this.dependentes }

}