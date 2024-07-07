const myInput = document.getElementById("myInput");
const mySubmit = document.getElementById("mySubmit");
const myAge = document.getElementById("myAge");
let age;

mySubmit.onclick = function(){
    age = myInput.value;
    age = Number(age);

    if(age >= 100){
        myAge.textContent = `You are too old to enter this site.`;
    }
    else if(age >= 18){
        myAge.textContent = `You can enter this site.`;
    }
    else if(age <= 0){
        myAge.textContent = `Enter a valid age.`;
    }
    else{
        myAge.textContent = `You can't enter this site.`;
    }
}