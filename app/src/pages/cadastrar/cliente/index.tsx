import "@/app/globals.css";
import { FormEvent, useState } from "react";
import Navbar from "@/components/navbar";
import Titulo from "@/components/titulo";
import Page from "@/components/page";
import Field from "@/components/form/field";
import Form from "@/components/form";
import InputText from "@/components/form/inputs/text";
import InputRadio from "@/components/form/inputs/radio";
import InputDate from "@/components/form/inputs/date";
import FormSubtitulo from "@/components/form/formSubtitulo";
import Secao from "@/components/form/secao";
import Telefone from "@/modelos/Telefone";
import Button from "@/components/button";

export default function CadastrarCliente() {

    // Tipo do cliente
    const [cliente, setCliente] = useState<string>("titular");

    // Informações pessoais
    const [nome, setNome] = useState<string>("");
    const [nomeSocial, setNomeSocial] = useState<string>("");
    const [dataNascimento, setDataNascimento] = useState<string>("");

    // Telefones
    const [ddd, setDdd] = useState<string>("");
    const [numero, setNumero] = useState<string>("");
    const [telefones, setTelefones] = useState<Telefone[]>([]);

    // Endereço
    const [rua, setRua] = useState<string>("");
    const [bairro, setBairro] = useState<string>("");
    const [cidade, setCidade] = useState<string>("");
    const [estado, setEstado] = useState<string>("");
    const [pais, setPais] = useState<string>("");
    const [codigoPostal, setCodigoPostal] = useState<string>("");

    const onChangeRadio = (value: string) => {
        setCliente(value);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const handleSubmitTelefone = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const telefone = new Telefone(ddd, numero);
        setTelefones([...telefones, telefone]);
    }

    return (
        <Page>
            <Navbar />
            <main className="flex flex-col items-center justify-center gap-5 p-5">
                <Titulo className="text-center">Cadastrar cliente</Titulo>
                <Form onSubmit={handleSubmit} className="w-2/4">
                    <Secao>
                        <FormSubtitulo>Tipo do cliente</FormSubtitulo>

                        {/* Radio tipo de cliente */}
                        <Field flexCol={false}>
                            <InputRadio name="cliente" id="titular" state={cliente} setState={setCliente} value={"titular"} />
                            <label htmlFor="titular">Titular</label>
                        </Field>

                        <Field flexCol={false}>
                            <InputRadio name="cliente" id="dependente" state={cliente} setState={setCliente} value={"dependente"} />
                            <label htmlFor="dependente">Dependente</label>
                        </Field>
                    </Secao>

                    <Secao>
                        <FormSubtitulo>Informações pessoais</FormSubtitulo>
                        <Field>
                            <label htmlFor="nome">Nome: </label>
                            <InputText name="nome" state={nome} setState={setNome} />
                        </Field>

                        <Field>
                            <label htmlFor="nomeSocial">Nome social: </label>
                            <InputText name="nomeSocial" state={nomeSocial} setState={setNomeSocial} />
                        </Field>

                        <Field>
                            <label htmlFor="dataNascimento">Data de nascimento:</label>
                            <InputDate name="dataNascimento" state={dataNascimento} setState={setDataNascimento} />
                        </Field>
                    </Secao>

                    <Secao>
                        <FormSubtitulo>Telefones</FormSubtitulo>
                        <form onSubmit={e => handleSubmitTelefone(e)}>
                            <Field>
                                <label htmlFor="ddd">DDD:</label>
                                <InputText name="ddd" state={ddd} setState={setDdd} />
                            </Field>
                            <Field>
                                <label htmlFor="numero">Número:</label>
                                <InputText name="numero" state={numero} setState={setNumero} />
                            </Field>
                            <Field className="items-center">
                                <Button tipo="submit" onClick={() => { }}>Cadastrar telefone</Button>
                            </Field>
                        </form>
                        <Field>
                            {telefones?.length === 0 && <p>Nenhum telefone cadastrado</p>}
                            {telefones?.length !== 0 && telefones.map(telefone => {
                                return (
                                    <Field>
                                        <InputText name="ddd" state={telefone.Ddd} setState={() => { }} />
                                    </Field>
                                )
                            })}
                        </Field>
                    </Secao>

                    <Secao>
                        <FormSubtitulo>Endereço</FormSubtitulo>
                        <Field>
                            <label htmlFor="rua">Rua: </label>
                            <InputText name="rua" state={rua} setState={setRua} />
                        </Field>
                        <Field>
                            <label htmlFor="bairro">Bairro: </label>
                            <InputText name="bairro" state={bairro} setState={setBairro} />
                        </Field>
                        <Field>
                            <label htmlFor="cidade">Cidade: </label>
                            <InputText name="cidade" state={cidade} setState={setCidade} />
                        </Field>
                        <Field>
                            <label htmlFor="estado">Estado: </label>
                            <InputText name="estado" state={estado} setState={setEstado} />
                        </Field>
                        <Field>
                            <label htmlFor="pais">País: </label>
                            <InputText name="pais" state={pais} setState={setPais} />
                        </Field>
                        <Field>
                            <label htmlFor="codigoPostal">Código Postal: </label>
                            <InputText name="codigoPostal" state={codigoPostal} setState={setCodigoPostal} />
                        </Field>
                    </Secao>
                </Form>
            </main>
        </Page>
    );
}