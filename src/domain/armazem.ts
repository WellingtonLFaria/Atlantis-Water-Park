import Cliente from "../abstraction/cliente";


export default class Armazem {
    private static uniqueInstance: Armazem = new Armazem()
    private clientes: Cliente[] = []

    private constructor() { }

    static get InstanciaUnica(): Armazem {
        return this.uniqueInstance;
    }

    get getClientes(): Cliente[] {
        return this.clientes;
    }

}