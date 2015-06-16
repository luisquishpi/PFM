/**
 *  Theorical discipline controller test
 */

describe("Test RealDisciplineController", function(){
	
	beforeEach(module("projectApp"));
	
	var scope;
	
	beforeEach(inject(function($controller, $rootScope){
		scope = $rootScope;
		
		controller = $controller("realDisciplineController", {
			$scope: scope,
			$isTest: true,
			bridgeService: 
			{
				shareData : {
				}
			}
		});
	}));
	
	/************************Personas-hora******************************/
	//Fase de Inicio
	it("Inital hours for project management should be 36.4", function(){
		expect(scope.ProjectManagmentHour()).toBe(36.4);
	});
	
	it("Inital hours for requirements should be 98.8", function(){
		expect(scope.RequirementsHour()).toBe(49.4);
	});
	
	it("Inital hours for analysis should be 49.4", function(){
		expect(scope.AnalysisHour()).toBe(20.8);
	});

	it("Inital hours for implementation should be 20.8", function(){
		expect(scope.ImplementationHour()).toBe(20.8);
	});
	
	it("Inital hours for test should be 20.8", function(){
		expect(scope.TestsHour()).toBe(20.8);
	});
	
	it("Inital hours for deployment should be 7.8", function(){
		expect(scope.DeploymentHour()).toBe(7.8);
	});
	
	it("Inital hours for environment should be 26.0", function(){
		expect(scope.VersionHour()).toBe(26.0);
	});
	
	it("Inital total hours should be 260.0", function(){
		expect(scope.InitialHour()).toBe(260.0);
	});
		
	/************************Personas-dia******************************/
	//Fase de Inicio
	it("Inital days for project management should be 4.8398", function(){
		expect(scope.ProjectManagmentDay()).toBe(4.8398);
	});
	
	it("Inital hours for requirements should be 13.1366", function(){
		expect(scope.RequirementsDay()).toBe(13.1366);
	});
	
	it("Inital days for analysis should be 6.5683", function(){
		expect(scope.AnalysisDay()).toBe(6.5683);
	});

	it("Inital days for implementation should be 2.7656", function(){
		expect(scope.ImplementationDay()).toBe(2.7656);
	});
	
	it("Inital days for test should be 2.7656", function(){
		expect(scope.TestsDay()).toBe(2.7656);
	});
	
	it("Inital Days for deployment should be 1.0371", function(){
		expect(scope.DeploymentDay()).toBe(1.0371);
	});
	
	it("Inital Days for environment should be 3.4570000000000003", function(){
		expect(scope.VersionDay()).toBe(3.4570000000000003);
	});
	
	it("Inital total Days should be 34.57", function(){
		expect(scope.totalDay()).toBe(34.57);
	});
	
	/************************Personas-mes******************************/
	//Fase de Inicio
	it("Inital Months for project management should be 0.231", function(){
		expect(scope.ProjectManagmentMonth()).toBe(0.231);
	});
	
	it("Inital hours for requirements should be 0.627", function(){
		expect(scope.RequirementsMonth()).toBe(0.627);
	});
	
	it("Inital Months for analysis should be 0.3135", function(){
		expect(scope.AnalysisMonth()).toBe(0.3135);
	});

	it("Inital Months for implementation should be 0.132", function(){
		expect(scope.ImplementationMonth()).toBe(0.132);
	});
	
	it("Inital Months for test should be 0.132", function(){
		expect(scope.TestsMonth()).toBe(0.132);
	});
	
	it("Inital Months for deployment should be 0.049499999999999995", function(){
		expect(scope.DeploymentMonth()).toBe(0.049499999999999995);
	});
	
	it("Inital Months for environment should be 0.165", function(){
		expect(scope.VersionMonth()).toBe(0.165);
	});
	
	it("Inital total Months should be 1.65", function(){
		expect(scope.totalMonth()).toBe(1.65);
	});
});
