//Introdução a Arrays 
//add novos elementos 
//encontrar elementos
//remover elementos 
//dividir elementos 
//dividir arrays
//combinar arrays

const numeros = [1,2,3,1];

//inserindo no inicio 
numeros.unshift(0);
console.log(numeros);
//inserindo no meio 
numeros.splice(1,0,'a');
console.log(numeros);
//inserindo no final
numeros.push(5);
console.log(numeros); 

//encontrando valor primitivo em um array
//para verificar se existe um elemnto dentro de um array 
//podemos usar o indexOf
//caso encontre ele retornada o indice dentro do array
//ex

console.log(numeros.indexOf(2));

//caso voce passe um valor inexistente dentro do array 
// o metodo retornara o valor -1 
//ex

console.log(numeros.indexOf(13));

//para encontrar a ultima ocorrencia de um elemento no arrya
//utilizamos o lastIndexOf
 console.log(numeros.lastIndexOf(1));

 //existe maneiras de descobrir se existe um determinado valor dentro de um array 
 //este são os seguintes modos 
 
 console.log(numeros.indexOf(2) != -1);
 // este metodo => atraves de true ou false se o valor existe 

 //outro metodo utilizando o ES6 
 console.log(numeros.includes(2));
 //tambem retorna true 

 //########encontrando valores do tipo referencia###############

 const marcas = [
    {id:1 ,nome: 'Adidas'},
    {id:2 ,nome: 'nike'},
    {id:3 ,nome: 'puma'},
    {id:4 ,nome: 'myzuno'},
    {id:5 ,nome: 'reebok'},
    {id:6 ,nome: 'everlast'}
 ];

 const encontre = marcas.find(function(element){
    return element.nome === 'puma';
 });

 console.log(encontre);


//#########REMOVENDO ELEMENTOS DO ARRAY ############ 

//removendo o primeiro elemento 
const removendoNoInicio = numeros.shift();
console.log(removendoNoInicio);
//removendo no meio 
const removendoNoMeio = numeros.splice(2,1);
console.log(removendoNoMeio);
//removendo o ultimo
const ultimoDelete = numeros.pop();
console.log(ultimoDelete);
console.log(numeros);

//########ESVAZIANDO UM ARRAY #############

// O primeiro metodo para esvaziar um array é 
//reinstanciar o array
// caso o array seja uma variavel do tipo LET 
//voce pode simplesmente reinstanciar essa variavel de maneira vazia 
//vide exemplo 

let sortidos = [3, 4, 8, 9, 7 ,4];
let backUpSortidos = sortidos;
console.log('imprimindo o sortidos ', sortidos);
//reinstanciando
sortidos = [];
console.log('Sortidos reinstanciados', sortidos);

//esse metodo zera o array mas não o apaga caso esteja 
//sendo utilizado como referencia 
//exemplo

console.log('Verificando os valores que ainda estão guardados', backUpSortidos);
// repare que apesar de sortidos estar completamente vazio 
// backup guardou seu valor 
// pois array são objetos de referencia 
// e como tal eles podem ser legados a varias variaveis e outras partes do codigo 
// para apagar todo o conteudo do array 
// e zerar tambem suas referencias 
// podemos optar por 

sortidos.length = 0;

console.log(sortidos);
console.log('era pra ter zerado isso daqui',backUpSortidos);

//Terceira solução 
//metodo splice
backUpSortidos.splice(0,backUpSortidos.length);
console.log(sortidos);
console.log('Agora Foi',backUpSortidos);






