class RegisterPage {


    typeFirstName() {
        return cy.get('#registration_form_firstname')
    }
    typeMiddleName(middleName) {
        cy.get('#registration_form_middlename').type(middleName,{force: true}).should('have.value', middleName)
    }
    typeLastName(lastName) {
        cy.get('#registration_form_lastname').type(lastName,{force: true}).should('have.value', lastName)
    }
    typeEmail(email) {
        cy.get('#registration_form_email').type(email,{force: true}).should('have.value', email)
    }
    typePassword(password) {
        cy.get('#registration_form_plainPassword').type(password,{force: true}).should('have.value', password)
    }
    typeConfirmPassword(confirmPassword) {
        cy.get('#registration_form_confirmPassword').type(confirmPassword,{force: true}).should('have.value', confirmPassword)
    }
    clickSubmit() {
        cy.get('.alazea-btn').click()
    }



}


export const registerPage = new RegisterPage()