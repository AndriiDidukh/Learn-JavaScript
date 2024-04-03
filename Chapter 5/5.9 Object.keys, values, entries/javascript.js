/* Є об’єкт salaries з довільною кількістю властивостей, що містять заробітні плати.
Напишіть функцію sumSalaries(salaries), що повертає суму всіх зарплат за допомогою Object.values та циклуfor..of.
Якщо об’єкт salaries порожній, тоді результат повинен бути 0. */

function sumSalaries(salaries) {
    let sum = 0;
    for (let salari of Object.values(salaries)) {
        sum += salari;
    }
    return sum;
}

let salaries = {
    Іван: 100,
    Петро: 300,
    Марія: 250,
};

alert(sumSalaries(salaries));

//===================================================================================

/* Напишіть функцію count(obj), що повертає кількість властивостей об’єкта: */

function count(obj) {
    return Object.values(obj).length;
}

let user = {
    name: "Іван",
    age: 30,
};

alert(count(user));
