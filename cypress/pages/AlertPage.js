class AlertPage {
    elements = {
        confirmationResult: () => cy.get('#confirmResult'),
        promptResult: () => cy.get('#promptResult'),
    }


    confirmationResult() {
        return this.confirmationResult()
    }

    promptResult() {
        return this.promptResult()
    }
}

export const alertPage = new AlertPage()