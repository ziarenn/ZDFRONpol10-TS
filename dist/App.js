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
// a) selektory
const categoryList = document.querySelector(".categories");
const input = document.querySelector("#name");
// console.log(input.value);
const button = document.querySelector("button");
let test;
let test2;
let test3;
let test4;
let category;
category = "sport";
category = "life";
// category = "gym";
// category = 21;
category = 23;
let miesiac = 1;
miesiac = 2;
miesiac = 3;
let john = {
    name: "John",
    surname: "Smith",
    age: 30,
    //married: false,
};
let sarah = {
    name: "Sarah",
    surname: "Smith",
    age: 30,
    married: true,
};
let kevin = {
    name: "Kevin",
    surname: "Brown",
    age: 27,
    language: "Python",
    experience: 4,
};
// obj = 5
// obj = {
//   name: "Sarah",
//   surname: "Smith",
//   age: "30",
// };
// 7. TYPOWANIE LIST
let list = [1, 2, 3, 4, 5, 6, 7, 8];
list = ["123", "321"];
list = ["123", 123];
const objList = [
    {
        name: "Kevin",
        surname: "Brown",
        language: "Python",
        experience: 4,
        age: 27,
    },
    {
        name: "John",
        surname: "Brown",
        age: 40,
        language: "C++",
        experience: 15,
    },
];
const donald = {
    name: "Donald",
    surname: "Trump",
    age: 70,
    language: "Pascal",
    experience: 30,
};
objList.push(donald);
