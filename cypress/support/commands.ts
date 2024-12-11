import { selectors } from './selectors';

/**
 * Custom command to check for broken images on the page using soft assertions.
 * It iterates through all images, sends a request to each image URL,
 * collects any images that return a non-200 status code,
 * logs each broken image, and asserts at the end that there are no broken images.
 */
Cypress.Commands.add('checkBrokenImages', () => {
  const brokenImages: string[] = []; // Array to store broken image URLs

  cy.get('img').each(($img) => {
    const imgUrl = $img.prop('src'); // Extract the src attribute

    // Ensure the src attribute exists
    if (imgUrl) {
      // Send a request to the image URL without failing on non-2xx status codes
      cy.request({
        url: imgUrl,
        failOnStatusCode: false,
      }).then((response) => {
        if (response.status !== 200) {
          brokenImages.push(imgUrl); // Add to broken images if status is not 200
          cy.log(`Broken Image Found: ${imgUrl} (Status: ${response.status})`);
        }
      });
    } else {
      brokenImages.push('Image with no src attribute found');
      cy.log('Broken Image Found: Image with no src attribute');
    }
  }).then(() => {
    if (brokenImages.length > 0) {
      // Log all broken images
      cy.log(`\n**Broken Images Detected (${brokenImages.length}):**\n${brokenImages.join('\n')}`);
    }

    // Assert that there are no broken images
    expect(brokenImages, `List of broken images ${JSON.stringify(brokenImages)}`).to.have.length(0);
  });
});

Cypress.Commands.add('checkDynamicLoading', (link: string, textToCheck: string) => {
  cy.get(link).click();
  cy.get('button:contains("Start")').click();
  cy.get('#loading').should('be.visible');
  cy.contains(textToCheck, { timeout: 10000 }).should('be.visible');
});

Cypress.Commands.add('loginWithGitHub', (email: string, password: string) => {
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
});