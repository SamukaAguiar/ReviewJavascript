console.log(`Trabalhando com loops`);

const listaDestinos = new Array(
    `Salvador`, `São Paulo`, `Rio de Janeiro`
);

// adiciona elementos no array
listaDestinos.push(`Curitiba`);

const idadeComprador = 15;
const estaAcompanhada = false;
const passagemComprada = true;
const destino = `Sergipe`;

const podeComprar = idadeComprador >= 18 || estaAcompanhada;

let contador = 0;
let destinoExiste = false;

while(contador < listaDestinos.length){
    if(listaDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    
    contador++;
}

if(destinoExiste)
    console.log(`Destino existe`);
else
    console.log(`Destino Não existe`);



