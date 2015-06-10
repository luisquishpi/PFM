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
				  {"id":20, "name":"Ursula", "surname":"del Mar", "employeeCode":"020", "annualGrossSalary":20000.00, 
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
					initialPercentajeProjectManagment: function(){return 14;},
					initialPercentajeRequirements: function(){return 38;},
					initialPercentajeAnalysis: function(){return 19;},
					initialPercentajeImplementation: function(){return 8;},
					initialPercentajeTests: function(){return 8;},
					initialPercentajeDeployment: function(){return 3;},
					initialPercentajeVersion: function(){return 10;},
					
					initialProjectManagmentHour: function(){return 38.7;},
					initialRequirementsHour: function(){return 105.1;},
					initialAnalysisHour: function(){return 52.5;},
					initialImplementationHour: function(){return 22.1;},
					initialTestsHour: function(){return 22.1;},
					initialDeploymentHour: function(){return 8.3;},
					initialVersionHour: function(){return 27.7;},					
					phases:{
						schedule:{
							listHoursEachDay: function(){ 
								return [{workHours:0},{workHours:8},{workHours:8},{workHours:8},{workHours:8},{workHours:8},{workHours:0}];
							  },
							workDays: 21,
							monthsPerYear: 12,
							hoursPerDay: 8,
							daysPerWeek: function(){return 5;},
						}
					},
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
	
	it("Inicio Total relative theorical percentaje should be 100", function(){
		expect(scope.inicioTotalTheoricalRelative()).toBe(100);
	});
	
	//Fase de inicio - teorico absoluto
	it("Inicio Project Management theorical absolute percentaje should be 38.7", function(){
		expect(scope.inicioProjectManagementTheoricalAbsolute()).toBe(38.7);
	});		
	
	it("Inicio Requirements theorical absolute should be 105.1", function(){
		expect(scope.inicioRequirementsTheoricalAbsolute()).toBe(105.1);
	});
	
	it("Inicio Analysis Design theorical absolute should be 52.5", function(){
		expect(scope.inicioAnalysisDesignTheoricalAbsolute()).toBe(52.5);
	});
	
	it("Inicio Implementation theorical absolute should be 22.1", function(){
		expect(scope.inicioImplementationTheoricalAbsolute()).toBe(22.1);
	});
	
	it("Inicio Tests theorical absolute should be 22.1", function(){
		expect(scope.inicioTestsTheoricalAbsolute()).toBe(22.1);
	});
	
	it("Inicio Deploy theorical absolute percentaje should be 8.3", function(){
		expect(scope.inicioDeployTheoricalAbsolute()).toBe(8.3);
	});
	
	it("Inicio Enviroment theorical absolute percentaje should be 27.7", function(){
		expect(scope.inicioEnviromentTheoricalAbsolute()).toBe(27.7);
	});	
	
	it("Inicio Total absolute theorical percentaje should be 276.5", function(){
		expect(scope.inicioTotalTheoricalAbsolute()).toBeCloseTo(276.5,1);
	});
	
	//Fase de inicio - diferencia absoluta
	it("Inicio Project Management absolute difference should be -2.3", function(){
		expect(scope.inicioProjectManagementAbsoluteDifference()).toBe(-2.3);
	});		
	
	it("Inicio Requirements absolute difference should be -6.3", function(){
		expect(scope.inicioRequirementsAbsoluteDifference()).toBe(-6.3);
	});
	
	it("Inicio Analysis Design absolute difference should be -3.1", function(){
		expect(scope.inicioAnalysisDesignAbsoluteDifference()).toBe(-3.1);
	});
	
	it("Inicio Implementation absolute difference should be -1.3", function(){
		expect(scope.inicioImplementationAbsoluteDifference()).toBe(-1.3);
	});
	
	it("Inicio Tests absolute difference should be -1.3", function(){
		expect(scope.inicioTestsAbsoluteDifference()).toBe(-1.3);
	});
	
	it("Inicio Deploy absolute difference should be -0.5", function(){
		expect(scope.inicioDeployAbsoluteDifference()).toBe(-0.5);
	});
	
	it("Inicio Enviroment absolute difference should be -1.7", function(){
		expect(scope.inicioEnviromentAbsoluteDifference()).toBe(-1.7);
	});	
	
	it("Inicio Total absolute percentaje should be -16.5", function(){
		expect(scope.inicioTotalAbsoluteDifference()).toBe(-16.5);
	});		
	
	//Fase de inicio - diferencia relativas
	it("Inicio Project Management relative difference should be 94", function(){
		expect(Math.round(scope.inicioProjectManagementRelativeDifference())).toBe(94);
	});		
	
	it("Inicio Requirements relative difference should be 94", function(){
		expect(Math.round(scope.inicioRequirementsRelativeDifference())).toBe(94);
	});
	
	it("Inicio Analysis Design relative difference should be 94", function(){
		expect(Math.round(scope.inicioAnalysisDesignRelativeDifference())).toBe(94);
	});
	
	it("Inicio Implementation relative difference should be 94", function(){
		expect(Math.round(scope.inicioImplementationRelativeDifference())).toBe(94);
	});
	
	it("Inicio Tests relative difference should be 94", function(){
		expect(Math.round(scope.inicioTestsRelativeDifference())).toBe(94);
	});
	
	it("Inicio Deploy relative difference should be 94", function(){
		expect(Math.round(scope.inicioDeployRelativeDifference())).toBe(94);
	});
	
	it("Inicio Enviroment relative difference should be 94", function(){
		expect(Math.round(scope.inicioEnviromentRelativeDifference())).toBe(94);
	});	
	
	it("Inicio Total absolute theorical percentaje should be 94", function(){
		expect(Math.round(scope.inicioTotalRelativeDifference())).toBe(94);
	});		
	
	//Fase de inicio - assigned
	it("Inicio Project Management assigned should be 36.4", function(){
		expect(scope.inicioProjectManagementAssigned()).toBe(36.4);
	});		
	
	it("Inicio Requirements assigned should be 98.8", function(){
		expect(scope.inicioRequirementsAssigned()).toBe(98.8);
	});
	
	it("Inicio Analysis Design assigned should be 49.4", function(){
		expect(scope.inicioAnalysisDesignAssigned()).toBe(49.4);
	});
	
	it("Inicio Implementation assigned should be 20.8", function(){
		expect(scope.inicioImplementationAssigned()).toBe(20.8);
	});
	
	it("Inicio Tests assigned should be 20.8", function(){
		expect(scope.inicioTestsAssigned()).toBe(20.8);
	});
	
	it("Inicio Deploy assigned should be 7.8", function(){
		expect(scope.inicioDeployAssigned()).toBe(7.8);
	});
	
	it("Inicio Enviroment assigned should be 26", function(){
		expect(scope.inicioEnviromentAssigned()).toBe(26);
	});	
	
	it("Inicio Total asigned percentaje should be 260", function(){
		expect(scope.inicioTotalAssigned()).toBe(260);
	});		
	
	//Fase de inicio - proposal
	it("Inicio Project Management proposal should be 35.84", function(){
		expect(scope.inicioProjectManagementProposal()).toBeCloseTo(35.84,1);
	});		
	
	it("Inicio Requirements proposal should be 97.28", function(){
		expect(scope.inicioRequirementsProposal()).toBeCloseTo(97.28,1);
	});
	
	it("Inicio Analysis Design proposal should be 48.64", function(){
		expect(scope.inicioAnalysisDesignProposal()).toBeCloseTo(48.64,1);
	});
	
	it("Inicio Implementation proposal should be 20.48", function(){
		expect(scope.inicioImplementationProposal()).toBeCloseTo(20.48,1);
	});
	
	it("Inicio Tests proposal should be 20.48", function(){
		expect(scope.inicioTestsProposal()).toBeCloseTo(20.48,1);
	});
	
	it("Inicio Deploy proposal should be 7.68", function(){
		expect(scope.inicioDeployProposal()).toBeCloseTo(7.68,1);
	});
	
	it("Inicio Enviroment proposal should be 25.6", function(){
		expect(scope.inicioEnviromentProposal()).toBeCloseTo(25.6,1);
	});	
	
	it("Inicio Total asigned percentaje should be 256.01", function(){
		expect(scope.inicioTotalProposal()).toBeCloseTo(256.01,1);
	});		
	

})
