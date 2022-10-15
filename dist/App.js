// 1. PODSTAWOWE TYPY DANYCH
// NUMBER
// let
let age;
age = 40;
// console.log(age);
// age = "lalala"; BLAD
// STRING
// const
const firstName = "John";
let surname = "Smith";
surname = "Novak";
// surname = true;
// BOOLEAN
let bool = true;
bool = false;
// bool = 123;
// 2. TYPOWANIE FUNKCJI
const add = (num1, num2) => {
    return num1 + num2;
};
function add2(num1, num2) {
    return num1 + num2;
}
const add3 = function (num1, num2) {
    return num1 + num2;
};
const logToConsole = (thingToDisplay) => {
    console.log(thingToDisplay);
};
// Zad 1. Napisz funkcję która będzie obliczała cene w zależności od tego czy zniżka jest przyznana czy nie.
// Nazwa: calculatePrice
// Parametry: originalPrice (liczba), hasDiscount (prawda/fałsz)
// Funkcjonalność: Jeżeli parametr hasDiscount jest równy true, zwróc liczbę originalPrice pomniejszoną o 23%, jeżeli hasDiscount jest równy false, zwróc originalPrice bez żadnych modyfikacji.
const discount = true;
const price = 100;
// tu piszecie
const calculatePrice = (originalPrice, hasDiscount) => hasDiscount ? originalPrice * 0.77 : originalPrice;
const calculatePrice2 = function (originalPrice, hasDiscount) {
    if (hasDiscount) {
        return originalPrice * 0.77;
    }
    else {
        return originalPrice;
    }
};
// pod spodem wywołujecie, jako argumenty podajecie zmienne discount i price
// console.log(calculatePrice(price, discount));
// calculatePrice(price, discount);
// 3. ELEMENTY HTML
const categoryList = document.querySelector(".categories");
const input = document.querySelector("#name");
console.log(input.value);
const button = document.querySelector("button");
