const screen = document.querySelector('.calc-screen');
const operand1 = document.querySelector('.operand1');
const operand2 = document.querySelector('.operand2');
const operationWrapper = document.querySelector('.operation-container');
const resetBtn = document.querySelector('#reset');
const numKeys = document.querySelectorAll('.num-key');
const opKeys = document.querySelectorAll('.operation-btn');
const addKey = document.querySelector('#sum');
const subtractKey = document.querySelector('#subtract');
const multiplyKey = document.querySelector('#multiply');
const divideKey = document.querySelector('#divide');
const equalToBtn = document.querySelector('#equalto');
const backspace = document.querySelector('.backspace');
let operand1Val = 0;
let operand2Val = 0;

numKeys.forEach(num => {
    num.addEventListener('click', (e) => {
      if(operand2.innerText == 0 ) {
        operand2.innerText = '';
      }
      operand2.innerText += num.innerText;  
    })
})

resetBtn.addEventListener('click', resetFunction);

function resetFunction(e) {
    operand2.innerText = 0;
    operand1.innerText = '';
    operationWrapper.innerText = '';
    operand1Val = 0;
    operand2Val = 0;

    if(operand2.innerText == 0) {
        operand2.innerText = '';
    }
}

opKeys.forEach(operation => {
    operation.addEventListener('click', (e) => {

        operationWrapper.innerText = e.currentTarget.innerText;

        // let operand1Num = Number(operand1.innerText);
        // let operand2Num = Number(operand2.innerText);

        // first way to implement mathematical operations is by using them in event listeners

        // if(operation.innerText === "+") { 
        //     operand2.innerText = '';
        //     if(operand1.innerText === '') {
        //         operand1Num = operand2Num;
        //         operand1.innerText += operand1Num;
        //     } else {
        //         operand1Num += operand2Num;
        //         operand1.innerText = operand1Num;  
        //     }
        // }

        // if(operation.innerText === "-") { 
        //     operand2.innerText = '';
        //     if(operand1.innerText === '') {
        //         operand1Num = operand2Num;
        //         operand1.innerText = operand1Num;
        //     } else {
        //         operand1Num -= operand2Num;
        //         operand1.innerText = operand1Num;  
        //     }
        // }

        // if(operation.innerText === "*") { 
        //     operand2.innerText = '';
        //     console.log(operand2Num);
        //     if(operand1.innerText === '') {
        //         operand1Num = operand2Num;
        //         operand1.innerText += operand1Num;
        //     } else {
        //         operand1Num *= operand2Num;
        //         operand1.innerText = operand1Num;  
        //     }
        // }

        // if(operation.innerText === "/") { 
        //     operand2.innerText = '';
        //     if(operand1.innerText === '') {
        //         operand1Num = operand2Num;
        //         operand1.innerText += operand1Num;
        //     } else {
        //         operand1Num /= operand2Num;
        //         operand1.innerText = operand1Num;  
        //     }
        // }
    })
})

equalToBtn.addEventListener('click', makeEqual);

function makeEqual(e) {
    let operand1Num = Number(operand1.innerText);
    let operand2Num = Number(operand2.innerText);

    if(operationWrapper.innerText === "+") {
        operand2.innerText = operand1Num + operand2Num;
        operationWrapper.innerText = "=";
    } else if(operationWrapper.innerText === "-") {
        operand2.innerText = (operand1Num - operand2Num);
        operationWrapper.innerText = "=";
    } else if(operationWrapper.innerText === "/") {
        operand2.innerText = operand1Num / operand2Num;
        operationWrapper.innerText = "=";
    } else if(operationWrapper.innerText === "*") {
        operand2.innerText = operand1Num * operand2Num;
        operationWrapper.innerText = "=";
    }
    operand1.innerText = '';
}

function backspacer(e) {
    let operand1Str = operand1.innerText;
    let operand2Str = operand2.innerText;
    operand2Str = operand2Str.slice(0, -1);
    operand2.innerText = operand2Str;

    if(operand2.innerText === '') {
        operationWrapper.innerText = '';
    }
}

backspace.addEventListener('click', backspacer);

window.addEventListener('keydown', (e) => {
    numKeys.forEach(num => {
        if(e.key === num.id) {
            operand2.innerText += num.id;
        }
    })
    if(e.key === 'Backspace' || e.key === 'Delete') {
        backspacer();
    } else if(e.key === '=' || e.key === 'Enter') {
        makeEqual();
    } else if(e.key === 'c' || e.key === 'C') {
        resetFunction();
    } else if(e.key === '+') {
        addNums();
    } else if(e.key === '-') {
        subtractNums();
    } else if(e.key === '*') {
        multiplyNums();
    } else if(e.key === '/') {
        divideNums();
    }
})


addKey.addEventListener('click', addNums);

function addNums(e) {
    let operand1Num = Number(operand1.innerText);
    let operand2Num = Number(operand2.innerText);

    operand2.innerText = '';
    if(operand1.innerText === '') {
        operand1Num = operand2Num;
        operand1.innerText += operand1Num;
    } else {
        operand1Num += operand2Num;
        operand1.innerText = operand1Num;  
    }

    operationWrapper.innerText = "+";
}

subtractKey.addEventListener('click', subtractNums);

function subtractNums(e) {
    let operand1Num = Number(operand1.innerText);
    let operand2Num = Number(operand2.innerText);
 
    operand2.innerText = '';
    if(operand1.innerText === '') {
        operand1Num = operand2Num;
        operand1.innerText = operand1Num;
    } else {
        operand1Num -= operand2Num;
        operand1.innerText = operand1Num;  
    }

    operationWrapper.innerText = "-";
}

multiplyKey.addEventListener('click', multiplyNums);

function multiplyNums(e) { 
    let operand1Num = Number(operand1.innerText);
    let operand2Num = Number(operand2.innerText);

    operand2.innerText = '';
    if(operand1.innerText === '') {
        operand1Num = operand2Num;
        operand1.innerText += operand1Num;
    } else {
        operand1Num *= operand2Num;
        operand1.innerText = operand1Num;  
    }
    operationWrapper.innerText = "*";
}


divideKey.addEventListener('click', divideNums);

function divideNums(e) { 
    let operand1Num = Number(operand1.innerText);
    let operand2Num = Number(operand2.innerText);

    operand2.innerText = '';
    if(operand1.innerText === '') {
        operand1Num = operand2Num;
        operand1.innerText += operand1Num;
    } else {
        operand1Num /= operand2Num;
        operand1.innerText = operand1Num;  
    }

    if(operand1.innerText === 'Infinity') {
        operand1.innerText = '';
    }
    operationWrapper.innerText = "/";
}