describe("Fixures Demo", function () {
  beforeEach(function () {
    cy.visit("https://www.saucedemo.com/");
    cy.fixture("fixtures-demo/sauceCredentials.json").then((credentials) => {
      this.credentials = credentials;
    });
  });

  it("Standard Username", function () {
    cy.get('[data-test="username"]').type(this.credentials.standardUsername);
    cy.get('[data-test="password"]').type(this.credentials.systemPassword);
    cy.get('[data-test="login-button"]').click();

    cy.get(".title").should("contain.text", "Products");

    cy.get('#react-burger-menu-btn').click()
    cy.get('.bm-item-list').find('a').eq(2).click()
    // cy.get('.bm-item-list').find('#logout_sidebar_link').click()

  });

  it("Incorrect username", function () {
    cy.get('[data-test="username"]').type(this.credentials.dummyUsername);
    cy.get('[data-test="password"]').type(this.credentials.systemPassword);
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]').should(
      "contain.text",
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  it("Incorrect password", function () {
    cy.get('[data-test="username"]').type(this.credentials.standardUsername);
    cy.get('[data-test="password"]').type(this.credentials.dummyPassword);
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]').should(
      "contain.text",
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  it("Locked out user", function () {
    cy.get('[data-test="username"]').type(this.credentials.lockedUsername);
    cy.get('[data-test="password"]').type(this.credentials.systemPassword);
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]').should(
      "contain.text",
      "Epic sadface: Sorry, this user has been locked out."
    );
  });
});
