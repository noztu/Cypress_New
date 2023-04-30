

describe('write file', () => {


    it('write file', () => {
        cy.writeFile('cypress/fixtures/deneme1.json', 'omer')
    });

    it('write file json', () => {
        cy.writeFile('cypress/fixtures/deneme2.json', { "name": "omer", "surname": "ali" })
    });

    it('write file json', () => {
        cy.writeFile('cypress/fixtures/deneme3.json', { name: "omer", surname: "ali" })
    });



})