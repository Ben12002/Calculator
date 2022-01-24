const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const screen = document.querySelector(".screen");
const operators = ["+", "-", "*", "/"];
const maxDisplayDigits = 8;

let displayValue = 0;
let a = ""; // currently stored 1st operand
let b = "";  // currently stored 2nd operand
let op = "";  // currently stored operator

function add(a,b){
    let num = a + b;
    if (isInt(num)) num = num.toFixed(maxDisplayDigits);
    return num;
}

function subtract(a,b){
    let num = a - b;
    if (isInt(num)) num = num.toFixed(maxDisplayDigits);
    return num;
}

function multiply(a,b){
    let num = a * b;
    if (isInt(num)) num = num.toFixed(maxDisplayDigits);
    return num;
}

function divide(a,b){
    if (b === 0){
        alert("do not divide by 0 :)")
        return;
    }
    let num = a / b;
    if (isInt(num)) num = num.toFixed(maxDisplayDigits);
    return num; 
}

function roundResult(number) {
    return Math.round(number * 1000000) / 1000000;
  }

function operate(operator, a, b){ // operator, a, b are strings
    //operator = operator.trim();
    a = parseInt(a);
    b = parseInt(b);
    let result;
    if (operator === "+") {
        return add(a,b);
    } else if (operator === "-"){
        result = subtract(a,b);
    } else if (operator === "*"){
        result = multiply(a,b);
    } else if (operator === "/"){
        result = divide(a,b);
    } else{
        result = "INVALID INPUT";
    }
    return roundResult(result);
}

function restartCalculator(){
    screen.textContent = "0";
    a = "";
    b = "";
    op = "";
}

function isInt(n) {
    n = parseInt(n);
    return n % 1 === 0;
 }


screen.textContent = displayValue;

// Add actions to number buttons
numberButtons.forEach( (numberButton) => {
    numberButton.addEventListener('click', function(e){
        
        if ((screen.textContent.length >= maxDisplayDigits) && (op === "")) return;

        else if (op === ""){
            a += e.target.textContent;
            screen.textContent = a;
        } else {
            b += e.target.textContent;
            screen.textContent = b;
            
        }
    });
});

// Add actions to operator buttons
operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', function(e){
        if (a === ""){
            return;
        } else if (a != "" && op != ""&&  b != ""){
            op = e.target.textContent;
            screen.textContent = operate(op, a, b);
            a = screen.textContent;
            b = "";
            
        } else{
            op = e.target.textContent;

        }
    });
})

// Add action to equals button
document.querySelector(".equals-button").addEventListener('click', function(e){
    if (a === "" || b === "" || op === ""){
        restartCalculator();
        return;
    }

    screen.textContent = operate(op,a,b);
    a = screen.textContent;
    b = "";
    let opclass = "";
    
    if (op === "+"){
        opclass = "plus-button"
    } else if (op === "-"){
        opclass = "minus-button";
    } else if (op === "*"){
        opclass = "multiply-button";
    } else if (op === "/"){
        opclass = "divide-button";
    }
    op = "";
    
});

// Add action to AC button
document.querySelector(".clear-button").addEventListener("click", function(e){
    screen.textContent = "0";
    a = "";
    b = "";
    op = "";
});






