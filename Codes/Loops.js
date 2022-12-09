console.log(`Trabalhando com loops`);

const listaDestinos = new Array(
    `Salvador`, `São Paulo`, `Rio de Janeiro`
);

// adiciona elementos no array
listaDestinos.push(`Curitiba`);

const idadeComprador = 15;
const estaAcompanhada = false;
const passagemComprada = true;
const destino = `Curitiba`;

const podeComprar = idadeComprador >= 18 || estaAcompanhada;

let destinoExiste = false;

// Usando o while
let contador = 0;
while(contador < listaDestinos.length){
    if(listaDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }

    contador++;
}

if(destinoExiste)
    console.log(`Destino existe (Usando o While)`);
else
    console.log(`Destino Não existe (Usando o While)`);

destinoExiste = false;
// Usando o for
for(let cont = 0;cont < listaDestinos.length; cont++)
    if(listaDestinos[cont] == destino)
        destinoExiste = true;

            
if(destinoExiste)
    console.log(`Destino existe (Usando o for)`);
else
    console.log(`Destino Não existe (Usando o for)`);


