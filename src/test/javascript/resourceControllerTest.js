describe("Test ResourceController", function(){
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
					transitionVersionHour: function(){return 27.7;},						
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
		expect(scope.employeeSalaryHour(scope.resourcesBean.employeeList[0])).toBeCloseTo(26.62,1);
	});
	
	it("Ernesto Daily Salary should be 19.84 ", function(){
		expect(scope.employeeSalaryHour(scope.resourcesBean.employeeList[4])).toBeCloseTo(19.84,1);
	});	
	
	it("Kiko Daily Salary should be 9.11", function(){
		expect(scope.employeeSalaryHour(scope.resourcesBean.employeeList[10])).toBeCloseTo(9.11,1);
	});	
	
	//roles
	it("Anibal should has PROJECT_MANAGEMENT role", function(){
		expect(scope.employeeHasRole(scope.resourcesBean.employeeList[0],"PROJECT_MANAGEMENT")).toBe(true);
	});
	
	it("Ursula should not has PROJECT_MANAGEMENT role", function(){
		expect(scope.employeeHasRole(scope.resourcesBean.employeeList[19],"PROJECT_MANAGEMENT")).toBe(false);
	});	
	

})
