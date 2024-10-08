/* У нас є об’єкт:
let user = {
  name: "Іван",
  years: 30
};
Напишіть деструктуроване присвоєння, яке зчитує:
властивість name у змінну name.
властивість years у змінну age.
властивість isAdmin у змінну isAdmin (false, якщо така властивість відсутня) */

let user = {
    name: "Іван",
    years: 30,
};

let { name, years: age, isAdmin = false } = user;

alert(name); // Іван
alert(age); // 30
alert(isAdmin); // false

//===================================================================================

/* Є об’єкт salaries:
let salaries = {
  "Іван": 100,
  "Петро": 300,
  "Марія": 250
};
Створіть функцію topSalary(salaries) яка повертає ім’я найбільш високооплачуваної особи.
Якщо об’єкт salaries пустий, функція повинна повернути null.
Якщо є кілька високооплачуваних осіб, поверніть будь-якого з них.
P.S. Використовуйте Object.entries і деструктурування для перебору пар ключ/значення. */

let salaries = {
    Іван: 100,
    Петро: 300,
    Марія: 250,
};

function topSalary(salaries) {
    let maxSalary = 0;
    let maxSalaryName = null;
    for ([name, salary] of Object.entries(salaries)) {
        if (salary >= maxSalary) {
            maxSalary = salary;
            maxSalaryName = name;
        }
    }
    return maxSalaryName;
}

alert(topSalary(salaries));
