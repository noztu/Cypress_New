
describe('select class',()=>{
beforeEach(()=>{
    cy.log('siteye gitmeden once')
    cy.visit('https://demo.automationtesting.in/Register.html')
    cy.log('siteye gittik')
})
it('select class index',()=>{
cy.get("#Skills").select(1).invoke('val').should('equal', 'Adobe InDesign')
//cy.get("#Skills").select(1).invoke('text').should('equal', 'Adobe InDesign')
cy.log('test bitti')


})
it.only('select class value',()=>{
    console.log('teste baslamadan once')
    cy.get("#Skills").select('Android').invoke('val').should('equal', 'Android')
   // cy.get("#Skills").select('Android').invoke('val').should('equal', 'Android')
    console.log('teste basladiktan sonra')

    })

it('select class text',()=>{
        cy.get("#Skills").select('AutoCAD').invoke('val').should('equal', 'AutoCAD')
       // cy.get("#Skills").select(1).invoke('Android').should('equal', 'Android')
        
    
     })


})

