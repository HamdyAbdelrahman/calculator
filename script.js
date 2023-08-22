const calculator= document.querySelector(".calculator");
const output= document.querySelector(".output");
const previousOperand=document.querySelector("[data-previous-operand]");
const currentOperand=document.querySelector("[data-current-operand]");
const  delBtn=document.querySelector("[data-delete]");
const  clearBtn=document.querySelector("[data-all-clear]");
const  operationBtns=document.querySelectorAll("[data-operation]");
const  numBtns=document.querySelectorAll("[data-number]");
const  equals=document.querySelector("[data-equals]");

let previousValue="";
let currentValue="";
let operation="";

delBtn.addEventListener("click", deleteValue );
clearBtn.addEventListener("click", clear );
operationBtns.forEach(function(btn){
    btn.addEventListener("click", operate )
});
numBtns.forEach(function(btn){
    btn.addEventListener("click", number )
});
equals.addEventListener("click", calculate );

function deleteValue(){
    currentValue=currentValue.toString().slice(0,-1);
};
function clear(){
    previousValue="";
    currentValue="";
    operation="";
}
function operate(){
    previousValue=currentValue;
    operation=this.innerText;
    currentValue="";
}
function number(){
    currentValue += this.innerText;
}
function calculate(){
    let calculation;
    const prev=parseFloat(previousValue);
    const curr=parseFloat(currentValue);
    if(isNaN(prev) || isNaN(curr)) return;
    switch(operation){
        case"+":
        calculation=prev + curr
        break;
        case"-":
        calculation=prev - curr
        break;
        case"*":
        calculation=prev * curr
        break;
        case"/":
        calculation=prev / curr
        break;
        default:
            return;
    }
    currentValue = calculation;
    previousValue="";
    operation="";
    
}

function updateDisplay(){
    currentOperand.innerText=currentValue;
    if(operation != null){
        previousOperand.innerText=`${previousValue} ${operation}`;
    }
}
 calculator.addEventListener("click",updateDisplay);