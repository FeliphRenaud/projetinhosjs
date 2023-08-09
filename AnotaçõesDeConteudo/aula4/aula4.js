//###############OPERADOR && ######################
// (&&)
// retorna TRUE  se os dois operadores ou condições avaliadas forem TRUE  ou iguais 
//ex: 

console.log(true && false);

//ex2
//vaga de emprego 

let maiorIdade = true;
let possuiCateiraTrabalho = false;
let podeAplicar = maiorIdade && possuiCateiraTrabalho;
console.log(`o candidado pode aplicar para a vaga? ${podeAplicar}`);


//###############OPERADOR OU #################
//quando utilizamos o || ele retorna uma resposta positiva 'TRUE'
// quando apenas uma das alternativas é true
//EX1

let existeSuspeito = true;
let possuiProva = true;
let existeCrime = existeSuspeito || possuiProva;

console.log(`Existe um crime a ser investigado? ${existeCrime}`);
//repare que só sera retornado uma resposta FALSE 
//quando ambas as variaveis forem FALSE 
//caso contrario o retorno sera TRUE

//#################OPERADOR NOT (!)#######################
// ele é utilizado para fazer uma negação 
//como exemplo sera utilizado os codigos
//referentes as linhas 11 e 14 e 22 e 24  

let candidatoRecusado = !podeAplicar;
console.log(`o candidado FOI RECUSADO? ${candidatoRecusado}`);
let naoInvestigar = !existeCrime;
console.log(`O crime NÃO SERA investigado ${naoInvestigar}`);
// REPARE que o resultado destas linhas a cima são 
//resultados contrarios as linhas de codigos originais 
// eles podem ser utilizados para reforço de logica 
// ou uma especia de ELSE ja que esses condicionais podem substituir IF'S respectivamente  
//##################TERNARIO##########################
//ternario
//maneira de não utilizar IFS 
//ex
//cliente com mais de 100 pontos é cliente PREMIUM,
// caso contrario sera do tipo comum 
let pontos = 200; 
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);