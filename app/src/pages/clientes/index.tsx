import "@/app/globals.css";
import Page from "@/components/page";
import Navbar from "@/components/navbar";
import Titulo from "@/components/titulo";
import ClientesDetails from "@/components/clienteDetails";
import Endereco from "@/modelos/Endereco";
import Telefone from "@/modelos/Telefone";
import Documento from "@/modelos/Documento";
import { TipoDocumento } from "@/modelos/TipoDocumento";
import Titular from "@/modelos/Titular";
import { useState } from "react";
import Dependente from "@/modelos/Dependente";

export default function Clientes() {
    const [titular, setTitular] = useState<Titular>(new Titular("Wellington", "Wellington", new Date(), new Endereco("Rua João Pires Silveira Filho", "Residencial Dom Bosco", "São José dos Campos", "SP", "Brasil", "12225-882"), [new Telefone("12", "996680124")], [new Documento(TipoDocumento.CPF, "12345678912", new Date())], []));
    const [dependente, setDependente] = useState<Dependente>(new Dependente("Wellington", "Wellington", new Date(), new Endereco("Rua João Pires Silveira Filho", "Residencial Dom Bosco", "São José dos Campos", "SP", "Brasil", "12225-882"), [new Telefone("12", "996680124")], [new Documento(TipoDocumento.RG, "561184574", new Date())], titular));

    return (
        <Page>
            <Navbar />
            <main className="flex flex-col items-center justify-center p-5 gap-2">
                <Titulo>Clientes cadastrados</Titulo>
                <div className="shadow rounded p-2">
                    <ClientesDetails titulares={[titular]} dependentes={[dependente]} />
                </div>
            </main>
        </Page>
    );
}