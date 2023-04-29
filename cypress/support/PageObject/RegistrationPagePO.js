class RegistrationPage {
    get emailInput() {
        return cy.get("#emailControl")
    }

    get paswword() {
        return cy.get("#passwordControl")
    }

    get repeatPassword() {
        return cy.get("#securityAnswerControl")
    }

    get asnwer() {
        return cy.get("#securityAnswerControl")
    }
    get registerBtn() {
        return cy.get("registerButton")
    }
}
export default new RegistrationPage()