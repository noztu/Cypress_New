
//1.yol
//describe('first day',function(){  // call back function
//})
//2. yol
describe('firstDay',()=>{
    context('first group',()=>{
    
        before(()=>{
    
        })//butun testlerden once bir defa calisir
        after(()=>{
    
        })//butun testlerden sonra bir defa calisir
        beforeEach(()=>{
    
        })// her it blogundan once calisir
        afterEach(()=>{
    
        })// her it blogundan sonra calisir
    
    it('visit calismasi',()=>{      // test blogu
    cy.visit('https://demo.automationtesting.in/Register.html')
    const firstName='kesif danismanlik'
    cy.get(" [ng-model='FirstName']").type(firstName)
    .should('have.value', firstName)
    .should('contain.value','kesif')
    .should('include.value', 'danisma')
    .should('be.visible')
    .should('exist')
    const lastName='danisman'
    cy.get("input[placeholder='Last Name']")
    .type(lastName)
    .should('have.value', lastName)
    
    })
    
    })
    
    context('group 2', ()=>{
    
    
    
    })
    
    })