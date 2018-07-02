var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;

var RealtorSteps = function() {

  var HomePage = require("../pages/home_page.js");
  var SearchResultsPage = require("../pages/search_results_page.js");
  var selectedPrice = "";

  this.World = function MyWorld() {
    this.homePage = new HomePage();
	this.searchPage = new SearchResultsPage();
  };

  this.Given('I am on the home page', function (callback) {
    this.homePage.get();
    callback();
  });

  this.When('I search for $first', function (first, callback) {
    this.homePage.searchBox(first);
	this.homePage.searchButton();
    callback();
  });
  
  this.When('I click on second result', function (callback) {
    var resultCount = selectedPrice = this.searchPage.getSelectedPrice();
	var count = parseInt(resultCount);
	if (count > 0) {
        document.write("Item Count greater then zero");
    } else {
        document.write("Item count less than zero");
    }
	this.searchPage.clickOnResult();
    callback();
  });
  
  this.Then('I should see propery with selected price', function (callback) {
    var itemPrice = this.searchPage.getSelectedPrice();
	xpect(itemPrice).toEqual(selectedPrice);

    callback();
  });
  
};

module.exports = RealtorSteps;