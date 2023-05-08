/// <reference types = "cypress" />

import HomePagePO from "../support/PageObject/HomePagePO";
import LoginPagePO from "../support/PageObject/LoginPagePO";
import RegistrationPagePO from "../support/PageObject/RegistrationPagePO";


describe('Registration test', () => {
    const correctPass = "test123$"
    const wrongPass = "test"
    let counter = 0

    beforeEach(() => {
        HomePagePO.goHomePage()
        HomePagePO.goAccountPage()
        counter++
        if (counter <= 2) {
            LoginPagePO.goToRegistartionPage()
        }

        //Here I have overwritten the email in loginData.json using the email generated in previous test cases, the password was taken from json too. I know this is not good practice, but I  trained in overwriting json.file
        LoginPagePO.takeDataFromFixtureLoginDataJsonAndOverwritte()
    })
    it('Create a new account with the correct credentials', () => {
        RegistrationPagePO.registerFormSubmission(correctPass, correctPass)
        LoginPagePO.assertionCorrectRegistration()
    });
    it('Create a new account with weak password credentials', () => {
        RegistrationPagePO.registerFormSubmission(wrongPass, wrongPass)
        RegistrationPagePO.weakPasswordErrorAssertion()

    });
    //This will only pass when you execution previous test case. Logindata method use emails recaived in prevoius test cases
    it('Login with email from earlier test', () => {
        LoginPagePO.loginData("test123$")
        HomePagePO.assertCorrectValueItemsInBasketOnFirstLogin()
    });
    //This will only pass when you execution previous test case. Logindata method use emails recaived in prevoius test cases
    it('Login with an email from the earlier test which was overwrite in file loginData.json', () => {
        LoginPagePO.loginDataFromJson()
        HomePagePO.assertCorrectValueItemsInBasketOnFirstLogin()

    });
    it("Add all product to the basket", () => {
        cy.get('//button[@aria-label="Add to Basket"]').each(($product) => {
            wrap($product).click()
        })
    })

});

