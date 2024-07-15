function sum(accumulator, element){
    return accumulator + element;
}

function maxNum(accumulator, element){
    return Math.max(accumulator, element);
}

function minNum(accumulator, element){
    return Math.min(accumulator, element);
}

let numbers = [10, 20, 30, 40, 50];

let total = numbers.reduce(sum).toFixed(2);
let maximum = numbers.reduce(maxNum);
let minimum = numbers.reduce(minNum);

console.log(`Total: ${total}`);
console.log(`Maximum: ${maximum}`);
console.log(`Minimum: ${minimum}`);