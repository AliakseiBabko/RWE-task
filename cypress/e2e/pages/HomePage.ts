class HomePage {
  private dropdownLink: string;
  private brokenImagesLink: string;
  private dynamicLoadingLink: string;
  private redirectPageLink: string;

  constructor() {
    this.dropdownLink = 'a[href="/dropdown"]';
    this.brokenImagesLink = 'a[href="/broken_images"]';
    this.dynamicLoadingLink = 'a[href="/dynamic_loading"]';
    this.redirectPageLink = 'a[href="/redirector"]';
  }

  public visit(): void {
    cy.visit('https://the-internet.herokuapp.com/');
  }

  public openDropdownPage(): void {
    cy.get(this.dropdownLink).click();
  }

  public openBrokenImagesPage(): void {
    cy.get(this.brokenImagesLink).click();
  }

  public openDynamicLoadingPage(): void {
    cy.get(this.dynamicLoadingLink).click();
  }

  public openRedirectPage(): void {
    cy.get(this.redirectPageLink).click();
  }
}

export default new HomePage();