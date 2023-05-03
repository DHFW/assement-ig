/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

// Cypress E2E Test
describe("Products page", () => {
  it("should be able to add an item to the wishlist and delete it", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/products");

    // add the first T-shirt to the wishlist
    cy.findAllByTestId("heart").first().click();

    // open the wishlist
    cy.findByTestId("favorites").click();

    cy.findByRole("modal").within(() => {
      // should have the basic tee
      cy.findByText("Basic Tee");
      cy.findByText("Black");
      cy.findAllByTestId("delete").click();
    });

    // reopen the wishlist and check that it has an empty message
    cy.findByTestId("favorites").click();
    cy.findByText(/There are no items on your wishlist yet./);
  });
});

// Prevent TypeScript from reading file as legacy script
export {};
