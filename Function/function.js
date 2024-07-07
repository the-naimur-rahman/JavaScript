function add(num1, num2){
    let addition = num1 + num2;
    return addition;
}

function sub(num1, num2){
    let subtraction = num1 - num2;
    return subtraction;
}

function mul(num1, num2){
    let multiplication = num1 * num2;
    return multiplication;
}

function div(num1, num2){
    let division = num1 / num2;
    return division;
}

function evenOdd(num){
    if(num % 2 == 0){
        let evenNum = `Number is Even`;
        return evenNum;
    }
    else{
        let oddNum = `Number is Odd`;
        return oddNum;
    }
}

function validInvalidEmail(email){
    if(email.includes("@")){
        let theValidEmail = `The email is valid`;
        return theValidEmail;
    }
    else{
        let theInvalidEmail = `The email is invalid.`;
        return theInvalidEmail;
    }
}

let addNum = add(5, 10);
console.log(addNum);

let subNum = sub(5, 10);
console.log(subNum);

let mulNum = mul(5, 10);
console.log(mulNum);

let divNum = div(5, 10);
console.log(divNum);

let evenOddNum = evenOdd(10);
console.log(evenOddNum);

let theEmail = validInvalidEmail("demodemo.com");
console.log(theEmail);