// criar função que exiba os numeros primos 

exibirNumerosPrimos (15);

function exibirNumerosPrimos(limite) {
  for (let numero = 2; numero <= limite; numero ++ ){
    
    
    if (contadorNumerosPrimos(numero)) console.log(numero);
}  
    
}

function contadorNumerosPrimos(numero){
    let ehprimo = true;

    for( let divisor = 2; divisor < numero; divisor++){
        if(numero % divisor === 0){
            return false;
            
        }
        return true;
    }
}