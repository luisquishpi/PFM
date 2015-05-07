/**
 * Test de controlador de angularjs: projectController
 */
describe("Test projectController", function(){
	
	beforeEach(module("projectApp"));
	
	var controller, scope;
	
	beforeEach(inject(function($controller, $rootScope){
		scope = $rootScope;
		scope.workingDays = [
                 {workHours:0},{workHours:8},{workHours:8},
                 {workHours:8},{workHours:8},{workHours:5},
                 {workHours:0}
		];
		scope.projectBean = {
				  project:{
					  cost: 85000,
					  startString: "02/03/2015",
					  endString: "04/09/2015", 
				  },
				  projectSchedule: {
						  workDays:21
				  }
		};
		controller = $controller("projectController", {
			$scope: scope,
			$isTest: true
		});
		scope.initForTest();
	}));
		
	it("Natural days should be 187", function(){
		expect(scope.naturalDays).toBe(187);
	});
	
	it("Natural months should be 6.233333333333333", function(){
		expect(scope.naturalMonths()).toBe(6.233333333333333);
	});
	
	it("Work months should be 6.428571428571429", function(){
		expect(scope.workMonths()).toBe(6.428571428571429);
	});
	
	it("Work days should be 135", function(){
		expect(scope.workDays).toBe(135);
	});
	
	it("Work hours should be 999", function(){
		expect(scope.workHours).toBe(999);
	});
	
	it("Natural month cost should be 13636.36", function(){
		expect(scope.costNaturalMonth()).toBe(13636.36);
	});
	
	it("Natural day cost should be 454.55", function(){
		expect(scope.costNaturalDay()).toBe(454.55);
	});
	
	it("Work month cost should be 13222.22222222222", function(){
		expect(scope.costWorkMonth()).toBe(13222.22222222222);
	});
	
	it("Work day cost should be 629.6296296296297", function(){
		expect(scope.costWorkDay()).toBe(629.6296296296297);
	});

	it("Work hour cost should be 85.08508508508508", function(){
		expect(scope.costWorkHour()).toBe(85.08508508508508);
	});
	
})
