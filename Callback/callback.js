function sum(callAdd, callSub, callMul, callDiv, x, y){
    let add = x + y;
    let sub = x - y;
    let mul = x * y;
    let div = x / y;

    callAdd(add);
    callSub(sub);
    callMul(mul);
    callDiv(div);
}

function showAddFunction(add){
    let showAdd = document.getElementById("showAdd");
    showAdd.textContent = "Addition: " + add;
    console.log("Addition: " + add);
}

function showSubFunction(sub){
    let showSub = document.getElementById("showSub");
    showSub.textContent = "Subtraction: " + sub;
    console.log("Subtraction: " + sub);
}

function showMulFunction(mul){
    let showMul = document.getElementById("showMul");
    showMul.textContent = "Multiplication: " + mul;
    console.log("Multiplication: " + mul);
}

function showDivFunction(div){
    let showDiv = document.getElementById("showDiv");
    showDiv.textContent = "Division: " + div;
    console.log("Division: " + div);
}

sum(showAddFunction, showSubFunction, showMulFunction, showDivFunction, 5, 10);