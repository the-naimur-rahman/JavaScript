let name = "Naimur Rahman";

let nameCharAt = name.charAt(0);
let nameIndexOf = name.indexOf('N');
let nameLength = name.length;
let nameUpper = name.toUpperCase();
let nameLower = name.toLowerCase();
let nameReplace = name.replace("N", "T");
let nameStartsWith = name.startsWith(" ");
let nameEndsWith = name.endsWith(" ");
let nameIncludes = name.includes(" ");

console.log(nameCharAt);
console.log(nameIndexOf);
console.log(nameLength);
console.log(nameUpper);
console.log(nameLower);
console.log(nameReplace);

if(nameStartsWith){
    console.log(`You can't start a name with empty space.`);
}
else{
    console.log(name);
}

if(nameEndsWith){
    console.log(`You can't end a name with empty space.`);
}
else{
    console.log(name);
}

if(nameIncludes){
    console.log(`You include empty space in your name.`);
}
else{
    console.log(name);
}