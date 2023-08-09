//criar um metodo para ler propriedade de um objeto 
//exibir somente as propriedade do tipo string que estão nesse objeto

const filme = {
    titulo: 'Vingadores',
    ano: 2018,
    diretores: 'irmão russo',
    personagem: 'Thor' 
}


function exibirPropriedade(objeto){
    for( item in objeto){
        if (typeof objeto[item] === 'string'){
            console.log(item,objeto[item]);
        }
    }
}

exibirPropriedade(filme)