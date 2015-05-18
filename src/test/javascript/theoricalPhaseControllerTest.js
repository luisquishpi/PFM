describe("Test TheoricalPhaseController", function(){
	
	beforeEach(module("projectApp"));
	
	var theoricalPhaseCtrl, scope;
	
	beforeEach(inject(function($controller, $rootScope){
		scope = $rootScope;
		scope.showTheoricalPhasesBean = {
				  project:{
					  cost: 85000,
					  start: "2/3/2015",
					  end: "4/9/2015", 
				  },
				  employeeArray: [
					 {
						 annualGrossSalary: 40500,
						 contract:{
							 insurance:32.5
						 }
					 },
					 {
						 annualGrossSalary: 38000,
						 contract:{
							 insurance:32.5
						 }
					 },
					 {
						 annualGrossSalary: 30000,
						 contract:{
							 insurance:32.5
						 }
					 },
					 {
						 annualGrossSalary: 28500,
						 contract:{
							 insurance:32.5
						 }
					 },
					 {
						 annualGrossSalary: 40000,
						 contract:{
							 insurance:0
						 }
					 },
					 {
						 annualGrossSalary: 25000,
						 contract:{
							 insurance:32.5
						 }
					 },
					 {
						 annualGrossSalary: 24500,
						 contract:{
							 insurance:32.5
						 }
					 },
					 {
						 annualGrossSalary: 24000,
						 contract:{
							 insurance:32.5
						 }
					 },
					 {
						 annualGrossSalary: 24000,
						 contract:{
							 insurance:32.5
						 }
					 },
					 {
						 annualGrossSalary: 18000,
						 contract:{
							 insurance:2
						 }
					 },
					 {
						 annualGrossSalary: 18000,
						 contract:{
							 insurance:2
						 }
					 },
					 {
						 annualGrossSalary: 18000,
						 contract:{
							 insurance:2
						 }
					 },
					 {
						 annualGrossSalary: 18000,
						 contract:{
							 insurance:2
						 }
					 },
					 {
						 annualGrossSalary: 22000,
						 contract:{
							 insurance:32.5
						 }
					 },
					 {
						 annualGrossSalary: 21000,
						 contract:{
							 insurance:32.5
						 }
					 },
					 {
						 annualGrossSalary: 20000,
						 contract:{
							 insurance:32.5
						 }
					 },
					 {
						 annualGrossSalary: 25000,
						 contract:{
							 insurance:0
						 }
					 },
					 {
						 annualGrossSalary: 30000,
						 contract:{
							 insurance:0
						 }
					 },
					 {
						 annualGrossSalary: 20000,
						 contract:{
							 insurance:32.5
						 }
					 },
				  ],
				  workDays:21,
				  workDaysArray: [{workHours:0},{workHours:8},{workHours:8},{workHours:8},{workHours:8},{workHours:5},{workHours:0}]
		};
		controller = $controller("theoricalPhaseController", {
			$scope: scope,
			$isTest: true
		});
	}));
	
	it("Average month cost should be 2583.8925438596493", function(){
		expect(scope.averageMonthCost()).toBe(2583.8925438596493);
	});
	
	it("Average month cost should be 123.04250208855473", function(){
		expect(scope.averageDayCost()).toBe(123.04250208855473);
	});
	
	it("Average month cost should be 16.62736514710199", function(){
		expect(scope.averageHourCost()).toBe(16.62736514710199);
	});
	
	it("Recomended days should be 13,5", function(){
		expect(scope.recomendedDays()).toBe(13.5);
	});
	
	it("Init and Trans hours should be 99.9", function(){
		expect(scope.initTransHours()).toBe(99.9);
	});
	
	it("Init and Trans days should be 13.5", function(){
		expect(scope.initTransDays()).toBe(13.5);
	});
	
	it("Init and Trans months should be 0.6428571428571429", function(){
		expect(scope.initTransMonths()).toBe(0.6428571428571429);
	});
	
	it("Init start date should be 2/3/2015", function(){
		expect(scope.initStartDate()).toBe(moment("2/3/2015", 'DD/MM/YYYY').format("DD/MM/YYYY"));
	});
	
	it("Init end date should be 20/2/2015", function(){
		expect(scope.initEndDate()).toBe("20/03/2015");
	});
	
	it("Iteration average hours should be 99.9", function(){
		expect(scope.iterationAverageHours()).toBe(99.9);
	});
	
	it("Iteration average days should be 13.5", function(){
		expect(scope.iterationAverageDays()).toBe(13.5);
	});
	
	it("Iteration average months should be 0.6428571428571429", function(){
		expect(scope.iterationAverageMonths()).toBe(0.6428571428571429);
	});
	
	it("Elab hours should be 299.7", function(){
		expect(scope.ElabHours()).toBe(299.7);
	});
	
	it("Elab days should be 40.5", function(){
		expect(scope.ElabDays()).toBe(40.5);
	});
	
	it("Elab months should be 1.9285714285714286", function(){
		expect(scope.ElabMonths()).toBe(1.9285714285714286);
	});
	
	it("Elab start date should be 21/3/2015", function(){
		expect(scope.ElabStartDate()).toBe("21/03/2015");
	});
	
	it("Elab end date should be 15/5/2015", function(){
		expect(scope.ElabEndDate()).toBe("16/05/2015");
	});
	
	it("Constr hours should be 499.5", function(){
		expect(scope.ConstrHours()).toBe(499.5);
	});
	
	it("Constr days should be 67.5", function(){
		expect(scope.ConstrDays()).toBe(67.5);
	});
	
	it("Constr months should be 3.2142857142857144", function(){
		expect(scope.ConstrMonths()).toBe(3.2142857142857144);
	});
	
	it("Constr start date should be 17/5/2015", function(){
		expect(scope.ConstrStartDate()).toBe("17/05/2015");
	});
	
	it("Constr end date should be 18/8/2015", function(){
		expect(scope.ConstrEndDate()).toBe("18/08/2015");
	});
	
	it("Trans start date should be 19/8/2015", function(){
		expect(scope.transStartDate()).toBe("19/08/2015");
	});
	
	it("Trans end date should be 6/9/2015", function(){
		expect(scope.transEndDate()).toBe("06/09/2015");
	});
	
	//Esfuerzo
	
	it("Init cost should be 4250", function(){
		expect(scope.initCost()).toBe(4250);
	});
	
	it("Init people-hour should be 255.60273455236768", function(){
		expect(scope.initPeopleHour()).toBe(255.60273455236768);
	});
	
	it("Init people-day should be 34.54091007464428", function(){
		expect(scope.initPeopleDay()).toBe(34.54091007464428);
	});
	
	it("Init people-month should be 1.6448052416497276", function(){
		expect(scope.initPeopleMonth()).toBe(1.6448052416497276);
	});
	
	it("Init people should be 2.5585859314551316", function(){
		expect(scope.initPeople()).toBe(2.5585859314551316);
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
	
	it("Elab people-hour should be 1022.4109382094707", function(){
		expect(scope.elabPeopleHour()).toBe(1022.4109382094707);
	});
	
	it("Elab people-day should be 138.16364029857712", function(){
		expect(scope.elabPeopleDay()).toBe(138.16364029857712);
	});
	
	it("Elab people-month should be 6.5792209665989105", function(){
		expect(scope.elabPeopleMonth()).toBe(6.5792209665989105);
	});
	
	it("Elab people should be 3.4114479086068425", function(){
		expect(scope.elabPeople()).toBe(3.4114479086068425);
	});
	
	it("Elab distribution-iteration should be 7", function(){
		expect(scope.elabDistributionIteration()).toBe(7);
	});
	
	it("Elab people-hour/iteration should be 340.80364606982357", function(){
		expect(scope.elabPeopleHourIteration()).toBe(340.80364606982357);
	});
	
	it("Elab people-day/iteration should be 46.054546766192374", function(){
		expect(scope.elabPeopleDayIteration()).toBe(46.054546766192374);
	});
	
	it("Elab people-month/iteration should be 2.19307365553297", function(){
		expect(scope.elabPeopleMonthIteration()).toBe(2.19307365553297);
	});
	
	it("Constr cost should be 55250", function(){
		expect(scope.constrCost()).toBe(55250);
	});
	
	it("Constr people-hour should be 3322.8355491807797", function(){
		expect(scope.constrPeopleHour()).toBe(3322.8355491807797);
	});
	
	it("Constr people-day should be 449.03183097037567", function(){
		expect(scope.constrPeopleDay()).toBe(449.03183097037567);
	});
	
	it("Constr people-month should be 21.38246814144646", function(){
		expect(scope.constrPeopleMonth()).toBe(21.38246814144646);
	});
	
	it("Constr people should be 6.6523234217833425", function(){
		expect(scope.constrPeople()).toBe(6.6523234217833425);
	});
	
	it("Constr distribution-iteration should be 13", function(){
		expect(scope.constrDistributionIteration()).toBe(13);
	});
	
	it("Constr people-hour/iteration should be 664.567109836156", function(){
		expect(scope.constrPeopleHourIteration()).toBe(664.567109836156);
	});
	
	it("Constr people-day/iteration should be 89.80636619407514", function(){
		expect(scope.constrPeopleDayIteration()).toBe(89.80636619407514);
	});
	
	it("Constr people-month/iteration should be 4.276493628289292", function(){
		expect(scope.constrPeopleMonthIteration()).toBe(4.276493628289292);
	});
	
	it("Trans cost should be 8500", function(){
		expect(scope.transCost()).toBe(8500);
	});
	
	it("Trans people-hour should be 511.20546910473536", function(){
		expect(scope.transPeopleHour()).toBe(511.20546910473536);
	});
	
	it("Trans people-day should be 69.08182014928856", function(){
		expect(scope.transPeopleDay()).toBe(69.08182014928856);
	});
	
	it("Trans people-month should be 3.2896104832994553", function(){
		expect(scope.transPeopleMonth()).toBe(3.2896104832994553);
	});
	
	it("Trans people should be 5.117171862910263", function(){
		expect(scope.transPeople()).toBe(5.117171862910263);
	});
	
	it("Trans distribution-iteration should be 10", function(){
		expect(scope.transDistributionIteration()).toBe(10);
	});
	
	it("Trans people-hour/iteration should be 511.20546910473536", function(){
		expect(scope.transPeopleHourIteration()).toBe(511.20546910473536);
	});
	
	it("Trans people-day/iteration should be 69.08182014928856", function(){
		expect(scope.transPeopleDayIteration()).toBe(69.08182014928856);
	});
	
	it("Trans people-month/iteration should be 3.2896104832994553", function(){
		expect(scope.transPeopleMonthIteration()).toBe(3.2896104832994553);
	});
	
	it("Project people-hour should be 5112.054691047354", function(){
		expect(scope.projectPeopleHour()).toBe(5112.054691047354);
	});	
	
	it("Project people-day should be 690.8182014928856", function(){
		expect(scope.projectPeopleDay()).toBe(690.8182014928856);
	});
	
	it("Project people-month should be 32.89610483299455", function(){
		expect(scope.projectPeopleMonth()).toBe(32.89610483299455);
	});
	
	it("Project people should be 5.117171862910264", function(){
		expect(scope.projectPeople()).toBe(5.117171862910264);
	});
	
	it("Project distribution-iteration should be 10", function(){
		expect(scope.projectDistributionIteration()).toBe(10);
	});
	
	it("Project people-hour/iteration should be 511.2054691047354", function(){
		expect(scope.projectPeopleHourIteration()).toBe(511.2054691047354);
	});
	
	it("Project people-day/iteration should be 69.08182014928856", function(){
		expect(scope.projectPeopleDayIteration()).toBe(69.08182014928856);
	});
	
	it("Project people-month/iteration should be 3.2896104832994553", function(){
		expect(scope.projectPeopleMonthIteration()).toBe(3.2896104832994553);
	});
})
