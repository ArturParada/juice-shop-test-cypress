/// <reference types = "cypress" />


import HomePagePO from "../support/PageObject/HomePagePO";
import RegistrationPagePO from "../support/PageObject/RegistrationPagePO";
import LoginPagePO from "../support/PageObject/LoginPagePO";


describe('Registration test', () => {
    const correctPass = "test123$"
    // before(() => {
    //     HomePagePO.goHomePage()
    //     HomePagePO.goAccountPage()
    // })
    it("Add all product to the basket", () => {
        HomePagePO.goHomePage()
        HomePagePO.goAccountPage()
        LoginPagePO.goToRegistartionPage()
        RegistrationPagePO.registerFormSubmission(correctPass, correctPass)
        LoginPagePO.assertionCorrectRegistration()
        LoginPagePO.loginData("test123$")
        HomePagePO.assertCorrectValueItemsInBasketOnFirstLogin()


        cy.xpath('//button[@aria-label="Add to Basket"]').each(($product, index) => {
            cy.wrap($product).click()
            // cy.wait(1000) // Dodaj pauzę, aby poczekać na ewentualne komunikaty związane z dodaniem produktu do koszyka.
            // cy.log(`Dodano do koszyka produkt nr ${index + 1}`) // Wyświetl log z numerem dodanego produktu.
        })
    })

});

