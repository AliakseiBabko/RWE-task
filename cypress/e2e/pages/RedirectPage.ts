class RedirectPage {
  private redirectLink: string;
  private statusCodesPageContent: string;

  constructor() {
    this.redirectLink = '#redirect';
    this.statusCodesPageContent = '#content';
  }

  public clickRedirectLink(): void {
    cy.get(this.redirectLink).click();
  }

  public assertStatusCodePageVisible(): void {
    cy.contains('Status Codes').should('be.visible');
  }

  public clickStatusCode(code: string): void {
    cy.contains('a', code).click();
  }

  public assertStatusCodePageContent(code: string): void {
    cy.get(this.statusCodesPageContent).should(
      'include.text',
      `This page returned a ${code} status code`
    );
  }
}

export default new RedirectPage();