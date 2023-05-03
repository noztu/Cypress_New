describe('demoqa register', () => {

    const endPoint= "https://demoqa.com/Account/v1/User"
    const body = {"userName": "omer1dsfsggrkkr3335", "password": "omerOMER1234,.$"}
//Task7 API story
    /**
     * message
     * "User exists!"
     * username
     */
    it('demoqa 1', () => {

        cy.request({
            method:'POST',
            url:endPoint,
            body: body,
            failOnStatusCode: false

        }).as('demoqaRegister')
        cy.get('@demoqaRegister').then(val => {

            expect(val.status).to.equal(201)
            expect(val.body.username).to.equal('omer1dsfsggrkkr3335')

        })

        cy.request({

            method: 'POST',
            url: endPoint,
            body: body,
            failOnStatusCode: false
        }).as('demoqaRegisterNegative')


        cy.get('@demoqaRegisterNegative').then(val => {
            expect(val.status).to.equal(406)
            expect(val.body.message).to.equal("User exists!")
        })

    
        
    });
    
});