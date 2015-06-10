/**
 * AngularJS resourceController
 */

projectApp.controller("resourceController", ['$scope', '$isTest', 'bridgeService', 'workTimeService', 'EmployeeUtils', function ($scope, $isTest, bridgeService, workTimeService, EmployeeUtils) {  
	
	$scope.discipline = bridgeService.shareData;
	
	var arrayRoles = ["PROJECT_MANAGEMENT", "REQUIREMENTS", "ANALYSIS_DESIGN", "IMPLEMENTATION", "TESTS", "DEPLOY", "ENVIROMENT_REVISION_CONTROL"];

	if(!$isTest){
		  initJSFScope($scope);
		  workTimeService.calculateWorkDaysAndHour($scope.resourcesBean.project.startString, 
				  $scope.resourcesBean.project.endString, $scope.discipline.phases.schedule.listHoursEachDay());
	}
	
	//constantes
	var NUMBER_OF_ASIGNED_PEOPLE = 2.5;
	
	//calcula el salario por hora de un empleado
	$scope.employeeSalaryHour = function(employee){
		var annualSalary = EmployeeUtils.totalAnnualSalary(employee);
		var monthlySalary = annualSalary/$scope.discipline.phases.schedule.monthsPerYear;
		var dailySalary = monthlySalary/$scope.discipline.phases.schedule.workDays;
		return dailySalary/$scope.discipline.phases.schedule.hoursPerDay;
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
	
	//calcula el numero de personas propuestas
	$scope.numberOfProposalsPeople = function(){
		return 2.7;
	}
	
	//Fase de inicio - teorico relativo
	$scope.inicioProjectManagementTheoricalRelative = function(){
		return $scope.discipline.initialPercentajeProjectManagment();
	}	
	
	$scope.inicioRequirementsTheoricalRelative = function(){
		return $scope.discipline.initialPercentajeRequirements();
	}	
	
	$scope.inicioAnalysisDesignTheoricalRelative = function(){
		return $scope.discipline.initialPercentajeAnalysis();
	}
	
	$scope.inicioImplementationTheoricalRelative = function(){
		return $scope.discipline.initialPercentajeImplementation();
	}	
	
	$scope.inicioTestsTheoricalRelative = function(){
		return $scope.discipline.initialPercentajeTests();
	}	
	
	$scope.inicioDeployTheoricalRelative = function(){
		return $scope.discipline.initialPercentajeDeployment();
	}	
	
	$scope.inicioEnviromentTheoricalRelative = function(){
		return $scope.discipline.initialPercentajeVersion();
	}
	
	$scope.inicioTotalTheoricalRelative = function(){
		return $scope.inicioProjectManagementTheoricalRelative() + $scope.inicioRequirementsTheoricalRelative() + 
			$scope.inicioAnalysisDesignTheoricalRelative() + $scope.inicioImplementationTheoricalRelative() + 
			$scope.inicioTestsTheoricalRelative() + $scope.inicioDeployTheoricalRelative() +
			$scope.inicioEnviromentTheoricalRelative();
	}
	
	//Fase de inicio - teorico absoluto
	$scope.inicioProjectManagementTheoricalAbsolute = function(){
		return $scope.discipline.initialProjectManagmentHour();
	}	
	
	$scope.inicioRequirementsTheoricalAbsolute = function(){
		return $scope.discipline.initialRequirementsHour();
	}	
	
	$scope.inicioAnalysisDesignTheoricalAbsolute = function(){
		return $scope.discipline.initialAnalysisHour();
	}
	
	$scope.inicioImplementationTheoricalAbsolute = function(){
		return $scope.discipline.initialImplementationHour();
	}	
	
	$scope.inicioTestsTheoricalAbsolute = function(){
		return $scope.discipline.initialTestsHour();
	}	
	
	$scope.inicioDeployTheoricalAbsolute = function(){
		return $scope.discipline.initialDeploymentHour();
	}	
	
	$scope.inicioEnviromentTheoricalAbsolute = function(){
		return $scope.discipline.initialVersionHour();
	}
	
	$scope.inicioTotalTheoricalAbsolute = function(){
		return $scope.inicioProjectManagementTheoricalAbsolute() + $scope.inicioRequirementsTheoricalAbsolute() + 
			$scope.inicioAnalysisDesignTheoricalAbsolute() + $scope.inicioImplementationTheoricalAbsolute() + 
			$scope.inicioTestsTheoricalAbsolute() + $scope.inicioDeployTheoricalAbsolute() +
			$scope.inicioEnviromentTheoricalAbsolute();
	}	
	
	//Fase de inicio - diferencia absoluta
	$scope.inicioProjectManagementAbsoluteDifference = function(){
		return -2.3;
	}	
	
	$scope.inicioRequirementsAbsoluteDifference = function(){
		return -6.3;
	}	
	
	$scope.inicioAnalysisDesignAbsoluteDifference = function(){
		return -3.1;
	}
	
	$scope.inicioImplementationAbsoluteDifference = function(){
		return -1.3;
	}	
	
	$scope.inicioTestsAbsoluteDifference = function(){
		return -1.3;
	}	
	
	$scope.inicioDeployAbsoluteDifference = function(){
		return -0.5;
	}	
	
	$scope.inicioEnviromentAbsoluteDifference = function(){
		return -1.7;
	}
	
	$scope.inicioTotalAbsoluteDifference = function(){
		return $scope.inicioProjectManagementAbsoluteDifference() + $scope.inicioRequirementsAbsoluteDifference() + 
			$scope.inicioAnalysisDesignAbsoluteDifference() + $scope.inicioImplementationAbsoluteDifference() + 
			$scope.inicioTestsAbsoluteDifference() + $scope.inicioDeployAbsoluteDifference() +
			$scope.inicioEnviromentAbsoluteDifference();
	}
	
	//Fase de inicio - asignado
	$scope.inicioProjectManagementAssigned = function(){
		return 36.4;
	}	
	
	$scope.inicioRequirementsAssigned = function(){
		return 98.8;
	}	
	
	$scope.inicioAnalysisDesignAssigned = function(){
		return 49.4;
	}
	
	$scope.inicioImplementationAssigned = function(){
		return 20.8;
	}	
	
	$scope.inicioTestsAssigned = function(){
		return 20.8;
	}	
	
	$scope.inicioDeployAssigned = function(){
		return 7.8;
	}	
	
	$scope.inicioEnviromentAssigned = function(){
		return 26;
	}
	
	$scope.inicioTotalAssigned = function(){
		return $scope.inicioProjectManagementAssigned() + $scope.inicioRequirementsAssigned() + 
		$scope.inicioAnalysisDesignAssigned() + $scope.inicioImplementationAssigned() + 
		$scope.inicioTestsAssigned() + $scope.inicioDeployAssigned() +
		$scope.inicioEnviromentAssigned();
	}
	
	//Fase de inicio - diferencia relativa
	$scope.inicioProjectManagementRelativeDifference = function(){
		return ($scope.inicioProjectManagementAssigned()/$scope.inicioProjectManagementTheoricalAbsolute())*100;
	}	
	
	$scope.inicioRequirementsRelativeDifference = function(){
		return ($scope.inicioRequirementsAssigned()/$scope.inicioRequirementsTheoricalAbsolute())*100;;
	}	
	
	$scope.inicioAnalysisDesignRelativeDifference = function(){
		return ($scope.inicioAnalysisDesignAssigned()/$scope.inicioAnalysisDesignTheoricalAbsolute())*100;;
	}
	
	$scope.inicioImplementationRelativeDifference = function(){
		return ($scope.inicioImplementationAssigned()/$scope.inicioImplementationTheoricalAbsolute())*100;;
	}	
	
	$scope.inicioTestsRelativeDifference = function(){
		return ($scope.inicioTestsAssigned()/$scope.inicioTestsTheoricalAbsolute())*100;;
	}	
	
	$scope.inicioDeployRelativeDifference = function(){
		return ($scope.inicioDeployAssigned()/$scope.inicioDeployTheoricalAbsolute())*100;;
	}	
	
	$scope.inicioEnviromentRelativeDifference = function(){
		return ($scope.inicioEnviromentAssigned()/$scope.inicioEnviromentTheoricalAbsolute())*100;;
	}
	
	$scope.inicioTotalRelativeDifference = function(){
		return ($scope.inicioTotalAssigned()/$scope.inicioTotalTheoricalAbsolute())*100;;
	}
	
	//Fase de inicio - propuesta
	$scope.inicioProjectManagementProposal = function(){
		return ($scope.inicioProjectManagementTheoricalRelative()*$scope.inicioTotalTheoricalAbsolute()*NUMBER_OF_ASIGNED_PEOPLE)/($scope.numberOfProposalsPeople()*100);
	}	
	
	$scope.inicioRequirementsProposal = function(){
		return ($scope.inicioRequirementsTheoricalRelative()*$scope.inicioTotalTheoricalAbsolute()*NUMBER_OF_ASIGNED_PEOPLE)/($scope.numberOfProposalsPeople()*100);
	}	
	
	$scope.inicioAnalysisDesignProposal = function(){
		return ($scope.inicioAnalysisDesignTheoricalRelative()*$scope.inicioTotalTheoricalAbsolute()*NUMBER_OF_ASIGNED_PEOPLE)/($scope.numberOfProposalsPeople()*100);
	}
	
	$scope.inicioImplementationProposal = function(){
		return ($scope.inicioImplementationTheoricalRelative()*$scope.inicioTotalTheoricalAbsolute()*NUMBER_OF_ASIGNED_PEOPLE)/($scope.numberOfProposalsPeople()*100);
	}	
	
	$scope.inicioTestsProposal = function(){
		return ($scope.inicioTestsTheoricalRelative()*$scope.inicioTotalTheoricalAbsolute()*NUMBER_OF_ASIGNED_PEOPLE)/($scope.numberOfProposalsPeople()*100);
	}	
	
	$scope.inicioDeployProposal = function(){
		return ($scope.inicioDeployTheoricalRelative()*$scope.inicioTotalTheoricalAbsolute()*NUMBER_OF_ASIGNED_PEOPLE)/($scope.numberOfProposalsPeople()*100);
	}	
	
	$scope.inicioEnviromentProposal = function(){
		return ($scope.inicioEnviromentTheoricalRelative()*$scope.inicioTotalTheoricalAbsolute()*NUMBER_OF_ASIGNED_PEOPLE)/($scope.numberOfProposalsPeople()*100);
	}
	
	$scope.inicioTotalProposal = function(){
		return $scope.inicioProjectManagementProposal()+$scope.inicioRequirementsProposal()+
		$scope.inicioAnalysisDesignProposal()+$scope.inicioImplementationProposal()+
		$scope.inicioTestsProposal()+$scope.inicioDeployProposal()+$scope.inicioEnviromentProposal();
	}	
	
}]);