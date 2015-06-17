/**
 * Test del controlador del calendario
 */

describe("Test calendarController", function() {

	beforeEach(module("projectApp"));

	var controller, scope, DATE_FORMAT = "DD/MM/YYYY";

	beforeEach(inject(function($controller, $rootScope) {
		scope = $rootScope;
		scope.calendarController = {};
		scope.calendarController.getEvents = function(){
			return [
		        { title: "I",
		          startDate: moment.utc("2/3/2015", DATE_FORMAT),
				  hours : 8 },
				{ title: "I",
				  startDate: moment.utc("1/3/2015", DATE_FORMAT),
				  hours : 2 },
			  	{ title: "E",
				  startDate: moment.utc("6/3/2015", DATE_FORMAT),
				  hours : 4 },
				{ title: "E",
				  startDate: moment.utc("5/3/2015", DATE_FORMAT),
				  hours : 4 },
				{ title: "E",
				  startDate: moment.utc("3/3/2015", DATE_FORMAT),
				  hours : 8 },
				{ title: "E",
				  startDate: moment.utc("4/3/2015", DATE_FORMAT),
				  hours : 8 }
	        ];
		};
		scope.projectSchedule = {
				workDays : 21,
				project : {iterationDays : 2}
		};
		controller = $controller("assignedPhaseController", {
			$scope : scope,
			$isTest : true,
		});
	}));

	/*
	 * ------------------- Lengths -------------------
	 */
	/* HOURS */
	it("Lengths::InceptionPhase - Hours: should be 10", function() {
		expect(scope.inceptionPhaseLength.hours()).toBe(10);
	});
	it("Lengths::ElaborationPhase - Hours: should be 24", function() {
		expect(scope.elaborationPhaseLength.hours()).toBe(24);
	});
	/* DAYS */
	it("Lengths::InceptionPhase - Days: should be 2", function() {
		expect(scope.inceptionPhaseLength.days()).toBe(2);
	});
	it("Lengths::ElaborationPhase - Days: should be 4", function() {
		expect(scope.elaborationPhaseLength.days()).toBe(4);
	});
	it("Lengths::ConstructionPhase - Days: should be 0", function() {
		expect(scope.constructionPhaseLength.days()).toBe(0);
	});
	/* MONTHS */
	it("Lengths::InceptionPhase - Months: should be 0.09", function() {
		expect(scope.inceptionPhaseLength.months()).toBeCloseTo(0.09,1);
	});
	it("Lengths::ElaborationPhase - Months: should be 0.19", function() {
		expect(scope.elaborationPhaseLength.months()).toBeCloseTo(0.19,1);
	});
	it("Lengths::ConstructionPhase - Months: should be 0", function() {
		expect(scope.constructionPhaseLength.months()).toBe(0);
	});
	/* START DATE */
	it("Lengths::InceptionPhase - Start date: should be 1/3/2015", function() {
		expect(scope.inceptionPhaseLength.startDate.isSame(moment.utc("1/3/2015", DATE_FORMAT))).toBe(true);
	});
	it("Lengths::ElaborationPhase - Start date: should be 3/3/2015", function() {
		expect(scope.elaborationPhaseLength.startDate.isSame(moment.utc("3/3/2015", DATE_FORMAT))).toBe(true);
	});
	it("Lengths::ConstructionPhase - Start date: should be null", function() {
		expect(scope.constructionPhaseLength.startDate).toBe(null);
	});
	/* END DATE */
	it("Lengths::InceptionPhase - End date: should be 2/3/2015", function() {
		expect(scope.inceptionPhaseLength.endDate.isSame(moment.utc("2/3/2015", DATE_FORMAT))).toBe(true);
	});
	it("Lengths::ElaborationPhase - End date: should be 6/3/2015", function() {
		expect(scope.elaborationPhaseLength.endDate.isSame(moment.utc("6/3/2015", DATE_FORMAT))).toBe(true);
	});
	it("Lengths::ConstructionPhase - End date: should be null", function() {
		expect(scope.constructionPhaseLength.endDate).toBe(null);
	});
	/* ITERATIONS */
	it("Lengths::InceptionPhase - iterations: should be 1", function() {
		expect(scope.inceptionPhaseLength.iterations).toBe(1);
	});
	it("Lengths::ElaborationPhase - iterations: should be 2", function() {
		expect(scope.elaborationPhaseLength.iterations).toBe(2);
	});
	it("Lengths::ConstructionPhase - iterations: should be 0", function() {
		expect(scope.constructionPhaseLength.iterations).toBe(0);
	});
	/* INITIAL ITERATIONS */
	it("Lengths::InceptionPhase - initialIterations: should be 1", function() {
		expect(scope.inceptionPhaseLength.initialIteration).toBe(1);
	});
	it("Lengths::ElaborationPhase - initialIterations: should be 2", function() {
		expect(scope.elaborationPhaseLength.initialIteration).toBe(2);
	});
	it("Lengths::ConstructionPhase - initialIterations: should be 4", function() {
		expect(scope.constructionPhaseLength.initialIteration).toBe(4);
	});
	it("Lengths::TransitionPhase - initialIterations: should be 4", function() {
		expect(scope.transitionPhaseLength.initialIteration).toBe(4);
	});
	/* FINAL ITERATIONS */
	it("Lengths::InceptionPhase - final Iteration: should be 1", function() {
		expect(scope.inceptionPhaseLength.finalIteration()).toBe(1);
	});
	it("Lengths::ElaborationPhase - final Iteration: should be 3", function() {
		expect(scope.elaborationPhaseLength.finalIteration()).toBe(3);
	});
	it("Lengths::ConstructionPhase - final Iteration: should be 3", function() {
		expect(scope.constructionPhaseLength.finalIteration()).toBe(3);
	});
	it("Lengths::TransitionPhase - final Iteration: should be 3", function() {
		expect(scope.transitionPhaseLength.finalIteration()).toBe(3);
	});
	/* AVERAGE ITERATION HOURS */
	it("Lengths::InceptionPhase - Avg Iteration Hours: should be 10", function() {
		expect(scope.inceptionPhaseLength.avgIterationHours).toBe(10);
	});
	it("Lengths::ElaborationPhase - Avg Iteration Hours: should be 12", function() {
		expect(scope.elaborationPhaseLength.avgIterationHours).toBe(12);
	});
	it("Lengths::ConstructionPhase - Avg Iteration Hours: should be 0", function() {
		expect(scope.constructionPhaseLength.avgIterationHours).toBe(0);
	});
	it("Lengths::TransitionPhase - Avg Iteration Hours: should be 0", function() {
		expect(scope.transitionPhaseLength.avgIterationHours).toBe(0);
	});
	/* AVERAGE ITERATION DAYS */
	it("Lengths::InceptionPhase - Avg Iteration Days: should be 1", function() {
		expect(scope.inceptionPhaseLength.avgIterationDays).toBe(2);
	});
	it("Lengths::ElaborationPhase - Avg Iteration Days: should be 2", function() {
		expect(scope.elaborationPhaseLength.avgIterationDays).toBe(2);
	});
	it("Lengths::ConstructionPhase - Avg Iteration Days: should be 0", function() {
		expect(scope.constructionPhaseLength.avgIterationDays).toBe(0);
	});
	it("Lengths::TransitionPhase - Avg Iteration Days: should be 0", function() {
		expect(scope.transitionPhaseLength.avgIterationDays).toBe(0);
	});
	/* AVERAGE ITERATIONS MONTHS */
	it("Lengths::InceptionPhase - Avg Iteration Months: should be 0.09", function() {
		expect(scope.inceptionPhaseLength.avgIterationMonths).toBeCloseTo(0.09,1);
	});
	it("Lengths::ElaborationPhase - Avg Iteration Months: should be 0.09", function() {
		expect(scope.elaborationPhaseLength.avgIterationMonths).toBeCloseTo(0.095,2);
	});
	it("Lengths::ConstructionPhase - Avg Iteration Months: should be 0", function() {
		expect(scope.constructionPhaseLength.avgIterationMonths).toBe(0);
	});
	it("Lengths::TransitionPhase - Avg Iteration Months: should be 0", function() {
		expect(scope.transitionPhaseLength.avgIterationMonths).toBe(0);
	});
	/* ITERATION LENGTH % */
	it("Lengths::InceptionPhase - Iteration %: should be 0.29", function() {
		expect(scope.getPhaseLength(scope.inceptionPhaseLength)).toBeCloseTo(0.29,1);
	});
	it("Lengths::ElaborationPhase - Iteration %: should be 0.70", function() {
		expect(scope.getPhaseLength(scope.elaborationPhaseLength)).toBeCloseTo(0.70,1);
	});
	it("Lengths::ConstructionPhase - Iteration %: should be 0", function() {
		expect(scope.getPhaseLength(scope.constructionPhaseLength)).toBeCloseTo(0);
	});
	it("Lengths::TransitionPhase - Iteration %: should be 0", function() {
		expect(scope.getPhaseLength(scope.transitionPhaseLength)).toBeCloseTo(0);
	});
});