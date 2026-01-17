    import LoginPage from "../support/pageObjects/loginPage"
    import ForgotPasswordPage from "../support/pageObjects/forgotPasswordPage"
    import testData from "../fixtures/testData.json"

    describe('Forgot Password - Orange HRM', () => {

    beforeEach(() => {
        // buka login page
        LoginPage.visit()

        // navigasi ke forgot password page
        ForgotPasswordPage.clickForgotPassword()

        // pastikan sudah di halaman forgot password
        cy.url().should('include', '/requestPasswordResetCode')
    })

    it('1. TC_FPW_001 Navigation and form validation', () => {
        ForgotPasswordPage.verifyForgotPasswordPage()
    })

    it('2. TC_FPW_002 Reset password using valid username', () => {
        ForgotPasswordPage.inputUsername(testData.validUsername)
        ForgotPasswordPage.clickReset()
        ForgotPasswordPage.verifySuccessMessage()
    })

    it('3. TC_FPW_003 Reset password using invalid username', () => {
        ForgotPasswordPage.inputUsername(testData.invalidUsername)
        ForgotPasswordPage.clickReset()
        ForgotPasswordPage.verifySuccessMessage()
    })

    it('4. TC_FPW_004 Reset password using special character', () => {
        ForgotPasswordPage.inputUsername('@#@')
        ForgotPasswordPage.clickReset()
        ForgotPasswordPage.verifySuccessMessage()
    })

    it('5. TC_FPW_005 Click Cancel button', () => {
        ForgotPasswordPage.clickCancel()
        cy.url().should('include', '/auth/login')
    })

    it('6. TC_FPW_006 Refresh forgot password page', () => {
        cy.reload()
        ForgotPasswordPage.usernameInputShouldBeEmpty()
    })

    it('7. TC_FPW_007 Submit empty username (required validation)', () => {
        ForgotPasswordPage.clickReset()
        ForgotPasswordPage.verifyRequiredValidation()
    })

    it('8. TC_FPW_008 Reset password using numeric username', () => {
        ForgotPasswordPage.inputUsername('123456')
        ForgotPasswordPage.clickReset()
        ForgotPasswordPage.verifySuccessMessage()
    })

    it('9. TC_FPW_009 Reset password using username with space', () => {
        ForgotPasswordPage.inputUsername(' Admin ')
        ForgotPasswordPage.clickReset()
        ForgotPasswordPage.verifySuccessMessage()
    })

    it('10. TC_FPW_010 Navigate back after forgot password page', () => {
        cy.go('back')
        cy.url().should('include', '/auth/login')
    })
    })
