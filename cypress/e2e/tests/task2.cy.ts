describe('Task 2: Sign Up on Glitch Support', () => {
  it('Should sign up with GitHub and validate successful login', () => {
    // Access environment variables
    const email = Cypress.env('githubUserEmail');
    const password = Cypress.env('githubUserPassword');
    const name = Cypress.env('userName');

    // Visit Glitch Support and click the login button
    cy.visit('https://support.glitch.com/');
    cy.get('button.login-button').click();
    cy.contains('button', 'Log in with GitHub').click();

    // Handle GitHub Sign-In within cy.origin
    cy.origin(
      'https://github.com',
      { args: { email, password } },
      ({ email, password }) => {
        cy.get('input#login_field').should('be.visible').type(email, { log: false });
        cy.get('input#password').should('be.visible').type(password, { log: false });
        cy.get('input.js-sign-in-button').should('be.visible').click();
        
        // Conditional click on the "Authorize" button if it exists
        cy.get('body').then(($body) => {
          if ($body.find('.js-oauth-authorize-btn').length > 0) {
            cy.get('.js-oauth-authorize-btn')
              .should('be.visible')
              .click();
          }
        });
      }
    );

    // Wait for the user toggle to be visible and verify the user's name
    cy.get('#toggle-current-user', { timeout: 10000 })
      .should('be.visible')
      .and('have.attr', 'aria-label')
      .and('include', name);
  });
});
