const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

let temperature;

function Convert(){
    if(toFahrenheit.checked){
        temperature = Number(textBox.value);
        temperature = (temperature * (9 / 5)) + 32;
        result.textContent = temperature.toFixed(1) + "°F";
    }
    else if(toCelsius){
        temperature = Number(textBox.value);
        temperature = (5 / 9) * (temperature - 32);
        result.textContent = temperature.toFixed(1) + "°C";
    }
    else{
        result.textContent = "Select An Unit";
    }
}