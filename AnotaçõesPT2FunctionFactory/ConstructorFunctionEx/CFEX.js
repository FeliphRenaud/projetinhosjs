// Criar um objeto postagem 
//com uma função de construtor 
//deve conter :
//titulo, mensagem, autor, vizualizações,  array de comentarios 
//e uma função que diga se esta ao vivo ou não 

//criando o objeto puro e simples:

let mensagem = {
    titulo:'a',
    mensagem:'B',
    autor:'c',
    vizualizacoes: 500,
    comentarios: [
        {comentarioA:'a'},
        {comentarioB:'b'},
        {comentarioC:'c'}
    ],
    estaAoVivo: function(){
        console.log('Transmição Ao Vivo em andamento');
    } 
}

//agora utilizando um construtor para criar este objeto:

function Postagem(titulo, mensagem, autor){
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.vizualizacoes = 0,
    this.comentarios = [],
    this.estaAoVivo = false
}

let postagem = new Postagem('Retorno processo seletivo', 'Parabens, voce foi aprovado no nosso processo seletivo. Em breve agendaremos uma ligação para tratar sobre os detalhes do seu inicio', 'Gerente de relações Humanas');
console.log(postagem);
