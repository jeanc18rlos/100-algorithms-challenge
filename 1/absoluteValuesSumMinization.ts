/*
    In this excercise you need to figure it out that the given function is returning the absolute value, so if you put negative values as result of the substraction, those ones will turn into positive ones returning a biggest sum, so, you need to find the nearest number to the center of the array(remember, this array is sorted, so you will find the most middle value at the very middle of the array), this is because whenever you use the Math.abs method, values near to the middle will return the less sum because the possibility of return a big negative its been cut by half
*/
const absoluteValuesSumMinimization = (a: number[]): number => {

    return a.length % 2 !== 0 ? a[(a.length - 1) / 2] : a[Math.floor(
        (a.length - 1) / 2
    )]
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));