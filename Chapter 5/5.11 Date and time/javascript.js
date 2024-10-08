/* Створити об’єкт Date на дату: 20 лютого 2012, 3:12 ранку. Часовий пояс є місцевим.
Показати його за допомогою alert. */
//alert(new Date("2012-01-20T03:12"));

//===================================================================================

/* Напишіть функцію getWeekDay(date), щоб показати день тижня у короткому форматі: ‘ПН’, ‘ВТ’, ‘СР’, ‘ЧТ’, ‘ПТ’, ‘СБ’, ‘НД’. */

function getWeekDay(date) {
    let daysMap = new Map();
    daysMap.set(0, "НД");
    daysMap.set(1, "ПН");
    daysMap.set(2, "ВТ");
    daysMap.set(3, "СР");
    daysMap.set(4, "ЧТ");
    daysMap.set(5, "ПТ");
    daysMap.set(6, "СБ");
    return daysMap.get(myDate.getDay());
}

alert(getWeekDay(new Date()));

//===================================================================================

/* Європейські країни мають дні тижня, що починаються з понеділка (№ 1), потім вівторок (№ 2) та до неділі (№ 7). Напишіть функцію getLocalDay(date), що повертає “європейський” день тижня для date. */

function getLocalDay(date) {
    let day = date.getDay();

    if (day == 0) {
        // weekday 0 (sunday) is 7 in european
        day = 7;
    }

    return day;
}

//===================================================================================

/* Створіть функцію getDateAgo(date, days), щоб повернути день місяця, який був days днів після date.
Наприклад, якщо сьогодні – 20-й, то getDateAgo(new Date(), 1) має бути 19-го, а getDateAgo(new Date(), 2) має бути 18-го.
Має працювати надійно для days = 365 або більше: */
