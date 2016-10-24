import { Angular2TDDCalculatorPage } from './app.po';

describe('angular2-tdd-calculator App', function() {
  let page: Angular2TDDCalculatorPage;

  beforeEach(() => {
    page = new Angular2TDDCalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
