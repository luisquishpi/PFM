describe("Test ResourceController", function(){
	beforeEach(module("projectApp"));
	
	var resourceController;
	var scope;
	
	beforeEach(inject(function($controller, $rootScope){
		scope = $rootScope;
		scope.assignResourcesBean = {
				  project:{
					  cost: 85000,
					  startString: "2/3/2015",
					  endString: "4/9/2015", 
				  },
				  employeeList:[
				  {"id":1, "name":"Anibal", "surname":"Pacheco", "employeeCode":"001", "annualGrossSalary":40500.00, 
					      "roles":["PROJECT_MANAGEMENT", "REQUIREMENTS", "ANALYSIS_DESIGN", "IMPLEMENTATION", "TESTS", "DEPLOY", "ENVIROMENT_REVISION_CONTROL" ],
					      "contract":{insurance: 32.5}},
				  {"id":2, "name":"Beatriz", "surname":"Jimenez", "employeeCode":"002", "annualGrossSalary":38000.00, 
						  "roles":["PROJECT_MANAGEMENT", "REQUIREMENTS", "ANALYSIS_DESIGN", "IMPLEMENTATION", "TESTS", "DEPLOY", "ENVIROMENT_REVISION_CONTROL" ],
						  "contract":{insurance: 32.5}},
				  {"id":3, "name":"Carlos", "surname":"Palacios", "employeeCode":"003", "annualGrossSalary":30000.00, 
						  "roles":["PROJECT_MANAGEMENT", "REQUIREMENTS"],
						  "contract":{insurance: 32.5}},					  
				  {"id":4, "name":"Daniela", "surname":"Rodriguez", "employeeCode":"004", "annualGrossSalary":28500.00, 
						  "roles":["PROJECT_MANAGEMENT", "REQUIREMENTS"],
						  "contract":{insurance: 32.5}},		
				  {"id":5, "name":"Ernesto", "surname":"Guerra", "employeeCode":"005", "annualGrossSalary":40000.00, 
						  "roles":["REQUIREMENTS", "ANALYSIS_DESIGN", "IMPLEMENTATION"],
						  "contract":{insurance: 0.00}},		
				  {"id":6, "name":"Flor", "surname":"Palomeque", "employeeCode":"006", "annualGrossSalary":25000.00, 
						  "roles":["REQUIREMENTS", "ANALYSIS_DESIGN", "IMPLEMENTATION"],
						  "contract":{insurance: 32.5}},	
				  {"id":7, "name":"Gabriel", "surname":"Heinze", "employeeCode":"007", "annualGrossSalary":23000.00, 
					  "roles":["REQUIREMENTS", "ANALYSIS_DESIGN", "IMPLEMENTATION"],
					  "contract":{insurance: 32.5}},	
				  {"id":8, "name":"Henar", "surname":"Carrasco", "employeeCode":"008", "annualGrossSalary":24500.00, 
						  "roles":["REQUIREMENTS", "ANALYSIS_DESIGN", "IMPLEMENTATION"],
						  "contract":{insurance: 32.5}},						  
				  {"id":9, "name":"Ismael", "surname":"Miranda", "employeeCode":"009", "annualGrossSalary":24000.00, 
						  "roles":["ANALYSIS_DESIGN", "IMPLEMENTATION", "TESTS", "DEPLOY", "ENVIROMENT_REVISION_CONTROL" ],
						  "contract":{insurance: 32.5}},
				  {"id":10, "name":"Julia", "surname":"Fuentes", "employeeCode":"010", "annualGrossSalary":24000.00, 
						  "roles":["ANALYSIS_DESIGN", "IMPLEMENTATION", "TESTS", "DEPLOY", "ENVIROMENT_REVISION_CONTROL" ],
						  "contract":{insurance: 32.5}},	
				  {"id":11, "name":"Kiko", "surname":"Leon", "employeeCode":"011", "annualGrossSalary":18000.00, 
					  "roles":["ANALYSIS_DESIGN", "IMPLEMENTATION", "TESTS"],
					  "contract":{insurance: 2.0}},		
				  {"id":12, "name":"Lourdes", "surname":"Hernadez", "employeeCode":"012", "annualGrossSalary":18000.00, 
					  "roles":["ANALYSIS_DESIGN", "IMPLEMENTATION", "TESTS"],
					  "contract":{insurance: 2.0}},	
				  {"id":13, "name":"Manuel", "surname":"Vega", "employeeCode":"013", "annualGrossSalary":18000.00, 
					  "roles":["IMPLEMENTATION", "TESTS", "DEPLOY", "ENVIROMENT_REVISION_CONTROL"],
					  "contract":{insurance: 2.0}},	
				  {"id":14, "name":"Noelia", "surname":"Navas", "employeeCode":"014", "annualGrossSalary":18000.00, 
					  "roles":["IMPLEMENTATION", "TESTS", "DEPLOY", "ENVIROMENT_REVISION_CONTROL"],
					  "contract":{insurance: 2.0}},		
				  {"id":15, "name":"Osvaldo", "surname":"Uribe", "employeeCode":"015", "annualGrossSalary":22000.00, 
					  "roles":["IMPLEMENTATION", "TESTS", "DEPLOY", "ENVIROMENT_REVISION_CONTROL"],
					  "contract":{insurance: 32.5}},		
				  {"id":16, "name":"Paloma", "surname":"Fiuza", "employeeCode":"016", "annualGrossSalary":21000.00, 
					  "roles":["IMPLEMENTATION", "TESTS", "DEPLOY", "ENVIROMENT_REVISION_CONTROL"],
					  "contract":{insurance: 32.5}},		
				  {"id":17, "name":"Ramón", "surname":"Valdez", "employeeCode":"017", "annualGrossSalary":20000.00, 
					  "roles":["TESTS", "DEPLOY", "ENVIROMENT_REVISION_CONTROL"],
					  "contract":{insurance: 32.5}},		
				  {"id":18, "name":"Sara", "surname":"Gavilanez", "employeeCode":"018", "annualGrossSalary":25000.00, 
					  "roles":["TESTS", "DEPLOY", "ENVIROMENT_REVISION_CONTROL"],
					  "contract":{insurance: 0.0}},	
				  {"id":19, "name":"Tomas", "surname":"Zambrano", "employeeCode":"019", "annualGrossSalary":30000.00, 
					  "roles":["TESTS", "DEPLOY", "ENVIROMENT_REVISION_CONTROL"],
					  "contract":{insurance: 0.0}},	
				  {"id":20, "name":"Ursula", "surname":"del Mar", "employeeCode":"020", "annualGrossSalary":30000.00, 
					  "roles":["TESTS", "DEPLOY", "ENVIROMENT_REVISION_CONTROL"],
					  "contract":{insurance: 32.5}},						  
				  ]
		};
		
		controller = $controller("resourceController", {
			$scope: scope,
			$isTest: true,
			workTimeService:
			{
				calculateWorkDaysAndHour: function(){
					return 0;
				},
				workHours: function(){
					return 1080;
				},
				workDays: function(){
					return 135;
				},
				workMonths: function(){
					return 6.428571428571429;
				},
				naturalDays: function(){
					return 187;
				}
			},
			bridgeService: 
			{
				shareData : {
					listHoursEachDay: function(){ 
										return [{workHours:0},{workHours:8},{workHours:8},{workHours:8},{workHours:8},{workHours:8},{workHours:0}];
									  },
					workDays: 21,
					monthsPerYear: 12,
					hoursPerDay: 8,
					daysPerWeek: function(){return 5;},
					}					
			}
		});			
	}));
	
	it("Number of Project Management roles should be 4", function(){
		expect(scope.numberOfProjectManagement()).toBe(4);
	});
	
	it("Number of Requirements roles should be 8", function(){
		expect(scope.numberOfRequirements()).toBe(8);
	});
	
	it("Number of Analysis Designt roles should be 10", function(){
		expect(scope.numberOfAnalysisDesign()).toBe(10);
	});
	
	it("Number of Implementation should be 14", function(){
		expect(scope.numberOfImplementation()).toBe(14);
	});
	
	it("Number of Tests roles should be 14", function(){
		expect(scope.numberOfTests()).toBe(14);
	});
	
	it("Number of Deploy roles should be 12", function(){
		expect(scope.numberOfDeploy()).toBe(12);
	});
	
	it("Number of Enviroment and Revision Control roles should be 12", function(){
		expect(scope.numberOfEnviroment()).toBe(12);
	});	
	
	//salarios
	it("Annibal Daily Salary should be 26.62 ", function(){
		expect(scope.employeeSalaryHour(scope.assignResourcesBean.employeeList[0])).toBeCloseTo(26.62,1);
	});
	
	it("Ernesto Daily Salary should be 19.84 ", function(){
		expect(scope.employeeSalaryHour(scope.assignResourcesBean.employeeList[4])).toBeCloseTo(19.84,1);
	});	
	
	it("Kiko Daily Salary should be 9.11", function(){
		expect(scope.employeeSalaryHour(scope.assignResourcesBean.employeeList[10])).toBeCloseTo(9.11,1);
	});	
	
	//roles
	it("Anibal should has PROJECT_MANAGEMENT role", function(){
		expect(scope.employeeHasRole(scope.assignResourcesBean.employeeList[0],"PROJECT_MANAGEMENT")).toBe(true);
	});
	
	it("Ursula should not has PROJECT_MANAGEMENT role", function(){
		expect(scope.employeeHasRole(scope.assignResourcesBean.employeeList[19],"PROJECT_MANAGEMENT")).toBe(false);
	});	
	
	//Fase de inicio - teorico relativo
	it("Inicio Project Management relative theorical percentaje should be 14", function(){
		expect(scope.inicioProjectManagementTheoricalRelative()).toBe(14);
	});		
	
	it("Inicio Requirements relative theorical percentaje should be 38", function(){
		expect(scope.inicioRequirementsTheoricalRelative()).toBe(38);
	});
	
	it("Inicio Analysis Design relative theorical percentaje should be 19", function(){
		expect(scope.inicioAnalysisDesignTheoricalRelative()).toBe(19);
	});
	
	it("Inicio Implementation relative theorical percentaje should be 8", function(){
		expect(scope.inicioImplementationTheoricalRelative()).toBe(8);
	});
	
	it("Inicio Tests relative theorical percentaje should be 8", function(){
		expect(scope.inicioTestsTheoricalRelative()).toBe(8);
	});
	
	it("Inicio Deploy relative theorical percentaje should be 3", function(){
		expect(scope.inicioDeployTheoricalRelative()).toBe(3);
	});
	
	it("Inicio Enviroment relative theorical percentaje should be 10", function(){
		expect(scope.inicioEnviromentTheoricalRelative()).toBe(10);
	});
	
	//Fase de inicio - teorico absoluto
	it("Inicio Project Management theorical absolute percentaje should be 38.7", function(){
		expect(scope.inicioProjectManagementTheoricalAbsolute()).toBe(38.7);
	});		
	
	it("Inicio Requirements relative theorical absolute should be 105.1", function(){
		expect(scope.inicioRequirementsTheoricalAbsolute()).toBe(105.1);
	});
	
	it("Inicio Analysis Design relative theorical absolute should be 52.5", function(){
		expect(scope.inicioAnalysisDesignTheoricalAbsolute()).toBe(52.5);
	});
	
	it("Inicio Implementation relative theorical absolute should be 22.1", function(){
		expect(scope.inicioImplementationTheoricalAbsolute()).toBe(22.1);
	});
	
	it("Inicio Tests relative theorical absolute should be 22.1", function(){
		expect(scope.inicioTestsTheoricalAbsolute()).toBe(22.1);
	});
	
	it("Inicio Deploy theorical absolute percentaje should be 8.3", function(){
		expect(scope.inicioDeployTheoricalAbsolute()).toBe(8.3);
	});
	
	it("Inicio Enviroment theorical absolute percentaje should be 27.7", function(){
		expect(scope.inicioEnviromentTheoricalAbsolute()).toBe(27.7);
	});	
})
