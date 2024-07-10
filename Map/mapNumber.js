function square(element){
    return Math.pow(element, 2);
}

function cube(element){
    return Math.pow(element, 3);
}

let numbers = [1, 2, 3, 4, 5];

let squares = numbers.map(square);
let cubes = numbers.map(cube);

console.log(squares);
console.log(cubes);