// function passwordGenerator(passwordLength, includeLowercase, includeUppercase, includeNumber, includeSymbol) {
//     const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
//     const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const numberChars = "0123456789";
//     const symbolChars = "!@#$%^&*()_+";

//     let allowedChars = "";
//     let password = "";

//     allowedChars += includeLowercase ? lowercaseChars : "";
//     allowedChars += includeUppercase ? uppercaseChars : "";
//     allowedChars += includeNumber ? numberChars : "";
//     allowedChars += includeSymbol ? symbolChars : "";

//     for(let i = 0; i < passwordLength; i++) {
//         const randomChar = Math.floor(Math.random() * allowedChars.length);
//         password += allowedChars[randomChar];
//     }

//     return password;

// }

// const passwordLength = 15;
// const includeLowercase = true;
// const includeUppercase = true;
// const includeNumber = true;
// const includeSymbol = true;

// const password = passwordGenerator(passwordLength, includeLowercase, includeUppercase, includeNumber, includeSymbol);

// console.log(`Generated Password: ${password}`);