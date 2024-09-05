class Animals{
    static eat(){
        console.log(`${this.name} is eating.`);
    }

    static sleep(){
        console.log(`${this.name} is sleeping.`);
    }
}

class Rabbits extends Animals{
    name = "Rabbit";

    static run(){
        console.log(`${this.name} is running.`);
    }
}

class Fishes extends Animals{
    name = "Fish";

    static swim(){
        console.log(`${this.name} is swimming.`);
    }
}

class Hawks extends Animals{
    name = "Hawk";

    static fly(){
        console.log(`${this.name} is flying.`);
    }
}

Rabbits.eat();
Rabbits.sleep();
Rabbits.run();

Fishes.eat();
Fishes.sleep();
Fishes.swim();

Hawks.eat();
Hawks.sleep();
Hawks.fly();