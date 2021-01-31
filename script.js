const numbuttons = document.querySelectorAll('.btnnum')
const display = document.querySelector('.display')
const clear = document.querySelector('.btn-clear')
const operatorsbtns = document.querySelectorAll('.btnoperator')
const equals = document.querySelector('.btnequals')


let currentop = '';
let currentnum = '';
let num1 = '';
let num2 = '';
console.log(num1)
console.log(num2)

function storenum() {
    if (currentop == '') {
        num1 = currentnum;
    } else {
        num2 = currentnum;
    }
}

numbuttons.forEach(btn => {
    btn.addEventListener('click', e => {
        console.log(btn.textContent)
        displayvalue = btn.textContent
        // display.innerHTML = displayvalue;
        appenddisplay(btn.textContent)
        currentnum = displayvalue
        storenum()
    });
});

operatorsbtns.forEach(btn => {
    btn.addEventListener('click', e => {
        console.log(btn.textContent)
        appenddisplay(btn.textContent)
        setOperation(btn.textContent)
    })
})

function setOperation(operator) {
    if (currentop !== null) runeval();
    currentop = operator
    console.log('current ' + currentop)
    // clearfunc()
}

function runeval() {
    if (currentop == '/' && display.textContent == "0") {
        alert(`You really think we'd let you divide by zero?`)
    }
}


equals.addEventListener('click', e => {
    console.log(operate)
    tot = operate(operatorsbtns, num1, num2)
    console.log(tot)
    console.log(num1)
    console.log(num2)
})

function appenddisplay(num) {
    display.textContent += num
}

clear.addEventListener('click', e => {
    clearfunc()
})

function clearfunc() {
    //need to set everything back to beginning. e.g. firstnum = ''
    display.textContent = 0
}



function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}
function multiply (a,b) {
	return a*b;
}

function divide (a,b) {
    if (b == 0) {
        alert(`You can't divide by zero`)
    } else {
    return a / b;
    }
}

function operate(operator, num1,num2) {
   if (operator == add) {
       return add(num1, num2)
   } else if (operator == subtract) {
       return subtract(num1, num2)
   } else if (operator == multiply) {
       return multiply(num1, num2)
   } else if (operator == divide) {
       return divide(num1, num2)
   }
}











/*
function sum (array) {
	return array.reduce((a,b) => a + b, 0);
}

function power(a, b) {
	return Math.pow(a, b)
	
}

function factorial(num) {
	let total = 1;
	for (let i = 2; i <= num; i++) {
		total = total * i
	}
	return total
}
*/