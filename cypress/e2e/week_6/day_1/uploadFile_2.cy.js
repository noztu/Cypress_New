describe('upload file 2', () => {



    it('drag and drop', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#drag-drop-upload').selectFile('cypress/fixtures/flagCanada.png', { action: "drag-drop" })


        cy.get('.dz-filename>span').first().should('have.text', 'flagCanada.png')
    });



    it('file upload with plugin single', () => {

        cy.visit('https://the-internet.herokuapp.com/upload')


        cy.get('#file-upload')
            .attachFile('flagCanada.png');
    });


    it('file upload with plugin multiple', () => {

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')


        cy.get('#filesToUpload')
            .attachFile([ 'flagCanada.png', 'flagGermany.png', ]);
    });



    it('file upload with plugin drag and drop', () => {

        cy.visit('https://the-internet.herokuapp.com/upload')

        cy.get('#drag-drop-upload')
            .attachFile('myfixture.json', { subjectType: 'drag-n-drop' });
    });
})