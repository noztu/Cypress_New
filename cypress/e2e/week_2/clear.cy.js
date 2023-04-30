describe('',()=>{
    
    beforeEach(() => {
        cy.visit('https://testautomationpractice.blogspot.com/')
     
    });
    it('clear calismasi', () => {
        cy.get('#field1')
            .clear()
            .type('omer')
            .should('have.value', 'omer')
    })



    it('clear calismasi 2', () => {
        cy.get('#field1')
            .type('{selectall}{backspace}')
            .type('omer')
            .should('have.value', 'omer')
    })

    
})