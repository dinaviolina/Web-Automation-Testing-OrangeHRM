import LoginPage from "../support/pageObjects/loginPage"
// import forgotPasswordPage from "../support/pageObjects/forgotPasswordPage"
// import dashboardPage from "../support/pageObjects/dashboardPage"
import testData from "../fixtures/testData.json"

describe('API Automation using Cypress - Orange HRM', ()=>{
    beforeEach(()=>{
        LoginPage.visit()
    })
    it('1. TC_LOG_001 Login Username and Password Valid', ()=>{
        cy.intercept('GET', '**/dashboard/**').as('dashboard')
        LoginPage.visit()
        LoginPage.inputUsername(testData.validUsername)
        LoginPage.inputPassword(testData.validPassword)
        LoginPage.loginButton()
        cy.wait('@dashboard')
        LoginPage.verifyLoginSuccess()
    })
    it('2. TC_LOG_002 Login Username valid and Password Invalid (Negative)', ()=>{
        LoginPage.visit()
        LoginPage.inputUsername(testData.validUsername)
        LoginPage.inputPassword(testData.invalidPassword)
        LoginPage.loginButton()
        LoginPage.verifyLoginFailed()
    })
    it('3. TC_LOG_003 Login with Username Starting with Leading Space (Negative)', ()=>{
        LoginPage.visit()
        LoginPage.inputUsername(testData.spaceUsername)
        LoginPage.inputPassword(testData.validPassword)
        LoginPage.loginButton()
        LoginPage.verifyLoginFailed()
    })
    
    it('4. TC_LOG_004 Password Uppercase', ()=>{
        LoginPage.visit()
        LoginPage.inputUsername(testData.validUsername)
        LoginPage.inputPassword(testData.uppercasePassword)
        LoginPage.loginButton()
        LoginPage.verifyLoginFailed()
    })
    it('5. TC_LOG_005 Login Wrong Username and Password', ()=>{
        LoginPage.visit()
        LoginPage.inputUsername(testData.invalidUsername)
        LoginPage.inputPassword(testData.invalidPassword)
        LoginPage.loginButton()
        LoginPage.verifyLoginFailed()
    })
    it('6. TC_LOG_006 Login Username and Password Valid')
    it('7. TC_LOG_007 Login Username and Password Valid')
    it('8. TC_LOG_008 Login Username and Password Valid')
    it('9. TC_LOG_009 Login Username and Password Valid')
    it('10. TC_LOG_010 Login Username and Password Valid')
})

