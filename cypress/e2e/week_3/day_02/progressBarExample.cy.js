
describe('progress bar', ()=>{


    it('progress bar', ()=>{

        cy.visit('https://demoqa.com/')
        cy.get(':nth-child(1) > :nth-child(1) > .card-up').click()
        cy.get(':nth-child(4) > .group-header > .header-wrapper').click()
        cy.get(':nth-child(4) > .element-list > .menu-list > #item-4').click()
        const startButton = "#startStopButton"
        const resetButton = "#resetButton"
        const progressBar = "#progressBar>div"

        //  aria-valuenow
        // background-color



        // start butonu gozukuyor mu
        cy.get(startButton).should('be.visible')
        // reset  butonu gozukmuyor mu
        cy.get(resetButton).should('not.exist')

        // click start
        cy.get(startButton).click()
        // wait 3 sec
        cy.wait(3000)

        // stop progress bar
        // cy.get(startButton).click()

        // aria-valunow should be more than 0
        cy.get(progressBar)
            .invoke('attr', 'aria-valuenow')
            .then(ariaNow => {

                cy.log("aria : " + ariaNow)
                cy.expect(ariaNow > 0).to.true
            })
            // back ground color

        cy.get(progressBar)
        .invoke('css', 'background-color')
        .then($val => {
            cy.expect($val).to.equal("rgb(23, 162, 184)")  // mavi
            cy.log("mavi : " + $val)
        })

        // click start
        // cy.get(startButton).click()

        // wait 5 sec
        cy.wait(10000)

        // // stop progress bar
        // cy.get(startButton).click()

        // start butonu gozukmuyor mu
        cy.get(startButton).should('not.exist')
        // reset  butonu gozukuyor mu
        cy.get(resetButton).should('be.visible')

        cy.get(progressBar)
            .invoke('css', 'background-color')
            .then(val => {
                cy.expect(val).to.equal('rgb(40, 167, 69)')  // yesil
                cy.log(`green : ${val}`)
            })

        

    })
})