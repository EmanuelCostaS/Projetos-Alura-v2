// Find the lowest number in a list

function lowestValue(array, inicialPosition){
    let cheapest = inicialPosition;
    for (let current = inicialPosition; current < array.length; current++){
        if (array[current].price < array[cheapest].price){
            cheapest = current;          
        }    
    }
    return cheapest; 
}

module.exports = lowestValue;