describe('invoke 2',()=>{



    it('remove attribute',()=>{
    cy.visit('https://demoqa.com')
    cy.get(':nth-child(1) > :nth-child(1) > .card-up').click()
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-5').click()
     // hatali cy.get('#simpleLink')
    cy.get("#simpleLink").invoke('removeAttr', 'target').click()
    cy.url().should('equal', 'https://demoqa.com/')

    })

})