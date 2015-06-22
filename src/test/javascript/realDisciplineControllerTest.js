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
				hoursPerDay: 8,
				workDaysPerMonth: 21
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
	
	//Fase construcción
	it("Construction total day for project management should be 45.5", function(){
		expect(scope.constPhase.ProjectManagmentDay()).toBe(45.5);
	});
	it("Construction total day for requierements should be 36.4", function(){
		expect(scope.constPhase.RequirementsDay()).toBe(36.4);
	});
	it("Construction total day for analysis should be 72.8", function(){
		expect(scope.constPhase.AnalysisDay()).toBe(72.8);
	});
	it("Construction total day for implementation should be 154.7", function(){
		expect(scope.constPhase.ImplementationDay()).toBe(154.7);
	});
	it("Construction total day for tests should be 109.2", function(){
		expect(scope.constPhase.TestsDay()).toBe(109.2);
	});
	it("Construction total day for deployment should be 13.65", function(){
		expect(scope.constPhase.DeploymentDay()).toBe(13.65);
	});
	it("Construction total day for version should be 22.75", function(){
		expect(scope.constPhase.VersionDay()).toBe(22.75);
	});
	it("Construction total day for total should be 454.99999999999994", function(){
		expect(scope.constPhase.totalDay()).toBe(454.99999999999994);
	});
	
	//Fase transición
	it("Transition total day for project management should be 9.1", function(){
		expect(scope.transPhase.ProjectManagmentDay()).toBe(9.1);
	});
	it("Transition total day for requierements should be 2.6", function(){
		expect(scope.transPhase.RequirementsDay()).toBe(2.6);
	});
	it("Transition total day for analysis should be 2.6", function(){
		expect(scope.transPhase.AnalysisDay()).toBe(2.6);
	});
	it("Transition total day for implementation should be 12.35", function(){
		expect(scope.transPhase.ImplementationDay()).toBe(12.35);
	});
	it("Transition total day for tests should be 15.6", function(){
		expect(scope.transPhase.TestsDay()).toBe(15.6);
	});
	it("Transition total day for deployment should be 19.5", function(){
		expect(scope.transPhase.DeploymentDay()).toBe(19.5);
	});
	it("Transition total day for version should be 3.25", function(){
		expect(scope.transPhase.VersionDay()).toBe(3.25);
	});
	it("Transition total day for total should be 65.0", function(){
		expect(scope.transPhase.totalDay()).toBe(65.0);
	});
	
	//Fase Proyecto
	it("Proyect total day for project management should be 75.52499999999999", function(){
		expect(scope.totalProjectManagementDay()).toBe(75.52499999999999);
	});
	it("Proyect total day for requierements should be 75.92499999999998", function(){
		expect(scope.totalRequirementsDay()).toBe(75.92499999999998);
	});
	it("Proyect total day for analysis should be 130.7125", function(){
		expect(scope.totalAnalysisDay()).toBe(130.7125);
	});
	it("Proyect total day for implementation should be 187.39999999999998", function(){
		expect(scope.totalImplementationDay()).toBe(187.39999999999998);
	});
	it("Proyect total day for tests should be 141.05", function(){
		expect(scope.totalTestsDay()).toBe(141.05);
	});
	it("Proyect total day for deployment should be 38.225", function(){
		expect(scope.totalDeploymentDay()).toBe(38.225);
	});
	it("Proyect total day for version should be 40.175", function(){
		expect(scope.totalVersionDay()).toBe(40.175);
	});
	it("Proyect total day for total should be 689.0124999999999", function(){
		expect(scope.totalTotalDay()).toBe(689.0124999999999);
	});
	
	//Persona mes
	//Fase inicio
	it("Initial total month for project management should be 0.21666666666666665", function(){
		expect(scope.initPhase.ProjectManagmentMonth()).toBe(0.21666666666666665);
	});
	it("Initial total month for requierements should be 0.5880952380952381", function(){
		expect(scope.initPhase.RequirementsMonth()).toBe(0.5880952380952381);
	});
	it("Initial total month for analysis should be 0.29404761904761906", function(){
		expect(scope.initPhase.AnalysisMonth()).toBe(0.29404761904761906);
	});
	it("Initial total month for implementation should be 0.12380952380952381", function(){
		expect(scope.initPhase.ImplementationMonth()).toBe(0.12380952380952381);
	});
	it("Initial total month for tests should be 0.12380952380952381", function(){
		expect(scope.initPhase.TestsMonth()).toBe(0.12380952380952381);
	});
	it("Initial total month for deployment should be 0.04642857142857143", function(){
		expect(scope.initPhase.DeploymentMonth()).toBe(0.04642857142857143);
	});
	it("Initial total month for version should be 0.15476190476190477", function(){
		expect(scope.initPhase.VersionMonth()).toBe(0.15476190476190477);
	});
	it("Initial total month for total should be 1.5476190476190477", function(){
		expect(scope.initPhase.totalMonth()).toBe(1.5476190476190477);
	});

	//Fase elaboracion
	it("Elaboration total month for project management should be 0.7797619047619048", function(){
		expect(scope.elabPhase.ProjectManagmentMonth()).toBe(0.7797619047619048);
	});
	it("Elaboration total month for requierements should be 1.1702380952380953", function(){
		expect(scope.elabPhase.RequirementsMonth()).toBe(1.1702380952380953);
	});
	it("Elaboration total month for analysis should be 2.3398809523809527", function(){
		expect(scope.elabPhase.AnalysisMonth()).toBe(2.3398809523809527);
	});
	it("Elaboration total month for implementation should be 0.8452380952380952", function(){
		expect(scope.elabPhase.ImplementationMonth()).toBe(0.8452380952380952);
	});
	it("Elaboration total month for tests should be 0.65", function(){
		expect(scope.elabPhase.TestsMonth()).toBe(0.65);
	});
	it("Elaboration total month for deployment should be 0.1952380952380952", function(){
		expect(scope.elabPhase.DeploymentMonth()).toBe(0.1952380952380952);
	});
	it("Elaboration total month for version should be 0.5202380952380953", function(){
		expect(scope.elabPhase.VersionMonth()).toBe(0.5202380952380953);
	});
	it("Elaboration total month for total should be 6.500595238095239", function(){
		expect(scope.elabPhase.totalMonth()).toBe(6.500595238095239);
	});

	//Fase construcción
	it("Construction total month for project management should be 2.1666666666666665", function(){
		expect(scope.constPhase.ProjectManagmentMonth()).toBe(2.1666666666666665);
	});
	it("Construction total month for requierements should be 1.7333333333333332", function(){
		expect(scope.constPhase.RequirementsMonth()).toBe(1.7333333333333332);
	});
	it("Construction total month for analysis should be 3.4666666666666663", function(){
		expect(scope.constPhase.AnalysisMonth()).toBe(3.4666666666666663);
	});
	it("Construction total month for implementation should be 7.366666666666666", function(){
		expect(scope.constPhase.ImplementationMonth()).toBe(7.366666666666666);
	});
	it("Construction total month for tests should be 5.20", function(){
		expect(scope.constPhase.TestsMonth()).toBe(5.20);
	});
	it("Construction total month for deployment should be 0.65", function(){
		expect(scope.constPhase.DeploymentMonth()).toBe(0.65);
	});
	it("Construction total month for version should be 1.0833333333333333", function(){
		expect(scope.constPhase.VersionMonth()).toBe(1.0833333333333333);
	});
	it("Construction total month for total should be 21.666666666666664", function(){
		expect(scope.constPhase.totalMonth()).toBe(21.666666666666664);
	});
	
	//Fase transición
	it("Transition total month for project management should be 0.4333333333333333", function(){
		expect(scope.transPhase.ProjectManagmentMonth()).toBe(0.4333333333333333);
	});
	it("Transition total month for requierements should be 0.12380952380952381", function(){
		expect(scope.transPhase.RequirementsMonth()).toBe(0.12380952380952381);
	});
	it("Transition total month for analysis should be 0.12380952380952381", function(){
		expect(scope.transPhase.AnalysisMonth()).toBe(0.12380952380952381);
	});
	it("Transition total month for implementation should be 0.5880952380952381", function(){
		expect(scope.transPhase.ImplementationMonth()).toBe(0.5880952380952381);
	});
	it("Transition total month for tests should be 0.7428571428571429", function(){
		expect(scope.transPhase.TestsMonth()).toBe(0.7428571428571429);
	});
	it("Transition total month for deployment should be 0.9285714285714286", function(){
		expect(scope.transPhase.DeploymentMonth()).toBe(0.9285714285714286);
	});
	it("Transition total month for version should be 0.15476190476190477", function(){
		expect(scope.transPhase.VersionMonth()).toBe(0.15476190476190477);
	});
	it("Transition total month for total should be 3.0952380952380953", function(){
		expect(scope.transPhase.totalMonth()).toBe(3.0952380952380953);
	});
		
	//Fase proyecto
	it("Proyect total month for project management should be 3.596428571428571", function(){
		expect(scope.totalProjectManagementMonth()).toBe(3.596428571428571);
	});
	it("Proyect total month for requierements should be 3.61547619047619", function(){
		expect(scope.totalRequirementsMonth()).toBe(3.61547619047619);
	});
	it("Proyect total month for analysis should be 6.224404761904761", function(){
		expect(scope.totalAnalysisMonth()).toBe(6.224404761904761);
	});
	it("Proyect total month for implementation should be 8.923809523809524", function(){
		expect(scope.totalImplementationMonth()).toBe(8.923809523809524);
	});
	it("Proyect total month for tests should be 6.716666666666667", function(){
		expect(scope.totalTestsMonth()).toBe(6.716666666666667);
	});
	it("Proyect total month for deployment should be 1.8202380952380952", function(){
		expect(scope.totalDeploymentMonth()).toBe(1.8202380952380952);
	});
	it("Proyect total month for version should be 1.913095238095238", function(){
		expect(scope.totalVersionMonth()).toBe(1.913095238095238);
	});
	it("Proyect total month for total should be 32.81011904761905", function(){
		expect(scope.totalTotalMonth()).toBe(32.81011904761905);
	});
	
});
