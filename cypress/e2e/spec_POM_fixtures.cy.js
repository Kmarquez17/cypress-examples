import homeSaucePage from "../pages/homeSaucePage";
import inventoryPage from "../pages/inventoryPage";

const tests = require("../fixtures/data-driver/users.json");

describe("Home Sauce Demo", function () {
  beforeEach(function () {
    cy.visit("https://www.saucedemo.com/");
  });

  tests.forEach((user) => {
    const { name, username, password, expected } = user;
    it(name, () => {
      homeSaucePage.typeUsername(username);
      homeSaucePage.typePassword(password);
      homeSaucePage.handleClick();

      if (expected === "Products") {
        inventoryPage.elements.titleSpan().should("have.text", "Products");
      } else {
        homeSaucePage.elements.errorMessage().should("contain.text", expected);
      }
    });
  });
});
