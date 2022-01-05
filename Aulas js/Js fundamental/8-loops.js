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
let passagemComprada = false;
const destino = "Rio de Janeiro";

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
//o const foi usado para deixar a nossa logica como uma constante facilitando o uso e economizando linhas do codigo
const podeComprar = idadeComprador >= 18 || estaAcompanhado == true;


// como precisamos de um contador temos que ter uma variavel de contador chamada let
// igual a 0 pois ele começa em 0 LEMBRE-SE QUE EAS LISTASS COMEÇAM DO ZERO
let contador =0;

//while é enquanto talç coisa acontece
//enquanto meu contador for menor que o numero de elementos da lista ele vai fazer o que ta dentro das chaves
// criando uma variavel para simpliofocar o codigo
let destinoExiste = false;
while(contador<3){
    //console.log(listaDestinos[contador]); como queremos saber se o destino da pessoa ta na lista vamos fazer uma condicional

    if(listaDestinos[contador] == destino){
        console.log("\n Destino Existe")
        destinoExiste = true;
        break;
    }else{
        destinoExiste = false;
    };


    //para fazer o contador sair do ze4ro vamos fazer
    contador +=1;
}

console.log("Destino existe: ", destinoExiste);
