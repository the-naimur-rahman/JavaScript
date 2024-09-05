const person1 = {
    name: "Naimur",
    favFood: "Rice & Beef",
    sayName: function(){console.log(`Hello, my name is ${this.name}.`)},
    sayFavFood: function(){console.log(`I'm eating ${this.favFood}.`)}
}

const person2 = {
    name: "Khadiza",
    favFood: "Rice & Chicken",
    sayName: function(){console.log(`Hello, I'm ${this.name}.`)},
    sayFavFood: function(){console.log(`I'm eating ${this.favFood}.`)}
}

console.log(person1);
console.log(person2);

console.log(person1.name);
console.log(person1.favFood);
person1.sayName();
person1.sayFavFood();

console.log(person2.name);
console.log(person2.favFood);
person2.sayName();
person2.sayFavFood();