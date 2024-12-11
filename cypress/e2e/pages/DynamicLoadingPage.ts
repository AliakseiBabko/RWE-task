class DynamicLoadingPage {
  private dynamicLoading1Link: string;
  private dynamicLoading2Link: string;

  constructor() {
    this.dynamicLoading1Link = 'a[href="/dynamic_loading/1"]';
    this.dynamicLoading2Link = 'a[href="/dynamic_loading/2"]';
  }

  public openLoadingScenario1(): void {
    cy.get(this.dynamicLoading1Link).click();
  }

  public openLoadingScenario2(): void {
    cy.get(this.dynamicLoading2Link).click();
  }

  public checkDynamicLoading(scenarioSelector: string, expectedText: string): void {
    // Assumes a custom command cy.checkDynamicLoading() is defined
    cy.checkDynamicLoading(scenarioSelector, expectedText);
  }
}

export default new DynamicLoadingPage();