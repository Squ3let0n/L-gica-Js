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

const idadeComprador = 0;
const estaAcompanhado = true;
const passagemComprada = false;

// if (idadeComprador >= 18) {
//     console.log("Comprador Maior De Idade");
//     listaDestinos.splice(1, 1);
// } else if (estaAcompanhado) {
//     console.log("Comprador está acompanhado");
//     listaDestinos.splice(1, 1);
// }else {
//     console.log("Comprador Menor de idade, não posso vender");
// }


//CTRL + SHIFT+F reescreve codigo
//CTRL+ ; comenta o codigo
// Para escrever ou no java usamos | |
// Para pular linha no texto use \n
if (idadeComprador >= 18 || estaAcompanhado) {
    console.log("Boa viagem!");
    listaDestinos.splice(1, 1);
    console.log("Comprador está acompanhado");
} else {
    console.log("Comprador Menor de idade, não posso vender");
}

console.log("Embarque: \n \n ")
// Para usar a logica com "e" use &&
if(idadeComprador >= 18 || passagemComprada){
    console.log("Boa viagem!");
}else{
    console.log("Você não pode embarcar pois uma das regras não foram seguidas")
}



//para adicionar elementos na lista estando longe dela use listaDestinos.push(`Nome do lugar`);

listaDestinos.push(`2`);

console.log(listaDestinos);

//Para remover itens de lista faça: nomeDaLista.splice(numero da posição, quantos voce quer deletar) A CONTAGEM COMEÇA EM ZERO




console.log(listaDestinos);


// Se quisermos que apenas um elemento apareca, tipo Somente São Paulo, no console.log vamos por[numero do elemento que deve aparecer]

console.log(listaDestinos[1], listaDestinos[0]);