describe("Commands Example", function () {
  beforeEach(function () {
    cy.visit("https://www.saucedemo.com/");
    cy.fixture("fixtures-demo/sauceCredentials.json").then((credentials) => {
      this.credentials = credentials;
    });
  });

  it("Success login test", function () {
    const { standardUsername, systemPassword } = this.credentials;
    cy.typeLogin(standardUsername, systemPassword);
    cy.get(".title").should("contain.text", "Products");
    cy.typeLogout();
    cy.url().should("eq", "https://www.saucedemo.com/");
  });

  it("Failed Login test", function () {
    const { dummyUsername, dummyPassword } = this.credentials;
    cy.typeLogin(dummyUsername, dummyPassword);
    cy.get(".error").should(
      "contain.text",
      "Epic sadface: Username and password do not match any user in this service"
    );
  });
});
