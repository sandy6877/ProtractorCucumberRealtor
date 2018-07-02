Feature: Property listing verification

  Scenario: Searching for a property
	Given I am on the home page
	When I search for "Morgantown, WV"
	And I click on second result
	Then I should see propery with selected price
	
	 