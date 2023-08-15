// criar um objeto endereço 
// que contenha 

//rua 
//cidade
//CEP
// e função que exiba o endereço

//resolução 1

let endereco = {
    rua: 'a',
    cidade: 'b',
    cep: 'c'
};

function exibirEndereco(endereco) {
    for ( let info in endereco){
        console.log(info,endereco[info]);
    }
}

exibirEndereco(endereco);

//resolução2

function Endereco(rua, bairro,cidade,cep,estado){
    this.rua = rua,
    this.bairro = bairro,
    this.cidade = cidade,
    this.cep = cep,
    this.estado = estado
}

const endereco1 = new Endereco('Izoel Ribeiro', 'barrieros', 'São Jose', '88.888-888', 'Santa Catarina');
console.log(endereco1);