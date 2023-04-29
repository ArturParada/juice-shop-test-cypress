class LoginPage {
    get newAccountBtn() {
        return cy.get("#newCustomerLink .primary-link")
    }
    goToRegistartionPage() {
        this.newAccountBtn.click()
    }

}
export default new LoginPage()