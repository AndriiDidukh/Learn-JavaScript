/* Напишіть функцію ucFirst(str), яка повертає рядок str з першим символом у верхньому регістрі, наприклад:
ucFirst("василь") == "Василь"; */

function ucFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}

alert(ucFirst("andrii"));

//===================================================================================

/* Напишіть функцію checkSpam(str), яка повертає true, якщо str містить ‘viagra’ or ‘XXX’, інакше false.

Функція має бути нечутливою до регістру: */

function checkSpam(str) {
  return (
    str.toLowerCase().includes("xxx") || str.toLowerCase().includes("viagra")
  );
}

alert(checkSpam("buy ViAgRA now"));
alert(checkSpam("buy xxxxxx"));
alert(checkSpam("buy ss"));

//===================================================================================

/* Створіть функцію truncate(str, maxlength), яка перевіряє довжину str і, якщо вона перевищує maxlength – замінює кінець str символом трьох крапок "…", щоб його довжина була рівною maxlength.

Результатом функції повинен бути урізаний (якщо потребується) рядок. */

function truncate(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, 19) + "...";
  }
  return str;
}

alert(truncate("Що я хотів би розповісти на цю тему:", 20));

//===================================================================================

/* У нас є вартість у вигляді "$120". Тобто: спочатку йде знак долара, а потім число.

Створіть функцію extractCurrencyValue(str), яка витягне числове значення з такого рядка та поверне його. */

function extractCurrencyValue(str) {
  return Number(str.slice(1));
}

alert(extractCurrencyValue("$123"));
