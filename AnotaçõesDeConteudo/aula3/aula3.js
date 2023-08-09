let corFundoSite = 'verde'; 
console.log(`a cor de fundo do site é ${corFundoSite}`);
function novaCor (cor, tonalidade){
    corFundoSite = cor + " " + tonalidade;
}

console.log(`a cor de fundo do site é ${corFundoSite}`);
novaCor('azul','bêbe');
console.log(`a cor de fundo do site é ${corFundoSite}`);

//tipos de funções 
//existem dois tipos 
//a que apenas retorna um parametro pre definido 
//exemplo a função nova cor a cima 

//e tabem existe a função que muda uma variavel
//retonando assim uma alteração de 

function multiplicarPorDois (valor) {
    return valor*2;
}

console.log(multiplicarPorDois(5));