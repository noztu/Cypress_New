// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
///<reference types="cypress"/>


//.................utils..............
import { commonPage } from '../pages/CommonPages'
//import 'cypress-iframe';
import utils from './util'
import 'cypress-plugin-api'
Cypress.Commands.add('generateFakerData', utils.generateFakerData)
Cypress.Commands.add('iframe', utils.iframe)

// Cypress.Commands.add('iframe', (webelement)=>{

//})
Cypress.Commands.add('login', (email, password) => {


    commonPage.getLinks().goToLoginPage()
    commonPage.getLoginPage().typeUserName(email)
    commonPage.getLoginPage().typePassword(password)
    commonPage.getRegisterPage().clickSubmit()


})
Cypress.Commands.add('dragTo', (from, to) => {
    const dataTransfer = new DataTransfer()


    cy.get(from).trigger('dragstart', {
        dataTransfer
    })

    cy.get(to).trigger('drop', {
        dataTransfer
    })

})


Cypress.Commands.add('dragToYeniVersion', { prevSubject: "element" }, (subject, to) => {
    const dataTransfer = new DataTransfer()


    cy.get(subject).trigger('dragstart', {
        dataTransfer
    })

    cy.get(to).trigger('drop', {
        dataTransfer
    })

})


// ---------- api ------------

import apiUtilities from './apiUtilities';

Cypress.Commands.add('registerDemoqa', apiUtilities.registerDemoqa)
