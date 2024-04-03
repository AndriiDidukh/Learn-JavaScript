/* Нехай arr – це масив.
Потрібно створити функцію unique(arr), яка повинна повертати масив унікальних елементів arr. */

function unique(arr) {
    return Array.from(new Set(arr));
}

let values = [
    "Hare",
    "Krishna",
    "Hare",
    "Krishna",
    "Krishna",
    "Krishna",
    "Hare",
    "Hare",
    ":-O",
];

// alert(unique(values));

//===================================================================================

/* Анаграми – це слова, у яких ті ж букви в тій же кількості, але вони розташовуються в іншому порядку.
Наприклад:
nap - pan
ear - are - era
cheaters - hectares - teachers
Напишіть функцію aclean(arr), яка повертає масив без анаграм. */

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
    for (let i = 0; i < arr.length; i++) {
        let firsValue = arr[i].split("").sort().join("").toLowerCase();
        for (let j = i + 1; j < arr.length; j++) {
            let second = arr[j].split("").sort().join("").toLowerCase();
            if (firsValue === second) {
                arr.splice(j, 1);
            }
        }
    }
    alert(arr);
}

aclean(arr); // "nap,teachers,ear" or "PAN,cheaters,era"

//===================================================================================
