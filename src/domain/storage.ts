import Cliente from "../entities/cliente";

export default class Storage {
    private static uniqueInstance: Storage = new Storage()
    private clientes: Cliente[] = []

    private constructor() { }

    static get InstanciaUnica() {
        return this.uniqueInstance;
    }

    get Clientes() {
        return this.clientes;
    }

}