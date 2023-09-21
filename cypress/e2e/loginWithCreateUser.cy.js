const Chance  = require("chance");

describe("Tests login with create new user", () => {
    let chance = new Chance();
    let name
    let email
    let username
    let password

    beforeEach(() => {
        name = chance.name();
        email = chance.email({domain: "mail.com"});
        username = chance.name();
        password = chance.string();
    })

    it("Login Successfully 1", () => {
        cy.createUser(name, email, username, password)

        cy.visit("http://localhost:5173");

        cy.get('[placeholder="Digite seu usuário"]')
        .should("be.visible")
        .type(username)

        cy.get('[placeholder="Digite sua senha"]')
        .should("be.visible")
        .type(password)

        cy.get('.buttons')
        .should("be.visible")
        .click()

        cy.get('.buttonImageContainer')
        .should('be.visible');
    })

    it("Login Successfully 2", () => {
        cy.createUser(name, email, username, password)

        cy.visit("http://localhost:5173");

        cy.get('[placeholder="Digite seu usuário"]')
        .should("be.visible")
        .type(username)

        cy.get('[placeholder="Digite sua senha"]')
        .should("be.visible")
        .type(password)

        cy.get('.buttons')
        .should("be.visible")
        .click()

        cy.get('.buttonImageContainer')
        .should('be.visible');
    })

    it("Login Successfully 3", () => {
        cy.createUser(name, email, username, password)

        cy.visit("http://localhost:5173");

        cy.get('[placeholder="Digite seu usuário"]')
        .should("be.visible")
        .type(username)

        cy.get('[placeholder="Digite sua senha"]')
        .should("be.visible")
        .type(password)

        cy.get('.buttons')
        .should("be.visible")
        .click()

        cy.get('.buttonImageContainer')
        .should('be.visible');
    })

    it("Login Successfully 4", () => {
        cy.createUser(name, email, username, password)

        cy.visit("http://localhost:5173");

        cy.get('[placeholder="Digite seu usuário"]')
        .should("be.visible")
        .type(username)

        cy.get('[placeholder="Digite sua senha"]')
        .should("be.visible")
        .type(password)

        cy.get('.buttons')
        .should("be.visible")
        .click()

        cy.get('.buttonImageContainer')
        .should('be.visible');
    })

    it("Login Successfully 5", () => {
        cy.createUser(name, email, username, password)

        cy.visit("http://localhost:5173");

        cy.get('[placeholder="Digite seu usuário"]')
        .should("be.visible")
        .type(username)

        cy.get('[placeholder="Digite sua senha"]')
        .should("be.visible")
        .type(password)

        cy.get('.buttons')
        .should("be.visible")
        .click()

        cy.get('.buttonImageContainer')
        .should('be.visible');
    })

    it("Login Successfully 6", () => {
        cy.createUser(name, email, username, password)

        cy.visit("http://localhost:5173");

        cy.get('[placeholder="Digite seu usuário"]')
        .should("be.visible")
        .type(username)

        cy.get('[placeholder="Digite sua senha"]')
        .should("be.visible")
        .type(password)

        cy.get('.buttons')
        .should("be.visible")
        .click()

        cy.get('.buttonImageContainer')
        .should('be.visible');
    })

    it("Login Successfully 7", () => {
        cy.createUser(name, email, username, password)

        cy.visit("http://localhost:5173");

        cy.get('[placeholder="Digite seu usuário"]')
        .should("be.visible")
        .type(username)

        cy.get('[placeholder="Digite sua senha"]')
        .should("be.visible")
        .type(password)

        cy.get('.buttons')
        .should("be.visible")
        .click()

        cy.get('.buttonImageContainer')
        .should('be.visible');
    })

    it("Login Successfully 8", () => {
        cy.createUser(name, email, username, password)

        cy.visit("http://localhost:5173");

        cy.get('[placeholder="Digite seu usuário"]')
        .should("be.visible")
        .type(username)

        cy.get('[placeholder="Digite sua senha"]')
        .should("be.visible")
        .type(password)

        cy.get('.buttons')
        .should("be.visible")
        .click()

        cy.get('.buttonImageContainer')
        .should('be.visible');
    })
})