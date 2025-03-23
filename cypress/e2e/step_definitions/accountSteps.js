import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../support/page-objects/HomePage";
import CreateAccountPage from "../../support/page-objects/CreateAccountPage";
import LoginPage from "../../support/page-objects/LoginPage";

const homePage = new HomePage();
const createAccountPage = new CreateAccountPage();
const loginPage = new LoginPage();

const firstName = "Akhil"
const lastName = "Patel"
const password = "Password123!"
const uniqueEmail = `testuser${Date.now()}@example.com`; // Unique email for each run
const userName = `testuser${Date.now()}`; // Unique incorrect email for each run
const unregisteredEmail = `${userName}@domain.com`; // Unregistered email for each run

Given("I am on the Magento home page", () => {
  homePage.visit();
});

When("I navigate to the create account page", () => {
  homePage.goToCreateAccount();
});

When("I fill in the account creation form with invalid email", () => {
  createAccountPage.fillAccountForm(
    firstName,
    lastName,
    userName,
    password,
    password
  );
  // click on submit button to verify
  createAccountPage.submitAccountForm();
  // validates that entred email is valid email or not
  createAccountPage.checkEmailValidation();
});

When("I fill in the account creation form with weak password strength", () => {
  createAccountPage.fillAccountForm(
    firstName,
    lastName,
    uniqueEmail,
    "Password",
    password
  );
  // click on submit button to verify
  createAccountPage.submitAccountForm();
  // validates that entred password strength is good or weak
  createAccountPage.validatePasswordStrength();
});

When(
  "I fill in the account creation form with different confirm password",
  () => {
    createAccountPage.fillAccountForm(
      firstName,
      lastName,
      uniqueEmail,
      "Password@123",
      password
    );
    // click on submit button to verify
    createAccountPage.submitAccountForm();
    // validates that entred password and confrm password are matching or not
    createAccountPage.validateConfirmPassword();
  }
);

When("I fill in the account creation form with valid details", () => {
  createAccountPage.fillAccountForm(
    firstName,
    lastName,
    uniqueEmail,
    password,
    password
  );
});

When("I submit the account creation form", () => {
  createAccountPage.submitAccountForm();
});

Then("I should see a success message", () => {
  // verify that user account successfully created account an logged in
  createAccountPage.verifySuccessMessage();
});

When("I sign out", () => {
  homePage.signOut();
});

When("I navigate to the sign-in page", () => {
  homePage.goToSignIn();
});

When("I enter the incorrect email to sign-in", () => {
  loginPage.fillSignInForm(userName, password);
  // click on submit button to verify
  loginPage.submitSignInForm();
  // validates that entered email is valid or not
  loginPage.checkEmailValidation();
});

When("I enter the unregistered email to sign-in", () => {
  loginPage.fillSignInForm(unregisteredEmail, password);
  // click on submit button to verify
  loginPage.submitSignInForm();
  // validates that entered email is already registered or not
  loginPage.emailPasswordCheck();
});

When(
  "I enter the newly created account credentials with incorrect password",
  () => {
    loginPage.fillSignInForm(uniqueEmail, "Password12");
    // click on submit button to verify
    loginPage.submitSignInForm();
    // validates that entred password is correct for respective email registered or not
    loginPage.emailPasswordCheck();
  }
);

When("I enter the newly created account with correct credentials", () => {
  loginPage.fillSignInForm(uniqueEmail, password);
});

When("I submit the sign-in form", () => {
  // click on submit button and user logged-in
  loginPage.submitSignInForm();
});

Then("I should be logged in successfully", () => {
  // verify that usser successfully logged-in
  loginPage.verifyLoggedIn();
});
