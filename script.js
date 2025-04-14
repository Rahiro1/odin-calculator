let firstNumber = 0;
let secondNumber = 0;
let operatorToUse = "";
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

btnEquals.addEventListener("click", function(e) {clickEqualsButton(e)})
btnClearAll.addEventListener("click", function() {clickClearAllButton()})

function clickNumberButton(e){
    let button = e.target;

    if(pDisplay.textContent === operatorToUse){
        pDisplay.textContent = "";
    }
    
    pDisplay.textContent += button.textContent;
    secondNumber = Number(pDisplay.textContent);
}

function clickFunctionButton(e){
    let button = e.target;
    let buttonText = button.textContent;
    let displayText = pDisplay.textContent;

    firstNumber = secondNumber

    operatorToUse = buttonText;
    pDisplay.textContent = buttonText;

}

function clickEqualsButton(e){
    let button = e.target;
    let displayText = pDisplay.textContent;

    let result = operate(firstNumber,secondNumber,operatorToUse);
    if(result == null){
        pDisplay.textContent = "Nice try";
    } else{
        pDisplay.textContent = result;
        firstNumber = Number(pDisplay.textContent);
    }
}

function clickClearAllButton(){
    firstNumber = "";
    secondNumber = "";
    operatorToUse = "";
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
        return 0;
    }
}

function add(numOne, numTwo){
    return numOne + numTwo;
}

function subtract(numOne, numTwo){
    return numOne - numTwo;
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