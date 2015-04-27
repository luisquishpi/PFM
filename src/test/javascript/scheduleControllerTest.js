/**
 * Test de controlador de angularjs: scheduleController
 */
describe("Test scheduleController", function(){

	beforeEach(module("projectApp"));
	
	var controller, scope;
	
	beforeEach(inject(function($controller, $rootScope){
        scope = $rootScope;
        scope.scheduleBean = {
  			  /* Valores default de todas las variables inyectadas por el bean */
  			  mondayHours : 8,
  			  tuesdayHours : 8,
  			  wednesdayHours :8,
  			  thursdayHours : 8,
  			  fridayHours : 8,
  			  satrudayHours : 0,
  			  sundayHours : 0,
  			  workDays : 21
  	  	};
        controller = $controller("scheduleController", {
                $scope: scope,
                $isTest: true
        });
	}));
	
	it("HoursPerDay : should be 8", function(){        
        expect(scope.hoursPerDay()).toBe(8);
	});
	
	it("HoursPerWeek : should be 40", function(){        
        expect(scope.hoursPerWeek()).toBe(40);        
	});
	
	it("daysPerYear : should be 252", function(){        
        expect(scope.daysPerYear()).toBe(252);        
	});
	
	it("hoursPerMonth : should be 168", function(){        
        expect(scope.hoursPerMonth()).toBe(168);        
	});
	
	it("hoursPerYear : should be 2016", function(){        
        expect(scope.hoursPerYear()).toBe(2016);        
	});
})