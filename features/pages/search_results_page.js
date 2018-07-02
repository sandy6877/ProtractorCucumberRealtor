
var SearchResultsPage = function() {
	
	this.getSearchResultCount = function() {
    return element(by.id('.srp-sort-count-wrap')).getText();
    };
	
	this.getSelectedPrice = function() {
    return element.all(by.css('.srp-item-price')).get(1).getText();
    };
	
	this.clickOnResult = function() {
      element.all(by.css('.srp-item-photo a')).get(1).click();
    };
	
	this.getItemPrice = function() {
    return element(by.css("//span[@itemprop='price']")).getText();
    };

};

module.exports = SearchResultsPage;
