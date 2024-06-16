export default function Navbar() {
    return (
        <nav className="w-screen shadow border bg-sky-100">
            <div className="flex flex-wrap gap-5 p-2 text-2xl">
                <a className="p-1 hover:bg-sky-500 hover:shadow transition-all rounded" href="/cadastrar/cliente">Cadastrar cliente</a>
                <a className="p-1 hover:bg-sky-500 hover:shadow transition-all rounded" href="/clientes">Ver clientes</a>
                <a className="p-1 hover:bg-sky-500 hover:shadow transition-all rounded" href="/acomodacoes">Acomodações</a>
            </div>
        </nav>
    );
}