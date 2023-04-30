class ProductsPage {


    elements = {
        "toastMessage": () => cy.get('.Toastify__toast'),
        'logout': () => cy.get("[href$='logout'].mr-4"),
        productNames: () => cy.get('.col-11 p.ProductCard_productTitle__3K4rg'),
        productPrices: () => cy.get('.p-2> p.m-0.text-white'),
        productUnit_Stock: () => cy.get('.py-1 .ProductCard_stockInfo__1vJgJ')
    }



    assertToastMessage(toastMessage, css) {
        this.elements.toastMessage().should('have.text', toastMessage).should('have.css', 'background-color', css)
    }

    click_logout() {
        this.elements.logout().click({force: true})
    }
    productNames() {
        return this.elements.productNames()
    }

    productPrices() {
        return this.elements.productPrices()
    }

    productUnit() {
        return this.elements.productUnit_Stock()
    }

}

export const productPage = new ProductsPage()