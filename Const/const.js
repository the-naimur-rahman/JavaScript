const PI = 3.14159;
let radius;
let circumference;

document.getElementById("submit").onclick = function() {
    radius = document.getElementById("radius").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;

    document.getElementById("circumference").textContent = "Circumference: " + circumference + "cm";

    console.log("Circumference: " + circumference);
}