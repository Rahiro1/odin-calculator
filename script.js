let storedNumber = 0;
let activeNumber = 0;
let operatorToUse = "";
let previousNumber ="";
let previousOperator = "";
let isDisplayResetOnNextNumber = false;
const pDisplay = document.querySelector(".display-p")
const btnNumButtonsList = document.querySelectorAll(".number-button");
const btnFuncButtonsList = document.querySelectorAll(".function-button");
const btnEquals = document.querySelector(".equals-button");
const btnClearAll = document.querySelector(".clear-all-button");

btnNumButtonsList.forEach(function (currentValue, currentIndex, listObj){
    currentValue.addEventListener("click", function(e) {clickNumberButton(e)})
});

btnFuncButtonsList.forEach(function (currentValue, currentIndex, listObj){
    currentValue.addEventListener("click", function(e) {clickFunctionButton(e)})
});

btnEquals.addEventListener("click", function() {clickEqualsButton()})
btnClearAll.addEventListener("click", function() {clickClearAllButton()})



function clickNumberButton(e){
    let button = e.target;

    if(isDisplayResetOnNextNumber){
        pDisplay.textContent = "";
        isDisplayResetOnNextNumber = false;
    }
    
    pDisplay.textContent += button.textContent;
    activeNumber = Number(pDisplay.textContent);
    logAll(button.textContent + " pressed");
}

function clickFunctionButton(e){
    let button = e.target;
    let buttonText = button.textContent;
    let displayText = pDisplay.textContent;

    logAll(button.textContent + " pressed state before");
    if(activeNumber === ""){
        operatorToUse = buttonText;
        previousOperator = buttonText;
        return;
    }

    let result = operate(storedNumber, activeNumber,operatorToUse);
    if(result == null){
        pDisplay.textContent = "Nice try";
    } else{
        pDisplay.textContent = result;
        storedNumber = result;
        activeNumber = "";
    }
 
    operatorToUse = buttonText;
    previousOperator = buttonText;
    isDisplayResetOnNextNumber = true;
    logAll(button.textContent + " pressed state after");
}

function clickEqualsButton(){
    let button = btnEquals;
    let displayText = pDisplay.textContent;
    let result;

    logAll(button.textContent + " pressed state before");

    if(operatorToUse === ""){
        result = operate(storedNumber,previousNumber,previousOperator);
    } else {
        result = operate(storedNumber,activeNumber,operatorToUse);
        previousNumber = activeNumber;
    }
    operatorToUse = "";
    if(result == null){
        pDisplay.textContent = "Nice try";
    } else{
        pDisplay.textContent = result;
        storedNumber = result;
        activeNumber = "";
    }
    isDisplayResetOnNextNumber = true;
    logAll(button.textContent + " pressed state after");
}

function clickClearAllButton(){
    storedNumber = "";
    activeNumber = "";
    operatorToUse = "";
    previousOperator = "";
    pDisplay.textContent = "";
}

function operate(numOne, numTwo, operator){
    switch(operator) {
    case "+":
        return add(numOne,numTwo);
    case "-":
        return subtract(numOne,numTwo);
        case "*":
            return multiply(numOne,numTwo);
        case "/":
            return divide(numOne,numTwo);
    default:
        return activeNumber;
    }
}

function add(numOne, numTwo){
    return Number(numOne) + Number(numTwo);
}

function subtract(numOne, numTwo){
    return Number(numOne) - Number(numTwo);
}

function multiply(numOne, numTwo){
    return numOne * numTwo;
}

function divide(numOne, numTwo){
    if(numTwo == 0){
        return null;
    }
    return numOne / numTwo;
}

function logAll(message){
    console.log(message);
    console.log("Active: " + activeNumber);
    console.log("Stored: " + storedNumber);
    console.log("Operation: " + operatorToUse);
    console.log("Previous: " + previousNumber);
    console.log("Reset display? : " + isDisplayResetOnNextNumber);
}