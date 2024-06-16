import "@/app/globals.css"
import Acomodacao from "@/components/acomodacao";
import Button from "@/components/button";
import Form from "@/components/form";
import Field from "@/components/form/field";
import FormSubtitulo from "@/components/form/formSubtitulo";
import InputDate from "@/components/form/inputs/date";
import InputRadio from "@/components/form/inputs/radio";
import InputSelect from "@/components/form/inputs/select";
import InputText from "@/components/form/inputs/text";
import Secao from "@/components/form/secao";
import Navbar from "@/components/navbar";
import Page from "@/components/page";
import Titulo from "@/components/titulo";
import Dependente from "@/modelos/Dependente";
import Documento from "@/modelos/Documento";
import Endereco from "@/modelos/Endereco";
import Telefone from "@/modelos/Telefone";
import { TipoDocumento } from "@/modelos/TipoDocumento";
import Titular from "@/modelos/Titular";
import { FormEvent, useEffect, useState } from "react";

export default function ClienteDetails() {
    // Tipo do cliente
    const [tipoCliente, setTipoCliente] = useState<string>("titular");
    const [cliente, setCliente] = useState<Titular | Dependente>(new Titular("Wellington", "Wellington", new Date(), new Endereco("Rua João Pires Silveira Filho", "Residencial Dom Bosco", "São José dos Campos", "SP", "Brasil", "12225-882"), [new Telefone("12", "996680124")], [new Documento(TipoDocumento.CPF, "12345678912", new Date())], []));

    useEffect(() => {
        let tipoCliente = window.localStorage.getItem("tipoCliente");
        let cliente = window.localStorage.getItem("cliente");
    });

    // Informações pessoais
    const [nome, setNome] = useState<string>(cliente.Nome);
    const [nomeSocial, setNomeSocial] = useState<string>(cliente.NomeSocial);
    const [dataNascimento, setDataNascimento] = useState<string>(cliente.DataNascimento.toLocaleDateString());

    // Telefones
    const [ddd, setDdd] = useState<string>("");
    const [numero, setNumero] = useState<string>("");
    const [telefones, setTelefones] = useState<Telefone[]>(cliente.Telefones);

    // Documentos
    const [tipoDocumento, setTipoDocumento] = useState<string>("");
    const [numeroDocumento, setNumeroDocumento] = useState<string>("");
    const [dataExpedicao, setDataExpedicao] = useState<string>("");
    const [documentos, setDocumentos] = useState<Documento[]>(cliente.Documentos);

    // Endereço
    const [rua, setRua] = useState<string>(cliente.Endereco.Rua);
    const [bairro, setBairro] = useState<string>(cliente.Endereco.Bairro);
    const [cidade, setCidade] = useState<string>(cliente.Endereco.Cidade);
    const [estado, setEstado] = useState<string>(cliente.Endereco.Estado);
    const [pais, setPais] = useState<string>(cliente.Endereco.Pais);
    const [codigoPostal, setCodigoPostal] = useState<string>(cliente.Endereco.CodigoPostal);

    // Titular
    const [titular, setTitular] = useState<string>("");

    const [edit, setEdit] = useState(false);

    // Acomodação
    const [acomodacao, setAcomodacao] = useState<string>("SS");
    const acomodacoes = [{ value: "SS", label: "Solteiro Simples" }, { value: "SM", label: "Solteiro Mais" }, { value: "CS", label: "Casal Simples" }, { value: "FS", label: "Família Simples" }, { value: "FM", label: "Família Mais" }, { value: "FSS", label: "Família Super" }]

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let cadastro = true;

        let naoNulos: any[];
        if (tipoCliente === "titular") { naoNulos = [nome, nomeSocial, dataNascimento, telefones, documentos, rua, bairro, cidade, estado, pais, codigoPostal, acomodacao] }
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

    const handleEdit = () => {
        edit ? setEdit(false) : setEdit(true);
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
                            <InputRadio name="cliente" id="titular" state={tipoCliente} setState={setTipoCliente} value={"titular"} disabled={!edit} />
                            <label htmlFor="titular">Titular</label>
                        </Field>

                        <Field flexCol={false}>
                            <InputRadio name="cliente" id="dependente" state={tipoCliente} setState={setTipoCliente} value={"dependente"} disabled={!edit} />
                            <label htmlFor="dependente">Dependente</label>
                        </Field>
                    </Secao>

                    <Secao>
                        <FormSubtitulo>Informações pessoais</FormSubtitulo>
                        <Field>
                            <label htmlFor="nome">Nome: </label>
                            <InputText name="nome" state={nome} setState={setNome} disabled={!edit} />
                        </Field>

                        <Field>
                            <label htmlFor="nomeSocial">Nome social: </label>
                            <InputText name="nomeSocial" state={nomeSocial} setState={setNomeSocial} disabled={!edit} />
                        </Field>

                        <Field>
                            <label htmlFor="dataNascimento">Data de nascimento:</label>
                            <InputDate name="dataNascimento" state={dataNascimento} setState={setDataNascimento} disabled={!edit} />
                        </Field>
                    </Secao>
                    <Secao>
                        <FormSubtitulo>Documentos</FormSubtitulo>
                        <Field>
                            <label htmlFor="tipoDocumento">Tipo do documento:</label>
                            <InputSelect name="tipoDocumento" options={[{ value: "RG", label: "Registro Geral" }, { value: "CPF", label: "Cadastro de Pessoas Físicas" }, { value: "PASSPORTE", label: "Passaporte" }]} state={tipoDocumento} setState={setTipoDocumento} disabled={!edit} />
                        </Field>
                        <Field>
                            <label htmlFor="numero">Número:</label>
                            <InputText name="numero" state={numeroDocumento} setState={setNumeroDocumento} disabled={!edit} />
                        </Field>
                        <Field>
                            <label htmlFor="dataExpedicao">Data de expedição:</label>
                            <InputDate name="dataExpedicao" state={dataExpedicao} setState={setDataExpedicao} disabled={!edit} />
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
                    {tipoCliente === "titular" &&
                        <>
                            <Secao>
                                <FormSubtitulo>Telefones</FormSubtitulo>
                                <Field>
                                    <label htmlFor="ddd">DDD:</label>
                                    <InputText name="ddd" state={ddd} setState={setDdd} disabled={!edit} />
                                </Field>
                                <Field>
                                    <label htmlFor="numero">Número:</label>
                                    <InputText name="numero" state={numero} setState={setNumero} disabled={!edit} />
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
                                    <InputText name="rua" state={rua} setState={setRua} disabled={!edit} />
                                </Field>
                                <Field>
                                    <label htmlFor="bairro">Bairro: </label>
                                    <InputText name="bairro" state={bairro} setState={setBairro} disabled={!edit} />
                                </Field>
                                <Field>
                                    <label htmlFor="cidade">Cidade: </label>
                                    <InputText name="cidade" state={cidade} setState={setCidade} disabled={!edit} />
                                </Field>
                                <Field>
                                    <label htmlFor="estado">Estado: </label>
                                    <InputText name="estado" state={estado} setState={setEstado} disabled={!edit} />
                                </Field>
                                <Field>
                                    <label htmlFor="pais">País: </label>
                                    <InputText name="pais" state={pais} setState={setPais} disabled={!edit} />
                                </Field>
                                <Field>
                                    <label htmlFor="codigoPostal">Código Postal: </label>
                                    <InputText name="codigoPostal" state={codigoPostal} setState={setCodigoPostal} disabled={!edit} />
                                </Field>
                            </Secao>
                            <Secao>
                                <FormSubtitulo>Acomodação</FormSubtitulo>
                                <InputSelect name="acomodacao" state={acomodacao} setState={setAcomodacao} options={acomodacoes} disabled={!edit} />
                                <div className="flex justify-center p-2">
                                    <Acomodacao acomodacao={acomodacao} />
                                </div>
                            </Secao>
                        </>
                    }

                    {/* Dependente */}
                    {tipoCliente === "dependente" &&
                        <>
                            <Secao>
                                <FormSubtitulo>Titular</FormSubtitulo>
                                <Field>
                                    <InputSelect name="titular" state={titular} setState={setTitular} options={[{ value: "12345678913", label: "12345678913" }]}></InputSelect>
                                </Field>
                            </Secao>
                        </>
                    }
                    {!edit &&
                        <Field flexCol={false} className="gap-2 justify-center">
                            <Button onClick={handleEdit} tipo="update" type="button">Atualizar cliente</Button>
                            <Button onClick={() => {}} tipo="delete" type="button">Deletar cliente</Button>
                        </Field>
                    }
                    {edit &&
                        <Field flexCol={false} className="gap-2 justify-center">
                            <Button onClick={handleEdit} tipo="submit" type="button">Confirmar atualização</Button>
                            <Button onClick={handleEdit} type="button">Cancelar atualização</Button>
                        </Field>
                    }
                </Form>
            </main>
        </Page>
    );
}