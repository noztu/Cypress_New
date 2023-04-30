import endpoint from '../fixtures/endpoints.json'

const registerDemoqa = (body) => {

    cy.request({
        url: endpoint.demoqa.register,
        method: 'POST',
        body: body,
        failOnStatusCode: false
    }).then(response => {

        cy.wrap(response).as('registerDemoqaResponse')
    })
}

export default {
    registerDemoqa
}