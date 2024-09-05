class Animal{
    eat(){
        console.log(`${this.name} is eating.`);
    }

    sleep(){
        console.log(`${this.name} is sleeping.`);
    }
}

class Rabbit extends Animal{
    name = "Rabbit";

    run(){
        console.log(`${this.name} is running.`);
    }
}

class Fish extends Animal{
    name = "Fish";

    swim(){
        console.log(`${this.name} is swimming.`);
    }
}

class Hawk extends Animal{
    name = "Hawk";

    fly(){
        console.log(`${this.name} if flying.`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

rabbit.eat();
rabbit.sleep();
rabbit.run();

fish.eat();
fish.sleep();
fish.swim();

hawk.eat();
hawk.sleep();
hawk.fly();