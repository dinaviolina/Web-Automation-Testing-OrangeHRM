import LoginPage from "../support/pageObjects/loginPage"

import forgotPasswordPage from "../support/pageObjects/forgotPasswordPage"
// import dashboardPage from "../support/pageObjects/dashboardPage"
import testData from "../fixtures/testData.json"
describe('Forgot Password - Orange HRM', ()=>{
    beforeEach(() => {
    // buka login page
    LoginPage.visit()
    forgotPasswordPage.clickForgotPassword()
    // intercept API reset password
    cy.intercept('POST', '**/requestPasswordResetCode').as('resetPassword')
    // forgotPasswordPage.verifyForgotPasswordPage()
})
            
    it('1. TC_FPW_001 Navigation and from validation',()=>{
        cy.url().should('include', '/requestPasswordResetCode')
        // forgotPasswordPage.verifyPageHeader()
    })

    it('2. TC_FPW_002 Reset password using valid username',()=>{
        
        forgotPasswordPage.inputUsername(testData.validUsername)
        // cy.intercept('**/sendPasswordReset').as('resetPwUsername')
        forgotPasswordPage.clickReset()
        cy.wait('@resetPassword', { timeout: 10000 }).then((interception) => {
        console.log('Intercept response:', interception.response)
        expect(interception.response.statusCode).to.eq(200)
        })
        forgotPasswordPage.verifySuccessMessage()
    })

    it('3. TC_FPW_003 Reset password using invalid username',()=>{
        
        forgotPasswordPage.inputUsername(testData.invalidUsername)
        forgotPasswordPage.clickReset()
        cy.wait('@resetPassword', { timeout: 10000 }).then((interception) => {
        console.log('Intercept response:', interception.response)
        expect(interception.response.statusCode).to.eq(200)
        })
        forgotPasswordPage.verifySuccessMessage()
    })

    it('4. TC_FPW_004 Reset password using character special',()=>{
        
        forgotPasswordPage.inputUsername('@#@')
        
        forgotPasswordPage.clickReset()
        cy.wait('@resetPassword', { timeout: 10000 }).then((interception) => {
        console.log('Intercept response:', interception.response)
        expect(interception.response.statusCode).to.eq(200)
        })
        forgotPasswordPage.verifySuccessMessage()

    })
    it('5. TC_FPW_005 Click Button Cancel',()=>{
        forgotPasswordPage.clickCancel()
        cy.url().should('include', '/auth/login')
    })
    it('6. TC_FPW_006 Refresh forgot password page', () => {
        cy.reload()
        cy.get('input[name="username"]').should('have.value', '')
    })

    it('7. TC_FPW_007 Submit empty username (required validation)', () => {
        forgotPasswordPage.clickReset()
        forgotPasswordPage.verifyRequiredValidation()
    })

    it('8. TC_FPW_008 Reset password using numeric username', () => {
        forgotPasswordPage.inputUsername('123456')
        
        forgotPasswordPage.clickReset()
        cy.wait('@resetPassword', { timeout: 10000 }).then((interception) => {
        console.log('Intercept response:', interception.response)
        expect(interception.response.statusCode).to.eq(200)
        })
        forgotPasswordPage.verifySuccessMessage()

    })

    it('9. TC_FPW_009 Reset password using username with space', () => {
        forgotPasswordPage.inputUsername(' Admin ')
        forgotPasswordPage.clickReset()
        cy.wait('@resetPassword', { timeout: 10000 }).then((interception) => {
        console.log('Intercept response:', interception.response)
        expect(interception.response.statusCode).to.eq(200)
        })
        forgotPasswordPage.verifySuccessMessage()
    })


    it('10. TC_FPW_010 Navigate back after forgot password page', () => {
        cy.go('back')
        cy.url().should('include', '/auth/login')
    })
})