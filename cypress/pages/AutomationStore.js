class AutomationStore {

    elements = {

        addToCart: () => cy.get("[title='Add to Cart']")
    }

    addToCart() {
        return this.elements.addToCart()
    }
}

export const automationStore = new AutomationStore()