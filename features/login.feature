Feature: Para Bank Login Feature

  Scenario Outline: As a user, I can log into the Parabank Accounts Service Page
    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a text saying <message>

    Examples: 
      | username          | password | message           |
      | invalidUsername   | password | Error!            |
      | daniwira45        | daniw1r4 | Accounts Overview |