function add(digit: any): any {
    return digit.split("").reduce((prev: string, current: string): number => parseInt(prev) + parseInt(current))
}

console.log(add("155"))