describe('task 7', () => {

    const endpoint = "https://demoqa.com/Account/v1/User"
    const faker = require('faker')

    it('register 1', () => {

        const username = faker.name.firstName()
        const body = { "userName": username, "password": "omerOMER1234,.$" }

        cy.request({
            url: endpoint,
            method: 'POST',
            body: body
        }).then(response => {

            expect(response.status).to.equal(201)
            expect(response.body.username).to.equal(username)
        })

    });


    it('register 2', () => {

        const username = faker.name.firstName()
        const body = { "userName": username, "password": "omerOMER1234,.$" }

        cy.api({
            url: endpoint,
            method: 'POST',
            body: body
        }).then(response => {

            expect(response.status).to.equal(201)
            expect(response.body.username).to.equal(username)
        })

    });

    it.only('register 3', () => {

        const username = faker.name.firstName()
        const body = { "userName": username, "password": "omerOMER1234,.$" }



        cy.registerDemoqa(body)

        cy.get('@registerDemoqaResponse').then(res => {
            cy.log(res)
            expect(res.status).to.equal(201)
            expect(res.body.username).to.equal(username)
        })

        cy.registerDemoqa(body)


        // status code 406
        cy.get('@registerDemoqaResponse').should('have.property','status',406)

        // message
        cy.get('@registerDemoqaResponse').its('body').should('have.property','message','User exists!')

    });

})