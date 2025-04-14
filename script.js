let firstNumber = 0;
let operatorToUse = "";
const pDisplay = document.querySelector(".display-p")
const btnNumButtonsList = document.querySelectorAll(".number-button");
const btnFuncButtonsList = document.querySelectorAll(".function-button");
const btnEquals = document.querySelector(".equals-button");

btnNumButtonsList.forEach(function (currentValue, currentIndex, listObj){
    currentValue.addEventListener("click", function(e) {clickNumberButton(e)})
});

btnFuncButtonsList.forEach(function (currentValue, currentIndex, listObj){
    currentValue.addEventListener("click", function(e) {clickFunctionButton(e)})
});

btnEquals.addEventListener("click", function(e) {clickEqualsButton(e)})

function clickNumberButton(e){
    let button = e.target;

    if(pDisplay.textContent === operatorToUse){
        pDisplay.textContent = "";
    }

    pDisplay.textContent += button.textContent;
}

function clickFunctionButton(e){
    let button = e.target;
    let buttonText = button.textContent;
    let displayText = pDisplay.textContent;
    if(!isNaN(displayText)){
        firstNumber = Number(displayText);
    }

    operatorToUse = buttonText;
    pDisplay.textContent = buttonText;

}

function clickEqualsButton(e){
    let button = e.target;
    let displayText = pDisplay.textContent;

    if(!isNaN(displayText)){
        let secondNumber = Number(displayText);
        pDisplay.textContent = operate(firstNumber,secondNumber,operatorToUse);
        firstNumber = secondNumber;
    }
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