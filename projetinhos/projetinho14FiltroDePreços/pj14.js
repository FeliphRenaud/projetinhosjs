//filtro de preços 
//criar um array de faixa de preços para que possa ser usado 
// em sites tipo o mercado livre
// o array de objetos deve conter tres elementos 
//tooltip, minimo e maximo


//primeira opção 
let faixas = [
    {tooltip: 'Até 700R$', minimo:0, maximo:700},
    {tooltip: 'De 700R$ a 1000R$', minimo:700, maximo:1000},
    {tooltip: 'Acima de 1000R$', minimo:1000, maximo:999999}
]

//segunda opção usando uma factory function

function criaFaixaPreco(tooltip,minimo,maximo){
    return{
        tooltip,
        minimo,
        maximo,
    }

}

let faixas2 =[
    criaFaixaPreco('até 900 R$', 0, 900),
    criaFaixaPreco('De 900R$ a 1900', 900, 1900),
    criaFaixaPreco('Acima de 1900R$', 1900, 99999),
];

//Terceira opção Utilizando um Contructor Function 

function AdicionandoFaixas(tootip, minimo,maximo){
    this.tooltip = tootip,
    this.minimo = minimo,
    this.maximo = maximo
}
//que podera ser declarado de maneira individual como objeto

let novaFaixa = new AdicionandoFaixas('Até 1300 R$', 0, 1300);

//ou em formato de Array

let faixas3 = [
    new AdicionandoFaixas('Até 1500R$',0,1500),
    new AdicionandoFaixas('De 1500R$ a 3000R$',1500,3000),
    new AdicionandoFaixas('Acima de 3000R$',3000,99999)
];

console.log(faixas);
console.log(faixas2);
console.log(novaFaixa);
console.log(faixas3);