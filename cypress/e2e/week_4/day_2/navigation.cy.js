describe('navigation', () => {

    it('go', () => {
        
        cy.visit('https://example.cypress.io/commands/navigation')
        cy.visit('https://test.urbanicfarm.com/account/hub')

        cy.go('back') // geri donucegiz
        cy.go(-1)    // bir sayfa geri gelecek
        cy.go(-2)    // iki sayfa geri gelecek
        
        cy.go('forward') // ileri goturecek
        cy.go(1)    // bir sayfa ileri gidecek
        cy.go(2)    // iki sayfa ileri gidecek

        cy.reload()  // sayfayi yenilemek icin refresh gibi
        
        
        //cy.back()    hatali kullanim
        //cy.forward() hatali kullanim

    });
})