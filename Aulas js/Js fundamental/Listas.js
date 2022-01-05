// console.log(`Trabalhando com Listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

// console.log("Destinos possiveis: ")
// console.log(salvador, saoPaulo, rioDeJaneiro);

//ctrl K C ele comenta ctrl K U ele tira os comentarios

// complicado, vamos fazer em forma de lista use new Array()

const listaDestinos = new Array(
    `Salvador`, `São Paulo`, `Rio de Janeiro`
);

//para adicionar elementos na lista estando longe dela use listaDestinos.push(`Nome do lugar`);

listaDestinos.push(`2`);

console.log(listaDestinos);

//Para remover itens de lista faça: nomeDaLista.splice(numero da posição, quantos voce quer deletar) A CONTAGEM COMEÇA EM ZERO


listaDestinos.splice(
    1,1
);

console.log(listaDestinos);


// Se quisermos que apenas um elemento apareca, tipo Somente São Paulo, no console.log vamos por[numero do elemento que deve aparecer]

console.log(listaDestinos[1], listaDestinos[0]);