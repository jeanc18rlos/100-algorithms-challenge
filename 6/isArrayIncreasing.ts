function isArrayAlmostIncreasing(items) {

    let result = true
    let count = 0

    for (let index = 0; index < items.length - 1; index++) {
        if (items[index] > items[index + 1] && count === 0) {
            count++
        } else if (count > 0) {
            result = false
            break;
        }
    }
    return result
}

console.log(isArrayAlmostIncreasing([
    1, 2, 3, 2
]))