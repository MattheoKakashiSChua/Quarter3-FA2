var number1; 
var number2; 


function add(number1, number2) { 
    number1 = parseFloat(document.getElementById('num1').value); 
    number2 = parseFloat(document.getElementById('num2').value);
    const result = sum(number1, number2);  

    document.getElementById("result").innerHTML = "The sum of "+ number1 + " and " + number2 + " is " + result;
} 

function difference(number1, number2) { 
    number1 = parseFloat(document.getElementById('num1').value); 
    number2 = parseFloat(document.getElementById('num2').value);
    const result = diff(number1, number2); 

    document.getElementById("result").innerHTML = "The difference of "+ number1 + " and " + number2 + " is " + result;
} 

function product(number1, number2) { 
    number1 = parseFloat(document.getElementById('num1').value); 
    number2 = parseFloat(document.getElementById('num2').value);
    const result = prod(number1, number2); 
    

    document.getElementById("result").innerHTML = "The product of "+ number1 + " and " + number2 + " is " + result;
} 
 
function quotient(number1, number2) { 
    number1 = parseFloat(document.getElementById('num1').value); 
    number2 = parseFloat(document.getElementById('num2').value);
    const result = divide(number1, number2);
    
    
    if(number2 > 0 || number2 < 0) { 
    document.getElementById("result").innerHTML = "The quotient of "+ number1 + " and " + number2 + " is " + result; 
    } 
    else {
        document.getElementById("result").innerHTML = "I am sorry but 0 is an invalid input value for your second number when it comes to division ( / )";
    }
} 
 
function remainder(number1, number2) { 
    number1 = parseFloat(document.getElementById('num1').value); 
    number2 = parseFloat(document.getElementById('num2').value);
    const result = rem(number1, number2); 
    
    document.getElementById("result").innerHTML = "The remainder from the quotient of "+ number1 + " and " + number2 + " is " + result; 
} 
 
function sum(x, y) {
    return x + y;
} 
function diff(x, y) {
    return x - y;
} 
function prod(x, y) {
    return x * y;
} 
function divide(x, y) {
    return x / y;
} 
function rem(x, y) {
    return x % y;
} 

