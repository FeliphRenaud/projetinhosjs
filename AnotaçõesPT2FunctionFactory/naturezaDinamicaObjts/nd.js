// natureza dinamica dos objetos 

const mouse = {
    cor:'red',
    marca: 'dazz'
}
console.log(mouse);


mouse.velocidade = 5000;
mouse.trocarDPI = function(){
    console.log('mudando DPI');
}

console.log(mouse);

delete mouse.velocidade;

console.log(mouse);

delete mouse.trocarDPI;

console.log(mouse);