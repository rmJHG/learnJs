const calcurator = {
  plus: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  divide: function (a, b) {
    console.log(a / b);
  },
  multiple: function (a, b) {
    console.log(a * b);
  },
  power: function (a, b) {
    console.log(a ** b);
  },
};

calcurator.plus(2, 10);
calcurator.minus(10, 10);
calcurator.divide(20, 10);
calcurator.multiple(5, 10);
calcurator.power(10, 10);
