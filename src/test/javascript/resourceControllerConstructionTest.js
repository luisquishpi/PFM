describe("Test ResourceController Construction Phase", function(){
	beforeEach(module("projectApp"));
	
	var resourceController;
	var scope;
	
	beforeEach(inject(function($controller, $rootScope){
		scope = $rootScope;
		scope.resourcesBean = {
				  project:{
					  cost: 85000,
					  startString: "2/3/2015",
					  endString: "4/9/2015",
					  iterationDays: 13,
				  },
				  employeeList:[
				  {"id":1, "name":"Anibal", "surname":"Pacheco", "employeeCode":"001", "annualGrossSalary":40500.00, 
					      "roles":["PROJECT_MANAGEMENT", "REQUIREMENTS", "ANALYSIS_DESIGN", "IMPLEMENTATION", "TESTS", "DEPLOY", "ENVIROMENT_REVISION_CONTROL" ],
					      "contract":{insurance: 32.5},
					      "vacations":[{"start": "3/3/2015", "end":"5/3/2015"}]},
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
				  ],
			  
		};
		scope.phaseTest = "CONST";
		scope.construccionNumberOfAssignedPeopleMock = 7.0; 
		scope.construccionAssignedEmployeeMock ={
				employeeList:[
				    {"employee":{"id":1, "name":"Anibal", "surname":"Pacheco", "employeeCode":"001", "annualGrossSalary":40500.00, 
					    "roles":["PROJECT_MANAGEMENT", "REQUIREMENTS", "ANALYSIS_DESIGN", "IMPLEMENTATION", "TESTS", "DEPLOY", "ENVIROMENT_REVISION_CONTROL" ],
					    "contract":{insurance: 32.5},
					    "vacations":[{"start": "3/3/2015", "end":"5/3/2015"}]}, 
					    "projectManagementHours":0,
					    "requirementsHours":0,
					    "analysisDesignHours":0,
					    "implementationHours":0,
					    "testsHours":0,
					    "deployHours":0,
					    "environmentHours":0},
				    {"employee":{"id":2, "name":"Beatriz", "surname":"Jimenez", "employeeCode":"002", "annualGrossSalary":38000.00, 
						"roles":["PROJECT_MANAGEMENT", "REQUIREMENTS", "ANALYSIS_DESIGN", "IMPLEMENTATION", "TESTS", "DEPLOY", "ENVIROMENT_REVISION_CONTROL" ],
						"contract":{insurance: 32.5}}, 
						"projectManagementHours":0,
						"requirementsHours":0,
						"analysisDesignHours":0,
						"implementationHours":0,
						"testsHours":0,
						"deployHours":0,
						"environmentHours":0,},
					{"employee":{"id":3, "name":"Carlos", "surname":"Palacios", "employeeCode":"003", "annualGrossSalary":30000.00, 
						"roles":["PROJECT_MANAGEMENT", "REQUIREMENTS"],
						"contract":{insurance: 32.5}}, 
						"projectManagementHours":364.0,
						"requirementsHours":156.0,
						"analysisDesignHours":0,
						"implementationHours":0,
						"testsHours":0,
						"deployHours":0,
						"environmentHours":0,},
						{"employee":{"id":4, "name":"Daniela", "surname":"Rodriguez", "employeeCode":"004", "annualGrossSalary":28500.00, 
						"roles":["PROJECT_MANAGEMENT", "REQUIREMENTS"],
						"contract":{insurance: 32.5}}, 
						"projectManagementHours":0,
						"requirementsHours":0,
						"analysisDesignHours":0,
						"implementationHours":0,
						"testsHours":0,
						"deployHours":0,
						"environmentHours":0,},	
					{"employee":{"id":5, "name":"Ernesto", "surname":"Guerra", "employeeCode":"005", "annualGrossSalary":40000.00, 
						"roles":["REQUIREMENTS", "ANALYSIS_DESIGN", "IMPLEMENTATION"],
						"contract":{insurance: 0.00}}, 
						"projectManagementHours":0,
						"requirementsHours":0,
						"analysisDesignHours":0,
						"implementationHours":520,
						"testsHours":0,
						"deployHours":0,
						"environmentHours":0,},
					{"employee":{"id":6, "name":"Flor", "surname":"Palomeque", "employeeCode":"006", "annualGrossSalary":25000.00, 
						"roles":["REQUIREMENTS", "ANALYSIS_DESIGN", "IMPLEMENTATION"],
						"contract":{insurance: 32.5}}, 
						"projectManagementHours":0,
						"requirementsHours":0,
						"analysisDesignHours":0,
						"implementationHours":0,
						"testsHours":0,
						"deployHours":0,
						"environmentHours":0,},
					{"employee":{"id":7, "name":"Gabriel", "surname":"Heinze", "employeeCode":"007", "annualGrossSalary":23000.00, 
						"roles":["REQUIREMENTS", "ANALYSIS_DESIGN", "IMPLEMENTATION"],
						"contract":{insurance: 32.5}}, 
						"projectManagementHours":0,
						"requirementsHours":0,
						"analysisDesignHours":0,
						"implementationHours":0,
						"testsHours":0,
						"deployHours":0,
						"environmentHours":0,},		
					{"employee":{"id":8, "name":"Henar", "surname":"Carrasco", "employeeCode":"008", "annualGrossSalary":24500.00, 
						"roles":["REQUIREMENTS", "ANALYSIS_DESIGN", "IMPLEMENTATION"],
						"contract":{insurance: 32.5}}, 
						"projectManagementHours":0,
						"requirementsHours":135.2,
						"analysisDesignHours":384.8,
						"implementationHours":0,
						"testsHours":0,
						"deployHours":0,
						"environmentHours":0,},	
					{"employee":{"id":9, "name":"Ismael", "surname":"Miranda", "employeeCode":"009", "annualGrossSalary":24000.00, 
						"roles":["ANALYSIS_DESIGN", "IMPLEMENTATION", "TESTS", "DEPLOY", "ENVIROMENT_REVISION_CONTROL" ],
						"contract":{insurance: 32.5}}, 
						"projectManagementHours":0,
						"requirementsHours":0,
						"analysisDesignHours":0,
						"implementationHours":0,
						"testsHours":228.8,
						"deployHours":109.2,
						"environmentHours":182.0,},	
					{"employee":{"id":10, "name":"Julia", "surname":"Fuentes", "employeeCode":"010", "annualGrossSalary":24000.00, 
						"roles":["ANALYSIS_DESIGN", "IMPLEMENTATION", "TESTS", "DEPLOY", "ENVIROMENT_REVISION_CONTROL" ],
						"contract":{insurance: 32.5}}, 
						"projectManagementHours":0,
						"requirementsHours":0,
						"analysisDesignHours":197.6,
						"implementationHours":322.4,
						"testsHours":0,
						"deployHours":0,
						"environmentHours":0,},
					{"employee":{"id":11, "name":"Kiko", "surname":"Leon", "employeeCode":"011", "annualGrossSalary":18000.00, 
						"roles":["ANALYSIS_DESIGN", "IMPLEMENTATION", "TESTS"],
						"contract":{insurance: 2.0}}, 
						"projectManagementHours":0,
						"requirementsHours":0,
						"analysisDesignHours":0,
						"implementationHours":395.2,
						"testsHours":124.8,
						"deployHours":0,
						"environmentHours":0,},
					{"employee":{"id":12, "name":"Lourdes", "surname":"Hernadez", "employeeCode":"012", "annualGrossSalary":18000.00, 
						"roles":["ANALYSIS_DESIGN", "IMPLEMENTATION", "TESTS"],
						"contract":{insurance: 2.0}}, 
						"projectManagementHours":0,
						"requirementsHours":0,
						"analysisDesignHours":0,
						"implementationHours":0,
						"testsHours":520,
						"deployHours":0,
						"environmentHours":0,},
					{"employee":{"id":13, "name":"Manuel", "surname":"Vega", "employeeCode":"013", "annualGrossSalary":18000.00, 
						"roles":["IMPLEMENTATION", "TESTS", "DEPLOY", "ENVIROMENT_REVISION_CONTROL"],
						"contract":{insurance: 2.0}}, 
						"projectManagementHours":0,
						"requirementsHours":0,
						"analysisDesignHours":0,
						"implementationHours":0,
						"testsHours":0,
						"deployHours":0,
						"environmentHours":0,},	
					{"employee":{"id":14, "name":"Noelia", "surname":"Navas", "employeeCode":"014", "annualGrossSalary":18000.00, 
						"roles":["IMPLEMENTATION", "TESTS", "DEPLOY", "ENVIROMENT_REVISION_CONTROL"],
						"contract":{insurance: 2.0}}, 
						"projectManagementHours":0,
						"requirementsHours":0,
						"analysisDesignHours":0,
						"implementationHours":0,
						"testsHours":0,
						"deployHours":0,
						"environmentHours":0,},
					{"employee":{"id":15, "name":"Osvaldo", "surname":"Uribe", "employeeCode":"015", "annualGrossSalary":22000.00, 
						"roles":["IMPLEMENTATION", "TESTS", "DEPLOY", "ENVIROMENT_REVISION_CONTROL"],
						"contract":{insurance: 32.5}}, 
						"projectManagementHours":0,
						"requirementsHours":0,
						"analysisDesignHours":0,
						"implementationHours":0,
						"testsHours":0,
						"deployHours":0,
						"environmentHours":0,},
					{"employee":{"id":16, "name":"Paloma", "surname":"Fiuza", "employeeCode":"016", "annualGrossSalary":21000.00, 
						"roles":["IMPLEMENTATION", "TESTS", "DEPLOY", "ENVIROMENT_REVISION_CONTROL"],
						"contract":{insurance: 32.5}}, 
						"projectManagementHours":0,
						"requirementsHours":0,
						"analysisDesignHours":0,
						"implementationHours":0,
						"testsHours":0,
						"deployHours":0,
						"environmentHours":0,},		
					{"employee":{"id":17, "name":"Ramón", "surname":"Valdez", "employeeCode":"017", "annualGrossSalary":20000.00, 
						"roles":["TESTS", "DEPLOY", "ENVIROMENT_REVISION_CONTROL"],
						"contract":{insurance: 32.5}}, 
						"projectManagementHours":0,
						"requirementsHours":0,
						"analysisDesignHours":0,
						"implementationHours":0,
						"testsHours":0,
						"deployHours":0,
						"environmentHours":0,},	
					{"employee":{"id":18, "name":"Sara", "surname":"Gavilanez", "employeeCode":"018", "annualGrossSalary":25000.00, 
						"roles":["TESTS", "DEPLOY", "ENVIROMENT_REVISION_CONTROL"],
						"contract":{insurance: 0.0}}, 
						"projectManagementHours":0,
						"requirementsHours":0,
						"analysisDesignHours":0,
						"implementationHours":0,
						"testsHours":0,
						"deployHours":0,
						"environmentHours":0,},	
					{"employee":{"id":19, "name":"Tomas", "surname":"Zambrano", "employeeCode":"019", "annualGrossSalary":30000.00, 
						"roles":["TESTS", "DEPLOY", "ENVIROMENT_REVISION_CONTROL"],
						"contract":{insurance: 0.0}}, 
						"projectManagementHours":0,
						"requirementsHours":0,
						"analysisDesignHours":0,
						"implementationHours":0,
						"testsHours":0,
						"deployHours":0,
						"environmentHours":0,},
					{"employee":{"id":20, "name":"Ursula", "surname":"del Mar", "employeeCode":"020", "annualGrossSalary":20000.00, 
						"roles":["TESTS", "DEPLOY", "ENVIROMENT_REVISION_CONTROL"],
						"contract":{insurance: 32.5}}, 
						"projectManagementHours":0,
						"requirementsHours":0,
						"analysisDesignHours":0,
						"implementationHours":0,
						"testsHours":0,
						"deployHours":0,
						"environmentHours":0,},				    ],
		};
		
		resourceController = $controller("resourceController", {
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
					
					elaborationPercentajeProjectManagment: function(){return 12;},
					elaborationPercentajeRequirements: function(){return 18;},
					elaborationPercentajeAnalysis: function(){return 36;},
					elaborationPercentajeImplementation: function(){return 13;},
					elaborationPercentajeTests: function(){return 10;},
					elaborationPercentajeDeployment: function(){return 3;},
					elaborationPercentajeVersion: function(){return 8;},
					
					elaborationProjectManagmentHour: function(){return 132.8;},
					elaborationRequirementsHour: function(){return 199.1;},
					elaborationAnalysisHour: function(){return 398.3;},
					elaborationImplementationHour: function(){return 143.8;},
					elaborationTestsHour: function(){return 110.6;},
					elaborationDeploymentHour: function(){return 33.2;},
					elaborationVersionHour: function(){return 88.5;},			
					
					constructionPercentajeProjectManagment: function(){return 10;},
					constructionPercentajeRequirements: function(){return 8;},
					constructionPercentajeAnalysis: function(){return 16;},
					constructionPercentajeImplementation: function(){return 34;},
					constructionPercentajeTests: function(){return 24;},
					constructionPercentajeDeployment: function(){return 3;},
					constructionPercentajeVersion: function(){return 5;},
					
					constructionProjectManagmentHour: function(){return 359.5;},
					constructionRequirementsHour: function(){return 287.6;},
					constructionAnalysisHour: function(){return 575.3;},
					constructionImplementationHour: function(){return 1222.4;},
					constructionTestsHour: function(){return 862.9;},
					constructionDeploymentHour: function(){return 107.9;},
					constructionVersionHour: function(){return 179.8;},	
					
					transitionPercentajeProjectManagment: function(){return 14;},
					transitionPercentajeRequirements: function(){return 4;},
					transitionPercentajeAnalysis: function(){return 4;},
					transitionPercentajeImplementation: function(){return 19;},
					transitionPercentajeTests: function(){return 24;},
					transitionPercentajeDeployment: function(){return 30;},
					transitionPercentajeVersion: function(){return 5;},
					
					transitionProjectManagmentHour: function(){return 77.4;},
					transitionRequirementsHour: function(){return 22.1;},
					transitionAnalysisHour: function(){return 22.1;},
					transitionImplementationHour: function(){return 105.1;},
					transitionTestsHour: function(){return 132.8;},
					transitionDeploymentHour: function(){return 165.9;},
					transitionVersionHour: function(){return 22.7;},	
					
					phases:{
							schedule:{
								listHoursEachDay: function(){ 
									return [{workHours:0},{workHours:8},{workHours:8},{workHours:8},{workHours:8},{workHours:8},{workHours:0}];
								},
								workDays: 21,
								monthsPerYear: 12,
								hoursPerDay: function(){return 8;},
								daysPerWeek: function(){return 5;},
								averageHoursPerDay: function(){return 8;},
							}
					},
				},	
			},
		});	
	}));
	
	//fase de Construccion horas disponibles
	it("Average available hours should has 520", function(){
		expect(scope.constPhase.averageEmployeeHours()).toBe(520);
	});
	
	it("Anibal should has 520 available hours", function(){
		expect(scope.constPhase.availableEmployeeHours(scope.resourcesBean.employeeList[0])).toBe(520);
	});
	
	//Fase de Construccion - teorico relativo
	it("Project Management relative theorical percentaje should be 10", function(){
		expect(scope.constPhase.projectManagementTheoricalRelative).toBe(10);
	});		
	
	it("Requirements relative theorical percentaje should be 8", function(){
		expect(scope.constPhase.requirementsTheoricalRelative).toBe(8);
	});
	
	it("Analysis Design relative theorical percentaje should be 16", function(){
		expect(scope.constPhase.analysisDesignTheoricalRelative).toBe(16);
	});
	
	it("Implementation relative theorical percentaje should be 34", function(){
		expect(scope.constPhase.implementationTheoricalRelative).toBe(34);
	});
	
	it("Tests relative theorical percentaje should be 24", function(){
		expect(scope.constPhase.testsTheoricalRelative).toBe(24);
	});
	
	it("Deploy relative theorical percentaje should be 3", function(){
		expect(scope.constPhase.deployTheoricalRelative).toBe(3);
	});
	
	it("Enviroment relative theorical percentaje should be 5", function(){
		expect(scope.constPhase.enviromentTheoricalRelative).toBe(5);
	});
	
	it("Total relative theorical percentaje should be 100", function(){
		expect(scope.constPhase.totalTheoricalRelative()).toBe(100);
	});
	
	//Fase de Construccion - teorico absoluto
	it("Project Management theorical absolute percentaje should be 359.5", function(){
		expect(scope.constPhase.projectManagementTheoricalAbsolute).toBe(359.5);
	});		
	
	it("Requirements theorical absolute should be 287.6", function(){
		expect(scope.constPhase.requirementsTheoricalAbsolute).toBe(287.6);
	});
	
	it("Analysis Design theorical absolute should be 575.3", function(){
		expect(scope.constPhase.analysisDesignTheoricalAbsolute).toBe(575.3);
	});
	
	it("Implementation theorical absolute should be 1222.4", function(){
		expect(scope.constPhase.implementationTheoricalAbsolute).toBe(1222.4);
	});
	
	it("Tests theorical absolute should be 862.9", function(){
		expect(scope.constPhase.testsTheoricalAbsolute).toBe(862.9);
	});
	
	it("Deploy theorical absolute should be 107.9", function(){
		expect(scope.constPhase.deployTheoricalAbsolute).toBe(107.9);
	});
	
	it("Enviroment theorical absolute should be 179.8", function(){
		expect(scope.constPhase.enviromentTheoricalAbsolute).toBe(179.8);
	});	
	
	it("Total absolute theorical should be 3595.4", function(){
		expect(scope.constPhase.totalTheoricalAbsolute()).toBeCloseTo(3595.4,1);
	});
	
	//Fase de Construccion - diferencia absoluta
	it("Project Management absolute difference should be 4.5", function(){
		expect(scope.constPhase.projectManagementAbsoluteDifference()).toBeCloseTo(4.5,1);
	});		
	
	it("Requirements absolute difference should be 3.6", function(){
		expect(scope.constPhase.requirementsAbsoluteDifference()).toBeCloseTo(3.6,1);
	});
	
	it("Analysis Design absolute difference should be 7.1", function(){
		expect(scope.constPhase.analysisDesignAbsoluteDifference()).toBeCloseTo(7.1,1);
	});
	
	it("Implementation absolute difference should be 15.2", function(){
		expect(scope.constPhase.implementationAbsoluteDifference()).toBeCloseTo(15.2,1);
	});
	
	it("Tests absolute difference should be 10.7", function(){
		expect(scope.constPhase.testsAbsoluteDifference()).toBeCloseTo(10.7,1);
	});
	
	it("Deploy absolute difference should be 1.3", function(){
		expect(scope.constPhase.deployAbsoluteDifference()).toBeCloseTo(1.3,1);
	});
	
	it("Enviroment absolute difference should be 2.2", function(){
		expect(scope.constPhase.enviromentAbsoluteDifference()).toBeCloseTo(2.2,1);
	});	
	
	it("Total absolute difference should be 44.6", function(){
		expect(scope.constPhase.totalAbsoluteDifference()).toBeCloseTo(44.6,1);
	});		

	
	//Fase de Construccion - diferencia relativas
	it("Project Management relative difference should be 101", function(){
		expect(Math.round(scope.constPhase.projectManagementRelativeDifference())).toBe(101);
	});		
	
	it("Requirements relative difference should be 101", function(){
		expect(Math.round(scope.constPhase.requirementsRelativeDifference())).toBe(101);
	});
	
	it("Analysis Design relative difference should be 101", function(){
		expect(Math.round(scope.constPhase.analysisDesignRelativeDifference())).toBe(101);
	});
	
	it("Implementation relative difference should be 101", function(){
		expect(Math.round(scope.constPhase.implementationRelativeDifference())).toBe(101);
	});
	
	it("Tests relative difference should be 101", function(){
		expect(Math.round(scope.constPhase.testsRelativeDifference())).toBe(101);
	});
	
	it("Deploy relative difference should be 101", function(){
		expect(Math.round(scope.constPhase.deployRelativeDifference())).toBe(101);
	});
	
	it("Enviroment relative difference should be 101", function(){
		expect(Math.round(scope.constPhase.enviromentRelativeDifference())).toBe(101);
	});	
	
	it("Total relative percentaje should be 101", function(){
		expect(Math.round(scope.constPhase.totalRelativeDifference())).toBe(101);
	});	
	
	
	//Fase de Construccion - assigned
	it("Project Management assigned should be 364.0", function(){
		expect(scope.constPhase.projectManagementAssigned).toBe(364.0);
	});		
	
	it("Requirements assigned should be 291.2", function(){
		expect(scope.constPhase.requirementsAssigned).toBe(291.2);
	});
	
	it("Analysis Design assigned should be 582.4", function(){
		expect(scope.constPhase.analysisDesignAssigned).toBeCloseTo(582.4,1);
	});
	
	it("Implementation assigned should be 1237.6", function(){
		expect(scope.constPhase.implementationAssigned).toBeCloseTo(1237.6,1);
	});
	
	it("Tests assigned should be 873.6", function(){
		expect(scope.constPhase.testsAssigned).toBeCloseTo(873.6,1);
	});
	
	it("Deploy assigned should be 109.2", function(){
		expect(scope.constPhase.deployAssigned).toBeCloseTo(109.2,1);
	});
	
	it("Enviroment assigned should be 182.0", function(){
		expect(scope.constPhase.enviromentAssigned).toBeCloseTo(182.0,1);
	});	
	
	it("Total asigned percentaje should be 3640.0", function(){
		expect(scope.constPhase.totalAssigned()).toBeCloseTo(3640.0,1);
	});		
	
	//Fase de Construccion - proposal
	it("Project Management proposal should be 364.0", function(){
		expect(scope.constPhase.projectManagementProposal()).toBeCloseTo(364.0,1);
	});		
	
	it("Requirements proposal should be 291.2", function(){
		expect(scope.constPhase.requirementsProposal()).toBeCloseTo(291.2,1);
	});
	
	it("Analysis Design proposal should be 582.4", function(){
		expect(scope.constPhase.analysisDesignProposal()).toBeCloseTo(582.4,1);
	});
	
	it("Implementation proposal should be 1237.6", function(){
		expect(scope.constPhase.implementationProposal()).toBeCloseTo(1237.6,1);
	});
	
	it("Tests proposal should be 873.6", function(){
		expect(scope.constPhase.testsProposal()).toBeCloseTo(873.6,1);
	});
	
	it("Deploy proposal should be 109.2", function(){
		expect(scope.constPhase.deployProposal()).toBeCloseTo(109.2,1);
	});
	
	it("Enviroment proposal should be 182.0", function(){
		expect(scope.constPhase.enviromentProposal()).toBeCloseTo(182.0,1);
	});	
	
	it("Total proposal should be 3640.0", function(){
		expect(scope.constPhase.totalProposal()).toBeCloseTo(3640.0,1);
	});		
	
	//Fase de Construccion - diferencia propuesta
	it("Project Management proposal diff should be 0", function(){
		expect(scope.constPhase.projectManagementProposalDiff()).toBeCloseTo(0,1);
	});		
	
	it("Requirements proposal diff should be 0", function(){
		expect(scope.constPhase.requirementsProposalDiff()).toBeCloseTo(0,1);
	});
	
	it("Analysis Design proposal diff should be 0", function(){
		expect(scope.constPhase.analysisDesignProposalDiff()).toBeCloseTo(0,1);
	});
	
	it("Implementation proposal diff should be 0", function(){
		expect(scope.constPhase.implementationProposalDiff()).toBeCloseTo(0,1);
	});
	
	it("Tests proposal diff should be 0", function(){
		expect(scope.constPhase.testsProposalDiff()).toBeCloseTo(0,1);
	});
	
	it("Deploy proposal diff should be 0", function(){
		expect(scope.constPhase.deployProposalDiff()).toBeCloseTo(0,1);
	});
	
	it("Enviroment proposal diff should be 0", function(){
		expect(scope.constPhase.enviromentProposalDiff()).toBeCloseTo(0,1);
	});	
	
	it("Total proposal diff should be 0", function(){
		expect(scope.constPhase.totalProposalDiff()).toBeCloseTo(0,1);
	});
	
	it("Henar should has  8373.26€ as cost", function(){
		expect(scope.employeeCost(scope.construccionAssignedEmployeeMock.employeeList[7])).toBeCloseTo(8373.26,1);
	});
	
	it("Carlos should has 10252.98€ as cost", function(){
		expect(scope.employeeCost(scope.construccionAssignedEmployeeMock.employeeList[2])).toBeCloseTo(10252.98,1);
	});	
	
	it("Beatriz should has  0€ as cost", function(){
		expect(scope.employeeCost(scope.construccionAssignedEmployeeMock.employeeList[1])).toBeCloseTo(0,1);
	});
})
