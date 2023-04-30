describe('login methodu', () => {

    it('login 1', () => {
//cy.visit yerine api da cy.request kullaniyoruz
        cy.request('POST', 'https://test.urbanicfarm.com/api/public/login', { email: 'asd@asd.asd', password: 'fQy*s5YinpE**ia' })
    });


    it('login 2', () => {
        cy.request({

            method: 'POST',
            url: 'https://test.urbanicfarm.com/api/public/login',
            body: { email: 'asd@asd.asd', password: 'fQy*s5YinpE**ia' }
        }).then(response => {

            cy.log(response)
        })
    });

    it('login 3', () => {
        cy.api({

            method: 'POST',
            url: 'https://test.urbanicfarm.com/api/public/login',
            body: { email: 'asd@asd.asd', password: 'fQy*s5YinpE**ia' },
            retryOnStatusCodeFailure:true
        })

            .then(response => {

                cy.log(response)


                expect(response.status).to.equal(200)
               assert.equal(response.status,200)

            })
    });

    it('login 3 1 status code 404', () => {
        cy.api({

            method: 'POST',
            url: 'https://test.urbanicfarm.com/api/public/login44',
            body: { email: 'asd@asd.asd', password: 'fQy*s5YinpE**ia' },
            failOnStatusCode: false
        })

            .then(response => {

                cy.log(response)


                expect(response.status).to.equal(404)
               assert.equal(response.status,404)

            })
    });


    it('login 4 genel', () => {
        cy.request({

            method: 'POST',
            url: 'https://test.urbanicfarm.com/api/public/login',
            body: { email: 'asd@asd.asd', password: 'fQy*s5YinpE**ia' }
        })

            .then(response => {

                cy.log(response.status)
                cy.log(response.headers.date)
                cy.log(response.body.success)
            })
    });


    it('login 5 its olmadan', () => {
        cy.request({

            method: 'POST',
            url: 'https://test.urbanicfarm.com/api/public/login',
            body: { email: 'asd@asd.asd', password: 'fQy*s5YinpE**ia' }
        })

            .then(response => {

                cy.log(response.body.token)
                cy.log(response.body.first_name)
                cy.log(response.body.first_lastname)
                cy.log(response.body.success)
            })
    });

    it('login 6 its kullanimi', () => {
        cy.request({

            method: 'POST',
            url: 'https://test.urbanicfarm.com/api/public/login',
            body: { email: 'asd@asd.asd', password: 'fQy*s5YinpE**ia' }
        })
            .its('body')
            .then(response => {

                cy.log(response.token)
                cy.log(response.first_name)
                cy.log(response.first_lastname)
                cy.log(response.success)
            })
    });


    it('login 7 alias kullanimi', () => {
        cy.request({

            method: 'POST',
            url: 'https://test.urbanicfarm.com/api/public/login',
            body: { email: 'asd@asd.asd', password: 'fQy*s5YinpE**ia' }
        })
            .its('body')
            .as('loginBody')



        cy.get('@loginBody').then(response => {
            cy.log(response.token)
            cy.log(response.first_name)
            cy.log(response.first_lastname)
            cy.log(response.success)

        })
    });


    it('login 8 wait kullanimi', () => {
        cy.visit('https://test.urbanicfarm.com/auth/login')

        cy.get("[name='email']").type('asd@asd.asd', { force: true })
        cy.get("[name='password']").type('fQy*s5YinpE**ia', { force: true })
        cy.get("[type='submit']").click({ force: true })


        cy.intercept({

            method: 'POST',
            url: 'https://test.urbanicfarm.com/api/public/map/search'

        }).as('loginBody')


        cy.wait('@loginBody')

    });



    it('login 9 intercept kullanimi bos satici bilgileriyle', () => {
        cy.visit('https://test.urbanicfarm.com/auth/login')

        cy.get("[name='email']").type('asd@asd.asd', { force: true })
        cy.get("[name='password']").type('fQy*s5YinpE**ia', { force: true })
        cy.get("[type='submit']").click({ force: true })


        cy.intercept(
            'POST',
            'https://test.urbanicfarm.com/api/public/map/search',
            { fixture: 'fakeSellerInfoBos.json' }

        )

    });

    it('login 10 intercept kullanimi yanlis satici bilgileriyle', () => {
        cy.visit('https://test.urbanicfarm.com/auth/login')

        cy.get("[name='email']").type('asd@asd.asd', { force: true })
        cy.get("[name='password']").type('fQy*s5YinpE**ia', { force: true })
        cy.get("[type='submit']").click({ force: true })


        cy.intercept(
            'POST',
            'https://test.urbanicfarm.com/api/public/map/search',
            { fixture: 'fakeSellerInfo.json' }

        )

    });
})