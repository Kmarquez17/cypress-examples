describe("Write/Read fixure Demo", function () {
  const filePath = "cypress/fixtures/read-write/read-write.json";

  it("Add the request API JSON", () => {
    cy.request("GET", `https://jsonplaceholder.typicode.com/posts/`).then(
      (response) => {
        cy.log("Response", response.body[0]);
        cy.writeFile(filePath, response.body);
      }
    );
  });

  it("Add more request the JSON", () => {
    cy.request("GET", `https://jsonplaceholder.typicode.com/posts/99`)
      .its("body")
      .then((data) => {
        cy.log(data);
        cy.readFile(filePath).then((post) => {
          cy.log(post)
          post.push(data);
          cy.writeFile(filePath, post);
        });
      });
    // .each((data) => {
    //
    // });
  });
});
