const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function() {

    if (myCheckbox.checked){
        subResult.textContent = `You are subcribed!`;
    }
    else{
        subResult.textContent = `You are NOT subcribed!`;
    }
    if (visaBtn.checked){
        paymentResult.textContent = `You are paying with Visa`
    }
    else if (masterCardBtn.checked){
        paymentResult.textContent = `You are paying with MasterCard`
    }
    else if (payPalBtn.checked){
        paymentResult.textContent = `You are paying with PayPal`
    }
    else{
        paymentResult.textContent = `You must select a payment method`
    }
}