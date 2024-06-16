type Props = {
    acomodacao: string
}

type AcomodacaoInfo = {
    camaSolteiro: string,
    camaCasal: string,
    suíte: string,
    climatizacao: string,
    garagem: string
}

export default function Acomodacao({ acomodacao }: Props) {
    let acomodacaoInfo: AcomodacaoInfo = {
        camaSolteiro: "0",
        camaCasal: "0",
        suíte: "0",
        climatizacao: "Sim",
        garagem: "0"
    };
    switch (acomodacao) {
        case "SS":
            acomodacaoInfo.camaSolteiro = "1"
            acomodacaoInfo.camaCasal = "0"
            acomodacaoInfo.suíte = "1"
            acomodacaoInfo.climatizacao = "Sim"
            acomodacaoInfo.garagem = "0"
            break;
        case "SM":
            acomodacaoInfo.camaSolteiro = "0"
            acomodacaoInfo.camaCasal = "1"
            acomodacaoInfo.suíte = "1"
            acomodacaoInfo.climatizacao = "Sim"
            acomodacaoInfo.garagem = "1"
            break;
        case "CS":
            acomodacaoInfo.camaSolteiro = "0"
            acomodacaoInfo.camaCasal = "1"
            acomodacaoInfo.suíte = "1"
            acomodacaoInfo.climatizacao = "Sim"
            acomodacaoInfo.garagem = "1"
            break;
        case "FS":
            acomodacaoInfo.camaSolteiro = "2"
            acomodacaoInfo.camaCasal = "1"
            acomodacaoInfo.suíte = "1"
            acomodacaoInfo.climatizacao = "Sim"
            acomodacaoInfo.garagem = "1"
            break;
        case "FM":
            acomodacaoInfo.camaSolteiro = "5"
            acomodacaoInfo.camaCasal = "1"
            acomodacaoInfo.suíte = "2"
            acomodacaoInfo.climatizacao = "Sim"
            acomodacaoInfo.garagem = "2"
            break;
        case "FSS":
            acomodacaoInfo.camaSolteiro = "6"
            acomodacaoInfo.camaCasal = "2"
            acomodacaoInfo.suíte = "3"
            acomodacaoInfo.climatizacao = "Sim"
            acomodacaoInfo.garagem = "2"
            break;
    }
    return (
        <table className="border-2">
            <thead>
                <tr>
                    <th className="p-1 border-2">Cama Solteiro</th>
                    <th className="p-1 border-2">Cama Casal</th>
                    <th className="p-1 border-2">Suíte</th>
                    <th className="p-1 border-2">Climatização</th>
                    <th className="p-1 border-2">Garagem</th>
                </tr>
            </thead>
            <tbody>
                <tr className="text-center">
                    <td className="p-1 border-2">{acomodacaoInfo.camaSolteiro}</td>
                    <td className="p-1 border-2">{acomodacaoInfo.camaCasal}</td>
                    <td className="p-1 border-2">{acomodacaoInfo.suíte}</td>
                    <td className="p-1 border-2">{acomodacaoInfo.climatizacao}</td>
                    <td className="p-1 border-2">{acomodacaoInfo.garagem}</td>
                </tr>
            </tbody>
        </table>
    );
}