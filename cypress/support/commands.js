// cypress/support/commands.js

Cypress.Commands.add('login', (username, password) => {
  cy.visit(Cypress.env('login_url'))
  cy.get('input[name="email"]').clear().type(username)
  cy.get('input[name="password"]').clear().type(password)
  cy.get('button[type="submit"]').click()
})

Cypress.Commands.add('preserveLogin', () => {
  Cypress.Cookies.defaults({
    preserve: (cookie) => true
  })
})
