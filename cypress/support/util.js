
import faker from 'faker'


// way 1
// ES6 oncesi
export function generateFakerData2() {

    cy.writeFile('cypress/fixtures/fakeData.json', {

        firstName: faker.name.firstName(),
        middleName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email:faker.internet.email().toLowerCase(),
        password:faker.internet.password(8)+'aA1',
        phoneNumber: faker.phone.phoneNumber('##########')
    })
}

// way 2
// ES6 sonrasi
const generateFakerData = () => {

    cy.writeFile('cypress/fixtures/data/fakeData.json',{
        firstName: faker.name.firstName(),
        middleName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email:faker.internet.email().toLowerCase(),
        password:faker.internet.password(8)+'aA1',
        phoneNumber: faker.phone.phoneNumber('##########')
    })
}
const iframe = (webElement) => {
    return cy.get(webElement)
        .its('0.contentDocument.body')
        .then(cy.wrap)


}

const login = (username,password)=>{
    // username
    //password
}

export default {
    generateFakerData,
    login,
    iframe
}