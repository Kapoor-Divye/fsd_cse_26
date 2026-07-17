const a = [1, 2, 3, 4, 5];
const arr = a.filter(x => x % 2 === 0);
console.log(arr);

const squareArr = arr.map(x => x * x);
console.log(squareArr);

const sum = squareArr.reduce((acc, curr) => acc + curr, 0);
console.log(sum);