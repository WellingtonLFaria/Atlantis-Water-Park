import Storage from "../domain/Storage";

export default interface Listagem {
    armazem: Storage;
    listar(): void;
}