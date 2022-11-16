const url = "https://jsonplaceholder.typicode.com/posts";

let postPOST = {
  userId: 1,
  title: "Cypress Test Runner",
  body: "Cypress Test Runner DES",
};

let postGetID = {
  userId: 1,
  id: 1,
  title:
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
};

const addTodo = (postPOST) => {
  return cy.request("POST", url, postPOST);
};

const updateTodo = (updatePOST) => {
  updatePOST.title = "Cypress Test Runner 2 ";
  return cy.request("PUT", `${url}/${updatePOST.userId}`, updatePOST);
};

describe("API TESTING DEMO", () => {
  it("Add post", () => {
    addTodo(postPOST).then((response) => {
      expect(response).property("status").to.equal(201);
      expect(response).property("body").to.contain({
        title: "Cypress Test Runner",
      });
    });

    cy.request("GET", `https://jsonplaceholder.typicode.com/posts/1`)
      .its("body")
      .should("deep.eq", postGetID);
  });

  it("Update post", () => {
    updateTodo(postPOST);    

    cy.request("GET", `https://jsonplaceholder.typicode.com/posts/1`)
      .its("body")
      .should("deep.eq", postGetID);
  });
});
