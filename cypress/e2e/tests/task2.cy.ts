
import GlitchPage from '../pages/GlitchPage';
describe('Task 2: Sign Up on Glitch Support', () => {
  it('Should sign up with GitHub and validate successful login', () => {
    // Access environment variables
    const email = Cypress.env('githubUserEmail');
    const password = Cypress.env('githubUserPassword');
    const name = Cypress.env('userName');

    // Visit Glitch Support and click the login button
    GlitchPage.visit();
    GlitchPage.clickLoginButton();
    GlitchPage.clickLoginWithGitHub();

    // Handle GitHub Sign-In within cy.origin
    GlitchPage.loginWithGitHub(email, password);

    // Wait for the user toggle to be visible and verify the user's name
    GlitchPage.verifyUserLoggedIn(name);

  });
});
