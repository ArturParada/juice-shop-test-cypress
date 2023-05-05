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
        /// modification loginData.json file, here I use lodash library.I take new email adres from RegistrationPagePO.emailData[0] 
        cy.fixture('loginData.json').then((loginData) => {
            const newLoginData = Cypress._.merge(loginData, {
                email: RegistrationPagePO.emailData[0],
                name: "artur"
            });

            cy.wrap(newLoginData).as('newLoginData');
        });
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
    it('Login with an email from data which was changed in file loginData.json', () => {
        cy.get('@newLoginData').then((newLoginData) => {
            cy.log(`Email: ${newLoginData.email}`);
            cy.log(`Name: ${newLoginData.name}`);
            cy.log(`Name: ${newLoginData.body}`);

        });
    });
});

