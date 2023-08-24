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

let operatorDisplay = (e) => {
    let topScreen = document.getElementById("top-screen");
    let bottomScreen = document.getElementById("bottom-screen");
    topScreen.textContent = bottomScreen.textContent + e.target.id;
    bottomScreen.textContent = "";
}

let operators = document.getElementsByClassName("operator");
for (let j=0; j<operators.length; j++){
    operators[j].addEventListener("click", function(e){
        let topScreen = document.getElementById("top-screen");
        let bottomScreen = document.getElementById("bottom-screen");
        topScreen.textContent = bottomScreen.textContent + e.target.id;
        bottomScreen.textContent = "";
    });
}

document.getElementById("clear").addEventListener("click", function(){
    document.getElementById("bottom-screen").textContent = ""
    document.getElementById("top-screen").textContent = ""});
document.getElementById("delete").addEventListener("click", () => {document.getElementById("bottom-screen").textContent = document.getElementById("bottom-screen").textContent.slice(0, -1)});