class GlitchPage {
  // Selectors
  private loginButton: string;
  private userToggle: string;

  constructor() {
    this.loginButton = 'button.login-button';
    this.userToggle = '#toggle-current-user';
  }

  public visit(): void {
    cy.visit('https://support.glitch.com/');
  }

  public clickLoginButton(): void {
    cy.get(this.loginButton).click();
  }

  public clickLoginWithGitHub(): void {
    cy.contains('button', 'Log in with GitHub').click();
  }

  public loginWithGitHub(email: string, password: string): void {
    cy.loginWithGitHub(email, password);
  }

  public verifyUserLoggedIn(userName: string): void {
    cy.get(this.userToggle, { timeout: 10000 })
      .should('be.visible')
      .and('have.attr', 'aria-label')
      .and('include', userName);
  }
}

export default new GlitchPage();