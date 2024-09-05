const person1 = {
    firstName: "Naimur",
    lastName: "Rahman",
    age: 25,
    isEmployed: false,
    sayHello: function(){console.log("Hello, I'm Naimur.")},
    eat: function(){console.log("I'm eating rice and beef.")}
}

const person2 = {
    firstName: "Khadiza",
    lastName: "Tahira",
    age: 18,
    isEmployed: false,
    sayHello: () => {console.log("Hello, I'm Khadiza.")},
    eat: () => {console.log("I'm eating rice and chicken")}
}

console.log(person1);
console.log(person2);

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();
person1.eat();

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();
person2.eat();