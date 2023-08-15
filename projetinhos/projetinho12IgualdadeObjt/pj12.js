// igualdade entre objetos 
//criar um codigo que => igualdade entre objetos 
//criar um codigo que => se os objetos estão apontando para o mesmo local na memoria  

//constructor 
function Endereco(rua, cidade, cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}

//setando parametros
const endereco1 = new Endereco('a', 'b', 'c');
const endereco2 = new Endereco('a', 'b', 'c');

//verificando retorno
console.log(endereco1);
console.log(endereco2);

//função que verifica a igualdade
function igualdadeObjetos(endereco1, endereco2){
    if (endereco1.rua === endereco2.rua 
        &&
        endereco1.cidade === endereco2.cidade
        &&
        endereco1.cep === endereco2.cep){
            console.log('Os Endereços são iguais');
        }else{
            return 'Endereços Diferentes';
        }
}

console.log(igualdadeObjetos(endereco1,endereco2));

function verificadorIgualdadeEnderecoMemoria (endereco1, endereco2){
    //comparando de a referencia dos objetos apontam para o mesmo local na memoria
    return endereco1 === endereco2;

}

console.log(verificadorIgualdadeEnderecoMemoria(endereco1,endereco2));