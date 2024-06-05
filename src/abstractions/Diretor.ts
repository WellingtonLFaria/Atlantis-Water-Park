import Construtor from "../interfaces/Construtor";

export default abstract class Diretor<T> {
    protected construtor!: Construtor<T>
    public abstract construir(): T
}