var calculator = {
  a: 0,
  b: 0,

  read() {
    this.a = Number(prompt("Введіть перше число:", "0"));
    this.b = Number(prompt("Введіть друге число:", "0"));
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  }
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

