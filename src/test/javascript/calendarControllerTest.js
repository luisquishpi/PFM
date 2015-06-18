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
		expect(scope.getIteration(8).label).toBe("I-1");
	});
	
	it("Iteration should be I-1", function() {
		expect(scope.getIteration(13).label).toBe("I-1");
	});
	
	it("Iteration should be E-2", function() {
		expect(scope.getIteration(26).label).toBe("E-2");
	});
	
	it("Iteration should be E-3", function() {
		expect(scope.getIteration(39).label).toBe("E-3");
	});
	
	it("Iteration should be E-4", function() {
		expect(scope.getIteration(52).label).toBe("E-4");
	});
	
	it("Iteration should be C-5", function() {
		expect(scope.getIteration(65).label).toBe("C-5");
	});
	
	it("Iteration should be C-6", function() {
		expect(scope.getIteration(78).label).toBe("C-6");
	});
	
	it("Iteration should be C-7", function() {
		expect(scope.getIteration(91).label).toBe("C-7");
	});
	
	it("Iteration should be C-8", function() {
		expect(scope.getIteration(104).label).toBe("C-8");
	});
	
	it("Iteration should be C-9", function() {
		expect(scope.getIteration(117).label).toBe("C-9");
	});
	
	it("Iteration should be P-10", function() {
		expect(scope.getIteration(130).label).toBe("T-10");
	});
	/*
	it("getEvents should be 3[ 2 project days and 1 holiday ]", function() {
		expect(scope.getEvents(moment("2/3/2015", "DD/MM/YYYY"), moment("6/3/2015", "DD/MM/YYYY")).length).toBe(3);
	});*/

});