// Logical Operator
//      AND = &&
//      OR = ||
//      NOT = !

let age = 20;
let message;

if((age >= 0) && (age < 4)){
    message = "You are a baby";
}
else if((age >= 4) && (age < 8)){
    message = "You are a child";
}
else if((age >= 8) && (age < 16)){
    message = "You are a tenager";
}
else if((age >= 16) && (age < 48)){
    message = "You are an adult";
}
else if((age >= 48) && (age < 64)){
    message = "You are an old man";
}
else if(age >= 64){
    message = "You can die";
}
else{
    message = "Please enter a valid age";
}

console.log(message);