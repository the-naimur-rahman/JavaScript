let isStudent = true;
let message = isStudent ? `You are a student.` : `You are not a student`;
console.log(message);

let age = 20;
let canVisit = age >= 18 ? `You can enter this site.` : `You cannot enter this site.`;
console.log(canVisit);

let purchase = 120;
let discount = purchase >= 100 ? 10 : 0;
console.log(`Your bill is $${purchase - purchase * (discount / 100)}`);