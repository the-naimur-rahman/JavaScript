function upperCase(element){
    return element.toUpperCase();
}

function lowerCase(element){
    return element.toLowerCase();
}

function upperFirstChar(element){
    return element.charAt(0).toUpperCase() + element.slice(1);
}

let fullName = ["abir", "badal", "candan"];

let upperFullName = fullName.map(upperCase);
let lowerFullName = fullName.map(lowerCase);
let upperFirstFullName = fullName.map(upperFirstChar);

console.log(upperFullName);
console.log(lowerFullName);
console.log(upperFirstFullName);