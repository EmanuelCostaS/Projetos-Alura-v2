const {edFolha, edGalho} = require('./arrays');


function mixLists(lista1, lista2){
    let listaFinal = [];
    let atualLista1 = 0;
    let atualLista2 = 0;
    
    while (atualLista1 < lista1.length && atualLista2 < lista2.length){
        let produtoAtualLista1 = lista1[atualLista1];
        let produtoAtualLista2 = lista2[atualLista2];

        if (produtoAtualLista1.preco <= produtoAtualLista2.preco){ 
            listaFinal.push(produtoAtualLista1);
            atualLista1++;

        } else {
            listaFinal.push(produtoAtualLista2);
            atualLista2++;

        }
    }

    if (atualLista1 === lista1.length && !(atualLista2 === lista2.length)){
        for (let i = atualLista2; i <= lista2.length; i++){
            listaFinal.push(lista2[i]);
        }
    } else if (atualLista2 === lista2.length && !(atualLista1 === lista1.length)){
        for (let j = atualLista1; j <= lista1.length; j++){
            listaFinal.push(lista1[j]);}
        }

    console.log(listaFinal);
    return listaFinal
}

mixLists(edGalho, edFolha);