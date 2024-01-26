const book = require('./books');

function insertionSort(lista){
    for (let current = 0; current < lista.length; current++){
        let aux = current;
        while (aux > 0 && lista[aux].price < lista[aux - 1].price){
            let itemAnalise = lista[aux];
            let previous = lista[aux - 1];

            lista[aux] = previous;
            lista[aux - 1] = itemAnalise;

            aux--
        }
    }
    console.log(lista)
}

insertionSort(book);


