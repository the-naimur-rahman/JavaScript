class User{
    static userCount = 0;

    constructor(userName){
        this.userName = userName;
        User.userCount++;
    }

    sayHello(){
        console.log(`I'm ${this.userName}.`);
    }

    static getUserCount(){
        console.log(`Total user is ${User.userCount}`);
    }
}

const user1 = new User("Naimur");
const user2 = new User("Khadiza");

console.log(user1.userName);
user1.sayHello();

console.log(user2.userName);
user2.sayHello();

User.getUserCount();