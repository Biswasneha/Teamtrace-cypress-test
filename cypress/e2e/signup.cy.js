describe('TeamTrace Sign Up Page', () => {
  it('should complete both steps of the sign up form', () => {
    cy.fixture('signup').then((data) => {
      console.log(data.validUser); 
      cy.visit('https://dev2.teamtrace.app/register')
      cy.contains('Sign Up').should('be.visible')
      cy.contains('First Name').parent().find('input').type(data.validUser.firstName)
      cy.contains('Last Name').parent().find('input').type(data.validUser.lastName)
      cy.contains('Email ID').parent().find('input').type(data.validUser.email)
      cy.contains('Password').parent().find('input').type(data.validUser.password)
      cy.contains('Next Step').click()
      cy.wait(2000)
      cy.contains('Organization Name', { timeout: 10000 }).should('be.visible')
      cy.contains('Organization Name').parent().find('input').type(data.validUser.organizationName)
      cy.contains('Organization Location').parent().find('input').type(data.validUser.organizationLocation)
      cy.contains('Contact Number').parent().find('input').type(data.validUser.contactNumber)
      cy.get('input[type="checkbox"]').check()
      cy.wait(20000)
      cy.get('#register_button_track').click()
      cy.contains('Welcome To TeamTrace').should('be.visible')
    })
  })
})