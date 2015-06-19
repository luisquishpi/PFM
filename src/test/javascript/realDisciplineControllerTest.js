/**
 *  Theorical discipline controller test
 */

describe("Test RealDisciplineController", function(){
	
	beforeEach(module("projectApp"));
	
	var scope;
	
	beforeEach(inject(function($controller, $rootScope){
		scope = $rootScope;
		scope.realDisciplineBean = {
				initPhase:{
					projectManagementAssigned:36.4,
					requirementsAssigned:98.8,
					analysisDesignAssigned:49.4,
					implementationAssigned:20.8,
					testsAssigned:20.8,
					deployAssigned:7.8,
					enviromentAssigned:26.0
				},
				elabPhase:{
					projectManagementAssigned:131.0,
					requirementsAssigned:196.6,
					analysisDesignAssigned:393.1,
					implementationAssigned:142.0,
					testsAssigned:109.2,
					deployAssigned:32.8,
					enviromentAssigned:87.4
				},
				constPhase:{
					projectManagementAssigned:364.0,
					requirementsAssigned:291.2,
					analysisDesignAssigned:582.4,
					implementationAssigned:1237.6,
					testsAssigned:873.6,
					deployAssigned:109.2,
					enviromentAssigned:182
				},
				transPhase:{
					projectManagementAssigned:72.8,
					requirementsAssigned:20.8,
					analysisDesignAssigned:20.8,
					implementationAssigned:98.8,
					testsAssigned:124.8,
					deployAssigned:156.0,
					enviromentAssigned:26.0
				},
				hoursPerDay: 8
		}
		
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
		expect(scope.initPhase.ProjectManagmentHour()).toBe(36.4);
	});
	it("Inital hours for requirements should be 98.8", function(){
		expect(scope.initPhase.RequirementsHour()).toBe(98.8);
	});
	
	it("Inital hours for analysis should be 49.4", function(){
		expect(scope.initPhase.AnalysisHour()).toBe(49.4);
	});

	it("Inital hours for implementation should be 20.8", function(){
		expect(scope.initPhase.ImplementationHour()).toBe(20.8);
	});
	
	it("Inital hours for test should be 20.8", function(){
		expect(scope.initPhase.TestsHour()).toBe(20.8);
	});
	
	it("Inital hours for deployment should be 7.8", function(){
		expect(scope.initPhase.DeploymentHour()).toBe(7.8);
	});
	
	it("Inital hours for environment should be 26.0", function(){
		expect(scope.initPhase.VersionHour()).toBe(26.0);
	});
	
	it("Inital total hours should be 260.0", function(){
		expect(scope.initPhase.totalHour()).toBe(260.0);
	});
	//Fase de Elaboracion

	it("Elaboration hours for project management should be 131.0", function(){
		expect(scope.elabPhase.ProjectManagmentHour()).toBe(131.0);
	});
	it("Elaboration hours for requirements should be 196.6", function(){
		expect(scope.elabPhase.RequirementsHour()).toBe(196.6);
	});
	
	it("Elaboration hours for analysis should be 393.1", function(){
		expect(scope.elabPhase.AnalysisHour()).toBe(393.1);
	});

	it("Elaboration hours for implementation should be 142.0", function(){
		expect(scope.elabPhase.ImplementationHour()).toBe(142.0);
	});
	
	it("Elaboration hours for test should be 109.2", function(){
		expect(scope.elabPhase.TestsHour()).toBe(109.2);
	});
	
	it("Elaboration hours for deployment should be 32.8", function(){
		expect(scope.elabPhase.DeploymentHour()).toBe(32.8);
	});
	
	it("Elaboration hours for environment should be 87.4", function(){
		expect(scope.elabPhase.VersionHour()).toBe(87.4);
	});
	
	it("Elaboration total hours should be 1092.1000000000001", function(){
		expect(scope.elabPhase.totalHour()).toBe(1092.1000000000001);
	});
	//Fase de Construccion

	it("Construction hours for project management should be 364.0", function(){
		expect(scope.constPhase.ProjectManagmentHour()).toBe(364.0);
	});
	it("Construction hours for requirements should be 291.2", function(){
		expect(scope.constPhase.RequirementsHour()).toBe(291.2);
	});
	
	it("Construction hours for analysis should be 582.4", function(){
		expect(scope.constPhase.AnalysisHour()).toBe(582.4);
	});

	it("Construction hours for implementation should be 1237.6", function(){
		expect(scope.constPhase.ImplementationHour()).toBe(1237.6);
	});
	
	it("Construction hours for test should be 873.6", function(){
		expect(scope.constPhase.TestsHour()).toBe(873.6);
	});
	
	it("Construction hours for deployment should be 109.2", function(){
		expect(scope.constPhase.DeploymentHour()).toBe(109.2);
	});
	
	it("Construction hours for environment should be 182.0", function(){
		expect(scope.constPhase.VersionHour()).toBe(182.0);
	});
	
	it("Construction total hours should be 3639.9999999999995", function(){
		expect(scope.constPhase.totalHour()).toBe(3639.9999999999995);
	});
	//Fase de Transición

	it("Transition hours for project management should be 72.8", function(){
		expect(scope.transPhase.ProjectManagmentHour()).toBe(72.8);
	});
	it("Transition hours for requirements should be 20.8", function(){
		expect(scope.transPhase.RequirementsHour()).toBe(20.8);
	});
	
	it("Transition hours for analysis should be 20.8", function(){
		expect(scope.transPhase.AnalysisHour()).toBe(20.8);
	});

	it("Transition hours for implementation should be 98.8", function(){
		expect(scope.transPhase.ImplementationHour()).toBe(98.8);
	});
	
	it("Transition hours for test should be 124.8", function(){
		expect(scope.transPhase.TestsHour()).toBe(124.8);
	});
	
	it("Transition hours for deployment should be 156.0", function(){
		expect(scope.transPhase.DeploymentHour()).toBe(156.0);
	});
	
	it("Transition hours for environment should be 26.0", function(){
		expect(scope.transPhase.VersionHour()).toBe(26.0);
	});
	
	it("Transition total hours should be 520.0", function(){
		expect(scope.transPhase.totalHour()).toBe(520.0);
	});
	
	//Persona Hora total proyecto
	//Proyecto
	it("Proyect total hour for project management should be 604.1999999999999", function(){
		expect(scope.totalProjectManagementHour()).toBe(604.1999999999999);
	});
	
	it("Proyect total hour for requirements should be 607.3999999999999", function(){
		expect(scope.totalRequirementsHour()).toBe(607.3999999999999);
	});
	
	it("Proyect total hour for analysis should be 1045.7", function(){
		expect(scope.totalAnalysisHour()).toBe(1045.7);
	});

	it("Proyect total hour for implementation should be 1499.1999999999998", function(){
		expect(scope.totalImplementationHour()).toBe(1499.1999999999998);
	});
	
	it("Proyect total hour for test should be 1128.4", function(){
		expect(scope.totalTestsHour()).toBe(1128.4);
	});
	
	it("Proyect total hour for deployment should be 305.8", function(){
		expect(scope.totalDeploymentHour()).toBe(305.8);
	});
	
	it("Proyect total hour for environment should be 321.4", function(){
		expect(scope.totalVersionHour()).toBe(321.4);
	});
	
	it("Proyect total hour Days should be 5512.099999999999", function(){
		expect(scope.totalTotalHour()).toBe(5512.099999999999);
	});
		
	/************************Distribución******************************/
	//Fase de Inicio
	it("Initial Distribution for project management should be 13.999999999999998", function(){
		expect(scope.initPhase.projectManagementDistribution()).toBe(13.999999999999998);
	});
	
	it("Initial Distribution for requirements should be 38", function(){
		expect(scope.initPhase.RequirementsDistribution()).toBe(38);
	});
	
	it("Initial Distribution for analysis should be 19", function(){
		expect(scope.initPhase.AnalysisDistribution()).toBe(19);
	});

	it("Initial Distribution for implementation should be 8", function(){
		expect(scope.initPhase.ImplementationDistribution()).toBe(8);
	});
	
	it("Initial Distribution for test should be 8", function(){
		expect(scope.initPhase.TestsDistribution()).toBe(8);
	});
	
	it("Initial Distribution for deployment should be 3", function(){
		expect(scope.initPhase.DeployDistribution()).toBe(3);
	});
	
	it("Initial Distribution for environment should be 10", function(){
		expect(scope.initPhase.VersionDistribution()).toBe(10);
	});
	
	it("Initial Distribution Days should be 100", function(){
		expect(scope.initPhase.totalDistribution()).toBe(100);
	});
	//Fase de Elaboracion
	it("Elaboration Distribution for project management should be 11.99523853127003", function(){
		expect(scope.elabPhase.projectManagementDistribution()).toBe(11.99523853127003);
	});
	
	it("Elaboration Distribution for requirements should be 18.002014467539603", function(){
		expect(scope.elabPhase.RequirementsDistribution()).toBe(18.002014467539603);
	});
	
	it("Elaboration Distribution for analysis should be 35.994872264444645", function(){
		expect(scope.elabPhase.AnalysisDistribution()).toBe(35.994872264444645);
	});

	it("Elaboration Distribution for implementation should be 13.00247230107133", function(){
		expect(scope.elabPhase.ImplementationDistribution()).toBe(13.00247230107133);
	});
	
	it("Elaboration Distribution for test should be 9.999084332936544", function(){
		expect(scope.elabPhase.TestsDistribution()).toBe(9.999084332936544);
	});
	
	it("Elaboration Distribution for deployment should be 3.0033879681347857", function(){
		expect(scope.elabPhase.DeployDistribution()).toBe(3.0033879681347857);
	});
	
	it("Elaboration Distribution for environment should be 8.002930134603057", function(){
		expect(scope.elabPhase.VersionDistribution()).toBe(8.002930134603057);
	});
	
	it("Elaboration Distribution Days should be 100.00000000000001", function(){
		expect(scope.elabPhase.totalDistribution()).toBe(100.00000000000001);
	});
	//Fase de Construcción
	it("Construction Distribution for project management should be 10.000000000000002", function(){
		expect(scope.constPhase.projectManagementDistribution()).toBe(10.000000000000002);
	});
	
	it("Construction Distribution for requirements should be 8", function(){
		expect(scope.constPhase.RequirementsDistribution()).toBe(8);
	});
	
	it("Construction Distribution for analysis should be 16", function(){
		expect(scope.constPhase.AnalysisDistribution()).toBe(16);
	});

	it("Construction Distribution for implementation should be 34", function(){
		expect(scope.constPhase.ImplementationDistribution()).toBe(34);
	});
	
	it("Construction Distribution for test should be 24.000000000000004", function(){
		expect(scope.constPhase.TestsDistribution()).toBe(24.000000000000004);
	});
	
	it("Construction Distribution for deployment should be 3.0000000000000004", function(){
		expect(scope.constPhase.DeployDistribution()).toBe(3.0000000000000004);
	});
	
	it("Construction Distribution for environment should be 5.000000000000001", function(){
		expect(scope.constPhase.VersionDistribution()).toBe(5.000000000000001);
	});
	
	it("Construction Distribution Days should be 100", function(){
		expect(scope.constPhase.totalDistribution()).toBe(100);
	});
	//Fase de Transición
	it("Transition Distribution for project management should be 13.999999999999998", function(){
		expect(scope.transPhase.projectManagementDistribution()).toBe(13.999999999999998);
	});
	
	it("Transition Distribution for requirements should be 4", function(){
		expect(scope.transPhase.RequirementsDistribution()).toBe(4);
	});
	
	it("Transition Distribution for analysis should be 4", function(){
		expect(scope.transPhase.AnalysisDistribution()).toBe(4);
	});

	it("Transition Distribution for implementation should be 19", function(){
		expect(scope.transPhase.ImplementationDistribution()).toBe(19);
	});
	
	it("Transition Distribution for test should be 24", function(){
		expect(scope.transPhase.TestsDistribution()).toBe(24);
	});
	
	it("Transition Distribution for deployment should be 30", function(){
		expect(scope.transPhase.DeployDistribution()).toBe(30);
	});
	
	it("Transition Distribution for environment should be 5", function(){
		expect(scope.transPhase.VersionDistribution()).toBe(5);
	});
	
	it("Transition Distribution Days should be 100", function(){
		expect(scope.transPhase.totalDistribution()).toBe(100);
	});
	
	//Persona Hora total proyecto
	//Proyecto
	it("Proyect distribution for project management should be 10.961339598338201", function(){
		expect(scope.totalProjectManagementDistribution()).toBe(10.961339598338201);
	});
	
	it("Proyect distribution for requirements should be 11.019393697501858", function(){
		expect(scope.totalRequirementsDistribution()).toBe(11.019393697501858);
	});
	
	it("Proyect distribution for analysis should be 18.970991092324162", function(){
		expect(scope.totalAnalysisDistribution()).toBe(18.970991092324162);
	});

	it("Proyect distribution for implementation should be 27.198345458173833", function(){
		expect(scope.totalImplementationDistribution()).toBe(27.198345458173833);
	});
	
	it("Proyect distribution for test should be 20.471326717584954", function(){
		expect(scope.totalTestsDistribution()).toBe(20.471326717584954);
	});
	
	it("Proyect distribution for deployment should be 5.547794851327081", function(){
		expect(scope.totalDeploymentDistribution()).toBe(5.547794851327081);
	});
	
	it("Proyect distribution for environment should be 5.8308085847499145", function(){
		expect(scope.totalVersionDistribution()).toBe(5.8308085847499145);
	});
	
	it("Proyect distribution Days should be 100", function(){
		expect(scope.totalTotalDistribution()).toBe(100);
	});
	
	//Persona dia
	//Fase inicio
	it("Initial total day for project management should be 4.55", function(){
		expect(scope.initPhase.ProjectManagmentDay()).toBe(4.55);
	});
	it("Initial total day for requierements should be 12.35", function(){
		expect(scope.initPhase.RequirementsDay()).toBe(12.35);
	});
	it("Initial total day for analysis should be 6.175", function(){
		expect(scope.initPhase.AnalysisDay()).toBe(6.175);
	});
	it("Initial total day for implementation should be 2.6", function(){
		expect(scope.initPhase.ImplementationDay()).toBe(2.6);
	});
	it("Initial total day for tests should be 2.6", function(){
		expect(scope.initPhase.TestsDay()).toBe(2.6);
	});
	it("Initial total day for deployment should be 0.975", function(){
		expect(scope.initPhase.DeploymentDay()).toBe(0.975);
	});
	it("Initial total day for version should be 3.25", function(){
		expect(scope.initPhase.VersionDay()).toBe(3.25);
	});
	it("Initial total day for total should be 32.5", function(){
		expect(scope.initPhase.totalDay()).toBe(32.5);
	});
	
	//Fase elaboracion
	it("Elaboration total day for project management should be 16.375", function(){
		expect(scope.elabPhase.ProjectManagmentDay()).toBe(16.375);
	});
	it("Elaboration total day for requierements should be 24.575", function(){
		expect(scope.elabPhase.RequirementsDay()).toBe(24.575);
	});
	it("Elaboration total day for analysis should be 49.1375", function(){
		expect(scope.elabPhase.AnalysisDay()).toBe(49.1375);
	});
	it("Elaboration total day for implementation should be 17.75", function(){
		expect(scope.elabPhase.ImplementationDay()).toBe(17.75);
	});
	it("Elaboration total day for tests should be 13.65", function(){
		expect(scope.elabPhase.TestsDay()).toBe(13.65);
	});
	it("Elaboration total day for deployment should be 4.1", function(){
		expect(scope.elabPhase.DeploymentDay()).toBe(4.1);
	});
	it("Elaboration total day for version should be 10.925", function(){
		expect(scope.elabPhase.VersionDay()).toBe(10.925);
	});
	it("Elaboration total day for total should be 136.51250000000002", function(){
		expect(scope.elabPhase.totalDay()).toBe(136.51250000000002);
	});
});
