import directoryPage from "../support/pageObjects/dashboard_directory"
import LoginPage from "../support/pageObjects/loginPage"
import testData from "../fixtures/testData.json"

describe('Directory Feature - OrangeHRM', () => {

  beforeEach(() => {
    // bersihkan session dulu biar test case fresh
    cy.clearCookies()
    cy.clearLocalStorage()

    // visit login page & login
    LoginPage.visit()
    directoryPage.login(testData.validUsername, testData.validPassword)
    directoryPage.openDirectory()
    directoryPage.verifyDirectoryPageLoaded()
  })

  it('TC_DIR_01 - Directory page successfully opened from dashboard', () => {
    
    directoryPage.verifyDirectoryPageLoaded()
  })

})
