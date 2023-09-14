/* get all data from html */
const sNumber = document.querySelector('.sNumber');
const fNumber = document.querySelector('.fNumber');
const sign = document.querySelector('.sign');
const numbersButtons = document.querySelectorAll('.number');
const mathButtons = document.querySelectorAll('.math');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete')

/*let for result of the math*/
let result =''


/* buttons */
mathButtons.forEach((button) => button,addEventListener('click', operate))
equalsButtons.addEventListener('click', showResult)
