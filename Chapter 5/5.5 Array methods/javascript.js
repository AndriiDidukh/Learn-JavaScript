/* Напишіть функцію camelize(str), яка перетворює такі рядки “my-short-string” в “myShortString”.
Тобто дефіси видаляються, а всі слова після них починаються з великої літери. */

function camelize(str) {
    let arr = str.split("-");
    arr = arr.map((v) => v[0].toUpperCase() + v.slice(1));
    return arr.join("");
}

// alert(camelize("my-short-string"));

//===================================================================================

/* Напишіть функцію filterRange(arr, a, b), яка приймає масив arr, шукає в ньому елементи більші-рівні a та менші-рівні b і віддає масив цих елементів.
Функція повинна повертати новий масив і не змінювати вихідний. */

function filterRange(arr, a, b) {
    return arr.filter((e) => e >= a && e <= b);
}
let arr = [5, 3, 8, 1];
// alert(filterRange(arr, 1, 4));
// alert(arr);

//===================================================================================

/* Напишіть функцію filterRangeInPlace(arr, a, b), яка приймає масив arr і видаляє з нього всі значення крім тих, які знаходяться між a і b. Тобто, перевірка має вигляд a ≤ arr[i] ≤ b.
Функція повинна змінювати поточний масив і нічого не повертати. */

function filterRangeInPlace(arr, a, b) {
    // arr = arr.filter((i) => i >= a && i <= b);
    arr.slice(1);
}
let array = [5, 3, 8, 1];
filterRangeInPlace(array, 1, 4);
alert(array);
