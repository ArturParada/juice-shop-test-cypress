/// <reference types = "cypress" />

import HomePagePO from "../support/PageObject/HomePagePO";
import LoginPagePO from "../support/PageObject/LoginPagePO";

describe('Registration test', () => {
    it('Create a new account with the correct credentials', () => {
        HomePagePO.goHomePage()
        HomePagePO.goAccountPage()
        LoginPagePO.goToRegistartionPage()
    });
});

