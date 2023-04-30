// yeni yontem ES6 sonrasi
import example2 from '../../fixtures/example.json'

describe('fixture', () => {

    
    // eski yontem ES6 oncesi
    const example = require('../../fixtures/example.json')

    it('ficxture 1 - 1', () => {


        cy.visit(example.demoqa)

    });


    it('fixture 1 - 2 ', () => {
        cy.visit(example2.demoqa)
    });


    it.only('fixture 2', () => {

        cy.fixture('example').then(val=>{
            cy.visit(val.demoqa)
        })

    });



})