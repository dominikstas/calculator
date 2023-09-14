/* get all data from html */
const fNumber = document.querySelector('.fNumber');
const sNumber = document.querySelector('.sNumber');
/* First number = number displayed at the top
Second number = currently number */

const sign = document.querySelector('.sign');
const numbersButtons = document.querySelectorAll('.number');
const mathButtons = document.querySelectorAll('.math');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.backspace')

/*let for result of the math*/
let result =''


/* buttons */
numbersButtons.forEach((button) => {
    button.addEventListener('click', displayNumber)
});
mathButtons.forEach((button) => {
    button.addEventListener('click', operate)
});
equalsButton.addEventListener('click', showResult);
clearButton.addEventListener('click', clearScreen);
deleteButton.addEventListener('click', deleteNumber);


/* Functions */
function clearScreen(){
    result = '';
    fNumber.innerHTML = '';
    sNumber.innerHTML = '';
    sign.innerHTML = '';

}

function deleteNumber(){
    sNumber.textContent = sNumber.textContent.toString().slice(0, -1);
}


function displayNumber(){
    /*Functions for .*/
    if(this.textContent === '.' && sNumber.innerHTML.includes('.')) return;
    if(this.textContent === '.' && sNumber.innerHTML === '') return sNumber.innerHTML = '.0';
    sNumber.innerHTML += this.textContent;
}

function operate(){
    /*Negative numbers*/ 
    if(sNumber.innerHTML === '' && this.textContent === '-'){
        return sNumber.innerHTML = '-';
    }
    else if (sNumber.innerHTML ===''){
        return;
    }
    if(sign.innerHTML !== '') {
        showResult();
    }
    fNumber.innerHTML = sNumber.innerHTML;
    sign.innerHTML = this.textContent;
    sNumber.innerHTML = '';
}

function showResult(){
    /*check if numbers are valid*/
    if(fNumber.innerHTML === '' || sNumber === '') return;
    f = Number(fNumber.innerHTML);
    s = Number(sNumber.innerHTML);

    switch(sign.innerHTML) {
        case '+':
            result = f + s;
            break;
        case '-':
            result = f - s;
            break;
        case '*':
            result = f * s;
            break;
        case '/':
            result = f / s;
            break;
    }
    sNumber.innerHTML = result;
    fNumber.innerHTML = '';
    sign.innerHTML= '';


}
