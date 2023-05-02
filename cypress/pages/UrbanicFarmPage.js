import colors from '../fixtures/colors.json'
class UrbanicFarmPage {

    elements = {

        email: () => cy.get("[type='email']"),
        password: () => cy.get("[type='password']"),
        submit: () => cy.get("[type='submit']"),
        toast: () => cy.get(".Toastify__toast"),


    }
   

    visit() {
        cy.visit('/auth/login')
    }

    typeEmail(email) {
        this.getEmail().type(email, { force: true })
         this.getEmail().should('contain.value', email)
    }

    typePassword(password) {
        this.elements.password().type(password, { force: true })
        this.elements.password().should('contain.value', password)
    }

    getEmail() {
        return this.elements.email()
    }

    getPassword() {
        return this.elements.password()
    }

    getSubmit() {
        return this.elements.submit()
    }

    getToast() {
        return this.elements.toast()
    }



    clickSubmit() {
        this.elements.submit().click()
    }



    login(email, password) {
        this.typeEmail(email)
        this.typePassword(password)
        this.clickSubmit()
    }

    assertToastMessage(toast) {
        this.elements.toast().should('have.text', toast)
    }

    assertToastBackground(backgroundColor) {

        this.elements.toast().should('have.css', 'background-color', backgroundColor)
    }

    assertToastRed() {
        this.elements.toast().should('have.css', 'background-color', colors.toast.error)
    }

    assertToastBlue() {
        this.elements.toast().should('have.css', 'background-color', colors.toast.success)
    }

    assertText(webElementC, color) {

        webElementC.should('have.css', 'color', color)
    }


}


export const urbanicFarmPage = new UrbanicFarmPage()