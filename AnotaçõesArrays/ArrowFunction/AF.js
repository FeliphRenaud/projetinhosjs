
const marcas = [
    {id:1 ,nome: 'Adidas'},
    {id:2 ,nome: 'nike'},
    {id:3 ,nome: 'puma'},
    {id:4 ,nome: 'myzuno'},
    {id:5 ,nome: 'reebok'},
    {id:6 ,nome: 'everlast'}
 ];

 // sem a utilização de Arrow 

 const encontre = marcas.find(function(element){
    return element.nome === 'puma';
 });

 console.log(encontre);

 // com utilização de arrow

console.log(marcas.find(element => 
    element.nome === 'puma'
 ));
