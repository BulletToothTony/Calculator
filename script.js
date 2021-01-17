const numbuttons = document.querySelectorAll('.btnnum')
const display = document.querySelector('.display')
const clear = document.querySelector('.btn-clear')


numbuttons.forEach(btn => {
    btn.addEventListener('click', e => {
        console.log(btn.textContent)
        displayvalue = btn.textContent
        // display.innerHTML = displayvalue;
        appenddisplay(btn.textContent)
    });
});

function appenddisplay(num) {
    display.textContent += num
}

clear.addEventListener('click', e => {
    clearfunc()
})

function clearfunc() {
    location.reload()
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
    return a / b;
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