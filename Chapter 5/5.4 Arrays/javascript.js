/* Давайте спробуємо 5 операцій з масивом.

Створіть масив styles з елементами “Jazz” та “Blues”.
Додайте “Rock-n-Roll” в кінець масиву.
Замініть значення в середині масиву на “Classics”. Ваш код для пошуку медіанного елемента має працювати для будь-яких масивів непарної довжини.
Видаліть перший елемент масиву та покажіть його.
Вставте Rap та Reggae на початок масиву. */

let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.round((styles.length - 1) / 2)] = "Classics";
alert(styles.shift());
alert(styles);
styles.unshift("Rap", "Reggae");
alert(styles);

//===================================================================================

/* Напишіть функцію sumInput() яка:

Просить користувача ввести дані за допомогою prompt та зберігає їх в масив.
Закінчує робити запити в користувача після того, як введено не числове значення, порожня строка або натиснуто “відмінити”.
Підраховує та повертає суму елементів масиву.
P.S. Нуль 0 це – валідне число, будь ласка, не зупиняйте функцію при введені 0. */

function sumInput() {
    let arr = [];
    while (true) {
        let a = prompt("Enter a Number");
        if (isNaN(Number(a)) || a === null) {
            break;
        }
        arr.push(+a);
    }
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}
alert(sumInput());

//===================================================================================

/* На вході масив чисел, наприклад arr = [1, -2, 3, 4, -9, 6].
Завдання: знайти неперервний підмасив arr з максимальною сумою елементів.
Написати функцію getMaxSubSum(arr) яка повертає таку суму. */

function getMaxSubSum(arr) {
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        let summ = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            summ += arr[j];
            if (summ > max) {
                max = summ;
            }
        }
    }
    return max;
}

alert(getMaxSubSum([-1, 2, 3, -9])); // 5
alert(getMaxSubSum([2, -1, 2, 3, -9])); // == 6
alert(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
alert(getMaxSubSum([-2, -1, 1, 2])); // == 3
alert(getMaxSubSum([100, -9, 2, -3, 5])); //100
