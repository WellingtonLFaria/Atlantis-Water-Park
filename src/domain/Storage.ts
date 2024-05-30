import Dependente from "../entities/Dependente";
import Titular from "../entities/Titular";

export default class Storage {
    private static uniqueInstance: Storage = new Storage();
    private titulares: Titular[] = [];
    private dependentes: Dependente[] = [];

    static get UniqueInstance(): Storage {
        return this.uniqueInstance;
    }

    get Titulares(): Titular[] {
        return this.titulares;
    }

    get Dependentes(): Dependente[] {
        return this.dependentes;
    }
}