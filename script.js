let add = (a, b) => {return a+b};
let subtract = (a, b) => {return a-b};
let multiply = (a, b) => {return a*b};
let divide = (a, b) => {return a/b};

let value1;
let value2;
let operator;

let operate = (value1, value2, operator) => {
    switch (operator){
        case "+":
            add(value1, value2);
            break;
        case "-":
            subtract(value1, value2);
            break;
        case "*":
            multiply(value1, value2);
            break;
        case "/":
            divide(value1, value2);
            break;
        default:
            console.log("error with operator function");
            break;
    }
}

let buttons = document.getElementsByClassName("display-value");
for (let i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", e => {document.getElementById("bottom-screen").textContent += e.target.id});
}