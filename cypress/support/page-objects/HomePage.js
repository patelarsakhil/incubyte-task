class HomePage {
  visit() {
    cy.visit("/");
  }

  goToCreateAccount() {
    cy.get(".panel > .header > :nth-child(3) > a")
      .should('exist')
      .should("contain", "Create an Account")
      .click();
  }

  goToSignIn() {
    cy.get(".panel > .header > .authorization-link > a")
      .should('exist')
      .should("contain", "Sign In")
      .click();
  }

  signOut() {
    cy.get(
      ":nth-child(2) > .customer-welcome > .customer-name > .action"
    ).should('exist').click();
    cy.get(
      ":nth-child(2) > .customer-welcome > .customer-menu > .header > .authorization-link > a"
    )
      .should('exist')
      .should("contain", "Sign Out")
      .click({ force: true });
  }
}

export default HomePage;
