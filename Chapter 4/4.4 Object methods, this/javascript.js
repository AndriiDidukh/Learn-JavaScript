/* Створіть об’єкт calculator з трьома методами:

read() запитує два значення та зберігає їх як властивості об’єкта з іменами a та b відповідно.
sum() повертає суму збережених значень.
mul() множить збережені значення і повертає результат. */

let calculator = {
  read() {
    this.a = +prompt("Enter first value");
    this.b = +prompt("Enter second value");
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

// ===================================================================================

/* Існує об’єкт ladder, що дозволяє підійматися вгору-вниз:

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // показує поточний крок
    alert( this.step );
  }
};
Змініть код up, down і showStep так, щоб зробити доступним ланцюг викликів, наприклад:

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0 */

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    // показує поточний крок
    alert(this.step);
    return this;
  },
};

ladder.up().up().down().showStep().down().showStep();
