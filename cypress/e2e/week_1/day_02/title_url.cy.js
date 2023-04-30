

describe('day 02', ()=>{
    beforeEach(()=>{
        cy.visit('https://demo.automationtesting.in/Register.html')
    })

    it ('title', ()=>{
        
        // title assertion
        cy.title().should('equal','Register')
        
    })
    it('url',()=>{
        
        //url assertion
        cy.url().should('equal', 'https://demo.automationtesting.in/Register.html')
        
    })
    it.skip('email',()=>{
        
        cy.get("#basicBootsstrapForm>div:nth-of-type(3)>div:first-of-type>input")
        .type('omer')
        .should('have.value','omer')
        
        
        
    })


})