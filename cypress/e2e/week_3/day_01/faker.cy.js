
describe('faker kullanimi', () => {
    const faker = require('faker') // eski versiyon import sekli
   //Faker faker = new Faker();    // java style
   // import faker from 'faker'    // yeni style  ES6 sonrasi

    it('faker 1', () => {
        // faker.name.firstName()
        
        cy.writeFile('cypress/fixtures/fakeData.json', {

            firstName:faker.name.firstName(),
            lastName:faker.name.lastName(),
            phoneNumber:faker.phone.phoneNumber('##########')

       })
    });

    it('faker 2', () => {
        const utils = require('../../../support/util')

        utils.generateFakerData2()

    });


    it('faker 3',()=>{
        cy.generateFakerData()//commands in icine sanki cypress methodu gibi ekledik
        //methoduda utils.json icine olusturduk. sanki cypress komutu gibi cy ile cagriyoruz.
    })
})