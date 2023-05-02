import { urbanicFarmPage } from "../../pages/UrbanicFarmPage";
import color from "../../fixtures/colors.json"
import data from "../../fixtures/UserInfo.json"
describe('login testi', () => {

    it('login negative test color', () => {


        //siteye gittik
        urbanicFarmPage.visit()
        // yanlis email gonderelim
        urbanicFarmPage.typeEmail('hjhdf@df')
        // yazinin kirmizi oldugunu assert edelim
        urbanicFarmPage.assertText(urbanicFarmPage.getEmail(), color.text.error)
        // uzerine .com ekle
        urbanicFarmPage.typeEmail('.com')
        // assert black color
        urbanicFarmPage.assertText(urbanicFarmPage.getEmail(), color.text.blackVisible)


    });


    it('login negative toast message', () => {

        //siteye gittik
        urbanicFarmPage.visit()
        // login yaptik
        urbanicFarmPage.login('sdfasdsad@asdasd.asd', 'asdasWERWEr3423.,.')

        // toast message background red color
        urbanicFarmPage.assertToastRed()
        urbanicFarmPage.assertToastBackground(color.toast.error)

        // toast message text Invalid creds
        urbanicFarmPage.assertToastMessage('Invalid creds')
    });



    it('login possitive scenario', () => {
        //siteye gittik
        urbanicFarmPage.visit()

        //positive login 
        urbanicFarmPage.login(data.deneme.email, data.deneme.password)

        cy.url().should('contain', 'home')
    });


})