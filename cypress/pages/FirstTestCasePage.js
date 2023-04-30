import homepage from '../fixtures/pages/homePage.json'

class FirstTestCasePage{
    // home page
    goToMainPage(){

        cy.visit("https://automationteststore.com/")
    }
    firstProduct_click(){
        cy.get(homepage.firstProduct).first().click()
    }
    //product page

    unitPrice(){
        return cy.get('.productfilneprice')
    }
    unitQuantity(){
        return cy.get('#product_quantity')

    }
    unitTotalPrice(){
        return cy.get('span.total-price')

    }
    addToProduct_click(){

        cy.get('li>a.cart').click()
    }
    // cart page
    subtotal(){
        return cy.get('span.bold').eq(1)
    }
    flat(){
        return cy.get('span.bold').eq(3)
    }
    finalPrice(){
        return cy.get('span.bold').eq(5)
    }
}
export default FirstTestCasePage