//Segunda parte das anotações de metodos em arrays 
//COMBINANDO E RECORTANDO ARRAYS 

const primeiro = [ 1,2,3];
const segundo = [4,5,6];

//combinando
const combinado = primeiro.concat(segundo);
console.log('Arrays Combinados', combinado);

//para divide o array utilizamos o slice 

const cortado = combinado.slice(1,3);
console.log('Cortado',cortado);

//UTILIZANDO O SPREAD OPERATOR

const combinandoComSpread = {...primeiro,...segundo};
console.log('Utilizando o Spread', combinandoComSpread);

//CLONANDO

const clonando = {...combinandoComSpread};
console.log('Clonando com Spread', clonando);

//MODIFICANDO O CLONADO 

const modificandoClonado = { ...clonando,...clonando};
console.log('Modificado',modificandoClonado);

//############# ITERANDO FOR EACH #############

const numerosForEach= [1,2,3,4,5,6];
//METODO FOR OF 
for ( numero of numerosForEach){
    console.log(numero);
}
//METODO FOR EACH 
numerosForEach.forEach((numero,indice)=>console.log('for each ', numero,'e indice',indice));

//COMBINANDO ARRAYS BASEADO EM ALGO

const numero1 = [1,2,3,4,5];
const numero1Combinado = numero1.join('.');
console.log(numero1Combinado);

//SEPARAR ARRAYS BASEADO EM ALGO 
const frase = 'Olá bem vindo ao curso';
const resultadoFrase = frase.split(' ');
console.log(resultadoFrase);

const separadoPorTraco = resultadoFrase.join('-');
console.log(separadoPorTraco);