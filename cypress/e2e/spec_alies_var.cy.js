describe("VARIABLES Y ALIASES", () => {
  beforeEach(() => {
    cy.visit("https://demoqa.com/modal-dialogs");
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });

  // it('Funcionamiento de la variable al retornar valor', () => {
  //   const smallModalText = cy.get('#showSmallModal').text()
  // });

  it("Closures & Variables", () => {
    cy.get("#showSmallModal").then(($modal) => {
      const smallModalText = $modal.text();
      cy.log(smallModalText);

      //Open model
      $modal.click();
      cy.get("#example-modal-sizes-title-sm").contains(smallModalText, {
        matchCase: false,
      });
    });
  });

  it("Aliases", function () {
    //TDD
    cy.get("#showSmallModal").invoke("text").as("invokeText");

    //BDD
    cy.get("#showSmallModal").then(($modal) => {
      const smallModalText = $modal.text();
      cy.wrap(smallModalText).as("wrapText");
    });
  });

  it("Share Context", function () {
    cy.log("invokeText", this.invokeText);
    cy.log("wrapText", this.wrapText);
  });
});
