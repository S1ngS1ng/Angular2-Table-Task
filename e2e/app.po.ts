import { browser, element, by } from 'protractor/globals';

export class Angular2TaskPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
