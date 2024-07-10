function display(element){
    console.log(element);
}

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function upperCaseFirstChar(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

let fruits = ["apple", "banana", "coconut"];

fruits.forEach(upperCaseFirstChar);
fruits.forEach(display);