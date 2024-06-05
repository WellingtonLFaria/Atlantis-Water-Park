export default class Acomodacao {
    private nomeAcomodacao: string;
    private camaSolteiro: number;
    private camaCasal: number;
    private suite: number;
    private climatizacao: boolean;
    private garagem: number;

    constructor(nomeAcomodacao: string, camaSolteiro: number, camaCasal: number, suite: number, climatizacao: boolean, garagem: number) {
        this.nomeAcomodacao =  nomeAcomodacao;
        this.camaSolteiro = camaSolteiro;
        this.camaCasal = camaCasal;
        this.suite = suite;
        this.climatizacao = climatizacao;
        this.garagem = garagem;
    }

    public get NomeAcomodacao(): string { return this.nomeAcomodacao };
    public get CamaSolteiro(): number { return this.camaSolteiro };
    public get CamaCasal(): number { return this.camaCasal };
    public get Suite(): number { return this.suite };
    public get Climatizacao(): boolean { return this.climatizacao };
    public get Garagem():number { return this.garagem };
}