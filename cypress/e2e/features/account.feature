Feature: Account Management on Magento Demo Store

  Scenario: Create a new account and sign in
    Given I am on the Magento home page
    When I navigate to the create account page
    And I fill in the account creation form with invalid email
    And I fill in the account creation form with weak password strength
    And I fill in the account creation form with different confirm password
    And I fill in the account creation form with valid details
    And I submit the account creation form
    Then I should see a success message
    When I sign out
    And I navigate to the sign-in page
    And I enter the incorrect email to sign-in
    And I enter the unregistered email to sign-in
    And I enter the newly created account credentials with incorrect password
    And I enter the newly created account with correct credentials
    And I submit the sign-in form
    Then I should be logged in successfully