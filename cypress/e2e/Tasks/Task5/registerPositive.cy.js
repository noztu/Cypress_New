
//import data from '../../../fixtures/data/fakeData.json'
import HomePage from '../../../pages/HomePage'
import LoginPage from '../../../pages/LoginPage'
import { productPage } from '../../../pages/ProductPage'
import { registerPage } from '../../../pages/RegisterPage'
import data from '../../../fixtures/fakeData.json'
describe('register positive', ()=>{

  const homePage = new HomePage()
  const loginPage = new LoginPage()
 
 beforeEach(()=>{
  cy.generateFakerData()
 })
    it('register 1', ()=>{

      cy.visit('https://test.urbanicfarm.com/')  
homePage.click_register()
// kullanici bilgileri girme
registerPage.typeFirstName().type(data.firstName, {force: true} ).should('have.value', data.firstName)
//registerPage.typeMiddleName().type(data.middleName).should('have.value', data.middleName)
registerPage.typeLastName(data.lastName)
registerPage.typeEmail(data.email)
registerPage.typePassword(data.password)
registerPage.typeConfirmPassword(data.password)
//submit ettik
registerPage.clickSubmit()
//toast message
productPage.assertToastMessage('Welcome!', 'rgb(7, 188, 12)')
// url contains home
cy.url().should('contain', 'home')
//logout button a tikla
productPage.click_logout()
//Assert url doesn’t contain “home”
cy.url().should('not.contain', 'home')
//Click on Login Button on home page
homePage.click_login()
// Assert url contains login
cy.url().should('contain', 'login')
// Fiil the form by using fakeData.json
loginPage.typeUserName(data.email)
loginPage.typePassword(data.password)
registerPage.clickSubmit()
// url contains home
cy.url().should('contain', 'home')


    });
})