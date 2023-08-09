// receba uma quantidade de valores pre determinados para avaliar 
// apos isso criar uma função que leia estes valores e diga se o valor é par ou impar

avaliadorNumerico(10)

function avaliadorNumerico (numeros){
    for (let i = 0; i <= numeros; i++){
        if(i %2 ===0 ){
            console.log(i, 'PAR');
        }else{
            console.log(i, 'IMPAR');
        }
    }
}