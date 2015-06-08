/**
 * AngularJS resourceController
 */

projectApp.controller("resourceController", ['$scope', '$isTest', 'bridgeService', 'workTimeService', function ($scope, $isTest, bridgeService, workTimeService) {  
	
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
	
	$scope.numberOfEmployees = function(){
		return $scope.assignResourcesBean.employeeList.length;
	}
	
	Array.prototype.contains = function(obj) {
	    var i = this.length;
	    while (i--) {
	        if (this[i] === obj) {
	            return true;
	        }
	    }
	    return false;
	}	
	
	countNumberOfRoles = function(role){
		var result = 0;
		var numberOfRoles = 1;
		for(i=0; i<$scope.numberOfEmployees(); i++){
			if($scope.hasRole($scope.assignResourcesBean.employeeList[i],role)){
				result++;
			}
		}
		return result;
	}
	
	$scope.hasRole = function(employee, role){
		var result = false;
		if(employee.roles.contains(role)){
			result = true;
		}
		return result;
	}
	
	$scope.numberOfProjectManagement = function(){
		var POSITION_OF_ROLE = 0;
		return countNumberOfRoles(arrayRoles[POSITION_OF_ROLE]);
	}
	
	$scope.numberOfRequirements = function(){
		var POSITION_OF_ROLE = 1;
		return countNumberOfRoles(arrayRoles[POSITION_OF_ROLE]);
	}	
	
	$scope.numberOfAnalysisDesign = function(){
		var POSITION_OF_ROLE = 2;
		return countNumberOfRoles(arrayRoles[POSITION_OF_ROLE]);
	}	
	
	$scope.numberOfImplementation = function(){
		var POSITION_OF_ROLE = 3;
		return countNumberOfRoles(arrayRoles[POSITION_OF_ROLE]);
	}	
	
	$scope.numberOfTests = function(){
		var POSITION_OF_ROLE = 4;
		return countNumberOfRoles(arrayRoles[POSITION_OF_ROLE]);
	}	
	
	$scope.numberOfDeploy = function(){
		var POSITION_OF_ROLE = 5;
		return countNumberOfRoles(arrayRoles[POSITION_OF_ROLE]);
	}		
	
	$scope.numberOfEnviroment = function(){
		var POSITION_OF_ROLE = 6;
		return countNumberOfRoles(arrayRoles[POSITION_OF_ROLE]);
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
