import FirstTestCasePage from "../../../pages/FirstTestCasePage";

describe('alias kullanimi 2', () => {
    const automationteststore = new FirstTestCasePage

    it('alias with get', () => {
        // sayfaya gittik
        automationteststore.goToMainPage()
        // click first product
        automationteststore.firstProduct_click()

        // quantity temizlendi ve yeni degeri gonderildi
        automationteststore.unitQuantity().clear().type('2')

        // zaman gecirmek icin kullandim
        automationteststore.unitPrice().click()

        // click add to cart
        automationteststore.addToProduct_click()


        // subtotal
        automationteststore.subtotal().invoke('text').as('subtotal')
        // flat
        automationteststore.flat().invoke('text').as('flat')
        // flat
        automationteststore.finalPrice().invoke('text').as('final')


        cy.get('@subtotal').then($subtotal => {

            cy.get('@flat').then($flat => {

                cy.get('@final').then($final => {
                    cy.log(`subtotal ${$subtotal} , flat ${$flat} , final ${$final}  `)

                })
            })
        })

    });
})
