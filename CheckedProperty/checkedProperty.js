const subscriptionBtn = document.getElementById("subscriptionBtn");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const submitBtn = document.getElementById("submitBtn");
const subscriptionResult = document.getElementById("subscriptionResult");
const paymentResult = document.getElementById("paymentResult");

submitBtn.onclick = function(){
    if(subscriptionBtn.checked){
        subscriptionResult.textContent = `You have subscribed.`;

        if(visaBtn.checked){
            paymentResult.textContent = `Payment method is Visa.`;
        }
        else if(masterCardBtn.checked){
            paymentResult.textContent = `Payment method is Mastercard.`;
        }
        else{
            paymentResult.textContent = `Payment method is Paypal.`;
        }
    }
    else{
        subscriptionResult.textContent = `You have not subscribed.`;
    }
}