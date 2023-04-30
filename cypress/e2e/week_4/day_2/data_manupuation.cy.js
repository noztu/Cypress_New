describe('data', ()=>{
    before(() => {
        cy.storePluginSetup();
    })

    it('plugin ile data manupulation', ()=>{
        automationteststore.goToMainPage()
        // click first product
        automationteststore.firstProduct_click()

        // quantity temizlendi ve yeni degeri gonderildi
        automationteststore.unitQuantity().clear().type("2")

        // zaman gecirmek icin kullandim
        automationteststore.unitPrice().click()

        // click add to cart
        automationteststore.addToProduct_click()

        // subtotal
        automationteststore.subtotal().invoke('text').then($subtotal => {
            _subtotal = parseFloat($subtotal.replace('$', ''))

            cy.storeValue(_subtotal, 'subtotalPlugin')
        })

        cy.retrieveValue('subtotalPlugin').then((var_) => {

            cy.log(var_)
        })


    })
})