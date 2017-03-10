import { AwesomeWeatherJsPage } from './app.po';

describe('awesome-weather-js App', function() {
  let page: AwesomeWeatherJsPage;

  beforeEach(() => {
    page = new AwesomeWeatherJsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
