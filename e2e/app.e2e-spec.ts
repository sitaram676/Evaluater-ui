import { EvaluaterUiPage } from './app.po';

describe('evaluater-ui App', function() {
  let page: EvaluaterUiPage;

  beforeEach(() => {
    page = new EvaluaterUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
