describe('radio button checkbox', ()=>{ 
    beforeEach(()=>{


        cy.visit('https://demo.automationtesting.in/Register.html')
    }  )
context('radio button', ()=>{

   

    it.skip('test male', ()=>{

        cy.get("[name='radiooptions']").first().check().should(be.checked)//male
        cy.get("[name='radiooptions']").last().should(not.be.checked)//female

    })

    it.skip('test female',()=>{
        cy.get("[name='radiooptions']").last().check().should(be.checked)//male
        cy.get("[name='radiooptions']").first().should(not.be.checked)//female


    })
})
context('checkbox',()=>{

    it.skip('test 1',()=>{

        //ilk checkbox
        cy.get("[id^='checkbox']").first().check().should(be.checked)


        //last checkbox

        cy.get("[id^='checkbox']").last().check().should(be.checked)


        //ikinci checkbox

        cy.get("[id^='checkbox']").eq(1).check().should(be.checked)
    })

    it.only('test 2', ()=>{
        cy.get("[id^='checkbox']").check().should('be.checked')
        cy.get("[id^='checkbox']").uncheck().should('not.be.checked')

    })
})


})