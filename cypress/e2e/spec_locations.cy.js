describe("Location Demo", () => {
  /**
   * contains: Que contenga X palabra el TEXTO
   * eq: Tiene que ser igual al TEXTO
   */

  before(()=>{
    cy.clearCookies();
  })

  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
    cy.clearCookies();  
  });

  it("Should have title Swag Labs", () => {
    cy.title().should("eq", "Swag Labs");
  });

  it("URL should be https://www.saucedemo.com/", () => {
    cy.url().should("eq", "https://www.saucedemo.com/");
  });

  it("Should use https", () => {
    cy.location("protocol").should("contains", "https:");
    cy.clearCookies();
  });

  it("Should have hostname www.saucedemo.com", () => {
    cy.location("hostname").should("eq", "www.saucedemo.com");
  });

  it("Should redirect to /inventory", () => {
    // cy.get('#user-name').type('standard_user')
    // cy.get('#password').type('secret_sauce')
    // cy.get('#login-button').click()

    //Se llena el form
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");

    //Click al btn
    cy.get('[data-test="login-button"]').click();

    cy.location().should((location) => {
      expect(location.pathname).to.eq("/inventory.html");
    });

    cy.location("pathname").should("eq", "/inventory.html");
  });
});
