import "@/app/globals.css";
import { FormEvent, useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Titulo from "@/components/titulo";
import Page from "@/components/page";
import Field from "@/components/form/field";
import Form from "@/components/form";
import InputText from "@/components/form/inputs/text";
import InputRadio from "@/components/form/inputs/radio";
import InputDate from "@/components/form/inputs/date";
import InputSelect from "@/components/form/inputs/select";
import FormSubtitulo from "@/components/form/formSubtitulo";
import Secao from "@/components/form/secao";
import Telefone from "@/modelos/Telefone";
import Button from "@/components/button";
import Documento from "@/modelos/Documento";
import { TipoDocumento } from "@/modelos/TipoDocumento";
import Acomodacao from "@/components/acomodacao";

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
    const [telefones, setTelefones] = useState<Telefone[]>([new Telefone("12", "996680124")]);

    // Documentos
    const [tipoDocumento, setTipoDocumento] = useState<string>("");
    const [numeroDocumento, setNumeroDocumento] = useState<string>("");
    const [dataExpedicao, setDataExpedicao] = useState<string>("");
    const [documentos, setDocumentos] = useState<Documento[]>([new Documento(TipoDocumento.CPF, "12345678913", new Date())]);

    // Endereço
    const [rua, setRua] = useState<string>("");
    const [bairro, setBairro] = useState<string>("");
    const [cidade, setCidade] = useState<string>("");
    const [estado, setEstado] = useState<string>("");
    const [pais, setPais] = useState<string>("");
    const [codigoPostal, setCodigoPostal] = useState<string>("");

    // Titular
    const [titular, setTitular] = useState<string>("");

    // Acomodação
    const [acomodacao, setAcomodacao] = useState<string>("SS");
    const acomodacoes = [{ value: "SS", label: "Solteiro Simples" }, { value: "SM", label: "Solteiro Mais" }, { value: "CS", label: "Casal Simples" }, { value: "FS", label: "Família Simples" }, { value: "FM", label: "Família Mais" }, { value: "FSS", label: "Família Super" }]

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let cadastro = true;

        let naoNulos: any[];
        if (cliente === "titular") { naoNulos = [nome, nomeSocial, dataNascimento, telefones, documentos, rua, bairro, cidade, estado, pais, codigoPostal, acomodacao] }
        else { naoNulos = [nome, nomeSocial, dataNascimento, documentos, titular] }

        console.log(naoNulos);

        naoNulos.forEach(naoNulo => {
            if (typeof naoNulo === "string") {
                if (naoNulo === "") {
                    cadastro = false;
                }
            } else {
                if (naoNulo.length === 0) {
                    cadastro = false;
                }
            }
        });

        if (!cadastro) {
            alert("Preencha todos os campos");
            return;
        }

        alert("Cliente cadastrado com sucesso!")
        return;
    };

    async function copyTextToClipboard(text: string) {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(text);
        } else {
            return document.execCommand('copy', true, text);
        }
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
                        <FormSubtitulo>Documentos</FormSubtitulo>
                        <Field>
                            <label htmlFor="tipoDocumento">Tipo do documento:</label>
                            <InputSelect name="tipoDocumento" options={[{ value: "RG", label: "Registro Geral" }, { value: "CPF", label: "Cadastro de Pessoas Físicas" }, { value: "PASSPORTE", label: "Passaporte" }]} state={tipoDocumento} setState={setTipoDocumento} />
                        </Field>
                        <Field>
                            <label htmlFor="numero">Número:</label>
                            <InputText name="numero" state={numeroDocumento} setState={setNumeroDocumento} />
                        </Field>
                        <Field>
                            <label htmlFor="dataExpedicao">Data de expedição:</label>
                            <InputDate name="dataExpedicao" state={dataExpedicao} setState={setDataExpedicao} />
                        </Field>
                        <Field className="items-center">
                            <Button tipo="submit" type="button" onClick={() => { }}>Cadastrar documento</Button>
                        </Field>
                        <Field>
                            <p>Documentos cadastrados:</p>
                            <Field flexCol={false}>
                                <p className="bg-sky-200 p-1 rounded hover:scale-105 transition-all" onClick={e => copyTextToClipboard("12345678912")}><span className="font-bold">CPF:</span> {"12345678912"}</p>
                            </Field>
                        </Field>
                    </Secao>

                    {/* Titular */}
                    {cliente === "titular" &&
                        <>
                            <Secao>
                                <FormSubtitulo>Telefones</FormSubtitulo>
                                <Field>
                                    <label htmlFor="ddd">DDD:</label>
                                    <InputText name="ddd" state={ddd} setState={setDdd} />
                                </Field>
                                <Field>
                                    <label htmlFor="numero">Número:</label>
                                    <InputText name="numero" state={numero} setState={setNumero} />
                                </Field>
                                <Field className="items-center">
                                    <Button tipo="submit" type="button" onClick={() => { }}>Cadastrar telefone</Button>
                                </Field>
                                <Field>
                                    <p>Telefones cadastrados:</p>
                                    <Field flexCol={false}>
                                        <p className="bg-sky-200 p-1 rounded hover:scale-105 transition-all" onClick={e => copyTextToClipboard("(12) 99668-0124")}>({"12"}) {"996680124"}</p>
                                    </Field>
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
                            <Secao>
                                <FormSubtitulo>Acomodação</FormSubtitulo>
                                <InputSelect name="acomodacao" state={acomodacao} setState={setAcomodacao} options={acomodacoes} />
                                <div className="flex justify-center p-2">
                                    <Acomodacao acomodacao={acomodacao} />
                                </div>
                            </Secao>
                        </>
                    }

                    {/* Dependente */}
                    {cliente === "dependente" &&
                        <>
                            <Secao>
                                <FormSubtitulo>Titular</FormSubtitulo>
                                <Field>
                                    <InputSelect name="titular" state={titular} setState={setTitular} options={[{ value: "12345678913", label: "CPF: 12345678913 - Titular nome" }]}></InputSelect>
                                </Field>
                            </Secao>
                        </>
                    }
                    <Field className="items-center">
                        <Button onClick={() => { }} tipo="submit">Cadastrar cliente</Button>
                    </Field>
                </Form>
            </main>
        </Page>
    );
}