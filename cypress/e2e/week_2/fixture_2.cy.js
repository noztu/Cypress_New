
describe('fixture 2', () => {

    let data;
    before(() => {
        cy.fixture('example').then(val => {

            data = val
        })

    });

    it('fixture 3', () => {
        cy.visit(data.demoqa)
    });



})