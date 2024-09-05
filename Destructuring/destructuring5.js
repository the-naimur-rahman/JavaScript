person1 = {
    firstName: "Naimur",
    lastName: "Rahman",
    age: 25,
    job: "Part Time Teacher"
}

person2 = {
    firstName: "Khadiza",
    lastName: "Tahira",
    age: 18
}

function displayPerson({firstName, lastName, age, job="Unemployed"}){
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Age: ${age}`);
    console.log(`Job: ${job}`);
}

displayPerson(person1);
displayPerson(person2);