/* Чи можливо створити функції A та B, щоб new A() == new B()? */

function A() {}
function B() {
    return a;
}

let a = new A();
let b = new B();

// ===================================================================================

/* Створіть функцію-конструктор Calculator, який створює об’єкти з трьома методами:

read() запитує два значення за допомогою prompt і записує їх у властивості об’єкта з іменами a та b.
sum() повертає суму цих властивостей.
mul() повертає результат множення даних властивостей. */

function Calculator() {
    this.read = function () {
        this.a = +prompt("Enter first value");
        this.b = +prompt("Enter second value");
    };
    this.sum = function () {
        return this.a + this.b;
    };
    this.mul = function () {
        return this.a * this.b;
    };
}

// ===================================================================================

/* Створіть функцію-конструктор Accumulator(startingValue).

Об’єкт, який він створює повинен:

Зберігати “поточне значення” у властивості value. Початкове значення має значення аргументу конструктора startingValue.
Метод read() повинен використовувати prompt для зчитування нового числа та додавати його до value.
Іншими словами, властивість value – це сума всіх введених користувачем значень разом із початковим значенням startingValue.

Нижче ви можете подивитись демонстрацію роботи коду: */

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
        this.value += +prompt("value to Add");
    };
}

let acc = new Accumulator(5);

let user2 = null;
let key = "asd";

alert(user2[key]);
