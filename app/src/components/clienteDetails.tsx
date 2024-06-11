import Cliente from "@/modelos/Cliente";
import Dependente from "@/modelos/Dependente";
import Titular from "@/modelos/Titular";

type Props = {
    titulares: Titular[],
    dependentes: Dependente[]
}

export default function ClientesDetails({titulares, dependentes}: Props) {
    return (
        <table className="border-2">
            <tr className="text-center bg-sky-100">
                <th className="p-2 border-2">Nome</th>
                <th className="p-2 border-2">Data de nascimento</th>
                <th className="p-2 border-2">Tipo documento</th>
                <th className="p-2 border-2">Número do documento</th>
                <th className="p-2 border-2">Tipo do cliente</th>
            </tr>
            {titulares.map(titular => 
            <tr className="text-center">
                <td className="p-2 border-2">{titular.Nome}</td>
                <td className="p-2 border-2">{titular.DataNascimento.toLocaleDateString()}</td>
                <td className="p-2 border-2">{titular.Documentos[0].Tipo}</td>
                <td className="p-2 border-2">{titular.Documentos[0].Numero}</td>
                <td className="p-2 border-2">Titular</td>
            </tr>)}
            {dependentes.map(dependente => 
            <tr className="text-center">
                <td className="p-2 border-2">{dependente.Nome}</td>
                <td className="p-2 border-2">{dependente.DataNascimento.toLocaleDateString()}</td>
                <td className="p-2 border-2">{dependente.Documentos[0].Tipo}</td>
                <td className="p-2 border-2">{dependente.Documentos[0].Numero}</td>
                <td className="p-2 border-2">Dependente</td>
            </tr>)}
        </table>
    );
}