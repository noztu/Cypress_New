import fakeData from '../../../fixtures/fakeData.json'

describe('tdd assertions', () => {
    it('find ', () => {
        cy.visit('https://demoqa.com/')
        cy.get(':nth-child(2) > :nth-child(1) > .card-up').click()
        cy.get(':nth-child(2) > .element-list > .menu-list > #item-0 > .text').click()


        cy.get('#userForm').find('#firstName').type(fakeData.firstName)

        cy.get('#userForm').find('#firstName').invoke('val').then(input => {

            // tdd assertion
            assert.equal(input, fakeData.firstName)
        })

        // should
        cy.get('#userForm').find('#lastName').type(fakeData.lastName)
            .should('have.value', fakeData.lastName)


        cy.get('#userForm').find('#gender-radio-1').check({ force: true })
            .should('be.checked')

        // bdd assertion
        cy.get('#userForm').find('#userNumber').type(fakeData.phoneNumber)
        cy.get('#userForm').find('#userNumber').invoke('val').then(input => {
            cy.expect(input).to.equal(fakeData.phoneNumber)
        })


        cy.get("#submit").click({ force: true })

        // way 1
        cy.get('tbody > :nth-child(4) > :nth-child(2)').invoke('text').then(input => {
            cy.expect(input).to.equal(fakeData.phoneNumber)
        })

        // way 2
        cy.get('tbody > :nth-child(4) > :nth-child(2)')
            .should('have.text', fakeData.phoneNumber)




    });

})
