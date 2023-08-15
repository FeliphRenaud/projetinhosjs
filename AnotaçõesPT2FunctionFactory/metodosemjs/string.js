// tipo primitivo 
//mensagem de tipo pré definido
const mensagem = 'minha primeira mensagem de tipo primitivo';
console.log(mensagem);

//tipo objeto 
const outraMensagem = new String('Bom dia');
// a diferença fica evidente no console  utilizando o typeof
// mensagem é categorizada como string
//ja outraMensagem é categorizada como objeto 
//dando assim acesso a todos os metodos de string 
// como o metodo lenght
// ex 

console.log(outraMensagem.length);
console.log(outraMensagem[2]);
// para pesquisar uma palavra dentro de uma string 
//podemos utilizar o metodo includes 
//exemplo
console.log(mensagem.includes('primeira'));
// e o console me retorna um true

// para verificar se a instring inicia com uma determida palavra 
// existe o metodo starrsWith
//ex

console.log(mensagem.startsWith('verde'));
// neste caso => false

//para verificar a ultima palavra da string
console.log(mensagem.endsWith('primitivo'));
// => true

//qual o indice da palavra tipo dentro do string mensagem ?
console.log(mensagem.indexOf('tipo'));

//substituição de palavra na string
console.log(mensagem.replace('minha','nossa'));

//retirada de espaços excedentes de inicio e fim de frases 
console.log(mensagem.trim());

// se voce quiser separa uma string em espaços 
//para que possa tratala como um array 
console.log(mensagem.split(' '));