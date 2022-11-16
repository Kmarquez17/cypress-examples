const add = (a, b) => a + b;
const rest = (a, b) => a - b;
const div = (a, b) => a / b;
const mult = (a, b) => a * b;

//Describe o context: agrupacion de TEST los 2 tienen la misma funcionalidad

describe("Unit testing for our dummy aplication", () => {
  context("Math with POSITIVE numbers", () => {
    //IT - Specify: permite a realizar test individuales
    it("Should add POSITIVE numbers", () => {
      // expect: Para hacer una afirmación BDD sobre un tema específico
      expect(add(3, 7)).to.equal(10);
    });

    it("Should rest POSITIVE numbers", () => {
      expect(rest(5, 3)).to.equal(2);
    });

    it("Should div POSITIVE numbers", () => {
      expect(div(6, 2)).to.equal(3);
    });

    it("Should mult POSITIVE numbers", () => {
      expect(mult(5, 3)).to.equal(15);
    });
  });

  context("Math with DECIMAL numbers", () => {
    it("Should add DECIMAL numbers", () => {
      expect(add(2.5, 2.5)).to.equal(5);
    });

    it("Should rest DECIMAL numbers", () => {
      expect(rest(5, 2.5)).to.equal(2.5);
    });
  });
});
