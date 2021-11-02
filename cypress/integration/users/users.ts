describe("Users module", () => {
  it("Open user profile", () => {
    cy.visit("/");
    cy.get("[data-test-id=userItem]").first().find("a").first().click();
  });
});
