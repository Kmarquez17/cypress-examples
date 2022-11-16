let username = "standard_user";
let password = "secret_sauce";

describe("Locators in Cypress", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
  });

  /**
   * get -> busca valores a nivel como si fuera CSS, puede ser en general o especifico
   *
   * Estos metodos normalmente se ocupa cuando tengo varios elementos con el mismo nombre
   * y este me extrae un array de elementos HTML
   *
   * first() -> selecciona el primer valor de lo encontrado en el get/find().
   * eq() -> selecciona el valor por posicion de lo encontrado en el get/find().
   * last() -> selecciona el ultimo valor de lo encontrado en el get/find().
   * filter() -> De lo que se encontro en el get/find(), dichos elementos se pueden filtrar
   * con su atributos de cada uno (type,name,placeholder,id,class etc)
   * find() -> De lo que se encontro en el get, con el metodo find podemos hacer una subBusqueda
   * igual que el get(), y a este mismo se le pueden aplicar los metodos anteriores (first,eq,last,filter)
   */

  it("Get method", () => {
    cy.get("#user-name").type(username);
    cy.get("input#password").type(password);
    cy.get('[data-test="login-button"]').click();
  });

  it("EQ | FIRST | LAST", () => {
    cy.get("input").first().type(username);
    cy.get("input").eq(1).type(password);
    cy.get("input").last().click();
  });

  it("FILTER Method", () => {
    cy.get("input").filter('[type="text"]').type(username);
    cy.get("input").filter('[type="password"]').type(password);
    cy.get("input").filter('[type="submit"]').click();
  });

  it("FIND Method", () => {
    cy.get("form").find("input").eq(0).type(username);
    cy.get("form").find("input").eq(1).type(password);
    cy.get("form").find("input").eq(2).click();
  });

  it("PARENT Method", () => {
    cy.get('form').parent().should('have.class', 'login-box')
  });
});
