function returnAdjacent(items) {
    let product = 0
    for (let index = 0; index < items.length - 1; index++) {
        let combo = items[index] * items[index + 1]
        if (product < combo) product = combo

    }
    return product
}

console.log(returnAdjacent([
    7, 7, 3, 5, 6
]))