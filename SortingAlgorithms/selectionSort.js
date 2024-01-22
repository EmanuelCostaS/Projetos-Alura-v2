const books = require('./books');
const lowestValue = require('./Searching');

const sorted = [];
const tamanho = books.length

for (let current = 0; current < tamanho; current++){
    let menor = lowestValue(books, 0);
    sorted.push(books[menor]);
    books.splice(menor, 1);
}

console.log(sorted);