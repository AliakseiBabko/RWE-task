import HomePage from '../pages/HomePage';
import DropdownPage from '../pages/DropdownPage';
import BrokenImagesPage from '../pages/BrokenImagesPage';
import DynamicLoadingPage from '../pages/DynamicLoadingPage';
import RedirectPage from '../pages/RedirectPage';

describe('Task 1: Automate Components on The Internet Herokuapp', () => {
  beforeEach(() => {
    HomePage.visit();
  });

  it('Dropdown: Select an option from the dropdown', () => {
    HomePage.openDropdownPage();
    DropdownPage.selectOption('Option 1');
    DropdownPage.assertSelectedValue('1');
  });

  it('Broken Images: Ensure all images are loaded properly', () => {
    HomePage.openBrokenImagesPage();
    BrokenImagesPage.verifyImagesNotBroken();
  });

  it('Dynamic Loading: Load content after clicking the button', () => {
    HomePage.openDynamicLoadingPage();
    DynamicLoadingPage.checkDynamicLoading('a[href="/dynamic_loading/1"]', 'Hello World!');
    cy.go('back');
    DynamicLoadingPage.checkDynamicLoading('a[href="/dynamic_loading/2"]', 'Hello World!');
  });

  it('Redirect Link: Redirect to status code page and verify content', () => {
    HomePage.openRedirectPage();
    RedirectPage.clickRedirectLink();
    RedirectPage.assertStatusCodePageVisible();
    RedirectPage.clickStatusCode('200');
    RedirectPage.assertStatusCodePageContent('200');
  });
});