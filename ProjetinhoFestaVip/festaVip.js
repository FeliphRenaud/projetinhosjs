function verificarEntrada() {
    nomeConvidado = document.getElementById('nome').value;
    Anfitriao1 = ['feliph', 'eduardo', 'monica', 'renato', 'clovis', 'freud', 'nietzsche' ]
    if(Anfitriao1.includes(nomeConvidado)){
        document.getElementById('PermissaoDeEntrada').innerText =
        `Entrada liberada
        seja bem vindo ${nomeConvidado}
        e tenha uma excelente noite`
    }else{
        document.getElementById('PermissaoDeEntrada').innerText = 
        `Lamentamos ${nomeConvidado} 
        mas estamos com uma certa instabilidade na base de dados da lista 
        em poucos instantes um dos organizadores ira a seu encontro
        `
    }
    
}