// // Find Summation and Average of Numbers
// function getSum(...numbers){
//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }

//     return result;
// }

// function getAverage(...numbers){
//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }

//     result = result / numbers.length;

//     return result;
// }

// let sum = getSum(1, 2, 3, 4, 5);
// console.log(`Summation: ${sum}`);

// let average = getAverage(1, 2, 3, 4, 5);
// console.log(`Average: ${average}`);


// Combine Strings
function combineStrings(...strings){
    return strings.join(" ");
}

let fullName = combineStrings("Naimur", "Rahman", "Naim");
console.log(fullName);