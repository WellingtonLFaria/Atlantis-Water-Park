import Cliente from "../entities/cliente";
import listarDocumentos from "./listarDocumentos";

export default function listarTitulares(clientes: Cliente[]) {
    let titulares = clientes.filter(cliente => cliente.titular === undefined);
    titulares.forEach(titular => {
        console.log(`[${clientes.indexOf(titular)}] - Nome: ${titular.nome}`)
        listarDocumentos(titular.documentos);
    });
}