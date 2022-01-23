const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const screen = document.querySelector(".screen");
const operators = ["+", "-", "*", "/"];

let displayValue = 0;
let a = ""; // currently stored 1st operand
let b = "";  // currently stored 2nd operand
let op = "";  // currently stored operator

function add(a,b){
    a = parseInt(a);
    b = parseInt(b);
    // let num = a + b;
    return a + b;
}

function subtract(a,b){
    a = parseInt(a);
    b = parseInt(b);
    // let num = a - b;
    return a - b;
}

function multiply(a,b){
    a = parseInt(a);
    b = parseInt(b);
    // let num = a * b;
    return a * b;
}

function divide(a,b){
    a = parseInt(a);
    b = parseInt(b);
    if (b === 0){
        alert("do not divide by 0 :)")
        return;
    } 
    return (a/b).toFixed(6);
}

function operate(operator, a, b){ // operator, a, b are strings
    //operator = operator.trim();
    if (operator === "+") {
        return add(a,b);
    } else if (operator === "-"){
        return subtract(a,b);
    } else if (operator === "*"){
        return multiply(a,b);
    } else if (operator === "/"){
        return divide(a,b);
    } else{
        return "INVALID INPUT";
    }
}

function restartCalculator(){
    screen.textContent = "0";
    a = "";
    b = "";
    op = "";
    
    
}


screen.textContent = displayValue;


// Add actions to number buttons
numberButtons.forEach( (numberButton) => {
    numberButton.addEventListener('click', function(e){

        if (op === ""){
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






