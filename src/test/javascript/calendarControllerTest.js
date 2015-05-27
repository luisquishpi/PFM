/**
 * Test del controlador del calendario
 */

describe("Test calendarController", function() {

	beforeEach(module("projectApp"));

	var controller, scope;

	beforeEach(inject(function($controller, $rootScope) {
		scope = $rootScope;
		scope.startDate = moment.utc("2/3/2015", "DD/MM/YYYY"), 
		scope.endDate = moment.utc("4/9/2015", "DD/MM/YYYY"),
		scope.iterationLength = 13, 
		scope.holidays = [ {
					start : moment.utc("3/3/2015", "DD/MM/YYYY"),
					end : moment.utc("4/3/2015", "DD/MM/YYYY")
				} ], 
		scope.workHours = [
					0, // DOM
					8, // LUN
					8,
					8,
					8,
					8,
					0
		];
		controller = $controller("calendarController", {
			$scope : scope,
			$isTest : true
		});
	}));

	it("Project day should be 8", function() {
		expect(scope.getProjectDay(moment.utc("2015-03-13")), null).toBe(8);
	});

	it("Iteration should be I-1", function() {
		expect(scope.getIteration(8)).toBe("I-1");
	});
	/*
	it("getEvents should be 3[ 2 project days and 1 holiday ]", function() {
		expect(scope.getEvents(moment("2/3/2015", "DD/MM/YYYY"), moment("6/3/2015", "DD/MM/YYYY")).length).toBe(3);
	});*/

});