class ForgotPasswordPage {
    selectors = {
        usernameInput: 'input[name="username"]',
        resetButton: 'button[type="submit"]',
        cancelButton: 'button[type="button"]',
        successMessage: '.oxd-text--h6',
        requiredMessage: '.oxd-input-group__message',
        pageHeader: '.orangehrm-forgot-password-title',
        forgotLink: 'div.orangehrm-login-forgot'
    }

    clickForgotPassword() {
        cy.get(this.selectors.forgotLink)
        .should('be.visible')
        .click()
    }

    verifyForgotPasswordPage() {
        cy.get(this.selectors.pageHeader)
        .should('be.visible')
        .and('contain', 'Reset Password')
    }

    inputUsername(username) {
        cy.get(this.selectors.usernameInput)
        .should('be.visible')
        .clear()
        .type(username)
    }

    clickReset() {
        cy.get(this.selectors.resetButton)
        .should('be.enabled')
        .click()
    }

    clickCancel() {
        cy.get(this.selectors.cancelButton)
        .should('be.visible')
        .click()
    }

    verifySuccessMessage() {
        cy.contains('Reset Password link sent successfully')
        .should('be.visible')
    }

    verifyRequiredValidation() {
        cy.get(this.selectors.requiredMessage)
        .should('be.visible')
        .and('contain', 'Required')
    }

    usernameInputShouldBeEmpty() {
        cy.get(this.selectors.usernameInput)
        .should('have.value', '')
    }

    }

    export default new ForgotPasswordPage()
