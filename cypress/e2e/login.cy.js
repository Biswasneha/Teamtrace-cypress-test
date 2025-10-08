// describe('Visit a Web Page', () => {
//   it('should load the page and verify basic elements', () => {
//     // Visit the target URL (you can also use baseUrl from cypress.config.js)
//     cy.visit('https://dev2.teamtrace.app/login')

//     // Check if the page title contains expected text
//     cy.title().should('include', 'TeamTrace')

//     // Verify that the email and password input fields are visible
//     cy.get('input[placeholder="Enter Email"]').type('alex@yopmail.com')
//     cy.get('#auth-login-v2-password').type('Code@1234')
//     // Verify the submit/login button is visible and enabled
//     cy.get('.d-flex > .MuiButtonBase-root').click()

//     // Optional: Check for a specific text or logo on the page
//   })
// })




describe('Visit a Web Page', () => {
  it('should load the page and verify basic elements', () => {
    cy.fixture('login').then((data) => {
      console.log(data.validUser); 
      cy.visit('https://dev2.teamtrace.app/login')
      cy.title().should('include', 'TeamTrace')
      cy.get('input[placeholder="Enter Email"]').type(data.validUser.email)
      cy.get('#auth-login-v2-password').type(data.validUser.password)
      cy.get('.d-flex > .MuiButtonBase-root').click()
      cy.url().should('include', '/employee-dashboard')
  
    })
  })
})