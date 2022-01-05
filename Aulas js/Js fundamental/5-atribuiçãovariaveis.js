console.log("Atribuição de variaveis");
const idade = 19;
//neste caso essa variavel nao pode ser sobre escrita porque é uma constante, nunca varia, use LET para poder fazer ela variar de constante para variável
let nome = "William";
const sobrenome = "Brayon";

//para fazer os textos ficarem separados por um espaço use virgula , ou entao use + " " +

console.log(nome, sobrenome);
//console.log(nome + " "  +sobrenome +" "+ idade);

//use `` TEM QUE SER INVERTIDA PARA FUNCIONAR, para atribuir valores dentro dos textos
console.log(`Meu nome é: ${nome} Minha idade é: ${idade}`);

nome = nome + " " + sobrenome;
console.log(nome)