
import FirstTestCasePage from "../../../pages/FirstTestCasePage"

describe('Task 4', ()=>{
const _quantity = 2
let unit_float;
let total_float;
let _subtotal;
let _flat
let _finalTotal
    const automationteststore =new FirstTestCasePage()

it.skip('way1',()=>{
// sayfaya gittik
automationteststore.goToMainPage()
// click first product
automationteststore.firstProduct_click()
// quatity temizlendi yeni degeri gonderildi
automationteststore.unitQuantity().clear().type(_quantity)
// zaman gecirmek icin kullandim
automationteststore.unitPrice().click()
automationteststore.unitPrice()
.invoke('text')
.then($unitPrice=>{
 unit_float = parseFloat($unitPrice.replace('$',''));
 //console.log("unit price then ici:" + unit_float);
 automationteststore.unitTotalPrice()
 .invoke('text')
 .then($totalPrice=>{
    total_float=parseFloat($totalPrice.replace('$', ''));
   // assertion1
   //expect($unitPrice*_quantity==$totalPrice).to.be.true
   //assertion 2
    expect(unit_float*_quantity).to.equal(total_float)

 })

})



});
context('2.yol contex',()=>{

    beforeEach(()=>{
     // sayfaya gittik
automationteststore.goToMainPage()
// click first product
automationteststore.firstProduct_click()
// quatity temizlendi yeni degeri gonderildi
automationteststore.unitQuantity().clear().type(_quantity)
// zaman gecirmek icin kullandim
automationteststore.unitPrice().click()

// click to add cart
automationteststore.addToProduct_click()
//subtotal
automationteststore.subtotal().invoke('text').then($subtotal =>{
    _subtotal=parseFloat($subtotal.replace('$', ''))
})
//flat
automationteststore.flat().invoke('text').then($flat=>{
    _flat=parseFloat($flat.replace('$', ''))
})
automationteststore.finalPrice().invoke('text').then($finalPrice=>{
    _finalTotal=parseFloat($finalPrice.replace('$', ''))
})
   
})
it('way2',()=>{

cy.log('subtotal ${_subtotal}, flat ${_flat}, final ${_finalTotal}')
expect(_finalTotal).to.equal(_flat +_subtotal)

});


})

})
