describe('trigger calismasi', () => {
    it.only('trigger mouse over', () => {

        cy.visit('https://www.amazon.co.uk/').pause()


        cy.get('#nav-al-title').should('exist')
        cy.get('#nav-al-title').should('not.be.visible')


        cy.get('#nav-link-accountList').trigger('mouseover')

        cy.get('#nav-al-title').should('exist')
        cy.get('#nav-al-title').should('be.visible')

    });


    it('mouse with plugin', () => {

        const beforeHover = 'rgb(0, 161, 203)'
        const afterHover = 'rgb(216, 66, 14)'
        cy.visit('https://www.automationteststore.com/')

        // hover oncesi renk assertion 
        cy.get("[title='Add to Cart']").first().should('have.css', 'background-color', beforeHover)


        // hover
        cy.get("[title='Add to Cart']").first().realHover()


        // hover oncesi renk assertion 
        cy.get("[title='Add to Cart']").first().should('have.css', 'background-color', afterHover)







    });
})