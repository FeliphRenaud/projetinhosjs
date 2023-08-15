//constructor function
// utilizando pascal case
//PC = UmDoisTresQuatro

function Celular(marcaCelular, tamanhoTela,capacidadeBateria){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function(){
        console.log('Fazendo Ligação...');
    } 
}

const celular1 = new Celular('Asus', 5.5, 8000);
console.log(celular1);

function Carro(marca, modelo,cilindrada, cor){
    this.marca = marca,
    this.modelo = modelo,
    this.cilindrada = cilindrada,
    this.cor = cor,
    this.estadoVeiculo = function(){
        console.log('Ligando motor ');
    }

}

const carro1 = new Carro('Renault', 'Sandero RS ', 2.0, 'Prata');
console.log(carro1);