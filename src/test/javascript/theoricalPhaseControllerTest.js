describe("Test TheoricalPhaseController", function(){
	
	beforeEach(module("projectApp"));
	
	var theoricalPhaseCtrl, scope;
	
	beforeEach(inject(function($controller, $rootScope){
		scope = $rootScope;
		scope.theoricalPhaseBean = {
				  cost: 85000,
				  start: '2015-03-02',
				  end: '2015-09-04',
				  workHours: 1064.0,
				  workDays: 133,
				  workMonths: 6.3,
				  naturalDays: 187,
				  mediumCostMonth: 2581.68,
				  mediumCostDay: 122.94,
				  mediumCostHour: 15.37
		};
		theoricalPhaseCtrl = $controller("theoricalPhaseController", {
			$scope: scope,
			$isTest: true
		});
	}));
	
	it("Recomended days should be 13,3", function(){
		expect(scope.recomendedDays()).toBe(13.3);
	});
	
	it("Init and Trans hours should be 106.4", function(){
		expect(scope.initTransHours()).toBe(106.4);
	});
	
	it("Init and Trans days should be 13.3", function(){
		expect(scope.initTransDays()).toBe(13.3);
	});
	
	it("Init and Trans months should be 0.63", function(){
		expect(scope.initTransMonths()).toBe(0.63);
	});
	
	it("Init start date should be 3/2/2015", function(){
		expect(scope.initStartDate()).toBe("2/3/2015");
	});
	
	it("Init end date should be 20/2/2015", function(){
		expect(scope.initEndDate()).toBe("20/3/2015");
	});
	
	it("Iteration average hours should be 106.4", function(){
		expect(scope.iterationAverageHours()).toBe(106.4);
	});
	
	it("Iteration average days should be 13.3", function(){
		expect(scope.iterationAverageDays()).toBe(13.3);
	});
	
	it("Iteration average months should be 0.63", function(){
		expect(scope.iterationAverageMonths()).toBe(0.63);
	});
	
	it("Elab hours should be 319.2", function(){
		expect(scope.ElabHours()).toBe(319.2);
	});
	
	it("Elab days should be 39.9", function(){
		expect(scope.ElabDays()).toBe(39.9);
	});
	
	it("Elab months should be 1.89", function(){
		expect(scope.ElabMonths()).toBe(1.89);
	});
	
	it("Elab start date should be 21/3/2015", function(){
		expect(scope.ElabStartDate()).toBe("21/3/2015");
	});
	
	it("Elab end date should be 15/5/2015", function(){
		expect(scope.ElabEndDate()).toBe("15/5/2015");
	});
	
	it("Constr hours should be 532", function(){
		expect(scope.ConstrHours()).toBe(532);
	});
	
	it("Constr days should be 66.5", function(){
		expect(scope.ConstrDays()).toBe(66.5);
	});
	
	it("Constr months should be 3.15", function(){
		expect(scope.ConstrMonths()).toBe(3.15);
	});
	
	it("Constr start date should be 16/5/2015", function(){
		expect(scope.ConstrStartDate()).toBe("16/5/2015");
	});
	
	it("Constr end date should be 17/8/2015", function(){
		expect(scope.ConstrEndDate()).toBe("17/5/2015");
	});
	
	it("Trans start date should be 18/8/2015", function(){
		expect(scope.transStartDate()).toBe("18/8/2015");
	});
	
	it("Trans end date should be 5/9/2015", function(){
		expect(scope.transEndDate()).toBe("5/9/2015");
	});
	
	//Esfuerzo
	
	it("Init cost should be 4250", function(){
		expect(scope.initCost()).toBe(4250);
	});
	
	it("Init people-hour should be 276.51", function(){
		expect(scope.initPeopleHour()).toBe(276.51);
	});
	
	it("Init people-day should be 34.57", function(){
		expect(scope.initPeopleDay()).toBe(34.57);
	});
	
	it("Init people-month should be 1.65", function(){
		expect(scope.initPeopleMonth()).toBe(1.65);
	});
	
	it("Init people should be 2.6", function(){
		expect(scope.initPeople()).toBe(2.6);
	});
	
	it("Init distribution-iteration should be 5", function(){
		expect(scope.initDistributionIteration()).toBe(5);
	});
	
	it("Init people-hour/iteration should be 276.51", function(){
		expect(scope.initPeopleHourIteration()).toBe(276.51);
	});
	
	it("Init people-day/iteration should be 34.57", function(){
		expect(scope.initPeopleDayIteration()).toBe(34.57);
	});
	
	it("Init people-month/iteration should be 1.65", function(){
		expect(scope.initPeopleMonthIteration()).toBe(1.65);
	});
	
	it("Elab cost should be 17000", function(){
		expect(scope.elabCost()).toBe(17000);
	});
	
	it("Elab people-hour should be 1106.05", function(){
		expect(scope.elabPeopleHour()).toBe(1106.05);
	});
	
	it("Elab people-day should be 138.28", function(){
		expect(scope.elabPeopleDay()).toBe(138.28);
	});
	
	it("Elab people-month should be 6.58", function(){
		expect(scope.elabPeopleMonth()).toBe(6.58);
	});
	
	it("Elab people should be 3.47", function(){
		expect(scope.elabPeople()).toBe(3.47);
	});
	
	it("Elab distribution-iteration should be 7", function(){
		expect(scope.elabDistributionIteration()).toBe(7);
	});
	
	it("Elab people-hour/iteration should be 368.68", function(){
		expect(scope.elabPeopleHourIteration()).toBe(368.68);
	});
	
	it("Elab people-day/iteration should be 46.09", function(){
		expect(scope.elabPeopleDayIteration()).toBe(46.09);
	});
	
	it("Elab people-month/iteration should be 2.19", function(){
		expect(scope.elabPeopleMonthIteration()).toBe(2.19);
	});
	
	it("Constr cost should be 55250", function(){
		expect(scope.constrCost()).toBe(55250);
	});
	
	it("Constr people-hour should be 3594.66", function(){
		expect(scope.constrPeopleHour()).toBe(3594.66);
	});
	
	it("Constr people-day should be 449.41", function(){
		expect(scope.constrPeopleDay()).toBe(449.41);
	});
	
	it("Constr people-month should be 21.40", function(){
		expect(scope.constrPeopleMonth()).toBe(21.40);
	});
	
	it("Constr people should be 6.76", function(){
		expect(scope.constrPeople()).toBe(6.76);
	});
	
	it("Constr distribution-iteration should be 13", function(){
		expect(scope.constrDistributionIteration()).toBe(13);
	});
	
	it("Constr people-hour/iteration should be 718.93", function(){
		expect(scope.constrPeopleHourIteration()).toBe(718.93);
	});
	
	it("Constr people-day/iteration should be 89.88", function(){
		expect(scope.constrPeopleDayIteration()).toBe(89.88);
	});
	
	it("Constr people-month/iteration should be 4.28", function(){
		expect(scope.constrPeopleMonthIteration()).toBe(4.28);
	});
	
	it("Trans cost should be 8500", function(){
		expect(scope.transCost()).toBe(8500);
	});
	
	it("Trans people-hour should be 553.03", function(){
		expect(scope.transPeopleHour()).toBe(553.03);
	});
	
	it("Trans people-day should be 69.14", function(){
		expect(scope.transPeopleDay()).toBe(69.14);
	});
	
	it("Trans people-month should be 3.29", function(){
		expect(scope.transPeopleMonth()).toBe(3.29);
	});
	
	it("Trans people should be 5.20", function(){
		expect(scope.transPeople()).toBe(5.20);
	});
	
	it("Trans distribution-iteration should be 10", function(){
		expect(scope.transDistributionIteration()).toBe(10);
	});
	
	it("Trans people-hour/iteration should be 553.03", function(){
		expect(scope.transPeopleHourIteration()).toBe(553.03);
	});
	
	it("Trans people-day/iteration should be 69.14", function(){
		expect(scope.transPeopleDayIteration()).toBe(69.14);
	});
	
	it("Trans people-month/iteration should be 3.29", function(){
		expect(scope.transPeopleMonthIteration()).toBe(3.29);
	});
	
	it("Project people-hour should be 5530.3", function(){
		expect(scope.projectPeopleHour()).toBe(5530.3);
	});	
	
	it("Project people-day should be 691.39", function(){
		expect(scope.projectPeopleDay()).toBe(691.39);
	});
	
	it("Project people-month should be 32.92", function(){
		expect(scope.projectPeopleMonth()).toBe(32.92);
	});
	
	it("Project people should be 5.20", function(){
		expect(scope.projectPeople()).toBe(5.20);
	});
	
	it("Project distribution-iteration should be 10", function(){
		expect(scope.projectDistributionIteration()).toBe(10);
	});
	
	it("Project people-hour/iteration should be 553.03", function(){
		expect(scope.projectPeopleHourIteration()).toBe(553.03);
	});
	
	it("Project people-day/iteration should be 69.14", function(){
		expect(scope.projectPeopleDayIteration()).toBe(69.14);
	});
	
	it("Project people-month/iteration should be 3.29", function(){
		expect(scope.projectPeopleMonthIteration()).toBe(3.29);
	});
})
