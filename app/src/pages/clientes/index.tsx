import "@/app/globals.css";
import Page from "@/components/page";
import Navbar from "@/components/navbar";
import Titulo from "@/components/titulo";

export default function Clientes() {
    return (
        <Page>
            <Navbar />
            <main className="flex flex-col items-center justify-center p-5">
                <Titulo>Clientes cadastrados</Titulo>
            </main>
        </Page>
    );
}