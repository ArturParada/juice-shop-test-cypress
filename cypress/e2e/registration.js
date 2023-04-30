/// <reference types = "cypress" />

import HomePagePO from "../support/PageObject/HomePagePO";
import LoginPagePO from "../support/PageObject/LoginPagePO";
import RegistrationPagePO from "../support/PageObject/RegistrationPagePO";

describe('Registration test', () => {
    beforeEach(() => {
        HomePagePO.goHomePage()
        HomePagePO.goAccountPage()
        // cy.wait(10000)
        LoginPagePO.goToRegistartionPage()

    })
    it('Create a new account with the correct credentials', () => {
        RegistrationPagePO.registerFormSubmission()
        LoginPagePO.assertionCorrectRegistration()
    });
});

