import data from '../../../fixtures/fakeData.json'
import HomePage from '../../../pages/HomePage';


describe('wrap calismasi', () => {

    let homePage

    // beforeEach(() => {
    //      homePage = new HomePage()
    // })



    it('wrap 1', () => {
        const name = "omer" //javascript

        cy.wrap(name).should('equal', 'omer')
    });

    it('wrap 2', () => {
        const home = new HomePage()

        cy.visit('https://demoqa.com/')


        // 1. yol 
      //  homePage.forms().click()

        //2. yol
        homePage.click_forms()



        cy.get(':nth-child(2) > .element-list > .menu-list > #item-0 > .text').click()

        // cy.get('#firstName').type('wrap 2')
        homePage.type_firstName('wrap 2')
        
        
        
        cy.get('#firstName').invoke('val').then(input => {
            // way 1
            cy.expect(input).to.equal('wrap 2')

            // way 2
            cy.wrap(input).should('equal', 'wrap 2')
        })

    });


    it('wrap 3', () => {

        let fruits = [ 'elma', 'armut', 'ayva' ]

        cy.wrap(fruits).should('include', 'armut')
    });


    it('wrap 4', () => {

        cy.wrap(data).its('firstName').should('equal', 'Leora')
    });




})