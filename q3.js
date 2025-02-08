var number1; 
var number2; 


function add(number1, number2) { 
    number1 = parseFloat(document.getElementById('num1').value); 
    number2 = parseFloat(document.getElementById('num2').value);
    const sum = number1 + number2; 

    document.getElementById("result").innerHTML = "The sum of "+ number1 + " and " + number2 + " is " + sum;
} 

function difference(number1, number2) { 
    number1 = parseFloat(document.getElementById('num1').value); 
    number2 = parseFloat(document.getElementById('num2').value);
    const diff = number1 - number2; 

    document.getElementById("result").innerHTML = "The difference of "+ number1 + " and " + number2 + " is " + diff;
} 

function product(number1, number2) { 
    number1 = parseFloat(document.getElementById('num1').value); 
    number2 = parseFloat(document.getElementById('num2').value);
    const prod = number1 * number2; 

    document.getElementById("result").innerHTML = "The product of "+ number1 + " and " + number2 + " is " + prod;
} 
 
function quotient(number1, number2) { 
    number1 = parseFloat(document.getElementById('num1').value); 
    number2 = parseFloat(document.getElementById('num2').value);
    const div = number1 / number2; 

    if(number2 > 0 || number2 < 0) { 
    document.getElementById("result").innerHTML = "The quotient of "+ number1 + " and " + number2 + " is " + div; 
    } 
    else {
        document.getElementById("result").innerHTML = "I am sorry but 0 is an invalid input value for your second number when it comes to division ( / )";
    }
    
} 
 
function remainder(number1, number2) { 
    number1 = parseFloat(document.getElementById('num1').value); 
    number2 = parseFloat(document.getElementById('num2').value);
    const rem = number1 % number2; 
    document.getElementById("result").innerHTML = "The remainder from the quotient of "+ number1 + " and " + number2 + " is " + rem; 
} 
