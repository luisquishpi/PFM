/**
 * Test del controlador del calendario
 */

describe("Test calendarController", function() {

	beforeEach(module("projectApp"));

	var controller, scope;

	beforeEach(inject(function($controller, $rootScope) {
		scope = $rootScope;
		scope.calendarBean = {
			project : {
				cost : 85000,
				startString : "02/03/2015",
				endString : "04/09/2015"
			},
			holiday : {
				startString : "03/03/2015",
				endString : "04/03/2015"
			}
		}, scope.startDate = "2/3/2015", scope.endDate = "4/9/2015",
				scope.iterationLength = 13, scope.holidays = [ {
					startDate : "3/3/2015",
					endDate : "4/3/2015"
				} ], scope.workHours = {
					workHours : 8, // LUN
					workHours : 8, // LUN
					workHours : 8,
					workHours : 8,
					workHours : 8,
					workHours : 0,
					workHours : 0,
				};
		controller = $controller("calendarController", {
			$scope : scope,
			$isTest : true
		});
	}));

	it("Project day should be 8", function() {
		expect(scope.getProjectDay(moment("13/3/2015", "DD/MM/YYYY"))).toBe(8);
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