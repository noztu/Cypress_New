class Links {

    elements = {
        heroku: {
            upload: 'https://the-internet.herokuapp.com/upload',
            dragAndDrop: 'https://the-internet.herokuapp.com/drag_and_drop'
        },
        uploadWebsite: {
            upload: 'https://davidwalsh.name/demo/multiple-file-upload.php'
        },
        urbanicFarm: {
            home: 'https://test.urbanicfarm.com/',
            login: 'https://test.urbanicfarm.com/auth/login'
        },
        automationStore: 'https://www.automationteststore.com/',
        amazon: 'https://www.amazon.co.uk/',
        demoqa: {
            home: 'https://demoqa.com/'
        }
    }



    goToDragAndDrop_heroku() {
        cy.visit(this.elements.heroku.dragAndDrop)
    }
    goToUpload_heroku() {
        cy.visit(this.elements.heroku.upload)
    }

    goToUpload_multiple() {
        cy.visit(this.elements.uploadWebsite.upload)
    }

    goToHomePage() {
        cy.visit(this.elements.urbanicFarm.home)
    }

    goToLoginPage() {
        cy.visit(this.elements.urbanicFarm.login)
    }
    goToAutomationStore() {
        cy.visit(this.elements.automationStore)
    }
    goToAmazon() {
        cy.visit(this.elements.amazon)
    }

    goToAlert_Demoqa() {
        cy.visit(this.elements.demoqa.home)
        cy.get('.category-cards> div:nth-child(2)').click()
        cy.get(':nth-child(3) > .group-header > .header-wrapper > .header-text').click()
        cy.get(':nth-child(3) > .element-list > .menu-list > #item-1 > .text').click()
    }
}

export const links = new Links()