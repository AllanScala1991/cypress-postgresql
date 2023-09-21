Cypress.Commands.add('runSQL', sql => {
  cy.task('dbQuery', {
    query: sql,
    connection: Cypress.env('db'),
  })
})

Cypress.Commands.add('createUser', (name, email, username, password) => {
  cy.visit('http://localhost:5173/create/user');

  cy.get('[placeholder="Digite seu nome completo"]')
  .should("be.visible")
  .type(name)

  cy.get('[placeholder="Digite seu email"]')
  .should("be.visible")
  .type(email)

  cy.get('[placeholder="Digite seu usuário"]')
  .should("be.visible")
  .type(username)

  cy.get('[placeholder="Digite sua senha"]')
  .should("be.visible")
  .type(password)

  cy.get('.buttons')
  .should("be.visible")
  .click()

  cy.get('[role="dialog"]')
  .should("be.visible")
})