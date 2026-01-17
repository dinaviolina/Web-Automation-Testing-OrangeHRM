// POM Login 
class LoginPage{

    // Selectors
    selectors ={
        username: 'input[name="username"]',
        password:'input[name="password"]',
        loginbutton: 'button[type="submit"]',
        errorMessage: '.oxd-alert-content.oxd-alert-content--error',
        // alert : '.oxd-alert',
        // usernameError:  ":nth-child(2)> .oxd-input-group > .oxd-text"
    }   
    // Navigate
    visit(){
        cy.visit('/web/index.php/auth/login')
    }

    inputUsername(username) {
    cy.get(this.selectors.username)
      .should('be.visible')
      .clear()
      .type(username)
  }
  inputPassword(password) {
    cy.get(this.selectors.password)
      .should('be.visible')
      .clear()
      .type(password)
  }
  loginButton(){
    cy.get(this.selectors.loginbutton).click()
  }
  verifyLoginSuccess(){
    cy.url().should('include', '/dashboard/')
  }
  verifyLoginFailed() {
  cy.get(this.selectors.alert)
//   cy.get(this.selectors.errorMessage)
// cy.get('oxd-alert-content')
    .should('be.visible')
    // .and('contain', 'Invalid credentials')
}

}

export default new LoginPage()