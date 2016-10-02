import { CatalogerPage } from './app.po';

describe('cataloger App', function() {
  let page: CatalogerPage;

  beforeEach(() => {
    page = new CatalogerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
