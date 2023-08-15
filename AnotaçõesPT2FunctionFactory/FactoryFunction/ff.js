// se voce precisa cadastrar mil modelos de aparelhos celulares 
// voce precisa de um metodo mais facil rapido e clean /
// do que ficar repetindo codigo mil vezes para cadastrar os mil produtos
// é para iss oque funciona a FF 
//ex


const celular ={
    marcaCelular : 'Asus',
    tamanhoTela: {
        vertical : 155,
        horizontal : 75 
    },
    capacidadeBateria: 5000,
    ligar: function(){
        console.log('Fazendo Ligação...');
    }
}
// primeiro voce deve incapsular em uma função o seu objeto 
// e de preferencia fazer com que o codigo fique simples e sem aquilo que é chamado de hardcode

function criarCelular(marcaCelular,tamanhoTela, capacidadeBateria){
    return {
        marcaCelular ,
        tamanhoTela,
        capacidadeBateria,
        ligar(){
            console.log('Fazendo Ligação...');
        }
    }
}


const celular1 =  criarCelular('Zenfone', 5.5,5000);
console.log(celular1);

//novo exemplo
//do objeto a simplificação
//imagine que voce possui uma loja de carros 
// com mil veiculos em estoque e voce precisa cadastralos no site 


const carro = {
    marca: 'GM',
    modelo: 'Corsa',
    cilindradaMotor: 1.8,
    cor: 'preto'
}

function cadastrarCarro(marca, modelo, cilindradaMotor, cor){
    return {
        marca,
        modelo,
        cilindradaMotor,
        cor
    }
}

const carro1 = cadastrarCarro('Renault', 'Sandero RS', 2.0, 'Prata');
console.log(carro1);
