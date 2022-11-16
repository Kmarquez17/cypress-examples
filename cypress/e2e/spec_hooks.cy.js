//Hooks son de Mocha

/**
 * 1. before() -> Una sola vez al principio
 * 
 * --TEST 1
 * 2. beforeEach() -> Al inicio de cada test
 * 3. TEST EXECUTION
 * 4. afterEach() -> Al final  de cada test
 * 
 * --TEST 2
 * 5. beforeEach() -> Al inicio de cada test
 * 6. TEST EXECUTION
 * 7. afterEach() -> Al final de cada test
 * 
 * 8. after() -> Una sola vez al final
 */

//Skip funcionan para (describe,context, it) -> Evita ejecuar X Test

describe("Demo Hooks", () => {
  before(() => {
    cy.log("Before");
  });

  beforeEach(() => {
    cy.log("beforeEach");
  });

  it("Should be test #1", () => {
    console.log("Test #1");
  });

  it("Should be test #2", () => {
    console.log("Test #2");
  });

  it.skip("Should be test #3", () => {
    console.log("Test #3");
    expect(1+1).to.equal(2)
  });

  afterEach(() => {
    cy.log("afterEach");
  });

  after(() => {
    cy.log("after");
  });
});
