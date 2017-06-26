import { MyFamilyAppPage } from './app.po';

describe('my-family-app App', () => {
  let page: MyFamilyAppPage;

  beforeEach(() => {
    page = new MyFamilyAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
