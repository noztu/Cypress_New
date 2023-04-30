describe('download', () => {

    it('a', () => {
        cy.visit('https://the-internet.herokuapp.com/download')

        cy.readFile('cypress/downloads/LambdaTest.txt').should('not.exist')
        cy.get('.example a').eq(1).click()
        cy.readFile('cypress/downloads/LambdaTest.txt').should('exist')

        
    });
})