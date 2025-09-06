const resultEl = document.getElementById("result");
const historyEl = document.getElementById("history");
let expression = "";

document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click",() => {
     const value = btn.textContent;

     if (value === "c") {
        expression = "";
        resultEl.textContent = "0";
     } else if (value === "=") {
        try {
            const evalResult = eval(expression.replace("x","*").replace("÷", "/"));
            historyEl.textContent = expression;
            resultEl.textContent = evalResult;
            expression = evalResult.toString();
        } catch {
            resultEl.textContent = "Error"; 
        }
     } else {
        expression += value;
        resultEl.textContent = expression;
     }
 });
});