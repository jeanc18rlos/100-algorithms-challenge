function returnLargestString(items) {
    let combo = [
        ""
    ]
    for (let index = 0; index < items.length; index++) {

        if (items[index].length > combo[0].length) combo = [items[index]]

        else if (items[index].length === combo[0].length) combo.push(items[index])

    }
    return combo
}

console.log(returnLargestString([
    "barriga", "adios", "barrigo"
]))