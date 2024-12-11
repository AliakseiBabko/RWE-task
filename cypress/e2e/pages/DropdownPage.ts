class DropdownPage {
  private dropdown: string;

  constructor() {
    this.dropdown = '#dropdown';
  }

  public selectOption(optionText: string): void {
    cy.get(this.dropdown).select(optionText);
  }

  public assertSelectedValue(expectedValue: string): void {
    cy.get(this.dropdown).should('have.value', expectedValue);
  }
}

export default new DropdownPage();