describe("Intercept Demo", function () {
  // beforeEach(function () {
  //   cy.visit("https://www.saucedemo.com/");
  //   cy.fixture("fixtures-demo/sauceCredentials.json").then((credentials) => {
  //     this.credentials = credentials;
  //   });
  // });

  it("Initial Validations", () => {
    cy.visit("https://example.cypress.io/todo");
    cy.get(".todo-list li")
      .should("have.length", 2)
      .and("contain", "Pay electric bill")
      .and("contain", "Walk the dog");

    cy.get(".todo-list li").eq(0).find("input").click();
    cy.log("Check");

    cy.get(".view label").eq(0).should("have.css", "text-decoration", "line-through solid rgb(205, 205, 205)");
  });

  it("Mocked API response", () => {
    /**intercept ->
     * 1. metodo que intercepta y emula peticiones HTTPS para manejarla por este medio
     * de pruebas en vez de lo que se esta contemplando en la pagina original
     *
     * 2. Se utiliza para avanzar con pruebas UI/BACKEND para simular las peticiones
     * en caso que la información no esta disponible y este en desarrollo.
     */

    cy.intercept("GET", "/todos", {
      fixture: "intercept/interceptFixture.json",
    }).as("GET-TODOS");

    cy.visit("https://example.cypress.io/todo");
    cy.log("Todos");
  });
});
