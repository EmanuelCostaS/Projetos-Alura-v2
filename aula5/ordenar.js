const clientes = require("./clientes.json");

function ordenarLista(lista){
    lista.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      
      console.log(lista);
}

ordenarLista(clientes);