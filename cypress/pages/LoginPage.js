class LoginPage {

    elements = {
        'userName': () => cy.get("[name='email']"),
        'password': () => cy.get("[name='password']"),

    }

    typeUserName(username) {
        this.elements.userName().type(username,{force: true}).should('have.value', username)
    }

    typePassword(password) {
        this.elements.password().type(password,{force: true}).should('have.value', password)
    }


    
}

export default LoginPage