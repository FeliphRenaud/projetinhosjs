// criar uma função que retorne a soma 
// de todos os numeros multiplos de 3 e 5 
// limite a ser definido pelo usuario 

somar (100);
function somar(item){
    let multiplo3 = 0;
    let multiplo5 = 0;

    for ( i=0; i <= item; i++){
        if( i % 3 === 0 )
        multiplo3 += i;
       if ( i % 5 === 0 )
       multiplo5 += i; 
    }

    console.log(multiplo3 + multiplo5);
}