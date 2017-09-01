import { browser, element, by } from 'protractor';

export class CatalogerPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ctlg-root h1')).getText();
  }
}
