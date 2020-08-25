
let value1 = "";
let value2 = "";
let operator = "";
let postEqual = false; //1 is entering first value, 2 is entering second value.

const numberButtons = document.querySelectorAll(".number");
const display = document.getElementById("screen");
const operatorButtons = document.querySelectorAll(".operation")
const equalButton = document.querySelector("#equals");
const clearButton = document.querySelector("#clear");


//returns an operation
function operate(operator, value1, value2) {
    if (value1 == "") {
        return value2;    }
    a = parseFloat(value1);
    b = parseFloat(value2);

    if (operator == "divide") { //divide
        return a / b;    }
    else if (operator == "multiply") { //times
        return a * b;    }
    else if (operator == "minus") { //minus
        return a - b;    }
    else if (operator == "plus") { //plus
        return a + b;    }
}

//concatenate onto display
function modifyDisp(tail) {
    display.innerHTML = display.innerHTML.concat(tail);
}

//set display content
function setDisp(content) {
    display.innerHTML = content;
}

function clear(){
    value1 = "";
    value2 = "";
    operator = "";
    setDisp("");
}
//Buttons//


//clear button
clearButton.onclick = clear;

//equal button
equalButton.addEventListener('click', () => {
    value2 = operate(operator, value1, value2);
    operator = "";
    value1="";
    setDisp(value2);
    postEqual = true;
})

//number keys
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if(postEqual){
            clear();
        }
        setDisp(value2);
        modifyDisp(button.id);
        value2 = value2.concat(button.id);
    });
});

//operator keys
operatorButtons.forEach((button) => {
  
    button.addEventListener('click', () => {
        postEqual = false;
        value1 = operate(operator, value1, value2);
        operator = button.id;
        setDisp(value1);
        value2 = "";
    });
});

