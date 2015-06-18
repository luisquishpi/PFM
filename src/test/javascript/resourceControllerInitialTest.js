describe("Test ResourceController Initial Phase", function(){
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
		scope.phaseTest = "INIT";
		scope.inicioNumberOfAssignedPeopleMock = 2.5; 
		scope.inicioAssignedEmployeeMock ={
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
						"projectManagementHours":36.4,
						"requirementsHours":67.6,
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
						"requirementsHours":31.2,
						"analysisDesignHours":49.4,
						"implementationHours":20.8,
						"testsHours":2.6,
						"deployHours":0,
						"environmentHours":0,},	
					{"employee":{"id":9, "name":"Ismael", "surname":"Miranda", "employeeCode":"009", "annualGrossSalary":24000.00, 
						"roles":["ANALYSIS_DESIGN", "IMPLEMENTATION", "TESTS", "DEPLOY", "ENVIROMENT_REVISION_CONTROL" ],
						"contract":{insurance: 32.5}}, 
						"projectManagementHours":0,
						"requirementsHours":0,
						"analysisDesignHours":0,
						"implementationHours":0,
						"testsHours":18.2,
						"deployHours":7.8,
						"environmentHours":26,},	
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
						"analysisDesignHours":0,
						"implementationHours":0,
						"testsHours":0,
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
	
	//fase de inicio horas disponibles
	it("Average available hours should has 104", function(){
		expect(scope.initPhase.averageEmployeeHours()).toBe(104);
	});
	
	it("Anibal should has 104 available hours", function(){
		expect(scope.initPhase.availableEmployeeHours(scope.resourcesBean.employeeList[0])).toBe(104);
	});
	
	//Fase de inicio - teorico relativo
	it("Project Management relative theorical percentaje should be 14", function(){
		expect(scope.initPhase.projectManagementTheoricalRelative).toBe(14);
	});		
	
	it("Requirements relative theorical percentaje should be 38", function(){
		expect(scope.initPhase.requirementsTheoricalRelative).toBe(38);
	});
	
	it("Analysis Design relative theorical percentaje should be 19", function(){
		expect(scope.initPhase.analysisDesignTheoricalRelative).toBe(19);
	});
	
	it("Implementation relative theorical percentaje should be 8", function(){
		expect(scope.initPhase.implementationTheoricalRelative).toBe(8);
	});
	
	it("Tests relative theorical percentaje should be 8", function(){
		expect(scope.initPhase.testsTheoricalRelative).toBe(8);
	});
	
	it("Deploy relative theorical percentaje should be 3", function(){
		expect(scope.initPhase.deployTheoricalRelative).toBe(3);
	});
	
	it("Enviroment relative theorical percentaje should be 10", function(){
		expect(scope.initPhase.enviromentTheoricalRelative).toBe(10);
	});
	
	it("Total relative theorical percentaje should be 100", function(){
		expect(scope.initPhase.totalTheoricalRelative()).toBe(100);
	});
	
	//Fase de inicio - teorico absoluto
	it("Project Management theorical absolute percentaje should be 38.7", function(){
		expect(scope.initPhase.projectManagementTheoricalAbsolute).toBe(38.7);
	});		
	
	it("Requirements theorical absolute should be 105.1", function(){
		expect(scope.initPhase.requirementsTheoricalAbsolute).toBe(105.1);
	});
	
	it("Analysis Design theorical absolute should be 52.5", function(){
		expect(scope.initPhase.analysisDesignTheoricalAbsolute).toBe(52.5);
	});
	
	it("Implementation theorical absolute should be 22.1", function(){
		expect(scope.initPhase.implementationTheoricalAbsolute).toBe(22.1);
	});
	
	it("Tests theorical absolute should be 22.1", function(){
		expect(scope.initPhase.testsTheoricalAbsolute).toBe(22.1);
	});
	
	it("Deploy theorical absolute percentaje should be 8.3", function(){
		expect(scope.initPhase.deployTheoricalAbsolute).toBe(8.3);
	});
	
	it("Enviroment theorical absolute percentaje should be 27.7", function(){
		expect(scope.initPhase.enviromentTheoricalAbsolute).toBe(27.7);
	});	
	
	it("Total absolute theorical percentaje should be 276.5", function(){
		expect(scope.initPhase.totalTheoricalAbsolute()).toBeCloseTo(276.5,1);
	});
	
	//Fase de inicio - diferencia absoluta
	it("Project Management absolute difference should be -2.3", function(){
		expect(scope.initPhase.projectManagementAbsoluteDifference()).toBeCloseTo(-2.3,1);
	});		
	
	it("Requirements absolute difference should be -6.3", function(){
		expect(scope.initPhase.requirementsAbsoluteDifference()).toBeCloseTo(-6.3,1);
	});
	
	it("Analysis Design absolute difference should be -3.1", function(){
		expect(scope.initPhase.analysisDesignAbsoluteDifference()).toBeCloseTo(-3.1,1);
	});
	
	it("Implementation absolute difference should be -1.3", function(){
		expect(scope.initPhase.implementationAbsoluteDifference()).toBeCloseTo(-1.3,1);
	});
	
	it("Tests absolute difference should be -1.3", function(){
		expect(scope.initPhase.testsAbsoluteDifference()).toBeCloseTo(-1.3,1);
	});
	
	it("Deploy absolute difference should be -0.5", function(){
		expect(scope.initPhase.deployAbsoluteDifference()).toBeCloseTo(-0.5,1);
	});
	
	it("Enviroment absolute difference should be -1.7", function(){
		expect(scope.initPhase.enviromentAbsoluteDifference()).toBeCloseTo(-1.7,1);
	});	
	
	it("Total absolute percentaje should be -16.5", function(){
		expect(scope.initPhase.totalAbsoluteDifference()).toBeCloseTo(-16.5,1);
	});		

	
	//Fase de inicio - diferencia relativas
	it("Project Management relative difference should be 94", function(){
		expect(Math.round(scope.initPhase.projectManagementRelativeDifference())).toBe(94);
	});		
	
	it("Requirements relative difference should be 94", function(){
		expect(Math.round(scope.initPhase.requirementsRelativeDifference())).toBe(94);
	});
	
	it("Analysis Design relative difference should be 94", function(){
		expect(Math.round(scope.initPhase.analysisDesignRelativeDifference())).toBe(94);
	});
	
	it("Implementation relative difference should be 94", function(){
		expect(Math.round(scope.initPhase.implementationRelativeDifference())).toBe(94);
	});
	
	it("Tests relative difference should be 94", function(){
		expect(Math.round(scope.initPhase.testsRelativeDifference())).toBe(94);
	});
	
	it("Deploy relative difference should be 94", function(){
		expect(Math.round(scope.initPhase.deployRelativeDifference())).toBe(94);
	});
	
	it("Enviroment relative difference should be 94", function(){
		expect(Math.round(scope.initPhase.enviromentRelativeDifference())).toBe(94);
	});	
	
	it("Total absolute theorical percentaje should be 94", function(){
		expect(Math.round(scope.initPhase.totalRelativeDifference())).toBe(94);
	});	
	
	
	//Fase de inicio - assigned
	it("Project Management assigned should be 36.4", function(){
		expect(scope.initPhase.projectManagementAssigned).toBe(36.4);
	});		
	
	it("Requirements assigned should be 98.8", function(){
		expect(scope.initPhase.requirementsAssigned).toBe(98.8);
	});
	
	it("Analysis Design assigned should be 49.4", function(){
		expect(scope.initPhase.analysisDesignAssigned).toBe(49.4);
	});
	
	it("Implementation assigned should be 20.8", function(){
		expect(scope.initPhase.implementationAssigned).toBe(20.8);
	});
	
	it("Tests assigned should be 20.8", function(){
		expect(scope.initPhase.testsAssigned).toBe(20.8);
	});
	
	it("Deploy assigned should be 7.8", function(){
		expect(scope.initPhase.deployAssigned).toBe(7.8);
	});
	
	it("Enviroment assigned should be 26", function(){
		expect(scope.initPhase.enviromentAssigned).toBe(26);
	});	
	
	it("Total asigned percentaje should be 260", function(){
		expect(scope.initPhase.totalAssigned()).toBe(260);
	});		
	
	//Fase de inicio - proposal
	it("Project Management proposal should be 36.4", function(){
		expect(scope.initPhase.projectManagementProposal()).toBeCloseTo(36.4,1);
	});		
	
	it("Requirements proposal should be 98.8", function(){
		expect(scope.initPhase.requirementsProposal()).toBeCloseTo(98.8,1);
	});
	
	it("Analysis Design proposal should be 49.4", function(){
		expect(scope.initPhase.analysisDesignProposal()).toBeCloseTo(49.4,1);
	});
	
	it("Implementation proposal should be 20.8", function(){
		expect(scope.initPhase.implementationProposal()).toBeCloseTo(20.8,1);
	});
	
	it("Tests proposal should be 20.8", function(){
		expect(scope.initPhase.testsProposal()).toBeCloseTo(20.8,1);
	});
	
	it("Deploy proposal should be 7.8", function(){
		expect(scope.initPhase.deployProposal()).toBeCloseTo(7.8,1);
	});
	
	it("Enviroment proposal should be 26.0", function(){
		expect(scope.initPhase.enviromentProposal()).toBeCloseTo(26.0,1);
	});	
	
	it("Total proposal should be 260.0", function(){
		expect(scope.initPhase.totalProposal()).toBeCloseTo(260.0,1);
	});		
	
	//Fase de inicio - diferencia propuesta
	it("Project Management proposal diff should be 0", function(){
		expect(scope.initPhase.projectManagementProposalDiff()).toBeCloseTo(0,1);
	});		
	
	it("Requirements proposal diff should be 0", function(){
		expect(scope.initPhase.requirementsProposalDiff()).toBeCloseTo(0,1);
	});
	
	it("Analysis Design proposal diff should be 0", function(){
		expect(scope.initPhase.analysisDesignProposalDiff()).toBeCloseTo(0,1);
	});
	
	it("Implementation proposal diff should be 0", function(){
		expect(scope.initPhase.implementationProposalDiff()).toBeCloseTo(0,1);
	});
	
	it("Tests proposal diff should be 0", function(){
		expect(scope.initPhase.testsProposalDiff()).toBeCloseTo(0,1);
	});
	
	it("Deploy proposal diff should be 0", function(){
		expect(scope.initPhase.deployProposalDiff()).toBeCloseTo(0,1);
	});
	
	it("Enviroment proposal diff should be 0", function(){
		expect(scope.initPhase.enviromentProposalDiff()).toBeCloseTo(0,1);
	});	
	
	it("Total proposal diff should be 0", function(){
		expect(scope.initPhase.totalProposalDiff()).toBeCloseTo(0,1);
	});
	
	it("Henar should has  1674.65€ as cost", function(){
		expect(scope.employeeCost(scope.inicioAssignedEmployeeMock.employeeList[7])).toBeCloseTo(1674.65,1);
	});
	
	it("Carlos should has 2050.60€ as cost", function(){
		expect(scope.employeeCost(scope.inicioAssignedEmployeeMock.employeeList[2])).toBeCloseTo(2050.60,1);
	});	
	
	it("Beatriz should has  0€ as cost", function(){
		expect(scope.employeeCost(scope.inicioAssignedEmployeeMock.employeeList[1])).toBeCloseTo(0,1);
	});
})
