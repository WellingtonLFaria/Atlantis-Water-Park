import Cliente from "../entities/cliente";
import listarDocumentos from "./listarDocumentos";

export default function listarDependentes(clientes: Cliente[]) {
    let dependentes = clientes.filter(cliente => cliente.titular !== undefined);
    dependentes.forEach(dependente => {
        console.log(`[${clientes.indexOf(dependente)}] - Nome: ${dependente.nome}`)
        listarDocumentos(dependente.documentos);
    });
}