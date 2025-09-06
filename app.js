const resultEl = document.getElementById("result");
const historyEl = document.getElementById("history");
const themeToggle = document.querySelector(".theme-toggle")
let expression = "";
//For button clicks
document.querySelectorAll(".buttons button").forEach(btn => {
    btn.addEventListener("click",() => handleInput(btn.textContent));
});
   window.addEventListener("keydown", e => {
    const keyMap = {
        "/": "÷",
        "*": "x",
        "enter": "=",
        "esacpe": "c"
    };
    let key = keyMap[e.key] || e.key;
    if (/^[0-9.+\-x÷=c]$/.test(key)) {
        handleInput(key);
    }
   });

    function handleInput(value) {
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
        if (value === "." && /\.\d*$/.test(expression)) return;
        expression += value;
        resultEl.textContent = expression;
     }
 }

        themeToggle.addEventListener("click", () => {
          document.body.classList.toggle("light");

          if (document.body.classList.contains("lights")) {
              themetoggle.textContent = "🌙";
          } else {
           themeToggle.textContent =  "☀️";
          }
          themeToggle.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
        });