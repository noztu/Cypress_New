
describe('xpath kullanimi', ()=>{

    beforeEach(()=>{

        cy.visit('https://demo.automationtesting.in/Register.html')
    })

    it('xpath kullanimi',()=>{

        cy.xpath(" //input[@type='tel']").type('124567866')
        .should('have.value', '124567866')
    })


})