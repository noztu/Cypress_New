describe('practice form', () => {

    const firstName = 'omer'
    const lastName = 'ali'
    beforeEach(() => {
        cy.visit('https://demoqa.com/', { timeout: 30000 })
        // Step-7) click on Forms
        cy.get(':nth-child(2) > :nth-child(1) > .card-up').click()
        // Step-8) click on Practice Forms
        cy.get(':nth-child(2) > .element-list > .menu-list > #item-0 > .text').click()
    })


    it('task 1 test 1', () => {

        // Step-1) Create a package as Tasks
        // Step-2) Create a package Task_1 in the Tasks package
        // Step-3) Create a file as forms.cy.js in the Task_1 package
        // Step-4) Create describe blog as practise form
        // Step-5) Create it blog as task_1_test_1
        // Step-6) go to https://demoqa.com/
        // cy.visit('https://demoqa.com/',{timeout:30000})
        // // Step-7) click on Forms
        // cy.get(':nth-child(2) > :nth-child(1) > .card-up').click()
        // // Step-8) click on Practice Forms
        // cy.get(':nth-child(2) > .element-list > .menu-list > #item-0 > .text').click()
        // Step-9) type first name as your name
        cy.get('#firstName').type(firstName, { delay: 100 })
            .should('be.visible')
            .should('have.value', firstName)
        // Step-10) assert if it is visible
        // Step-11) assert if it has value as your name
        // Step-12) type last name as your last name
        cy.get('#lastName').type(lastName)
            .should('exist')
            .and('have.value', lastName)
            .and('contain.value', 'li')
            .and('not.have.value', firstName)
        // Step-13) assert if it is exist
        // Step-14) assert if it has value as your last name
        // Step-15) assert if it doesn’t have your first name

    });


    it('task 1 test 2', function () {

        //         Step-1) Create it blog as task_1_test_2
        // Step-2) go to https://demoqa.com/
        // Step-3) click on Forms
        // Step-4) click on Practice Forms
        // Step-5) check male 

        cy.get("[id='gender-radio-1']").check({ force: true })
            .should('be.checked')
        // Step-6) assert if it male is checked
        // Step-7) assert if it female is not checked
        cy.get("[id='gender-radio-2']").should('not.be.checked')
        // Step-8) check female 
        cy.get("[id='gender-radio-2']").check({ force: true })
            .should('be.checked')
        // Step-9) assert if it female is checked
        // Step-10) assert if it male is not checked
        cy.get("[id='gender-radio-1']").should('not.be.checked')

    })


    it('task 1 test 3', () => {

        //         Step-1) Create it blog as task_1_test_3
        // Step-2) go to https://demoqa.com/
        // Step-3) click on Forms
        // Step-4) click on Practice Forms
        // Step-5) check sports

        // way 1
        //cy.get("[id^='hobbies-checkbox-']").first().check()

        // way 2
        //cy.get("[id='hobbies-checkbox-1']").check()

        // way 3
        //cy.get("[id^='hobbies-checkbox-']").eq(0).check()

        // way 4
        cy.get("[id^='hobbies-checkbox-']").check('1', { force: true })
            .should('be.checked')


        cy.get("[id^='hobbies-checkbox-']").eq(1).should('not.be.checked')

        // Step-6) assert if it sports is checked
        // Step-7) assert if it reading is not checked
        // Step-8) uncheck sports
        cy.get("[id^='hobbies-checkbox-']").uncheck('1', { force: true })
            .should('not.be.checked')
        // Step-9) assert if it sports is unchecked


        // check all values
        cy.get("[id^='hobbies-checkbox-']").check([ '2', '3' ], { force: true })

    })




    it('task 1 test 4', () => {
        //         Step-1) Create it blog as task_1_test_4
        // Step-2) go to https://demoqa.com/
        // Step-3) click on Forms
        // Step-4) click on Practice Forms
        // Step-5) click on Date of Birth
        cy.get('#dateOfBirthInput').click()
        // Step-6) select May


        // index 
        cy.get('.react-datepicker__month-select').select(2).should('have.value','2')


        // value 
        cy.get('.react-datepicker__month-select').select('3').should('have.value','3')
        
        // text
        cy.get('.react-datepicker__month-select').select('May').should('have.value','4')
        // Step-7) assert if May is selected
        // Step-8) select 2020
        // Step-9) assert if 2020 is selected

        cy.get('.react-datepicker__year-select').select('2020')
        cy.get('.react-datepicker__year-select option:selected').should('have.text', '2020')
       

    });
})