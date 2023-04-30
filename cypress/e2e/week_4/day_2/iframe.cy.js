import util from "../../../support/util";
describe('iframe', () => {


    it('iframe 1', () => {

        cy.visit('https://demoqa.com/')
        cy.get(':nth-child(3) > :nth-child(1) > .card-up').click()
        cy.get(':nth-child(3) > .element-list > .menu-list > #item-2 > .text').click()

        cy.get('#frame1')//objenin propertisini alacagim its kullanirim
            .its('0.contentDocument.body')//frame den documente gectim
            .should('have.text', 'This is a sample page')
    });

    it('iframe 2', () => {

        cy.visit('https://demoqa.com/')
        cy.get(':nth-child(3) > :nth-child(1) > .card-up').click()
        cy.get(':nth-child(3) > .element-list > .menu-list > #item-2 > .text').click()


        util.iframe('#frame1').should('have.text', 'This is a sample page')
    });
    it('iframe 3', () => {

        cy.visit('https://demoqa.com/')
        cy.get(':nth-child(3) > :nth-child(1) > .card-up').click()
        cy.get(':nth-child(3) > .element-list > .menu-list > #item-2 > .text').click()


        cy.iframe('#frame1').should('have.text', 'This is a sample page')
    });


    it.only('iframe 4', () => {
        cy.visit('https://html.com/tags/iframe/')

        cy.iframe("iframe[src$='c']").within(() => {

            cy.get("[aria-label='Play']")
                .click()
            cy.wait(15000)

            cy.get(".video-stream.html5-main-video").invoke('prop', 'currentTime').then(firstTime => {

                cy.log(firstTime)
                expect(firstTime).to.greaterThan(0)

                cy.wait(3000)
                cy.get(".video-stream.html5-main-video").invoke('prop', 'currentTime').then(secondTime => {
                    cy.log(secondTime)
                    expect(secondTime).to.greaterThan(firstTime)
                })

            })
        })





    });

})