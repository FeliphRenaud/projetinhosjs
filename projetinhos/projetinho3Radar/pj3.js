// verificador de velocidade maxima
// o limite de velocidade é de 70km/h
// a cada 5km/h a cima od limite de velocidade 
//voce ganha 1 ponto na carteira 
// utilize o metodo math.floor()
// caso os pontos sejam maiores que 12 carteira suspensa 

verificadorVelocidade (129);

function verificadorVelocidade(velocidade){

    const velocidadeMaxima = 70;
    const pontosPorKm = 5;
    if (velocidade <= velocidadeMaxima){
        console.log('Voce esta dentro dos limites de velocidade');
    }else{
        const pontos =  Math.floor((velocidade - velocidadeMaxima) / pontosPorKm);
        if (pontos >=12 ){
            console.log('Carteira Suspensa');
        }else{
            console.log('Voce foi multado, seus pontos são de: ', pontos);
        }
    }
    
}