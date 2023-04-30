import errors from '../../../fixtures/errors.json'
describe('task 2', () => {

    beforeEach(() => {
        cy.visit("https://demoqa.com/")
        cy.get(':nth-child(1) > :nth-child(1) > .card-up').click()// elementi click yapar
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-4 > .text').click()//buttoni click yapar
    });

//create errors.json fixture and call the data from this class
    it('test 1', () => {

        cy.get(errors.doubleClick.webElementButton).dblclick()

        // should assertion
        cy.get(errors.doubleClick.webElementText)
            .should('have.text', errors.doubleClick.message)

        // bdd expect chai assertion 
        // then kullaninca, call back functioni then icinde olmali
        //then icindeki objenin icine $ sign i konuluyor
        // eger final ise yani degismeyecek deger ise alt tire konuluyor
        cy.get(errors.doubleClick.webElementText).invoke('text').then(($input)=>{
            cy.expect($input).to.equal(errors.doubleClick.message)
        })
        

    });

    it('test 2', () => {

        cy.get(errors.rightClick.webElementButton).rightclick()

        // should assertion
        cy.get(errors.rightClick.webElementText)
            .should('have.text', errors.rightClick.message)

    
        // bdd expect chai assertion 
        cy.get(errors.rightClick.webElementText).invoke('text').then(($input)=>{
            cy.expect($input).to.equal(errors.rightClick.message)
        })
        

    });

    it('test 3', ()=>{

        cy.xpath(errors.singleClick.webElementButton).click()

       // should assertion
       cy.get(errors.singleClick.webElementText)

       //bdd expect chai assertion
       cy.get(errors.singleClick.webElementText).invoke('text').then(($input)=>{
        cy.expect($input).to.equal(errors.singleClick.message)
       })
    })
})