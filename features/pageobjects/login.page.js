import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#loginPanel > form > div:nth-child(2) > input');
    }

    get inputPassword () {
        return $('#loginPanel > form > div:nth-child(4) > input');
    }

    get btnSubmit () {
        return $('#loginPanel > form > div:nth-child(5) > input');
    }
   
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('index');
    }
}

export default new LoginPage();
