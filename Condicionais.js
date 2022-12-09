console.log(`Trabalhando com listas`);

const listaDestinos = new Array(
    `Salvador`, `São Paulo`, `Rio de Janeiro`
);
const idadeComprador = 15;
const estaAcompanhada = false;
const passagemComprada = true;

// adiciona elementos no array
listaDestinos.push(`Curitiba`);

console.log(listaDestinos);

if (idadeComprador >= 18 || estaAcompanhada) {
    console.log(`Boa viagem!`);
    // removendo item do array
    listaDestinos.splice(1, 1);

    console.log(`Olá passageiro hora de embarcar!`);

    if ((idadeComprador >= 18 || estaAcompanhada) && passagemComprada){     
        console.log(`Boa viagem!`);
    } else {
        console.log(`Você não pode embarcar, pois é menor de idade e precisa estar acompanhado!`);
    }

} else {
    console.log(`Comprador menor de idade não pode comprar!`);
}

console.log(listaDestinos);
