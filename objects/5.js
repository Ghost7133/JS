const calc = (initialA, initialB, operation) => {
  let obj = {
    a: initialA,
    b: initialB,
    sum: function () {
      return this.a + this.b;
    },

    mul: function () {
      return this.a * this.b;
    },
  };
  console.log(obj[operation]());
};
calc(1, 5, "sum");
