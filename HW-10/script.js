// Task 1
const btn_1 = document.getElementById("btn_1");

btn_1.addEventListener("click", () => alert("Hello world!"));

// Task 2

const min = 1;
const max = 101;

const randomNum = Math.floor(Math.random() * (max - min) + min);

const guessField = document.getElementById("guessField");
const btn_2 = document.getElementById("btn_2");
const guessResult = document.getElementById("guessResult");

btn_2.addEventListener("click", () => {
    if(Number(guessField.value) !== randomNum){
        guessResult.textContent = "Не вгадано, спробуйте ще раз!";
    }
    else{
        guessResult.textContent = "Все правильно!";
    }
});

// Task 3

const clickAmount = document.getElementById("clickAmount");
const btn_3 = document.getElementById("btn_3");
let click = 0;

btn_3.addEventListener('click', () => {
    clickAmount.textContent = `Кількість тиців - ${click++}`;
});

// Task 4

console.log("Task 4");

const applyCallbackToEachElement = (arr,callback) => arr.map(callback);

const arr = [1,2,3,4,5];
const squareCallback = (el) => el * el;

console.log(applyCallbackToEachElement(arr,squareCallback));

// Task 5

const calculateDiscountedPrice = (price,discount,callback) => console.log(callback(price,discount));

const showDiscountedPrice = (price,discount) => `Discounted price - ${price - (price / 100 * discount)}`;

calculateDiscountedPrice(120,20,showDiscountedPrice);