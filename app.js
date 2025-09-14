/**
 * Calculator App Logic
 * Handles user input (buttons & keyboard), expression evaluation,
 * display updates, and theme toggling.
 */


const resultEl = document.getElementById("result");
const historyEl = document.getElementById("history");
const themeToggle = document.querySelector(".theme-toggle")


let expression = ""; // Stores the current math expression

// ── Button Clicks
// Attach click listeners to every calculator button.
document.querySelectorAll(".buttons button").forEach(btn => {
    btn.addEventListener("click",() => handleInput(btn.textContent));
});

// ── Keyboard Input 
// Allow keyboard keys to trigger calculator actions.
   window.addEventListener("keydown", e => {
    const keyMap = {
        "/": "÷",
        "*": "x",
        "enter": "=",
        "esacpe": "c"
    };
    // Map special keys to calculator symbols, otherwise use the key as is.
    let key = keyMap[e.key] || e.key;
    if (/^[0-9.+\-x÷=c]$/.test(key)) {
        handleInput(key);
    }
   });

/**
 * Handles all calculator input (digits, operators, equals, clear).
 * @param {string} value - The key/button pressed.
 */
    function handleInput(value) {
     if (value === "c") {
         // Reset the calculator
        expression = "";
        resultEl.textContent = "0";
     } else if (value === "=") {
        // Evaluate the expression safely
        try {
            const evalResult = eval(expression.replace("x","*").replace("÷", "/"));
            historyEl.textContent = expression;
            resultEl.textContent = evalResult;
            expression = evalResult.toString();
        } catch {
            resultEl.textContent = "Error"; 
        }
     } else {
         // Append numbers/operators to the expression
        if (value === "." && /\.\d*$/.test(expression)) return; // prevent double decimals
        expression += value;
        resultEl.textContent = expression;
     }
 }

        // ── Theme Toggle 
        // Switch between dark and light themes.
        themeToggle.addEventListener("click", () => {
          document.body.classList.toggle("light");

          if (document.body.classList.contains("lights")) {
              themetoggle.textContent = "🌙";
          } else {
           themeToggle.textContent =  "☀️";
          }
          // Update toggle icon based on current theme.
          themeToggle.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
        });