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

const novoCelular = Object.assign({
    tipoBateria:'Removivel'
},celular);
console.log(novoCelular);

const novoCelular2 = {...celular};
console.log(novoCelular2);