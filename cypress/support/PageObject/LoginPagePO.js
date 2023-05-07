import RegistrationPagePO from "./RegistrationPagePO"

class LoginPage {
    get newAccountBtn() {
        return cy.get('#newCustomerLink > .primary-link')
    }
    get correctRegistrationPopUp() {
        return cy.get('.mat-simple-snack-bar-content')
    }
    get emailInput() {
        return cy.get("#email")
    }
    get passwordInput() {
        return cy.get("#password")
    }
    get loginBtn() {
        return cy.get("#loginButton")
    }

    loginData(password) {
        this.emailInput.type(RegistrationPagePO.emailData[0])
        console.log(RegistrationPagePO.emailData);
        this.passwordInput.type(password)
        this.loginBtn.click()

    }
    takeDataFromFixtureLoginDataJson() {
        cy.fixture('loginData.json').then((loginData) => {
            const newLoginData = Cypress._.merge(loginData, {
                email: RegistrationPagePO.emailData[0],
                name: "artur"
            });

            cy.wrap(newLoginData).as('newLoginData');
        });
    }
    loginDataFromJson(password) {
        cy.get('@newLoginData').then((newLoginData) => {
            // cy.log(`Email: ${newLoginData.email}`);
            this.emailInput.type(newLoginData.email)
            this.passwordInput.type(password)
            this.loginBtn.click()
        });
    }
    goToRegistartionPage() {
        this.newAccountBtn.click({ force: true })
    }
    assertionCorrectRegistration() {
        this.correctRegistrationPopUp.should("contain", "Registration completed successfully. You can now log in.")
    }

}
export default new LoginPage()