import fakeData from '../../../fixtures/fakeData.json'

describe('within calismasi', () => {

  beforeEach(() => {
        cy.generateFakerData()
    });

    it('within 1', () => {
        cy.visit('https://demoqa.com/')
        cy.get(':nth-child(2) > :nth-child(1) > .card-up').click()
        cy.get(':nth-child(2) > .element-list > .menu-list > #item-0 > .text').click()

        cy.get('#userForm').within(() => {

         
            cy.get('#firstName').type(fakeData.firstName)
                .should('have.value', fakeData.firstName)

            cy.get('#lastName').type(fakeData.lastName)
                .should('have.value', fakeData.lastName)

            cy.get('#gender-radio-1').check({ force: true })
                .should('be.checked')

            cy.get('#userNumber').type(fakeData.phoneNumber)
                .should('have.value', fakeData.phoneNumber)

            cy.root().submit()

        })

        // way 1
       cy.get('tbody > :nth-child(4) > :nth-child(2)').invoke('text').then(input => {
         cy.expect(input).to.equal(fakeData.phoneNumber)
       })

       // way 2
       cy.get('tbody > :nth-child(4) > :nth-child(2)')
           .should('have.text', fakeData.phoneNumber)




    });


   it('within 2', () => {
        cy.visit('https://www.automationteststore.com/')
        const productNames = [ "Skinsheen Bronzer Stick", "BeneFit Girl Meets Pearl", "Benefit Bella Bamba", "Tropiques Minerale Loose Bronzer" ]
        const productPrice = [ "$29.50", "$19.00", "$28.00", "$38.50" ]


        const productNameWebelement = ".prdocutname"
        const productPriceWebelement = ".price>.oneprice,.price>.pricenew"

        const productGenel = ".col-md-3.col-sm-6.col-xs-12"

        cy.get(productGenel).should('have.length', 16)


        cy.get(productGenel).first().within(() => {


            // way 1 product name assertion
            cy.get(productNameWebelement).invoke('attr', 'title').then(input => {

                cy.expect(input).to.equal("Skinsheen Bronzer Stick")
            })


            // way 2 product name assertion
            cy.get(productNameWebelement).should('have.attr', 'title', "Skinsheen Bronzer Stick")


            // product price
            cy.get(productPriceWebelement).invoke('text').then(girdi => {
                // girdi -> $29.50
                // substring sonrasi -> 29.50  (string turunde)
                // parseFloat sonrasi string-> double/float
                const price = parseFloat(girdi.substring(1))

                cy.expect(price).to.be.greaterThan(10)
                cy.expect(price > 10).to.be.true

            })
        })

        // selenium             // cypress
        // getText()            invoke('text')
        //getAttribute()        ('val') & ('attr','attribute degeri') & ('prop','property degerini')
        //getCssValue()         ('css','background-color')

    });
})