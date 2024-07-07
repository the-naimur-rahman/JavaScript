let fullName = "Naimur Rahman";

let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(fullName);
console.log(firstName);
console.log(lastName);

let email = "naimurrahman@gmail.com";

let userName = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@"));

console.log(email);
console.log(userName);
console.log(extension);