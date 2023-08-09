//se o valor for divisivel por tres 03 retornara FIZZ 
//se for divisivel por 5 retornara Buzz
//se for divisivel por 3 e 5 => fizzBuzz
//não divisiveo por 3 e 5 => entrada

const resultado = fizzBuzz(0);
console.log(resultado);

function fizzBuzz(entrada){
    if (typeof entrada !== 'number')
        return 'não é um numero';
    if (entrada %3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz'
    if (entrada % 3 === 0)
        return 'Fizz';
    if (entrada % 5 === 0)
        return 'Buzz';
    
    return entrada;


}
