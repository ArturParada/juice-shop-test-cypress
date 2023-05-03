/// <reference types = "cypress" />

import HomePagePO from "../support/PageObject/HomePagePO";
import LoginPagePO from "../support/PageObject/LoginPagePO";
import RegistrationPagePO from "../support/PageObject/RegistrationPagePO";

describe('Registration test', () => {
    beforeEach(() => {
        HomePagePO.goHomePage()
        HomePagePO.goAccountPage()
        LoginPagePO.goToRegistartionPage()

    })
    it('Create a new account with the correct credentials', () => {
        RegistrationPagePO.registerFormSubmission("test123$", "test123$")
        LoginPagePO.assertionCorrectRegistration()
    });
    it('Create a new account with weak password credentials', () => {
        RegistrationPagePO.registerFormSubmission("test", "test")
        RegistrationPagePO.weakPasswordErrorAssertion()

    });
});

