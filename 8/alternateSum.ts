function alternateSum(row) {
    let result = [0, 0]
    for (let index = 0; index < row.length; index++) {
        result[index % 2] += row[index]

    }
    return result
}

console.log(alternateSum([50, 60, 60, 45, 70]))
