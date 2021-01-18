function add(params: Array<number>): number {


    return params.reduce((prev, current) =>
        prev += current
    );



}

console.log(add([1, 2, 3, 4]))