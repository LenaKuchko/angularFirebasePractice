import { AngularCraiglistPage } from './app.po';

describe('angular-craiglist App', () => {
  let page: AngularCraiglistPage;

  beforeEach(() => {
    page = new AngularCraiglistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
