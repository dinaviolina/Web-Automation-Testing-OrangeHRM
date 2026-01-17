import dashboardPage from "../support/pageObjects/dashboardPage"
import testData from "../fixtures/testData.json"
// import LoginPage from "../support/pageObjects/loginPage"

describe('Dashboard (POM + Intercept) - OrangeHRM', () => {

  beforeEach(() => {
    dashboardPage.visitLogin()
    // LoginPage.visit()

  })

  it('TC_DASH_01 - Dashboard action summary loaded', () => {
    dashboardPage.inputUsername(testData.validUsername)
    dashboardPage.inputPassword(testData.validPassword)
    dashboardPage.interceptActionSummary()
    dashboardPage.clickLogin()

    cy.wait('@actionSummary')
    dashboardPage.verifyDashboardLoaded()
  })

  it('TC_DASH_02 - Dashboard locations loaded', () => {
    dashboardPage.inputUsername(testData.validUsername)
    dashboardPage.inputPassword(testData.validPassword)
    dashboardPage.interceptLocations()
    dashboardPage.clickLogin()

    cy.wait('@locations')
  })

  it('TC_DASH_03 - Dashboard time at work loaded', () => {
    dashboardPage.inputUsername(testData.validUsername)
    dashboardPage.inputPassword(testData.validPassword)
    dashboardPage.interceptTimeAtWork()
    dashboardPage.clickLogin()

    cy.wait('@timeAtWork')
  })

  it('TC_DASH_04 - Dashboard shortcuts loaded', () => {
    dashboardPage.inputUsername(testData.validUsername)
    dashboardPage.inputPassword(testData.validPassword)
    dashboardPage.interceptShortcuts()
    dashboardPage.clickLogin()

    cy.wait('@shortcuts')
  })

  it('TC_DASH_05 - Dashboard buzz feed loaded', () => {
    dashboardPage.inputUsername(testData.validUsername)
    dashboardPage.inputPassword(testData.validPassword)
    dashboardPage.interceptBuzzFeed()
    dashboardPage.clickLogin()

    cy.wait('@buzzFeed')
  })
  it('TC_DASH_06 - Dashboard SubUnit', () => {
  
  dashboardPage.inputUsername(testData.validUsername)
  dashboardPage.inputPassword(testData.validPassword)
  dashboardPage.interceptSubUnit()
  dashboardPage.clickLogin()

  cy.wait('@subUnit').its('response.statusCode').should('eq', 200)
})


})
