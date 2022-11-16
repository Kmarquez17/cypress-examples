describe("Sesion de Retry-Ability", () => {
  beforeEach(() => {
    //Comando
    /**
     * visit -> Accede a una URL WEB
     * get -> Accede a los elementos del DOM
     * type -> Escribir en un input
     */

    //Assertion
    /**
     * should ->
     */
    cy.visit("https://example.cypress.io/todo");
    cy.get(".new-todo").type("Todo-A {enter}").type("Todo-B {enter}");
  });

  it("Debe crear 2 items", () => {
    cy.get(".todo-list li", { timeout: 20000 }).should("have.length", 4);
  });

  it("Debe contener el texto indicado", () => {
    cy.get(".todo-list li")
      .should("have.length", 4)
      .should(($li) => {
        expect($li.get(0).textContent, "first-item").to.equal(
          "Pay electric bill"
        );
        expect($li.get(1).textContent, "second-item").to.equal("Walk the dog");
      });
  });

  
});
