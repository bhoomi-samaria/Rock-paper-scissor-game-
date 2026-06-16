const amount = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");
const swap = document.getElementById("swap");

const apiKey = "https://api.exchangerate-api.com/v4/latest/";

convertBtn.addEventListener("click", async () => {

    const amountValue = amount.value;
    const from = fromCurrency.value;
    const to = toCurrency.value;

    if(amountValue <= 0){
        result.innerText = "Please enter valid amount";
        return;
    }

    try {

        const response = await fetch(`${apiKey}${from}`);
        const data = await response.json();

        const rate = data.rates[to];

        const convertedAmount = (amountValue * rate).toFixed(2);

        result.innerText = `${amountValue} ${from} = ${convertedAmount} ${to}`;

    } catch(error){
        result.innerText = "Something went wrong";
    }
});


swap.addEventListener("click", () => {

    let temp = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;

});