/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    selectDropdown(dropdownSelector: string, optionText: string): Chainable<void>;
    checkBrokenImages(): Chainable<void>;
    checkDynamicLoading(buttonSelector: string, textToCheck: string): Chainable<void>;
    checkRedirectLink(linkText: string, redirectText: string): Chainable<void>;
    loginWithGitHub(email: string, password: string): Chainable<void>;
  }

  interface Env {
    googleUserEmail: string;
    googleUserPassword: string;
    googleUserName: string;
  }
}