// function sumRest(...a) {
//     return a.reduce((acc, curr) => acc + curr, 0)
// }

// console.log(sumRest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

function sumRest(...a) {
    let sum = 0
    for (let i = 0; i < a.length; i++) {
        sum += a[i]
    }
    return sum
}

console.log(sumRest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))