// // No Method Chaining
// let userName = window.prompt("Enter Your Username: ");

// userName = userName.trim();

// let firstLetter = userName.charAt(0);
// firstLetter = firstLetter.toUpperCase();

// let otherLetter = userName.slice(1);
// otherLetter = otherLetter.toLowerCase();

// userName = firstLetter + otherLetter;

// console.log(userName);


// Method Chaining
let userName = window.prompt("Enter Your Username:");

userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();

console.log(userName);