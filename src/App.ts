// 1. PODSTAWOWE TYPY DANYCH
// NUMBER
// let

let age: number;

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

const add = (num1: number, num2: number): number => {
  return num1 + num2;
};

function add2(num1: number, num2: number): number {
  return num1 + num2;
}

const add3 = function (num1: number, num2: number): number {
  return num1 + num2;
};

const logToConsole = (thingToDisplay: number): void => {
  console.log(thingToDisplay);
};

// Zad 1. Napisz funkcję która będzie obliczała cene w zależności od tego czy zniżka jest przyznana czy nie.
// Nazwa: calculatePrice
// Parametry: originalPrice (liczba), hasDiscount (prawda/fałsz)
// Funkcjonalność: Jeżeli parametr hasDiscount jest równy true, zwróc liczbę originalPrice pomniejszoną o 23%, jeżeli hasDiscount jest równy false, zwróc originalPrice bez żadnych modyfikacji.

const discount = true;
const price = 100;

// tu piszecie

const calculatePrice = (originalPrice: number, hasDiscount: boolean): number =>
  hasDiscount ? originalPrice * 0.77 : originalPrice;

const calculatePrice2 = function (
  originalPrice: number,
  hasDiscount: boolean
): number {
  if (hasDiscount) {
    return originalPrice * 0.77;
  } else {
    return originalPrice;
  }
};

// pod spodem wywołujecie, jako argumenty podajecie zmienne discount i price

// console.log(calculatePrice(price, discount));
// calculatePrice(price, discount);

// 3. ELEMENTY HTML

// a) selektory
const categoryList: HTMLUListElement = document.querySelector(".categories");

const input: HTMLInputElement = document.querySelector("#name");
// console.log(input.value);

const button = document.querySelector("button");

// b) event listenery
// button.addEventListener("click", (event: MouseEvent) => {
//   console.log("Klik button");
// });

// Zad 2.
// 1. Dodaj event listener na button (click)
// 2. Wylosuj czy użytkownik ma zniżke czy nie (Math.random())
// 3. Ściągnij wartość z inputu textowego, od razu zmień typ pozyskanej wartości na number
// 4. Wykonaj console.log `You have to pay *wywołanie funkcji calculatePrice, argumenty to wartości z pkt 2 i 3, ${}`

// TYPE INFERENCE

// button.addEventListener("click", function () {
//   const discount = Math.random() > 0.5 ? true : false;
//   const price = +input.value;
//   console.log(`You have to pay ${calculatePrice(price, discount)}`);
// });

// 4. UNION TYPES

// let test: boolean | number | string;
// test = "test";
// test = 21;
// test = true;

// 5. TYPE ALIAS

type Test = string | number | boolean;

let test: Test;
let test2: Test;
let test3: Test;
let test4: Test;

type Category = "sport" | "education" | "work" | "life" | 23;
let category: Category;
category = "sport";
category = "life";
// category = "gym";
// category = 21;
category = 23;
// category = true;

type Miesiace = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

let miesiac: Miesiace = 1;
miesiac = 2;
miesiac = 3;
// miesiac = 13;
// miesiac = 14;

// 6. TYPOWANIE OBIEKTOW

//type Person = { name: string; surname: string; age: number };

interface Person {
  name: string;
  surname: string;
  age: number;
}

interface Person {
  married?: boolean;
}

let john: Person = {
  name: "John",
  surname: "Smith",
  age: 30,
  //married: false,
};

let sarah: Person = {
  name: "Sarah",
  surname: "Smith",
  age: 30,
  married: true,
};

//type Programmer = {
//   name: string;
//   surname: string;
//   age: number;
//   language: string;
//   experience: number;
// };

interface Programmer extends Person {
  // tu dziedziczenie
  language: string;
  experience: number;
}

let kevin: Programmer = {
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

let list: (number | string)[] = [1, 2, 3, 4, 5, 6, 7, 8];
list = ["123", "321"];
list = ["123", 123];

const objList: Programmer[] = [
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
