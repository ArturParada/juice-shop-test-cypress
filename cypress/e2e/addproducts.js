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
    it("Registration, Login and Add all product to the basket", () => {
        HomePagePO.goHomePage()
        HomePagePO.goAccountPage()
        LoginPagePO.goToRegistartionPage()
        RegistrationPagePO.registerFormSubmission(correctPass, correctPass)
        LoginPagePO.assertionCorrectRegistration()
        LoginPagePO.loginData("test123$")
        HomePagePO.assertCorrectValueItemsInBasketOnFirstLogin()

        //Here I'm use command.js
        cy.selectAllProduct(11)
    })

});

