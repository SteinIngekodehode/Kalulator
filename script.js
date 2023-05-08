const display = document.querySelector("display");
const buttons = document.querySelectorAll("button");
const equals = document.querySelector("equals");
const reset = document.querySelector("reset");


let activeInput = "0";           /* const og let brukar ein for å lage variablar*/
let previousInput = null;
let mathSigns = null;

function updateDisplay() {
display.value = activeInput;     /* navngitt det som blir vist på skjermen når ein trykker på ein av knappane*/  
}

function addNumber(number) {    /* legger til/oppdaterer nummer til "activeInput"*/
if (activeInput === "0"){       /* legger til nummer til det som visest på skjermen, viss nr allereie er null, så erstatter det det med eit nytt nummer,
                                ellers legger det til eit nytt nummer på slutten av inputen(vi har satt 0 som utg,pkt. over) eks: 4 står frå før, skriver inn "3", resultat "43"*/ 
activeInput = number;           /* for at det skal vise et nummer*/
                                /* Blir aktivert, "calla" når eit nr-knapp blir trykt på*/  
}
else {activeInput += number}    /* Viss 0, blir det erstatta, ellers blir det lagt til et nummer*/
updateDisplay();                /*kommando; kjør funksjon din jævel*/   
}

function setSign(newSign) {     /* Aktiverer reknefunskjonane*/ 
if (mathSigns !== null) {       /* !==  sjekker om dei IKKJE er like*/
                                /* lagrer det i previousInput, når du trykker på eit av mathSigns+ nullstiller activeInput*/
startCalculation();     
} 
mathSigns = newSign;
previousInput = activeInput;
activeInput = "null";
updateDisplay(); 
} 

function startCalculation() {
const previous = parseFloat(previousInput);
const active = parseFloat(activeInput);

if (mathSigns === "+") {
activeInput = previous + active;
}

else if (mathSigns === "-") {previous - active;} 
else if (mathSigns === "*") {previous * active;}
else if (mathSigns === "/") {previous / active;}  

mathSigns = null;
previousInput = null;
updateDisplay();
}

function resetInput() {
activeInput = "0"
mathSigns = "";
previousInput = "";
updateDisplay();   
}

buttons.forEach((button) => {
button.addEventListener("click", () => {
const buttonValue = button.textContent;
if (/\d/.test(buttonValue)) {
addNumber(buttonValue); } 
else if (buttonValue === ".") { 
if (!currentInput.includes("")) {
currentInput += "."; 
updateDisplay();   
}    
    
}
else if (["+", "-", "*", "/"].includes(buttonValue)) {
setSign(buttonValue);     
}
});   
});

/*reset.addEventListener("click", resetInput);

console.log(reset);

equals.addEventListener("click", () => {
if (mathSigns !== null) {
startCalculation();    
}  
}) 
*/
