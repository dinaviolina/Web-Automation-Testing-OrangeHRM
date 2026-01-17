    class DashboardDirectoryPage {

    selectors = {
        usernameInput: 'input[name="username"]',
        passwordInput: 'input[name="password"]',
        buttonLogin: 'button[type="submit"]',
        employeeNameInput: 'input[placeholder="Type for hints..."]'
    }

    // ===== AUTH =====
    login(username, password) {
        cy.get(this.selectors.usernameInput).type(username)
        cy.get(this.selectors.passwordInput).type(password)
        cy.get(this.selectors.buttonLogin).click()
    }

    // ===== NAVIGATION =====
    openDirectory() {
        cy.intercept('GET', '**/api/v2/directory/employees*').as('directoryData')
        cy.get('a[href="/web/index.php/directory/viewDirectory"]').click()
        cy.wait('@directoryData')
    }

    // ===== VERIFY PAGE =====
    verifyDirectoryPageLoaded() {
        cy.url().should('include', '/directory')
        cy.get('h6').should('contain', 'Directory')
    }
    }

    export default new DashboardDirectoryPage()
