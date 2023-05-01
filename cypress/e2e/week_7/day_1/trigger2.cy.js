describe('trigger drag and drop', () => {


    const solBlok = '#column-a>header'
    const sagBlok = '#column-b>header'


    it('drag 1', () => {

        cy.visit('https://the-internet.herokuapp.com/drag_and_drop')

//invoke ile assert yapip text e bakarim. then blogu ile beraber kullanirim
        cy.get(solBlok).invoke('text').then(solHeader => {

            expect(solHeader).to.equal('A')
        })


        cy.get(sagBlok).should('have.text', 'B')


        const dataTransfer = new DataTransfer()

        cy.get(sagBlok).trigger('dragstart', {
            dataTransfer
        })

        cy.get(solBlok).trigger('drop', {
            dataTransfer
        })


        cy.get(solBlok).invoke('text').then(solHeader => {

            expect(solHeader).to.equal('B')
        })


        cy.get(sagBlok).should('have.text', 'A')



    })
})
