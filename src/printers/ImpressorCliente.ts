import Cliente from "../abstractions/Cliente";
import ImpressorDocumento from "./ImpressorDocumento";
import ImpressorEndereco from "./ImpressorEndereco";
import ImpressorTelefone from "./ImpressorTelefone";

export default class ImpressorCliente {
    private impressorEndereco: ImpressorEndereco = new ImpressorEndereco();
    private impressorTelefone: ImpressorTelefone = new ImpressorTelefone();
    private impressorDocumento: ImpressorDocumento = new ImpressorDocumento();

    public imprimir(cliente: Cliente, index: number): void {
        console.log(`Cliente - ${index}`);
        console.log(`Nome: ${cliente.Nome}`);
        console.log(`Nome social: ${cliente.NomeSocial}`);
        console.log(`Data de nascimento: ${cliente.DataNascimento.toLocaleDateString()}`);
        this.impressorEndereco.imprimir(cliente.Endereco);
        if (cliente.Telefones.length > 0) {
            console.log("Telefones:");
            cliente.Telefones.forEach(telefone => {
                this.impressorTelefone.imprimir(telefone, cliente.Telefones.indexOf(telefone));
            });
        }
        if (cliente.Documentos.length > 0) {
            console.log("Documentos:");
            cliente.Documentos.forEach(documento => {
                this.impressorDocumento.imprimir(documento, cliente.Documentos.indexOf(documento));
            });
        }
    }
}