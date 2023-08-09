function maior(numero1 , numero2){
    if(numero1 > numero2)
        return numero1;
    return numero2;
}

// tambem esxiste um metodo de resolução utilizando ternarios 
function maiorValorPossivel (numeral1, numeral2){
    return numeral1 > numeral2 ? numeral1 : numeral2;
}

let valorMaior = maior(19,19);
console.log('função simples',valorMaior);

let maiorNumeral = maiorValorPossivel(33,45);
console.log('Ternario',maiorNumeral);