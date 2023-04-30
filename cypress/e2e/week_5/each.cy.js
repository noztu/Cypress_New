import { commonPage } from "../../pages/CommonPages"

describe('each calismasi', () => {


    const productName = 'Tomato'
    const productPrice = '$2'
    const productStock = 81
    const productUnit = 'Pound'


    const productNames = []
    const productPrices = []


    it('each 1', () => {



        // way 1
        // commonPage.getLinks().goToLoginPage()

        // commonPage.getLoginPage().typeUserName(commonPage.getUserInfo().deneme.email)
        // commonPage.getLoginPage().typePassword(commonPage.getUserInfo().deneme.password)
        // commonPage.getRegisterPage().clickSubmit()

        // way 2
        cy.login(commonPage.getUserInfo().deneme.email, commonPage.getUserInfo().deneme.password)

        commonPage.getProductPage().productNames().each(($element, index, $list) => {

            // jquery method kullanimi
            productNames.push($element.text())
        })



        commonPage.getProductPage().productPrices().each(($el, index) => {
            //  cy.log(`product name ${productNames[ index ]}  and its price ${$el.text()}`)

            if (productNames[ index ] == productName) {

                expect($el.text()).to.equal(productPrice)
            }
        })
    });
})
