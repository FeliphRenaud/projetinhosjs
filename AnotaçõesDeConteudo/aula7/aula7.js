//tipos de loops 
//1.for
//2.while
//3.do while
//4.for in
//5.for of

//###########for###########

for( let i = 0; i < 5; i++){
    if ( i % 2 !== 0){
        console.log(i);
    }
}

//#########WHILE###########
let i = 5;
//precisa ser declarado a variavel de indice fora do loop
while(i >= 1){
    if ( i % 2 !== 0){
        console.log(i);
    }
    i--;
}

//###########DO WHILE ############
 let d = 0;

do{
    console.log('digitando');
    d++
} while (d < 10)

//############FOR-IN##########
// muito apropriado para interação de objetos 

const pessoa = {
    nome: 'feiph',
    idade: 35
};
//key-value
//onde a key "chave é apos o let "
//e value "valor" é apos o in no caso o objeto
for ( let chave in pessoa ){
    console.log(chave,pessoa);

}

const cores = ['vermelho', 'azul', 'verde' ];
for (let cor in cores){
    console.log(cor,cores[cor]);
}

//#########FOR-OF##############
//Mais indicados para fazer interações em arrays

for (let cor of cores ){
    console.log(cor);
}

let carros=['corsa', 'palio', 'uno'];
for (let carro of carros){
    console.log(carro);
}
