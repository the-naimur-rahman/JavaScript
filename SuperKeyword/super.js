class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`${this.name} is moving at ${speed}mph`);
    }
}

class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`${this.name} can run.`);
        super.move(this.runSpeed);
    }
}

class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim(){
        console.log(`${this.name} can swim.`);
        super.move(this.swimSpeed);
    }
}

class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }

    fly(){
        console.log(`${this.name} can fly.`);
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit("Rabbit", 1, 10);
const fish = new Fish("Fish", 2, 20);
const hawk = new Hawk("Hawk", 3, 40);

rabbit.run();
fish.swim();
hawk.fly();