Feature: Para Bank Register Feature

  Scenario Outline: As a new customer, I can register into the Para Bank Website
    Given I am on the register page
    When I register with <firstName> and <lastName> and <address> and <city> and <state> and <zipCode> and <phone> and <ssn> and <username> and <password> and <confirmPassword>
    Then I should see a text on the Register result saying <message>

    Examples: 
      | firstName | lastName  | address    | city          | state     | zipCode  | phone | ssn   | username     | password | confirmPassword | message                       |
      | dani1     | wira      | langkapura | bandarlampung | indonesia |    35155 |       | 35155 | da678909     | daniw1r4 | daniw1r4        | Welcome                       |  
      | dani      | wira      | langkapura | bandarlampung | indonesia |    35155 |       | 35155 | daniwira457  | password | password1ß      | Passwords did not match.      |
      | dani      | wira      | langkapura | bandarlampung | indonesia |    35155 |       | 35155 | daniwira45   | daniw1r4 | daniw1r4        | This username already exists. |