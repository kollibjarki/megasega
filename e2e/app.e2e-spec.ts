import { RassaforritPage } from './app.po';

describe('rassaforrit App', function() {
  let page: RassaforritPage;

  beforeEach(() => {
    page = new RassaforritPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
