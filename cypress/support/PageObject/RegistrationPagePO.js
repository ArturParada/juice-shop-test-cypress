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
    get dropListQuestion() {
        return cy.get('#mat-select-2')
    }
    get listboxQuestions() {
        return cy.get('#mat-option-3')
    }

    registerFormSubmission() {
        let randomString = Math.random().toString(36).substring(2)
        const email = "auto_" + randomString + randomString + "@gmail.com"
        const password = "Password1"
        const securityAnswer = "Test"

        this.emailInput.type(email)
        this.paswword.type(password)
        this.repeatPassword.type(password)
        this.asnwer.type(securityAnswer)
        this.dropListQuestion.click()
        this.listboxQuestions.click()
        this.registerBtn.click()

    }

}
export default new RegistrationPage()