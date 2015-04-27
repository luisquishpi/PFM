describe("Testing the controller", function(){
	beforeEach(function(){
	    module('angularfaces');
	    module('projectApp');
	});
	
	var projectCtrl, scope;
	
	beforeEach(inject(function($controller, $rootScope){
		scope = $rootScope;
		scope.consultProjectBean = {
				  'laborDay': 40,
				  'cost': 85000,
				  'start': moment('2015-03-02'),
				  'end': moment('2015-09-04'),
				  'workingDays': [1,2,3,4,5],
				  'WorkDaysMonth': 21,
				  'mediumCostMonth':2581.68,
				  'mediumCostDay':122.94,
				  'mediumCostHour':15.37
		};
		sampleCtrl = $controller("ProjectCtrl", {
			$scope: scope,
			test: true
		});
	}));
		
	it("Natural days should be 187", function(){
		expect(scope.naturalDays()).toBe(187);
	});
	
	it("Natural months should be 6.233333333333333", function(){
		expect(scope.naturalMonths()).toBe(6.233333333333333);
	});
	
	it("Work months should be 6.428571428571429", function(){
		expect(scope.workMonths()).toBe(6.428571428571429);
	});
	
	it("Work days should be 135", function(){
		expect(scope.workDays()).toBe(135);
	});
	
	it("Work hours should be 1080", function(){
		expect(scope.workHours()).toBe(1080);
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

	it("Work hour cost should be 78.70370370370371", function(){
		expect(scope.costWorkHour()).toBe(78.70370370370371);
	});
		
	it("Medium person month should be 5.121438340894987", function(){
		expect(scope.mediumPersonMonth()).toBe(5.121438340894987);
	});
	
	it("Medium person day should be 5.121438340894987", function(){
		expect(scope.mediumPersonDay()).toBe(5.121438340894987);
	});
	
	it("Medium person hour should be 5.121438340894987", function(){
		expect(scope.mediumPersonHour()).toBe(5.121438340894987);
	});

})