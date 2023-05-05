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
    get valueBasketItems() {
        return cy.get('span.fa-layers-counter')
    }
    assertCorrectValueItemsInBasketOnFirstLogin() {
        this.valueBasketItems.should('contain', "0")
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