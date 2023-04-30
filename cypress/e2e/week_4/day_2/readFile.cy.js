describe('read file', ()=>{


    it('read1',()=>{

cy.readFile('cypress/fixtures/fakeData.json')
.its('firstName')
.should('equal', 'Leora')
    })
    it('write and read', () => {

        const email = "omer"
        const password = "ali"

        cy.writeFile('cypress/downloads/data.json', {
            userName: email,
            userPassword: password
        })



    });


    it('only read', () => {

        cy.readFile('cypress/downloads/data.json').then(data => {
// yazacagim dosyayi download icine yazdiririm
            cy.log(`username ${data.userName} password ${data.userPassword}`)
        })
})
})