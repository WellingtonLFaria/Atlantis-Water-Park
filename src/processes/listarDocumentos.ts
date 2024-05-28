import Documento from "../entities/documento";

export default function listarDocumentos(documentos: Documento[]) {
    console.log("      Documentos:")
    documentos.forEach(documento => {
        console.log("        Tipo:", documento.tipo);
        console.log("        Número:", documento.numero);
        console.log("");
    });
}