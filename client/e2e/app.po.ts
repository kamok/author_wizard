export class AuthorWizardPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('author-wizard-app h1')).getText();
  }
}
