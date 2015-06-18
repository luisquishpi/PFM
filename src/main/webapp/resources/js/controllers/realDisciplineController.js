/**
 * 
 */
projectApp.controller("realDisciplineController", ['$scope', '$isTest', 'bridgeService', function ($scope, $isTest, bridgeService) {  
	
	if(!$isTest){
		  initJSFScope($scope);
	}	
	$scope.resources = bridgeService.shareData;
	if(!$isTest){
		bridgeService.shareData= $scope;
		$scope.disciplinesFinished = true;
	}
	
	function Phase(){
		this.totalAssignedProjectManagement;
		this.totalAssignedRequirements;
		this.totalAssignedAnalysisDesign;
		this.totalAssignedImplementation;
		this.totalAssignedTests;
		this.totalAssignedDeployment;
		this.totalAssignedVersion;
		
		//Recursos Personas Hora
		this.ProjectManagmentHour = function(){
			return this.totalAssignedProjectManagement;
		}
		this.RequirementsHour = function(){
			return this.totalAssignedRequirements;
		}
		this.AnalysisHour = function(){
			return this.totalAssignedAnalysisDesign;
		}
		this.ImplementationHour = function(){
			return this.totalAssignedImplementation;
		}
		this.TestsHour = function(){
			return this.totalAssignedTests;
		}
		this.DeploymentHour = function(){
			return this.totalAssignedDeployment;
		}
		this.VersionHour = function(){
			return this.totalAssignedVersion;
		}
		this.totalHour = function(){
			return parseFloat(this.totalAssignedProjectManagement)+parseFloat(this.totalAssignedRequirements)+parseFloat(this.totalAssignedAnalysisDesign)
			+parseFloat(this.totalAssignedImplementation)+parseFloat(this.totalAssignedTests)+parseFloat(this.totalAssignedDeployment)+
			parseFloat(this.totalAssignedVersion);
		}
		
		//distribucion		
		this.projectManagementDistribution = function(){
			return (parseFloat(this.totalAssignedProjectManagement)/this.totalHour())*100;
		}
		this.RequirementsDistribution = function(){
			return (parseFloat(this.totalAssignedRequirements)/this.totalHour())*100;
		}
		this.AnalysisDistribution = function(){
			return (parseFloat(this.totalAssignedAnalysisDesign)/this.totalHour())*100;
		}
		this.ImplementationDistribution = function(){
			return (parseFloat(this.totalAssignedImplementation/this.totalHour()))*100;
		}
		this.TestsDistribution = function(){
			return (parseFloat(this.totalAssignedTests)/this.totalHour())*100;
		}
		this.DeployDistribution = function(){
			return (parseFloat(this.totalAssignedDeployment)/this.totalHour())*100;
		}
		this.VersionDistribution = function(){
			return (parseFloat(this.totalAssignedVersion)/this.totalHour())*100;
		}
		this.totalDistribution = function(){			
			return (parseFloat(this.projectManagementDistribution())+parseFloat(this.RequirementsDistribution())+parseFloat(this.AnalysisDistribution())
			+parseFloat(this.ImplementationDistribution())+parseFloat(this.TestsDistribution())+parseFloat(this.DeployDistribution())+parseFloat(this.VersionDistribution()));
		}
		
		
	}
	
	$scope.initPhase = new Phase();
	$scope.initPhase.totalAssignedProjectManagement = $scope.realDisciplineBean.initPhase.projectManagementAssigned;
	$scope.initPhase.totalAssignedRequirements = $scope.realDisciplineBean.initPhase.requirementsAssigned;																	
	$scope.initPhase.totalAssignedAnalysisDesign = $scope.realDisciplineBean.initPhase.analysisDesignAssigned;
	$scope.initPhase.totalAssignedImplementation = $scope.realDisciplineBean.initPhase.implementationAssigned;
	$scope.initPhase.totalAssignedTests = $scope.realDisciplineBean.initPhase.testsAssigned;
	$scope.initPhase.totalAssignedDeployment = $scope.realDisciplineBean.initPhase.deployAssigned;
	$scope.initPhase.totalAssignedVersion = $scope.realDisciplineBean.initPhase.enviromentAssigned;
	
	$scope.elabPhase = new Phase();
	$scope.elabPhase.totalAssignedProjectManagement = $scope.realDisciplineBean.elabPhase.projectManagementAssigned;
	$scope.elabPhase.totalAssignedRequirements = $scope.realDisciplineBean.elabPhase.requirementsAssigned;
	$scope.elabPhase.totalAssignedAnalysisDesign = $scope.realDisciplineBean.elabPhase.analysisDesignAssigned;
	$scope.elabPhase.totalAssignedImplementation = $scope.realDisciplineBean.elabPhase.implementationAssigned;
	$scope.elabPhase.totalAssignedTests = $scope.realDisciplineBean.elabPhase.testsAssigned;
	$scope.elabPhase.totalAssignedDeployment = $scope.realDisciplineBean.elabPhase.deployAssigned;
	$scope.elabPhase.totalAssignedVersion = $scope.realDisciplineBean.elabPhase.enviromentAssigned;
	
	$scope.transPhase = new Phase();
	$scope.transPhase.totalAssignedProjectManagement = $scope.realDisciplineBean.transPhase.projectManagementAssigned;
	$scope.transPhase.totalAssignedRequirements = $scope.realDisciplineBean.transPhase.requirementsAssigned;
	$scope.transPhase.totalAssignedAnalysisDesign = $scope.realDisciplineBean.transPhase.analysisDesignAssigned;
	$scope.transPhase.totalAssignedImplementation = $scope.realDisciplineBean.transPhase.implementationAssigned;
	$scope.transPhase.totalAssignedTests = $scope.realDisciplineBean.transPhase.testsAssigned;
	$scope.transPhase.totalAssignedDeployment = $scope.realDisciplineBean.transPhase.deployAssigned;
	$scope.transPhase.totalAssignedVersion = $scope.realDisciplineBean.transPhase.enviromentAssigned;
	
	$scope.constPhase = new Phase();
	$scope.constPhase.totalAssignedProjectManagement = $scope.realDisciplineBean.constPhase.projectManagementAssigned;
	$scope.constPhase.totalAssignedRequirements = $scope.realDisciplineBean.constPhase.requirementsAssigned;
	$scope.constPhase.totalAssignedAnalysisDesign = $scope.realDisciplineBean.constPhase.analysisDesignAssigned;
	$scope.constPhase.totalAssignedImplementation = $scope.realDisciplineBean.constPhase.implementationAssigned;
	$scope.constPhase.totalAssignedTests = $scope.realDisciplineBean.constPhase.testsAssigned;
	$scope.constPhase.totalAssignedDeployment = $scope.realDisciplineBean.constPhase.deployAssigned;
	$scope.constPhase.totalAssignedVersion = $scope.realDisciplineBean.constPhase.enviromentAssigned;	
}]);
