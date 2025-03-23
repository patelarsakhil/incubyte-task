class CreateAccountPage {
  fillAccountForm(firstName, lastName, email, password, confirm_password) {
    cy.get("#firstname").should("exist").clear().type(firstName);
    cy.get("#lastname").should("exist").clear().type(lastName);
    cy.get("#email_address").should("exist").clear().type(email);
    cy.get("#password").should("exist").clear().type(password);
    cy.get("#password-confirmation")
      .should("exist")
      .clear()
      .type(confirm_password);
  }

  submitAccountForm() {
    cy.get("button[title='Create an Account']")
      .should("exist")
      .should("contain", "Create an Account")
      .click();
  }

  checkEmailValidation() {
    cy.get("#email_address-error")
      .should("exist")
      .should(
        "contain",
        "Please enter a valid email address (Ex: johndoe@domain.com)"
      );
  }

  validatePasswordStrength() {
    // password strength is weak having minimum requrements not matching
    cy.get("#password-error")
      .should("exist")
      .should(
        "contain",
        "Minimum"
      );
  }

  validateConfirmPassword() {
    cy.get("#password-confirmation-error")
      .should("exist")
      .should("contain", "Please enter the same value again");
  }

  verifySuccessMessage() {
    cy.get(".message-success")
      .should("exist")
      .should("contain", "Thank you for registering");
  }
}

export default CreateAccountPage;
