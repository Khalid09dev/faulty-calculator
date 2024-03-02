const num1 = prompt('Enter your number:');
const num2 = prompt('Enter your number:');
const opr = prompt('Which operation you want to do?');

if(Math.random() < 0.5) {
    function truthyCalc(num1, num2, calc) {
        if(calc === 'add') {
            const add = num1 + num2;
            return add;
        }
        else if(calc === 'subtract') {
            const subtract = num1 - num2;
            return subtract;
        }
        else if(calc === 'multiply') {
            const multiply = num1 * num2;
            return multiply;
        }
        else if(calc === 'divide') {
            const divide = num1 / num2;
            return divide;
        }
    
        // const calc = 
        // return add;
    }
    const calculate1 = truthyCalc(parseInt(num1), parseInt(num2), opr);
    const calc = document.getElementById('result')
    calc.innerText =  calculate1;
}

else {
    function faultyCalc(num1, num2, calc) {
        if(calc === 'add') {
            const add = num1 - num2;
            return add;
        }
        else if(calc === 'subtract') {
            const subtract = num1 / num2;
            return subtract;
        }
        else if(calc === 'multiply') {
            const multiply = num1 + num2;
            return multiply;
        }
        else if(calc === 'divide') {
            const divide = num1 ** num2;
            return divide;
        }
    }

    const calculate2 = truthyCalc(parseInt(num1), parseInt(num2), opr);
    const calc = document.getElementById('result')
    calc.innerText =  calculate2;
}