
let value1 = "";
let value2 = "";
let operator = "";
let postEqual = false; //1 is entering first value, 2 is entering second value.

const numberButtons = document.querySelectorAll(".number");
const display = document.getElementById("screen");
const operatorButtons = document.querySelectorAll(".operation")
const equalButton = document.querySelector("#equals");
const clearButton = document.querySelector("#clear");
const decimalButton = document.querySelector('#decimal');
const deleteButton = document.getElementById('delete');


//returns an operation
function operate(operator, value1, value2) {
    if (value1 == "") { return value2; }
    a = parseFloat(value1);
    b = parseFloat(value2);
    if (operator == "divide") { //divide
        return a / b;
    }
    else if (operator == "multiply") { //times
        return a * b;
    }
    else if (operator == "minus") { //minus
        return a - b;
    }
    else if (operator == "plus") { //plus
        return a + b;
    }
}

//concatenate onto display
function modifyDisp(tail) {
    display.innerHTML = display.innerHTML.concat(tail);
}
//set display content
function setDisp(content) {
    display.innerHTML = content;
}
function clear() {
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
    value1 = "";
    setDisp(value2);
    postEqual = true;
    status();
})
//number keys
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (postEqual) {
            clear();
            postEqual = false;
        }
        //modifyDisp(button.id);
        value2 = value2.concat(button.id);
        setDisp(value2);
        status();
    });
});
//operator keys
operatorButtons.forEach((button) => {

    button.addEventListener('click', () => {
        if (value2 != "") {
            postEqual = false;
            value1 = operate(operator, value1, value2);
            operator = button.id;
            setDisp(value1);
            value2 = "";
            status();
        }
    });
});
decimalButton.addEventListener('click', () => {
    if (!value2.includes('.') && value2.length > 0) {
        value2 = value2 + '.';
        setDisp(value2);
    }
});

deleteButton.addEventListener('click', () => {
    if (value2.length > 0) {
        value2 = value2.substr(0, value2.length - 1);
        setDisp(value2);
    }
});
function status() {
    console.log("postEqual: " + postEqual);
    console.log("value1: " + value1);
    console.log("value2: " + value2);
    console.log("operator: " + operator);
}