import data from '../../../fixtures/fakeData.json'

describe('its kullanimi', () => {

    it('its 1', () => {
        // we are using to get property 

        cy.wrap({ firstName: "Janick",lastname:"Omer" }).its('firstName').should('equal', 'Janick') //json 


    });

    it('its 2', () => {
        cy.visit('https://demoqa.com/')

        cy.get('//div').its('length').should('equal', 109)
        cy.get('//div').should('have.length', 109)
    });


    it('it 3', () => {
        const name = "omer" //javascript

        cy.wrap(name).should('equal', 'omer')


    });
})
