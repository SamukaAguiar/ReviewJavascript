console.log("Trabalhando com variaveis");

const idade = 29;
const primeiroNome = "Samuel";

console.log("O " + primeiroNome + " tem " + idade + " de idade");

// Convertendo
const a = "10";
const b = "20";

console.log(parseInt(a) + parseInt(b));

// Conversão automática
console.log(a / b);

// Numeros flutuante devem ser com ponto
console.log(6.5);
console.log(6,5); //O compilador tira a virgula e coloca espaço

//Atribuiçoes de variaveis
const sobrenome = "Peres";

console.log(primeiroNome, sobrenome); // Virgula serve como espaço neste caso
console.log(`Meu nome é: ${primeiroNome} ${sobrenome}`); // Usando a craze

const nomeCompleto = primeiroNome + sobrenome;

console.log(nomeCompleto);

// Podemos mudar o valor da variavel independente o tipo dela, porem nao é um bao pratica
