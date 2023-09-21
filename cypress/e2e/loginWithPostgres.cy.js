const Chance  = require("chance");

describe("Tests login with postgres", () => {

    let chance = new Chance();
    let name
    let email
    let username
    let password
    let id

    beforeEach(() => {
        name = chance.name();
        email = chance.email({domain: "mail.com"});
        username = chance.name();
        password = chance.string();
        id = chance.android_id();
    })

    it("Login Successfully 1", () => {
        cy.runSQL(`INSERT INTO "User"(id, name, email, username, password) VALUES ('${id}', '${name}', '${email}', '${username}', '${password}');`)

        cy.visit("http://localhost:5173");

        cy.get('[placeholder="Digite seu usuário"]')
        .should("be.visible")
        .type('teste')

        cy.get('[placeholder="Digite sua senha"]')
        .should("be.visible")
        .type('teste')

        cy.get('.buttons')
        .should("be.visible")
        .click()

        cy.get('.buttonImageContainer')
        .should('be.visible');
    })

    it("Login Successfully 2", () => {
      cy.runSQL(`INSERT INTO "User"(id, name, email, username, password) VALUES ('${id}', '${name}', '${email}', '${username}', '${password}');`)

      cy.visit("http://localhost:5173");

      cy.get('[placeholder="Digite seu usuário"]')
      .should("be.visible")
      .type('teste')

      cy.get('[placeholder="Digite sua senha"]')
      .should("be.visible")
      .type('teste')

      cy.get('.buttons')
      .should("be.visible")
      .click()

      cy.get('.buttonImageContainer')
      .should('be.visible');
  })

  it("Login Successfully 3", () => {
    cy.runSQL(`INSERT INTO "User"(id, name, email, username, password) VALUES ('${id}', '${name}', '${email}', '${username}', '${password}');`)

    cy.visit("http://localhost:5173");

    cy.get('[placeholder="Digite seu usuário"]')
    .should("be.visible")
    .type('teste')

    cy.get('[placeholder="Digite sua senha"]')
    .should("be.visible")
    .type('teste')

    cy.get('.buttons')
    .should("be.visible")
    .click()

    cy.get('.buttonImageContainer')
    .should('be.visible');
  })

  it("Login Successfully 4", () => {
    cy.runSQL(`INSERT INTO "User"(id, name, email, username, password) VALUES ('${id}', '${name}', '${email}', '${username}', '${password}');`)

    cy.visit("http://localhost:5173");

    cy.get('[placeholder="Digite seu usuário"]')
    .should("be.visible")
    .type('teste')

    cy.get('[placeholder="Digite sua senha"]')
    .should("be.visible")
    .type('teste')

    cy.get('.buttons')
    .should("be.visible")
    .click()

    cy.get('.buttonImageContainer')
    .should('be.visible');
  })

  it("Login Successfully 5", () => {
    cy.runSQL(`INSERT INTO "User"(id, name, email, username, password) VALUES ('${id}', '${name}', '${email}', '${username}', '${password}');`)

    cy.visit("http://localhost:5173");

    cy.get('[placeholder="Digite seu usuário"]')
    .should("be.visible")
    .type('teste')

    cy.get('[placeholder="Digite sua senha"]')
    .should("be.visible")
    .type('teste')

    cy.get('.buttons')
    .should("be.visible")
    .click()

    cy.get('.buttonImageContainer')
    .should('be.visible');
  })

  it("Login Successfully 6", () => {
    cy.runSQL(`INSERT INTO "User"(id, name, email, username, password) VALUES ('${id}', '${name}', '${email}', '${username}', '${password}');`)

    cy.visit("http://localhost:5173");

    cy.get('[placeholder="Digite seu usuário"]')
    .should("be.visible")
    .type('teste')

    cy.get('[placeholder="Digite sua senha"]')
    .should("be.visible")
    .type('teste')

    cy.get('.buttons')
    .should("be.visible")
    .click()

    cy.get('.buttonImageContainer')
    .should('be.visible');
  })

  it("Login Successfully 7", () => {
    cy.runSQL(`INSERT INTO "User"(id, name, email, username, password) VALUES ('${id}', '${name}', '${email}', '${username}', '${password}');`)

    cy.visit("http://localhost:5173");

    cy.get('[placeholder="Digite seu usuário"]')
    .should("be.visible")
    .type('teste')

    cy.get('[placeholder="Digite sua senha"]')
    .should("be.visible")
    .type('teste')

    cy.get('.buttons')
    .should("be.visible")
    .click()

    cy.get('.buttonImageContainer')
    .should('be.visible');
  })

  it("Login Successfully 8", () => {
    cy.runSQL(`INSERT INTO "User"(id, name, email, username, password) VALUES ('${id}', '${name}', '${email}', '${username}', '${password}');`)

    cy.visit("http://localhost:5173");

    cy.get('[placeholder="Digite seu usuário"]')
    .should("be.visible")
    .type('teste')

    cy.get('[placeholder="Digite sua senha"]')
    .should("be.visible")
    .type('teste')

    cy.get('.buttons')
    .should("be.visible")
    .click()

    cy.get('.buttonImageContainer')
    .should('be.visible');
  })
})