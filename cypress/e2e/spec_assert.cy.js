describe("ASSERTIONS DEMO", () => {
  beforeEach(() => {
    cy.visit("https://demoqa.com/radio-button");
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });

  it("TDD ASSERTIONS", () => {
    cy.log("LENGTH CHECK");
    cy.get("input").filter('[type="radio"]').should("have.length", 3);

    cy.log("CLASS CHECK");
    cy.get("input")
      .filter('[type="radio"]')
      .eq(2)
      .should("have.class", "disabled");

    cy.log("EXIST CHECK");
    cy.get(".mt-3").should("not.exist");

    cy.log("TEXT CHECK");

    cy.get("input").filter('[type="radio"]').eq(0).click({ force: true });
    cy.get(".mt-3")
      .should("have.text", "You have selected Yes")
      .and("include.text", "You have selected")
      .and("contain.text", "Yes")
      .and("not.contain.text", "No");

    cy.get(".text-success").should("have.css", "color", "rgb(40, 167, 69)");
  });

  it("BDD ASSERTIONS", () => {
    cy.log("CLASS / LENGTH CHECK");
    cy.get("input").filter('[type="radio"]').should($input=> {
      expect($input).to.have.length(3)
      expect($input[2]).to.have.class('disabled')
    })

    cy.get("input").filter('[type="radio"]').eq(1).click({ force: true });

    cy.get('.mt-3').should(($element)=> {
      expect($element).to.have.text('You have selected Impressive')
      expect($element).to.include.text('You have selected')
      expect($element).to.contain.text('Impressive')
      expect($element).to.not.include.text('No')
    })
    
  });
});
