import { commonPage } from "../../pages/CommonPages";

describe('upload calismasi', () => {
    it('upload single', () => {

        commonPage.getLinks().goToUpload_heroku()

        commonPage.getSelectPage().uploadFile('cypress/fixtures/flagTurkey.png')

        commonPage.getSelectPage().submitFile()

        commonPage.getSelectPage().assertFile('flagTurkey')

    });

    it('upload multiple files', () => {


        const flags = [ 'flagCanada.png', 'flagGermany.png', 'flagTurkey.png' ]

        commonPage.getLinks().goToUpload_multiple()

        commonPage
            .getSelectPage()
            .uploadMultipleFiles()
            .selectFile([

                'cypress/fixtures/flagCanada.png',
                'cypress/fixtures/flagGermany.png',
                'cypress/fixtures/flagTurkey.png'

            ])


        commonPage.getSelectPage().assertMultipleFiles().each(($element, index, $list) => {

            expect($element.text()).to.equal(flags[ index ])
            expect($list.length).to.equal(flags.length)
        })
    });

})
