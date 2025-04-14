let firstNumber = 0;
let secondNumber = 0;
let operatorToUse = "";
const pDisplay = document.querySelector(".display-p")
const btnNumButtonsList = document.querySelectorAll(".number-button");

btnNumButtonsList.forEach(function (currentValue, currentIndex, listObj){
    currentValue.addEventListener("click", function(e) {clickNumberButton(e)})
});

function clickNumberButton(e){
    let button = e.target;

    if(pDisplay.textContent === operatorToUse){
        pDisplay.textContent = "";
    }

    pDisplay.textContent += button.textContent;
}



function operate(numOne, numTwo, operator){
    switch(operator) {
    case "+":
        return add(numOne,numTwo);
    case "-":
        return add(numOne,numTwo);
        break;
        case "*":
            return add(numOne,numTwo);
        break;
        case "/":
            return add(numOne,numTwo);
        break;
    default:
        return 0;
    }
}

function add(numOne, numTwo){
    return numOne + num2;
}

function subtract(numOne, numTwo){
    return numOne - num2;
}

function multiply(numOne, numTwo){
    return numOne * num2;
}

function divide(numOne, numTwo){
    if(numTwo == 0){
        return null;
    }
    return numOne / num2;
}