export class Imovel{
    protected tipo: string;
    protected bairro: string;
    protected qtdQuartos: number;
    protected qtdBanheiros: number;

    constructor(tipo: string, bairro: string, qtdQuartos:number, qtdBanheiros: number) {
        this.tipo = tipo
        this.bairro = bairro
        this.qtdQuartos = qtdQuartos
        this.qtdBanheiros = qtdBanheiros
    }

    public mostrarImovel(){
        console.log(`Mostrar o imóvel, do tipo ${this.tipo}, no ${ this.bairro},com ${this.qtdQuartos} quartos, e ${this.qtdBanheiros} banheiros.`)
    }

}
