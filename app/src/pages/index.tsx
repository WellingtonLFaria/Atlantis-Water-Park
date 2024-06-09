import "@/app/globals.css"
import Navbar from "@/components/navbar";
import Page from "@/components/page";

export default function Home() {
    return (
        <Page>
            <Navbar />
            <main className="flex flex-col justify-center items-center h-full px-5">
                <h1 className="text-6xl">Atlantis Water Park</h1>
                <h2 className="text-4xl">Gerenciador parques aquáticos, clubes e hotéis</h2>
            </main>
        </Page>
    );
}