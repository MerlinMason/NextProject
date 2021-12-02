describe("Home", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.injectAxe(); // load in a11y testing
    });

    it("Should have no accessibility issues", () => {
        cy.checkA11y();
    });

    it("Should list Cypress as a feature", () => {
        cy.findByText("Cypress (with Testing Library and A11y tests)").should("exist");
    });
});
