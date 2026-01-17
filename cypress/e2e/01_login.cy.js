import LoginPage from "../support/pageObjects/loginPage"
import testData from "../fixtures/testData.json"

describe('API Automation using Cypress - Orange HRM Login', () => {

    beforeEach(() => {
        LoginPage.visit()
    })

    it('1. TC_LOG_001 Login Username and Password Valid', () => {
        
        LoginPage.inputUsername(testData.validUsername)
        LoginPage.inputPassword(testData.validPassword)
        cy.intercept('GET', '**/api/v2/dashboard/**').as('dashboardAPI')
        LoginPage.loginButton()

        cy.wait('@dashboardAPI')
        LoginPage.verifyLoginSuccess()
    })

    it('2. TC_LOG_002 Login Username valid and Password Invalid', () => {
        LoginPage.inputUsername(testData.validUsername)
        LoginPage.inputPassword(testData.invalidPassword)
        LoginPage.loginButton()
        LoginPage.verifyLoginFailed()
    })

    it('3. TC_LOG_003 Username with Leading Space', () => {
        LoginPage.inputUsername(testData.spaceUsername)
        LoginPage.inputPassword(testData.validPassword)
        LoginPage.loginButton()
        LoginPage.verifyLoginFailed()
    })

    it('4. TC_LOG_004 Password Uppercase', () => {
        LoginPage.inputUsername(testData.validUsername)
        LoginPage.inputPassword(testData.uppercasePassword)
        LoginPage.loginButton()
        LoginPage.verifyLoginFailed()
    })

    it('5. TC_LOG_005 Wrong Username and Password', () => {
        LoginPage.inputUsername(testData.invalidUsername)
        LoginPage.inputPassword(testData.invalidPassword)
        LoginPage.loginButton()
        LoginPage.verifyLoginFailed()
    })

    it('6. TC_LOG_006 Username Empty', () => {
        LoginPage.inputPassword(testData.validPassword)
        LoginPage.loginButton()
        LoginPage.verifyMultipleRequiredFields()
    })

    it('7. TC_LOG_007 Password Empty', () => {
        LoginPage.inputUsername(testData.validUsername)
        LoginPage.loginButton()
        LoginPage.verifyRequiredField()
    })

    it('8. TC_LOG_008 Username and Password Empty', () => {
        LoginPage.loginButton()
        LoginPage.verifyRequiredField()
    })

    it('9. TC_LOG_009 Login Valid then Logout', () => {
        
        LoginPage.inputUsername(testData.validUsername)
        LoginPage.inputPassword(testData.validPassword)
        cy.intercept('GET', '**/api/v2/dashboard/**').as('dashboardAPI')
        LoginPage.loginButton()

        cy.wait('@dashboardAPI')
        LoginPage.verifyLoginSuccess()

        cy.get('p.oxd-userdropdown-name').click()
        cy.get('a[href*="auth/logout"]').click()
        cy.url().should('include', '/auth/login')
    })

    it('10. TC_LOG_010 Username Almost Correct', () => {
        LoginPage.inputUsername('Admin1')
        LoginPage.inputPassword(testData.validPassword)
        LoginPage.loginButton()
        LoginPage.verifyLoginFailed()
    })

})
