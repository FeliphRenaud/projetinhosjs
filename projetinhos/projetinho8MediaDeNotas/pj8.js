// crie um algoritimo que 
// obtenha a media escolar das notas de um array 

const notasAluno = [ 90, 90, 90];

function calculadoraDeMediasEmArrays (array){
    let soma = 0
     for ( let valor of array){
        soma += valor;
     }
     return soma / (array.length);
}

function mediaAluno (notas){
    const media = calculadoraDeMediasEmArrays(notas)
    
    if (media <= 59) return 'F';
    if (media <= 69) return 'D';
    if (media <= 79) return 'C';
    if (media <= 89) return 'B';
    return 'A'
}

console.log(mediaAluno(notasAluno));