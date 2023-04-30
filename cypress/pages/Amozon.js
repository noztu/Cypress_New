class Amazon {

    elements = {
        continueWithoutAccepting: () => cy.get('#sp-cc-rejectall-link'),
        hoverToList: () => cy.get('#nav-link-accountList'),
        yourList: () => cy.get('#nav-al-title'),
    }
    
    continueWithoutAccepting() {
        this.elements.continueWithoutAccepting().click()
    }

}

export const amazon = new Amazon()