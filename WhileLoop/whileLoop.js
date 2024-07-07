let loggedIn = false;
let userName;
let passWord;

while(!loggedIn){
    userName = window.prompt("Enter Username:");
    passWord = window.prompt("Enter Password:");

    if((userName === "myUserName") && (passWord === "myPassWord")){
        loggedIn = true;
        console.log("You are logged in.");
    }
    else {
        console.log("Invalid Username or Password");
    }
}