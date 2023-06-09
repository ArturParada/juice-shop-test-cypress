/// <reference types = "cypress" />

import HomePagePO from "../support/PageObject/HomePagePO";
import LoginPagePO from "../support/PageObject/LoginPagePO";
import RegistrationPagePO from "../support/PageObject/RegistrationPagePO";


describe('Registration and Login test', () => {
    const correctPass = "test123$"
    const wrongPass = "test"
    let counter = 0


    describe("UI Tests", () => {
        beforeEach(() => {
            HomePagePO.goHomePage()
            HomePagePO.closePopUp()
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
            LoginPagePO.loginData(correctPass)
            HomePagePO.assertCorrectValueItemsInBasketOnFirstLogin()
        });
        //This will only pass when you execution previous test case. Logindata method use emails recaived in prevoius test cases
        it('Login with an email from the earlier test which was overwrite in file loginData.json', () => {
            LoginPagePO.loginDataFromJson()
            HomePagePO.assertCorrectValueItemsInBasketOnFirstLogin()
        });

    })
    describe('API test', () => {

        it('Login Via API', () => {
            const userCredentials = {
                "email": RegistrationPagePO.emailData[0],
                "password": correctPass
            }
            cy.request("POST", 'http://localhost:3000/rest/user/login', userCredentials).then(response => {
                expect(response.status).to.eq(200)
            })
        });
        it('Login Via API TOKEN', () => {
            const userCredentials = {
                "email": RegistrationPagePO.emailData[0],
                "password": correctPass
            }
            cy.request("POST", 'http://localhost:3000/rest/user/login', userCredentials).its('body').then(body => {
                const token = body.authentication.token
                cy.wrap(token).as('userToken')
                cy.log('@userToken')

                //inject token to the browser
                const userToken = cy.get("@userToken")
                cy.visit('http://localhost:3000/', {
                    onBeforeLoad(browser) {
                        browser.localStorage.setItem("token", userToken)
                    }
                })
                cy.wait(2000)
                HomePagePO.closePopUp()
                HomePagePO.assertCorrectValueItemsInBasketOnFirstLogin()
            })

        });
    });
});



