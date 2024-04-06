describe("Home Page", () => {
  it("", () => {
    cy.visit("http://localhost:3000");

    cy.contains("Obrigado").click();

    cy.get("[data-cy-message]").should("exist");

    cy.get("[data-cy-ver-mais]").click();
    cy.get("[data-cy-ver-mais]").click();

    cy.get("[data-cy-message]").should("have.length", 1);
  });
});
