/**
 *  Test del controlador del calendario
 */

describe("Test calendarController", function(){
	
	/*beforeEach(module("projectApp"));
	
	var controller, scope;
	
	beforeEach(inject(function($controller, $rootScope){
		scope = $rootScope;
		scope.calendarBean = {
				  project:{
					  cost: 85000,
					  startString: "02/03/2015",
					  endString: "04/09/2015"
				  },
				  holiday: {
					  startString: "03/03/2015",
					  endString: "04/03/2015"
				  }
		};
		controller = $controller("calendarController", {
			$scope: scope,
			$isTest: true,
			workTimeService:
			{
				calculateWorkDaysAndHour: function(){
					return 0;
				},
				workHours: function(){
					return 999;
				},
				workDays: function(){
					return 135;
				},
				workMonths: function(){
					return 6.428571428571429;
				},
				naturalDays: function(){
					return 187;
				},
			},
			bridgeService: 
			{
				shareData : {
					listHoursEachDay: function(){ 
										return [{workHours:0},{workHours:8},{workHours:8},{workHours:8},{workHours:8},{workHours:5},{workHours:0}];
									  },
					workDays: 21
			}}
		});
	}));
	
	it("Initiation date arrays should have 13 days", function(){
		expect(scope.initDatesArray().length).toBe(13);
	});
	
	it("Elaboration date array should have 39 days", function(){
		expect(scope.elabDatesArray().length).toBe(39);
	});
	
	it("Construction date array should have 65 days", function(){
		expect(scope.constrDatesArray().length).toBe(65);
	});
	
	it("Transition date array should have 11 days", function(){
		expect(scope.transDatesArray().length).toBe(11);
	});
	
	it("Initiation date array first day should be 2/3/2015", function(){
		expect(scope.initDatesArray()[0]).toBe(moment("2/3/2015", 'DD/MM/YYYY').format("DD/MM/YYYY"));
	});
	
	it("Elaboration date array first day should be 23/3/2015", function(){
		expect(scope.elabDatesArray()[0]).toBe(moment("23/3/2015", 'DD/MM/YYYY').format("DD/MM/YYYY"));
	});
	
	it("Construction date array first day should be 15/5/2015", function(){
		expect(scope.constrDatesArray()[0]).toBe(moment("15/5/2015", 'DD/MM/YYYY').format("DD/MM/YYYY"));
	});
	
	it("Transition date array first day should be 14/8/2015", function(){
		expect(scope.transDatesArray()[0]).toBe(moment("16/8/2015", 'DD/MM/YYYY').format("DD/MM/YYYY"));
	});*/
});