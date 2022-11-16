import homeSaucePage from "../pages/homeSaucePage";
import inventoryPage from "../pages/inventoryPage";

describe("POM Implementation", () => {
  beforeEach(function () {
    cy.visit("https://www.saucedemo.com/");
  });

  it("Should login to inventory page", () => {
    homeSaucePage.typeUsername("standard_user");
    homeSaucePage.typePassword("secret_sauce");
    homeSaucePage.handleClick();

    inventoryPage.elements.titleSpan().should("have.text", "Products");
  });

  it("Should display locked out message", () => {
    homeSaucePage.typeUsername("locked_out_user");
    homeSaucePage.typePassword("secret_sauce");
    homeSaucePage.handleClick();

    homeSaucePage.elements
      .errorMessage()
      .should(
        "contain.text",
        "Epic sadface: Sorry, this user has been locked out."
      );
  });
  it("Should display username invalid out message", () => {
    homeSaucePage.typeUsername("dummy-name");
    homeSaucePage.typePassword("secret_sauce");
    homeSaucePage.handleClick();

    homeSaucePage.elements
      .errorMessage()
      .should(
        "contain.text",
        "Epic sadface: Username and password do not match any user in this service"
      );
  });

  it("Should display password invalid out message", () => {
    homeSaucePage.typeUsername("standard_user");
    homeSaucePage.typePassword("dummy-pass");
    homeSaucePage.handleClick();

    homeSaucePage.elements
      .errorMessage()
      .should(
        "contain.text",
        "Epic sadface: Username and password do not match any user in this service"
      );
  });
});
