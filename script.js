// Get the userInput:
let expression = document.getElementById("expression");

// Operators and the Evaluator:
let d = document.getElementById("d");
let h = document.getElementById("h");
let l = document.getElementById("l");
let o = document.getElementById("o");
let p = document.getElementById("p");

// Set the operators to disabled = true:
DisableOperatorsAndEvaluators();

// Add the number:
function AddNumber(n) {
    expression.value += n;
    SetOperatorsAndEvaluators();
}

// Add the operator:
function Operators(o) {
    expression.value += " " + o + " ";
    DisableOperatorsAndEvaluators();
}

// Evaluate the expression:
function EvaluateItNa() {
    expression.value = eval(expression.value)
    SetOperatorsAndEvaluators();
}

// Clear the expression:
function ClearItAllUp() {
    expression.value = "";
    DisableOperatorsAndEvaluators();
}

// Enable the operators and evaluators:
function SetOperatorsAndEvaluators() {
    d.disabled = false;
    h.disabled = false;
    l.disabled = false;
    o.disabled = false;
    p.disabled = false;
}

// Disable the operators and evaluators:
function DisableOperatorsAndEvaluators() {
    d.disabled = true;
    h.disabled = true;
    l.disabled = true;
    o.disabled = true;
    p.disabled = true;
}

// NOTE: eval() function should only
// be used for learning purposes only. Not for real projects.