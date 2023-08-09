// IF .. ELSE 
// se o horario estiver entre 06:00 
// e 12:00 o programa dara bom dia 
// se estiver entre 12:01 e 18:00 
// o programa dara boa tarde 
// e caso contrario dara boa noite

let hora = 22
;

if ( hora > 6 && hora <= 12 ){
    console.log('BOM DIA');
}else if(hora > 12 && hora <= 18) {
    console.log("BOA TARDE");
}else{
    console.log('BOA NOITE');
}
