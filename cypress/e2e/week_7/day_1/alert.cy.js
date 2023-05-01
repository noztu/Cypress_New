describe('alert ', () => {

    const alert1 = '#alertButton'
    const alert2 = '#timerAlertButton'
    const alert3 = '#confirmButton'
    const alert4 = '#promtButton'

    const alert3_confirm = '#confirmResult'
    const alert4_confirm = '#promptResult'

    beforeEach(() => {
        cy.visit('https://demoqa.com')
        cy.get('.category-cards> div:nth-child(2)').click()
        cy.get(':nth-child(3) > .group-header > .header-wrapper > .header-text').click()
        cy.get(':nth-child(3) > .element-list > .menu-list > #item-1 > .text').click()
    });



    it('alert 1', () => {

        cy.get(alert1).click()

        cy.on('window:alert', alert => {
            expect(alert).to.equal('You clicked a button')
        })

    });

    it('alert 2', () => {

        cy.get(alert2).click()

        cy.on('window:alert', alert => {
            expect(alert).to.equal('This alert appeared after 5 seconds')
        })

    });

    it('alert 3 positive', () => {
        cy.get(alert3).click()
        cy.get(alert3_confirm).should('have.text', 'You selected Ok')

    });

    it('alert 3 negative', () => {
        cy.get(alert3).click()


        cy.on('window:confirm', alert => {
            return false
        })

        cy.get(alert3_confirm).should('have.text', 'You selected Cancel')

    });


    it('alert 4', () => {


        cy.window().then(window => {
            cy.stub(window, 'prompt').returns('kesif plus')
            cy.get(alert4).click()
        })

        cy.get(alert4_confirm).should('have.text', 'You entered kesif plus')

    });




})