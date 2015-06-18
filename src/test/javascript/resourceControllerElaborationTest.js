describe("Test ResourceController Elaboration Phase", function(){
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
		scope.phaseTest = "ELAB";
		scope.elaboracionNumberOfAssignedPeopleMock = 3.5; 
		scope.elaboracionAssignedEmployeeMock ={
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
						"projectManagementHours":131.0,
						"requirementsHours":181.0,
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
						"implementationHours":0,
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
						"requirementsHours":15.6,
						"analysisDesignHours":296.4,
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
						"testsHours":35.9,
						"deployHours":32.8,
						"environmentHours":87.4,},	
					{"employee":{"id":10, "name":"Julia", "surname":"Fuentes", "employeeCode":"010", "annualGrossSalary":24000.00, 
						"roles":["ANALYSIS_DESIGN", "IMPLEMENTATION", "TESTS", "DEPLOY", "ENVIROMENT_REVISION_CONTROL" ],
						"contract":{insurance: 32.5}}, 
						"projectManagementHours":0,
						"requirementsHours":0,
						"analysisDesignHours":0,
						"implementationHours":0,
						"testsHours":0,
						"deployHours":0,
						"environmentHours":0,},
					{"employee":{"id":11, "name":"Kiko", "surname":"Leon", "employeeCode":"011", "annualGrossSalary":18000.00, 
						"roles":["ANALYSIS_DESIGN", "IMPLEMENTATION", "TESTS"],
						"contract":{insurance: 2.0}}, 
						"projectManagementHours":0,
						"requirementsHours":0,
						"analysisDesignHours":0,
						"implementationHours":0,
						"testsHours":0,
						"deployHours":0,
						"environmentHours":0,},
					{"employee":{"id":12, "name":"Lourdes", "surname":"Hernadez", "employeeCode":"012", "annualGrossSalary":18000.00, 
						"roles":["ANALYSIS_DESIGN", "IMPLEMENTATION", "TESTS"],
						"contract":{insurance: 2.0}}, 
						"projectManagementHours":0,
						"requirementsHours":0,
						"analysisDesignHours":96.7,
						"implementationHours":142.0,
						"testsHours":73.3,
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
	
	//fase de Elaboracion horas disponibles
	it("Average available hours should has 312", function(){
		expect(scope.elabPhase.averageEmployeeHours()).toBe(312);
	});
	
	it("Anibal should has 312 available hours", function(){
		expect(scope.elabPhase.availableEmployeeHours(scope.resourcesBean.employeeList[0])).toBe(312);
	});
	
	//Fase de Elaboracion - teorico relativo
	it("Project Management relative theorical percentaje should be 12", function(){
		expect(scope.elabPhase.projectManagementTheoricalRelative).toBe(12);
	});		
	
	it("Requirements relative theorical percentaje should be 18", function(){
		expect(scope.elabPhase.requirementsTheoricalRelative).toBe(18);
	});
	
	it("Analysis Design relative theorical percentaje should be 36", function(){
		expect(scope.elabPhase.analysisDesignTheoricalRelative).toBe(36);
	});
	
	it("Implementation relative theorical percentaje should be 13", function(){
		expect(scope.elabPhase.implementationTheoricalRelative).toBe(13);
	});
	
	it("Tests relative theorical percentaje should be 10", function(){
		expect(scope.elabPhase.testsTheoricalRelative).toBe(10);
	});
	
	it("Deploy relative theorical percentaje should be 3", function(){
		expect(scope.elabPhase.deployTheoricalRelative).toBe(3);
	});
	
	it("Enviroment relative theorical percentaje should be 8", function(){
		expect(scope.elabPhase.enviromentTheoricalRelative).toBe(8);
	});
	
	it("Total relative theorical percentaje should be 100", function(){
		expect(scope.elabPhase.totalTheoricalRelative()).toBe(100);
	});
	
	//Fase de Elaboracion - teorico absoluto
	it("Project Management theorical absolute percentaje should be 132.8", function(){
		expect(scope.elabPhase.projectManagementTheoricalAbsolute).toBe(132.8);
	});		
	
	it("Requirements theorical absolute should be 199.1", function(){
		expect(scope.elabPhase.requirementsTheoricalAbsolute).toBe(199.1);
	});
	
	it("Analysis Design theorical absolute should be 398.3", function(){
		expect(scope.elabPhase.analysisDesignTheoricalAbsolute).toBe(398.3);
	});
	
	it("Implementation theorical absolute should be 143.8", function(){
		expect(scope.elabPhase.implementationTheoricalAbsolute).toBe(143.8);
	});
	
	it("Tests theorical absolute should be 110.6", function(){
		expect(scope.elabPhase.testsTheoricalAbsolute).toBe(110.6);
	});
	
	it("Deploy theorical absolute should be 33.2", function(){
		expect(scope.elabPhase.deployTheoricalAbsolute).toBe(33.2);
	});
	
	it("Enviroment theorical absolute should be 88.5", function(){
		expect(scope.elabPhase.enviromentTheoricalAbsolute).toBe(88.5);
	});	
	
	it("Total absolute theorical should be 1106.3", function(){
		expect(scope.elabPhase.totalTheoricalAbsolute()).toBeCloseTo(1106.3,1);
	});
	
	//Fase de Elaboracion - diferencia absoluta
	it("Project Management absolute difference should be -1.8", function(){
		expect(scope.elabPhase.projectManagementAbsoluteDifference()).toBeCloseTo(-1.8,1);
	});		
	
	it("Requirements absolute difference should be -2.5", function(){
		expect(scope.elabPhase.requirementsAbsoluteDifference()).toBeCloseTo(-2.5,1);
	});
	
	it("Analysis Design absolute difference should be -5.2", function(){
		expect(scope.elabPhase.analysisDesignAbsoluteDifference()).toBeCloseTo(-5.2,1);
	});
	
	it("Implementation absolute difference should be -1.8", function(){
		expect(scope.elabPhase.implementationAbsoluteDifference()).toBeCloseTo(-1.8,1);
	});
	
	it("Tests absolute difference should be -1.4", function(){
		expect(scope.elabPhase.testsAbsoluteDifference()).toBeCloseTo(-1.4,1);
	});
	
	it("Deploy absolute difference should be -0.4", function(){
		expect(scope.elabPhase.deployAbsoluteDifference()).toBeCloseTo(-0.4,1);
	});
	
	it("Enviroment absolute difference should be -1.1", function(){
		expect(scope.elabPhase.enviromentAbsoluteDifference()).toBeCloseTo(-1.1,1);
	});	
	
	it("Total absolute percentaje should be -14.2", function(){
		expect(scope.elabPhase.totalAbsoluteDifference()).toBeCloseTo(-14.2,1);
	});		

	
	//Fase de Elaboracion - diferencia relativas
	it("Project Management relative difference should be 99", function(){
		expect(Math.round(scope.elabPhase.projectManagementRelativeDifference())).toBe(99);
	});		
	
	it("Requirements relative difference should be 99", function(){
		expect(Math.round(scope.elabPhase.requirementsRelativeDifference())).toBe(99);
	});
	
	it("Analysis Design relative difference should be 99", function(){
		expect(Math.round(scope.elabPhase.analysisDesignRelativeDifference())).toBe(99);
	});
	
	it("Implementation relative difference should be 99", function(){
		expect(Math.round(scope.elabPhase.implementationRelativeDifference())).toBe(99);
	});
	
	it("Tests relative difference should be 99", function(){
		expect(Math.round(scope.elabPhase.testsRelativeDifference())).toBe(99);
	});
	
	it("Deploy relative difference should be 99", function(){
		expect(Math.round(scope.elabPhase.deployRelativeDifference())).toBe(99);
	});
	
	it("Enviroment relative difference should be 99", function(){
		expect(Math.round(scope.elabPhase.enviromentRelativeDifference())).toBe(99);
	});	
	
	it("Total relative percentaje should be 99", function(){
		expect(Math.round(scope.elabPhase.totalRelativeDifference())).toBe(99);
	});	
	
	
	//Fase de Elaboracion - assigned
	it("Project Management assigned should be 131.0", function(){
		expect(scope.elabPhase.projectManagementAssigned).toBe(131.0);
	});		
	
	it("Requirements assigned should be 196.6", function(){
		expect(scope.elabPhase.requirementsAssigned).toBe(196.6);
	});
	
	it("Analysis Design assigned should be 393.1", function(){
		expect(scope.elabPhase.analysisDesignAssigned).toBeCloseTo(393.1,1);
	});
	
	it("Implementation assigned should be 142.0", function(){
		expect(scope.elabPhase.implementationAssigned).toBeCloseTo(142.0,1);
	});
	
	it("Tests assigned should be 109.2", function(){
		expect(scope.elabPhase.testsAssigned).toBeCloseTo(109.2,1);
	});
	
	it("Deploy assigned should be 32.8", function(){
		expect(scope.elabPhase.deployAssigned).toBeCloseTo(32.8,1);
	});
	
	it("Enviroment assigned should be 87.4", function(){
		expect(scope.elabPhase.enviromentAssigned).toBeCloseTo(87.4,1);
	});	
	
	it("Total asigned percentaje should be 1092.1", function(){
		expect(scope.elabPhase.totalAssigned()).toBeCloseTo(1092.1,1);
	});		
	
	//Fase de Elaboracion - proposal
	it("Project Management proposal should be 131.0", function(){
		expect(scope.elabPhase.projectManagementProposal()).toBeCloseTo(131.0,1);
	});		
	
	it("Requirements proposal should be 196.6", function(){
		expect(scope.elabPhase.requirementsProposal()).toBeCloseTo(196.6,1);
	});
	
	it("Analysis Design proposal should be 393.1", function(){
		expect(scope.elabPhase.analysisDesignProposal()).toBeCloseTo(393.1,1);
	});
	
	it("Implementation proposal should be 142.0", function(){
		expect(scope.elabPhase.implementationProposal()).toBeCloseTo(142.0,1);
	});
	
	it("Tests proposal should be 109.2", function(){
		expect(scope.elabPhase.testsProposal()).toBeCloseTo(109.2,1);
	});
	
	it("Deploy proposal should be 32.8", function(){
		expect(scope.elabPhase.deployProposal()).toBeCloseTo(32.8,1);
	});
	
	it("Enviroment proposal should be 87.4", function(){
		expect(scope.elabPhase.enviromentProposal()).toBeCloseTo(87.4,1);
	});	
	
	it("Total proposal should be 1092.0", function(){
		expect(scope.elabPhase.totalProposal()).toBeCloseTo(1092.0,1);
	});		
	
	//Fase de Elaboracion - diferencia propuesta
	it("Project Management proposal diff should be 0", function(){
		expect(scope.elabPhase.projectManagementProposalDiff()).toBeCloseTo(0,1);
	});		
	
	it("Requirements proposal diff should be 0", function(){
		expect(scope.elabPhase.requirementsProposalDiff()).toBeCloseTo(0,1);
	});
	
	it("Analysis Design proposal diff should be 0", function(){
		expect(scope.elabPhase.analysisDesignProposalDiff()).toBeCloseTo(0,1);
	});
	
	it("Implementation proposal diff should be 0", function(){
		expect(scope.elabPhase.implementationProposalDiff()).toBeCloseTo(0,1);
	});
	
	it("Tests proposal diff should be 0", function(){
		expect(scope.elabPhase.testsProposalDiff()).toBeCloseTo(0,1);
	});
	
	it("Deploy proposal diff should be 0", function(){
		expect(scope.elabPhase.deployProposalDiff()).toBeCloseTo(0,1);
	});
	
	it("Enviroment proposal diff should be 0", function(){
		expect(scope.elabPhase.enviromentProposalDiff()).toBeCloseTo(0,1);
	});	
	
	it("Total proposal diff should be 0", function(){
		expect(scope.elabPhase.totalProposalDiff()).toBeCloseTo(0.1,1);
	});
	
	it("Henar should has  5023.96€ as cost", function(){
		expect(scope.employeeCost(scope.elaboracionAssignedEmployeeMock.employeeList[7])).toBeCloseTo(5023.96,1);
	});
	
	it("Carlos should has 6151.79€ as cost", function(){
		expect(scope.employeeCost(scope.elaboracionAssignedEmployeeMock.employeeList[2])).toBeCloseTo(6151.79,1);
	});	
	
	it("Beatriz should has  0€ as cost", function(){
		expect(scope.employeeCost(scope.elaboracionAssignedEmployeeMock.employeeList[1])).toBeCloseTo(0,1);
	});
})
