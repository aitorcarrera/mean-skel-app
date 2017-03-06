import { MeanSkelAppPage } from './app.po';

describe('mean-skel-app App', function() {
  let page: MeanSkelAppPage;

  beforeEach(() => {
    page = new MeanSkelAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
