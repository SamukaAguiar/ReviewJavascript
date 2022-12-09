console.log(`Trabalhando com listas`);

const listaDestinos = new Array(
    `Salvador`, `São Paulo`, `Rio de Janeiro`
);

// adiciona elementos no array
listaDestinos.push(`Curitiba`);

console.log(listaDestinos);

// removendo item do array
listaDestinos.splice(1, 1);

console.log(listaDestinos);

// Monstrando um unico elemento da lista
console.log(listaDestinos[1]);