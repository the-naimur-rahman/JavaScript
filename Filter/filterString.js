function shortWord(element){
    return element.length <= 6;
}

function longWord(element){
    return element.length > 6;
}

let words = ["apple", "banana", "cucumber", "dragon"]

let shortWords = words.filter(shortWord);
let longWords = words.filter(longWord);

console.log(shortWords);
console.log(longWords);