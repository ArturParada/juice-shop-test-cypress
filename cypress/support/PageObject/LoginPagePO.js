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
    goToRegistartionPage() {
        this.newAccountBtn.click({ force: true })
    }
    assertionCorrectRegistration() {
        this.correctRegistrationPopUp.should("contain", "Registration completed successfully. You can now log in.")
    }

}
export default new LoginPage()