/**
 * AngularJS resourceController
 */

projectApp.controller("resourceController", ['$scope', '$isTest', 'bridgeService', 'workTimeService', 'EmployeeUtils', function ($scope, $isTest, bridgeService, workTimeService, EmployeeUtils) {  
	
	$scope.schedule = bridgeService.shareData;
	
	var arrayRoles = ["PROJECT_MANAGEMENT", "REQUIREMENTS", "ANALYSIS_DESIGN", "IMPLEMENTATION", "TESTS", "DEPLOY", "ENVIROMENT_REVISION_CONTROL"];

	if(!$isTest){
		  initJSFScope($scope);
		  workTimeService.calculateWorkDaysAndHour($scope.showTheoricalPhasesBean.project.startString, $scope.showTheoricalPhasesBean.project.endString, $scope.schedule.listHoursEachDay());
	}
	
	//Constantes
	var INICIO_PROJECT_MANAGEMENT_THEORICAL_RELATIVE = 14;
	var INICIO_REQUIREMENTS_THEORICAL_RELATIVE = 38;
	var INICIO_ANALYSIS_DESIGN_THEORICAL_RELATIVE = 19;
	var INICIO_IMPLEMENTATION_THEORICAL_RELATIVE = 8;
	var INICIO_TESTS_THEORICAL_RELATIVE = 8;
	var INICIO_DEPLOY_THEORICAL_RELATIVE = 3;
	var INICIO_ENVIROMENT_THEORICAL_RELATIVE = 10;
	
	var INICIO_PROJECT_MANAGEMENT_THEORICAL_ABSOLUTE = 38.7;
	var INICIO_REQUIREMENTS_THEORICAL_ABSOLUTE = 105.1;
	var INICIO_ANALYSIS_DESIGN_THEORICAL_ABSOLUTE = 52.5;
	var INICIO_IMPLEMENTATION_THEORICAL_ABSOLUTE = 22.1;
	var INICIO_TESTS_THEORICAL_ABSOLUTE = 22.1;
	var INICIO_DEPLOY_THEORICAL_ABSOLUTE = 8.3;
	var INICIO_ENVIROMENT_THEORICAL_ABSOLUTE = 27.7;
	
	//calcula el salario por hora de un empleado
	$scope.employeeSalaryHour = function(employee){
		var annualSalary = EmployeeUtils.totalAnnualSalary(employee);
		var monthlySalary = annualSalary/$scope.schedule.monthsPerYear;
		var dailySalary = monthlySalary/$scope.schedule.workDays;
		return dailySalary/$scope.schedule.hoursPerDay;
	}
	
	//verifica si un empleado tiene un rol
	$scope.employeeHasRole = function(employee, role){
		return EmployeeUtils.hasRole(employee, role);
	}
	
	//cuenta el numero de empleados con rol project management
	$scope.numberOfProjectManagement = function(){
		var POSITION_OF_ROLE = 0;
		return EmployeeUtils.countNumberOfRoles($scope.assignResourcesBean.employeeList,arrayRoles[POSITION_OF_ROLE]);
	}

	//cuenta el numero de empleados con rol requirements
	$scope.numberOfRequirements = function(){
		var POSITION_OF_ROLE = 1;
		return EmployeeUtils.countNumberOfRoles($scope.assignResourcesBean.employeeList, arrayRoles[POSITION_OF_ROLE]);
	}	
	
	//cuenta el numero de empleados con rol analysis
	$scope.numberOfAnalysisDesign = function(){
		var POSITION_OF_ROLE = 2;
		return EmployeeUtils.countNumberOfRoles($scope.assignResourcesBean.employeeList, arrayRoles[POSITION_OF_ROLE]);
	}	
	
	//cuenta el numero de empleados con rol implementation
	$scope.numberOfImplementation = function(){
		var POSITION_OF_ROLE = 3;
		return EmployeeUtils.countNumberOfRoles($scope.assignResourcesBean.employeeList, arrayRoles[POSITION_OF_ROLE]);
	}	
	
	//cuenta el numero de empleados con rol test
	$scope.numberOfTests = function(){
		var POSITION_OF_ROLE = 4;
		return EmployeeUtils.countNumberOfRoles($scope.assignResourcesBean.employeeList, arrayRoles[POSITION_OF_ROLE]);
	}	
	
	//cuenta el numero de empleados con rol deploy
	$scope.numberOfDeploy = function(){
		var POSITION_OF_ROLE = 5;
		return EmployeeUtils.countNumberOfRoles($scope.assignResourcesBean.employeeList, arrayRoles[POSITION_OF_ROLE]);
	}		
	
	//cuenta el numero de empleados con rol enviroment
	$scope.numberOfEnviroment = function(){
		var POSITION_OF_ROLE = 6;
		return EmployeeUtils.countNumberOfRoles($scope.assignResourcesBean.employeeList, arrayRoles[POSITION_OF_ROLE]);
	}	
	
	//Fase de inicio - teorico relativo
	$scope.inicioProjectManagementTheoricalRelative = function(){
		return INICIO_PROJECT_MANAGEMENT_THEORICAL_RELATIVE;
	}	
	
	$scope.inicioRequirementsTheoricalRelative = function(){
		return INICIO_REQUIREMENTS_THEORICAL_RELATIVE;
	}	
	
	$scope.inicioAnalysisDesignTheoricalRelative = function(){
		return INICIO_ANALYSIS_DESIGN_THEORICAL_RELATIVE;
	}
	
	$scope.inicioImplementationTheoricalRelative = function(){
		return INICIO_IMPLEMENTATION_THEORICAL_RELATIVE;
	}	
	
	$scope.inicioTestsTheoricalRelative = function(){
		return INICIO_TESTS_THEORICAL_RELATIVE;
	}	
	
	$scope.inicioDeployTheoricalRelative = function(){
		return INICIO_DEPLOY_THEORICAL_RELATIVE;
	}	
	
	$scope.inicioEnviromentTheoricalRelative = function(){
		return INICIO_ENVIROMENT_THEORICAL_RELATIVE;
	}
	
	//Fase de inicio - teorico absoluto
	$scope.inicioProjectManagementTheoricalAbsolute = function(){
		return INICIO_PROJECT_MANAGEMENT_THEORICAL_ABSOLUTE;
	}	
	
	$scope.inicioRequirementsTheoricalAbsolute = function(){
		return INICIO_REQUIREMENTS_THEORICAL_ABSOLUTE;
	}	
	
	$scope.inicioAnalysisDesignTheoricalAbsolute = function(){
		return INICIO_ANALYSIS_DESIGN_THEORICAL_ABSOLUTE;
	}
	
	$scope.inicioImplementationTheoricalAbsolute = function(){
		return INICIO_IMPLEMENTATION_THEORICAL_ABSOLUTE;
	}	
	
	$scope.inicioTestsTheoricalAbsolute = function(){
		return INICIO_TESTS_THEORICAL_ABSOLUTE;
	}	
	
	$scope.inicioDeployTheoricalAbsolute = function(){
		return INICIO_DEPLOY_THEORICAL_ABSOLUTE;
	}	
	
	$scope.inicioEnviromentTheoricalAbsolute = function(){
		return INICIO_ENVIROMENT_THEORICAL_ABSOLUTE;
	}	
	
}]);