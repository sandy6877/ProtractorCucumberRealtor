
var HomePage = function() {

  this.get = function() {
	browser.waitForAngularEnabled(false);
	browser.driver.manage().window().maximize();
    browser.get('https://www.realtor.com/');
  };

  this.searchBox = function(value) {
    element(by.id('searchBox')).sendKeys(value);
  };

  this.setSecondValue = function(value) {
    element(by.model('second')).sendKeys(value);
  };

  this.setOperator = function(value) {
    element(by.model('operator')).element(by.cssContainingText('option', value)).click();
  };

  this.getResult = function() {
    return element(by.binding('latest')).getText();
  };

  this.searchButton = function() {
    element(by.css('.js-searchButton')).click()
  }
};

module.exports = HomePage;
