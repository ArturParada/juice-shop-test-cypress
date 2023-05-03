class RegistrationPage {

    get emailInput() {
        return cy.get("#emailControl")
    }
    get paswword() {
        return cy.get("#passwordControl")
    }
    get repeatPassword() {
        return cy.get("#repeatPasswordControl")
    }
    get asnwer() {
        return cy.get("#securityAnswerControl")
    }
    get registerBtn() {
        return cy.get("#registerButton")
    }
    get dropListQuestions() {
        return cy.get('#mat-select-2')
    }
    get selectQuestion() {
        return cy.get('#mat-option-3')
    }
    get weakPasswordError() {
        return cy.get('#mat-error-9')
    }
    weakPasswordErrorAssertion() {
        this.weakPasswordError.should("be.visible")
    }

    registerFormSubmission(password, repeatPassword) {
        const randomString = Math.random().toString(36).substring(2)
        const email = "auto_" + randomString + randomString + "@gmail.com"
        const securityAnswer = "Test"

        this.emailInput.type(email)
        this.paswword.type(password)
        this.repeatPassword.type(repeatPassword)
        this.asnwer.type(securityAnswer)
        this.dropListQuestions.click()
        this.selectQuestion.click()
        if (password.length > 5) {
            this.registerBtn.click()
        }

    }

}
export default new RegistrationPage()