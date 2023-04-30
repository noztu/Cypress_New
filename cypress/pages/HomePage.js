import homePage from '../fixtures/pages/homePage.json'
class HomePage {

    // 1 way
    forms() {
        return cy.get(':nth-child(2) > :nth-child(1) > .card-up')
    }

    // 2 way
    click_forms() {
        cy.get(':nth-child(2) > :nth-child(1) > .card-up')
            .should('be.visible')
            .click()
    }

    type_firstName(firstName) {
        cy.get(homePage.firstName)
            .should('be.visible')
            .type(firstName)

        return cy.get(homePage.firstName)
    }

    click_register() {
        cy.get("a[href$='register'].mr-2").click()
    }
    click_login() {
        cy.get("a[href$='login'].mr-4").click()
    }


}

export default  HomePage