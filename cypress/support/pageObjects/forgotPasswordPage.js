class ForgotPasswordPage {

  selectors = {
    usernameInput: 'input[name="username"]',
    resetButton: 'button[type="submit"]',
    cancelButton: 'button[type="button"]',
    successMessage: '.oxd-text--h6',
    requiredMessage: '.oxd-input-group__message',
    forgotPasswordPageHeader: '.orangehrm-forgot-password-title',
    forgotpageHeader: '.oxd-text.oxd-text--p.orangehrm-login-forgot-header',
    forgotLink: 'p.orangehrm-login-forgot-header'    
}

  inputUsername(username) {
    cy.get(this.selectors.usernameInput)
      .should('be.visible')
      .clear()
      .type(username)
  }

  clickReset() {
    cy.get(this.selectors.resetButton).click()
  }

  clickCancel() {
    cy.get(this.selectors.cancelButton).click()
  }
interceptReset(){
    cy.intercept('POST', '**/requestPasswordResetCode').as('resetPassword')

}
  waitReset(){
    cy.wait('@resetPassword', { timeout: 10000 })
  }
//   verifyPageHeader() {
//     // cy.get(this.selectors.forgotpageHeader).should('be.visible')
//     cy.get(this.selectors.forgotpageHeader).should('be.visible')

// }
// clickForgotPassword() {
//    cy.get('div.orangehrm-login-forgot').click()

//   }
    clickForgotPassword() {
        cy.get('div.orangehrm-login-forgot').click()
            // .should('be.visible')  // pastikan element terlihat
            
        // cy.url().should('include', '/requestPasswordResetCode')  // pastikan halaman sudah berubah
    }

    forgot(){
        cy.get(this.selectors.forgotLink).click()
    }

    // verifySuccessMessage() {
    //     cy.contains('Reset Password link sent successfully').should('be.visible')
    // }
    verifySuccess() {
  cy.get(this.selectors.successMessage)
    .should('be.visible')
}


    verifyRequiredValidation() {
        cy.get(this.selectors.requiredMessage)
        .should('be.visible')
        .and('contain', 'Required')
    }
    }

export default new ForgotPasswordPage()
