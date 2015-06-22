/**
 * Test del controlador del calendario
 */

describe("Test AssignedPhasesController", function() {

	beforeEach(module("projectApp"));

	var controller, scope, DATE_FORMAT = "DD/MM/YYYY";

	beforeEach(inject(function($controller, $rootScope) {
		scope = $rootScope;
		scope.calendarController = {};
		scope.calendarController.getEvents = function(){
			return [
		        { title: "I",
		          start: moment.utc("2/3/2015", DATE_FORMAT),
				  hours : 8 },
				{ title: "I",
				  start: moment.utc("1/3/2015", DATE_FORMAT),
				  hours : 2 },
			  	{ title: "E",
				  start: moment.utc("6/3/2015", DATE_FORMAT),
				  hours : 4 },
				{ title: "E",
				  start: moment.utc("5/3/2015", DATE_FORMAT),
				  hours : 4 },
				{ title: "E",
				  start: moment.utc("3/3/2015", DATE_FORMAT),
				  hours : 8 },
				{ title: "E",
				  start: moment.utc("4/3/2015", DATE_FORMAT),
				  hours : 8 }
	        ];
		};
		scope.projectSchedule = {
				workDays : 21,
				project : {iterationDays : 2},
				mondayHours : 40,
				tuesdayHours : 40,
				wednesdayHours : 40,
				thursdayHours : 40,
				fridayHours : 40,
				saturdayHours : 0,
				sundayHours :0
		};
		var employee1 = { id: 1, annualGrossSalary : 24192, contract : { insurance : 0 } };
		var employee2 = { id: 2, annualGrossSalary : 24192, contract : { insurance : 0 } };
		var employee3 = { id: 3, annualGrossSalary : 24192, contract : { insurance : 0 } };
		var employee4 = { id: 4, annualGrossSalary : 24192, contract : { insurance : 0 } };
		/*
		PROJECT_MANAGEMENT
		REQUIREMENTS
		ANALYSIS_DESIGN
        IMPLEMENTATION
        TESTS
        DEPLOY
        ENVIROMENT_REVISION_CONTROL
        */ 
		scope.phasesEmployees = [
		                         { employee: employee1, workHours: 20, phase: 'INICIO', role: 'PROJECT_MANAGEMENT' },
		                         { employee: employee1, workHours: 40, phase: 'INICIO', role: 'REQUIREMENTS' },
		                         { employee: employee1, workHours: 20, phase: 'INICIO', role: 'ANALYSIS_DESIGN' },
		                         { employee: employee1, workHours: 20, phase: 'INICIO', role: 'DEPLOY' },
		                         
		                         { employee: employee1, workHours: 20, phase: 'ELABORACION', role: 'PROJECT_MANAGEMENT' },
		                         { employee: employee1, workHours: 40, phase: 'ELABORACION', role: 'REQUIREMENTS' },
		                         { employee: employee1, workHours: 20, phase: 'ELABORACION', role: 'ANALYSIS_DESIGN' },
		                         { employee: employee1, workHours: 20, phase: 'ELABORACION', role: 'DEPLOY' },
		                         
		                         { employee: employee1, workHours: 20, phase: 'CONSTRUCCION', role: 'PROJECT_MANAGEMENT' },
		                         { employee: employee1, workHours: 40, phase: 'CONSTRUCCION', role: 'REQUIREMENTS' },
		                         { employee: employee1, workHours: 20, phase: 'CONSTRUCCION', role: 'ANALYSIS_DESIGN' },
		                         { employee: employee1, workHours: 20, phase: 'CONSTRUCCION', role: 'DEPLOY' },
		                         
		                         { employee: employee1, workHours: 20, phase: 'TRANSICION', role: 'PROJECT_MANAGEMENT' },
		                         { employee: employee1, workHours: 40, phase: 'TRANSICION', role: 'REQUIREMENTS' },
		                         { employee: employee1, workHours: 20, phase: 'TRANSICION', role: 'ANALYSIS_DESIGN' },
		                         { employee: employee1, workHours: 20, phase: 'TRANSICION', role: 'DEPLOY' },
								];
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
	/* PROJECT LENGTH */
	it("Lengths::Project - Hours: should be 34", function() {
		expect(scope.projectHours).toBe(34);
	});
	it("Lengths::Project - Length: should be 100", function() {
		expect(scope.projectLength).toBe(100);
	});
	it("Lengths::Project - Days: should be 6", function() {
		expect(scope.projectDays).toBe(6);
	});
	it("Lengths::Project - Months: should be 0.28", function() {
		expect(scope.projectMonths).toBeCloseTo(0.28,1);
	});
	it("Lengths::Project - Start Date: should be 1/3/2015", function() {
		expect(scope.projectStartDate.isSame(moment.utc("1/3/2015", DATE_FORMAT))).toBe(true);
	});
	it("Lengths::Project - End Date: should be null", function() {
		expect(scope.projectEndDate).toBe(null);
	});
	it("Lengths::Project - Iterations: should be 3", function() {
		expect(scope.projectIterations).toBe(3);
	});
	it("Lengths::Project - Initial Iteration: should be 1", function() {
		expect(scope.projectInitialIterations).toBe(1);
	});
	it("Lengths::Project - Final Iteration: should be 10", function() {
		expect(scope.projectFinalIterations).toBe(10);
	});
	it("Lengths::Project - Average Hours: should be 3.4", function() {
		expect(scope.projectAvgIterationHours).toBe(3.4);
	});
	it("Lengths::Project - Average Days: should be 0.6", function() {
		expect(scope.projectAvgIterationDays).toBe(0.6);
	});
	it("Lengths::Project - Average Months: should be 0.028", function() {
		expect(scope.projectAvgIterationMonths).toBeCloseTo(0.028,2);
	});
	/* ITERATION EFFORT % */
	it("Efforts::InceptionPhase - Cost : should be 1200", function() {
		expect(scope.inceptionPhaseLength.cost()).toBeCloseTo(1200,1);
	});
	it("Efforts::InceptionPhase - TotalHours : should be 100", function() {
		expect(scope.inceptionPhaseLength.totalHours()).toBeCloseTo(100,1);
	});
	it("Efforts::InceptionPhase - TotalDays : should be 2.50", function() {
		expect(scope.inceptionPhaseLength.totalDays).toBeCloseTo(2.50,1);
	});
	it("Efforts::InceptionPhase - Total Months : should be 0.11", function() {
		expect(scope.inceptionPhaseLength.totalMonths).toBeCloseTo(0.11,1);
	});
	it("Efforts::InceptionPhase - Real Employees : should be 1", function() {
		expect(scope.inceptionPhaseLength.realEmployees()).toBe(1);
	});
	it("Efforts::InceptionPhase - iterationResourcesPerHour : should be 100", function() {
		expect(scope.inceptionPhaseLength.iterationResourcesPerHour()).toBeCloseTo(100,1);
	});
	it("Efforts::InceptionPhase - iterationResourcesPerDay : should be 2.50", function() {
		expect(scope.inceptionPhaseLength.iterationResourcesPerDay()).toBeCloseTo(2.50,1);
	});
	it("Efforts::InceptionPhase - iterationResourcesPerMonth : should be 0.11", function() {
		expect(scope.inceptionPhaseLength.iterationResourcesPerMonth()).toBeCloseTo(0.11,1);
	});
	/* PROJECT EFFORT */
	it("Efforts::Project - Effort : should be 100", function() {
		expect(scope.projectEffort).toBe(100);
	});
	it("Efforts::Project - Cost : should be 1200", function() {
		expect(scope.projectCost).toBe(4800);
	});
	it("Efforts::Project - projectEffortHours : should be 400", function() {
		expect(scope.projectEffortHours).toBe(400);
	});
	it("Efforts::Project - projectEffortDays : should be 10", function() {
		expect(scope.projectEffortDays).toBe(10);
	});
	it("Efforts::Project - projectEffortMonths : should be 0.47", function() {
		expect(scope.projectEffortMonths).toBeCloseTo(0.47,1);
	});
	it("Efforts::Project - projectEmployees : should be 0.11", function() {
		expect(isFinite(scope.projectEmployees)).toBe(false);
	});
	it("Efforts::Project - projectIterationDistribution : should be 33.33", function() {
		expect(scope.projectIterationDistribution).toBeCloseTo(33.33,1);
	});
	it("Efforts::Project - projectIterationResourcesPerHour : should be 133.33", function() {
		expect(scope.projectIterationResourcesPerHour).toBeCloseTo(133.33,1);
	});
	it("Efforts::Project - projectIterationResourcesPerDay : should be 3.33", function() {
		expect(scope.projectIterationResourcesPerDay).toBeCloseTo(3.33,1);
	});
	it("Efforts::Project - projectIterationResourcesPerMonth : should be 0.15", function() {
		expect(scope.projectIterationResourcesPerMonth).toBeCloseTo(0.15,1);
	});
});