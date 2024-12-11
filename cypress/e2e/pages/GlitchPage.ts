class GlitchPage {
  private loginButton: string;

  constructor() {
    this.loginButton = '#dropdown';
  }

  public login(optionText: string): void {
    cy.get(this.loginButton).select(optionText);
  }

  public logput(expectedValue: string): void {
    cy.get(this.loginButton).should('have.value', expectedValue);
  }
}

export default new GlitchPage();