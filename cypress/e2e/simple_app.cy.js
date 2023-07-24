describe("Simple App Test", () => {
  it("Visits the app and checks the content", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Hello, this is a super simple web application!");
  });
});
