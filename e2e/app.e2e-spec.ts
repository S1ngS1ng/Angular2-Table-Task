import { Angular2TaskPage } from './app.po';

describe('angular2-task App', function() {
  let page: Angular2TaskPage;

  beforeEach(() => {
    page = new Angular2TaskPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
