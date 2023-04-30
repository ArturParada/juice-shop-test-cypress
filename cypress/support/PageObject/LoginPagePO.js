class LoginPage {
    get newAccountBtn() {
        return cy.get('#newCustomerLink > .primary-link')
    }
    get correctRegistrationPopUp() {
        return cy.get('.mat-simple-snack-bar-content')
    }
    goToRegistartionPage() {
        this.newAccountBtn.click({ force: true })
    }
    assertionCorrectRegistration() {
        this.correctRegistrationPopUp.should("contain", "Registration completed successfully. You can now log in.")
    }

}
export default new LoginPage()