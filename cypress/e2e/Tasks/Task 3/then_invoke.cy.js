
describe('Task 3',() =>{

    it('test1',()=>{

        cy.visit('https://www.automationteststore.com/')

         // Has offsetHeight 
        // more than 30 
        // less than 40
        // has class called product


        // background-color is rgb(0, 161, 203)
        // bdd assetion 
        cy.get("[title='Add to Cart']")
        .eq(0)
        .invoke('css','background-color')
        .then($cssValue =>{
            cy.expect($cssValue).to.equal("rgb(0, 161, 203)")
        })
        //should assertion
        cy.get("[title='Add to Cart']")
        .eq(0)
        .should('have.css', 'background-color', 'rgb(0, 161, 203)')
        // Has offsetHeight properties deki elementin degerini alacagiz
        cy.get("[title='Add to Cart']")
            .eq(0)
            .should('have.prop', 'offsetHeight')

         //more than 30 way 1
         cy.get("[title='Add to Cart']")
         .eq(0)
         .invoke('prop', 'offsetHeight')
         .then($input => {
             cy.expect($input > 30).to.be.true
         })

         //less than 40 way 2
        cy.get("[title='Add to Cart']")
        .eq(0)
        .invoke('prop', 'offsetHeight')
        .should('be.lessThan', 40)

    // has class called product
    cy.get("[title='Add to Cart']")
        .eq(0)
        .should('have.class', 'productcart')
});


    })

