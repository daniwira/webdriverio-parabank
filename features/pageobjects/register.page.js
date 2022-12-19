import Page from "./page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegisterPage extends Page {
  /**
   * define selectors using getter methods
   */

   get registBtn() {
    return $("#loginPanel > p:nth-child(3) > a");
  }

   get inputFirstName() {
    return $('input[name="customer.firstName"]');
  }

   get inputLastName() {
    return $('input[name="customer.lastName"]');
  }

   get inputAddress() {
    return $('input[name="customer.address.street"]');
  }

   get inputCity() {
    return $('input[name="customer.address.city"]');
  }

   get inputState() {
    return $('input[name="customer.address.state"]');
  }

   get inputZipCode() {
    return $('input[name="customer.address.zipCode"]');
  }

   get inputPhone() {
    return $('input[name="customer.phoneNumber"]');
  }

   get inputSsn() {
    return $('input[name="customer.ssn"]');
  }

   get inputUsername() {
    return $('input[name="customer.username"]');
  }

   get inputPassword() {
    return $('input[name="customer.password"]');
  }

   get inputConfirm() {
    return $('input[name="repeatedPassword"]');
  }

   get btnSubmit() {
    return $(
      "#customerForm > table > tbody > tr:nth-child(13) > td:nth-child(2) > input"
    );
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to register using fistName, lastName, address, city, state, zipCode, phone, ssn,
   *                        username, password and confirmPassword
   */
   async register(
    firstName,
    lastName,
    address,
    city,
    state,
    zipCode,
    phone,
    ssn,
    username,
    password,
    confirmPassword
  ) {
    await this.inputFirstName.setValue(firstName);
    await this.inputLastName.setValue(lastName);
    await this.inputAddress.setValue(address);
    await this.inputCity.setValue(city);
    await this.inputState.setValue(state);
    await this.inputZipCode.setValue(zipCode);
    await this.inputPhone.setValue(phone);
    await this.inputSsn.setValue(ssn);

    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.inputConfirm.setValue(confirmPassword);
    await this.btnSubmit.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
   open() {
    return super.open('register');
  }
}

export default new RegisterPage();