let add = (a, b) => {return Number(a)+Number(b)};
let subtract = (a, b) => {return Number(a)-Number(b)};
let multiply = (a, b) => {return Number(a)*Number(b)};
let divide = (a, b) => {return Number(a)/Number(b)};

let operate = (value1, value2, operator) => {
    switch (operator){
        case "+":
            return add(value1, value2);
        case "−":
            return subtract(value1, value2);
        case "×":
            return multiply(value1, value2);
        case "÷":
            return divide(value1, value2);
        default:
            console.log("error with operator function");
    }
}

let equalPress = false;
let buttons = document.getElementsByClassName("display-value");

for (let i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", function(e){
        if (!topScreen.textContent.includes("=")){
            document.getElementById("bottom-screen").textContent += e.target.id;
        }
    });
}

let operators = document.getElementsByClassName("operator");
let bottomScreen = document.getElementById("bottom-screen");
let topScreen = document.getElementById("top-screen");
let num1;
let operator;

for (let j=0; j<operators.length; j++){
    operators[j].addEventListener("click", function(e){
        if (bottomScreen.textContent.slice(-1) === "."){
            bottomScreen.textContent = bottomScreen.textContent.slice(0, -1);
        }
        if (bottomScreen.textContent != ""){
            num1 = bottomScreen.textContent;
            operator = e.target.id;
            topScreen.textContent = bottomScreen.textContent + " " + e.target.id;
            bottomScreen.textContent = "";
        }
    });
}

document.getElementById("clear").addEventListener("click", function(){
    document.getElementById("bottom-screen").textContent = "";
    document.getElementById("top-screen").textContent = "";
});

document.getElementById("delete").addEventListener("click", function(){
    if (!topScreen.textContent.includes("=")){
        bottomScreen.textContent = bottomScreen.textContent.slice(0, bottomScreen.textContent.length-1);
    }
});

document.getElementById("negate").addEventListener("click", function(){
    if (bottomScreen.textContent > 0 && !topScreen.textContent.includes("=")){
        bottomScreen.textContent = -Math.abs(bottomScreen.textContent);
    } else if (bottomScreen.textContent < 0 && !topScreen.textContent.includes("=")){
        bottomScreen.textContent = Math.abs(bottomScreen.textContent);
    }
})

document.getElementById("decimal").addEventListener("click", function(){
    if (!bottomScreen.textContent.includes(".") && bottomScreen.textContent != "" && !topScreen.textContent.includes("=")){
        bottomScreen.textContent += ".";
    }
})

document.getElementById("equal").addEventListener("click", function(){
    if (bottomScreen.textContent.slice(-1) === "."){
        bottomScreen.textContent = bottomScreen.textContent.slice(0, -1);
    }
    if (topScreen.textContent != "" && bottomScreen.textContent != "" && !topScreen.textContent.includes("=")){
        let output = operate(num1, bottomScreen.textContent, operator)
        topScreen.textContent += " " + bottomScreen.textContent + " =" 
        bottomScreen.textContent = output;
        equalPress = true;
    }
})