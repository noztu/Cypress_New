class SelectPage {

    elements = {

        'fileUpload': () => cy.get('#file-upload'),
        'fileSubmit': () => cy.get('#file-submit'),
        'fileUploadedText': () => cy.get('.example>h3'),
        'uploaded_files': () => cy.get('#uploaded-files'),
        'multipleUpload': () => cy.get('#filesToUpload'),
        'multipleUploadText': () => cy.get('#fileList>li')
    }
//bu method dosya icindeki file i yuklememi saglar
    uploadFile(filePath) {
        this.elements.fileUpload().selectFile(filePath)
    }

//bu method upload file a click yapmami saglar
    submitFile() {
        this.elements.fileSubmit().click()
    }
//dosyamin upload olup olmadigini assert yapar.
    assertFile(fileName) {
        this.elements.fileUploadedText().should('have.text', 'File Uploaded!')
        this.elements.uploaded_files().should('contain.text', fileName)
    }

//bu method birden fazla file upload etmemizi saglar
    uploadMultipleFiles() {
        return this.elements.multipleUpload()
    }

    assertMultipleFiles() {
        return this.elements.multipleUploadText()
    }



}

export const selectPage = new SelectPage()

