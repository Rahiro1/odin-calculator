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
const btnBackspace = document.querySelector(".backspace-button")

btnNumButtonsList.forEach(function (currentValue, currentIndex, listObj){
    currentValue.addEventListener("click", function(e) {clickNumberButton(e)})
});

btnFuncButtonsList.forEach(function (currentValue, currentIndex, listObj){
    currentValue.addEventListener("click", function(e) {clickFunctionButton(e)})
});

btnEquals.addEventListener("click", function() {clickEqualsButton()});
btnClearAll.addEventListener("click", function() {clickClearAllButton()});
btnBackspace.addEventListener("click", function() {clickBackspaceButton()})



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

function clickBackspaceButton(){
    let activeNumberString = pDisplay.textContent;
    activeNumberString = activeNumberString.slice(0,activeNumberString.length-1);
    pDisplay.textContent = activeNumberString;
    activeNumber = Number(activeNumberString);
}

function operate(numOne, numTwo, operator){
    let result;
    switch(operator) {
    case "+":
        result = add(numOne,numTwo);
        break;
    case "-":
        result = subtract(numOne,numTwo);
        break;
        case "*":
            result = multiply(numOne,numTwo);
            break;
        case "/":
            result = divide(numOne,numTwo);
            break;
    default:
        return activeNumber;
    }

    if(Math.round(result*1000) == result*1000){
        return result;
    } else{
        return Math.round(result*1000)/1000;
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