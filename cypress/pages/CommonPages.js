import { links } from "./Links"
import LoginPage from "./LoginPage"
import { productPage } from "./ProductsPage"
import { registerPage } from "./RegisterPage"
import { selectPage } from "./SelectPage"

class CommonPages {


    getLinks() {
        return links
    }

    getLoginPage() {
        return new LoginPage()
    }

    getProductPage() {
        return productPage
    }

    getRegisterPage() {
        return registerPage
    }

    getSelectPage() {
        return selectPage
    }

    getUserInfo() {

        return require('../fixtures/UserInfo.json')
    }



}


export const commonPage = new CommonPages()