class LoginPage {
  fillSignInForm(email, password) {
    cy.get("#email").should("exist").clear().type(email);
    cy.get("#pass").should("exist").clear().type(password);
  }

  submitSignInForm() {
    cy.get("#send2").should("exist").click();
  }

  verifyLoggedIn() {
    cy.get(".customer-name").should("exist").should("be.visible");
  }

  checkEmailValidation() {
    cy.get("#email-error")
      .should("exist")
      .should("contain", "Please enter a valid email address");
  }

  emailPasswordCheck() {
    cy.get(".message-error")
      .should("exist")
      .should(
        "contain",
        "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later."
      );
  }
}

export default LoginPage;
