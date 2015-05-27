/**
 * Test del controlador del calendario
 */

describe("Test calendarController", function() {

	beforeEach(module("projectApp"));

	var controller, scope;

	beforeEach(inject(function($controller, $rootScope) {
		scope = $rootScope;
		scope.startDate = moment("2/3/2015", "DD/MM/YYYY"), 
		scope.endDate = moment("4/9/2015", "DD/MM/YYYY"),
		scope.iterationLength = 13, 
		scope.holidays = [ {
					start : moment("3/3/2015", "DD/MM/YYYY"),
					end : moment("4/3/2015", "DD/MM/YYYY")
				} ], 
		scope.workHours = [
					0, // LUN
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
		expect(scope.getProjectDay(moment("13/3/2015", "DD/MM/YYYY")), null).toBe(8);
	});

	it("Iteration should be I-1", function() {
		expect(scope.getIteration(8)).toBe("I-1");
	});

	it("Project day should be 8", function() {
		expect(
				scope.getEvents(moment("2/3/2015", "DD/MM/YYYY"), moment(
						"5/3/2015", "DD/MM/YYYY"))).toBe([ {
			title : "I-1 <br/> Dia: 1 <br/> Horas:8",
			start : moment("2/3/2015", "DD/MM/YYYY"),
			end : moment("3/3/2015", "DD/MM/YYYY")
		}, {
			title : "I-1 <br/> Dia: 2 <br/> Horas:8",
			start : moment("5/3/2015", "DD/MM/YYYY"),
			end : moment("6/3/2015", "DD/MM/YYYY")
		} ]);
	});

});