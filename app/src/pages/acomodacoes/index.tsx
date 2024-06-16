import "@/app/globals.css";
import Navbar from "@/components/navbar";
import Page from "@/components/page";
import Titulo from "@/components/titulo";
import { useEffect, useState } from "react";

type AcomodacaoInfo = {
    nome: string,
    camaSolteiro: string,
    camaCasal: string,
    suíte: string,
    climatizacao: string,
    garagem: string
}

export default function Acomodacoes() {
    const acomodacoes = [
        {
            nome: "Solteiro Simples",
            camaSolteiro: "1",
            camaCasal: "0",
            suíte: "1",
            climatizacao: "Sim",
            garagem: "0"
        },
        {
            nome: "Solteiro Mais",
            camaSolteiro: "0",
            camaCasal: "1",
            suíte: "1",
            climatizacao: "Sim",
            garagem: "1"
        },
        {
            nome: "Casal Simples",
            camaSolteiro: "0",
            camaCasal: "1",
            suíte: "1",
            climatizacao: "Sim",
            garagem: "1"
        },
        {
            nome: "Família Simples",
            camaSolteiro: "2",
            camaCasal: "1",
            suíte: "1",
            climatizacao: "Sim",
            garagem: "1"
        },
        {
            nome: "Família Mais",
            camaSolteiro: "5",
            camaCasal: "1",
            suíte: "2",
            climatizacao: "Sim",
            garagem: "2"
        },
        {
            nome: "Família Super",
            camaSolteiro: "6",
            camaCasal: "2",
            suíte: "3",
            climatizacao: "Sim",
            garagem: "2"
        }
    ]

    return (
        <Page>
            <Navbar />
            <main className="flex flex-col justify-center text-center p-5 gap-5">
                <Titulo>Acomodações disponíveis</Titulo>
                <table className="border-2">
                    <thead>
                        <tr className="bg-sky-100">
                            <th className="p-1 border-2 font-bold">Nome</th>
                            <th className="p-1 border-2 font-bold">Cama Solteiro</th>
                            <th className="p-1 border-2 font-bold">Cama Casal</th>
                            <th className="p-1 border-2 font-bold">Suíte</th>
                            <th className="p-1 border-2 font-bold">Climatização</th>
                            <th className="p-1 border-2 font-bold">Garagem</th>
                        </tr>
                    </thead>
                    <tbody>
                        {acomodacoes.map((acomodacao, index) => (
                            <tr key={index} className="text-center hover:bg-sky-100 hover:shadow transition-all ease-in-out">
                                <td className="p-1 border-2">{acomodacao.nome}</td>
                                <td className="p-1 border-2">{acomodacao.camaSolteiro}</td>
                                <td className="p-1 border-2">{acomodacao.camaCasal}</td>
                                <td className="p-1 border-2">{acomodacao.suíte}</td>
                                <td className="p-1 border-2">{acomodacao.climatizacao}</td>
                                <td className="p-1 border-2">{acomodacao.garagem}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </Page>
    );
}