class LoginPage {

    selectors = {
        username: 'input[name="username"]',
        password: 'input[name="password"]',
        loginButton: 'button[type="submit"]',
        alertError: '.oxd-alert-content',
        requiredError: '.oxd-input-group__message'
    }

    visit() {
        cy.visit('/web/index.php/auth/login')
    }

    inputUsername(username) {
        cy.get(this.selectors.username).clear().type(username)
    }

    inputPassword(password) {
        cy.get(this.selectors.password).clear().type(password)
    }

    loginButton() {
        cy.get(this.selectors.loginButton).click()
    }

    verifyLoginSuccess() {
        cy.url().should('include', '/dashboard')
    }

    verifyLoginFailed() {
        cy.get(this.selectors.alertError)
        .should('be.visible')
        .and('contain', 'Invalid credentials')
    }

  verifyRequiredField() {
    cy.get(this.selectors.requiredError)
      .should('contain', 'Required')
  }
  verifyMultipleRequiredFields() {
  cy.get(this.selectors.requiredError)
    .should('have.length.at.least', 1)
}
}

export default new LoginPage()
