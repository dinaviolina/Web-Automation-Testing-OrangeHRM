class DashboardPage {
    selectors={
        usernameInput: 'input[name="username"]',
        passwordInput: 'input[name="password"]',
        buttonLogin: 'button[type="submit"]',
    }
    visitLogin() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    inputUsername(username) {
        cy.get(this.selectors.usernameInput)
        .should('be.visible')
        .clear()
        .type(username)
    }

    inputPassword(password) {
        cy.get(this.selectors.passwordInput)
        .should('be.visible')
        .clear()
        .type(password)
    }

    clickLogin() {
        cy.get(this.selectors.buttonLogin).click()
    }

    interceptActionSummary() {
        cy.intercept(
        'GET', '**/api/v2/dashboard/employees/action-summary').as('actionSummary')
    }

    interceptLocations() {
        cy.intercept(
        'GET','**/api/v2/dashboard/employees/locations').as('locations')
    }

    interceptTimeAtWork() {
        cy.intercept(
        'GET','**/api/v2/dashboard/employees/time-at-work*').as('timeAtWork')
    }

    interceptShortcuts() {
        cy.intercept(
        'GET','**/api/v2/dashboard/shortcuts').as('shortcuts')
    }

    interceptBuzzFeed() {
        cy.intercept(
            'GET',
            '**/api/v2/buzz/feed*').as('buzzFeed')
    }
    interceptSubUnit() {
        cy.intercept(
        'GET',
        '**/api/v2/dashboard/employees/subunit'
        ).as('subUnit')
    }
    verifyDashboardLoaded() {
        cy.url().should('include', '/dashboard')
        cy.get('.oxd-topbar-header-breadcrumb')
        .should('contain', 'Dashboard')
    }

    verifyResultExist() {
    cy.get('.oxd-table-body').should('not.contain', 'No Records Found')
    }
    }

    export default new DashboardPage()

