class HomePage {
    get accountBtn() {
        return cy.get("#navbarAccount")
    }
    get loginBtn() {
        return cy.get('#navbarLoginButton')
    }
    get popupBtn() {
        return cy.get('.close-dialog')
    }
    goHomePage() {
        cy.visit("/")
        this.popupBtn.click()
    }
    goAccountPage() {
        this.accountBtn.click()
        this.loginBtn.click()
    }


}

export default new HomePage()