
class BrokenImagesPage {
  private brokenImageSelector: string;

  constructor() {
    this.brokenImageSelector = '.example img';
  }

  public verifyImagesNotBroken(): void {
    cy.checkBrokenImages();
  }
}

export default new BrokenImagesPage();