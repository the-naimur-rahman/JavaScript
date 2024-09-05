let numbers = [1, 2, 3, 4, 5];

// Map
let squares = numbers.map((element) => {
    return Math.pow(element, 2);
})

let cubes = numbers.map((element) => {
    return Math.pow(element, 3);
})

// Filter
let evenNum = numbers.filter((element) => {
    return element % 2 === 0;
})

let oddNum = numbers.filter((element) => {
    return element % 2 !== 0;
})

// Reduce
let total = numbers.reduce((accumulator, element) => {
    return accumulator + element;
})

let maxNum = numbers.reduce((accumulator, element) => {
    return Math.max(accumulator, element);
})

let minNum = numbers.reduce((accumulator, element) => {
    return Math.min(accumulator, element);
})

console.log(squares);
console.log(cubes);

console.log(evenNum);
console.log(oddNum);

console.log(total);
console.log(maxNum);
console.log(minNum);