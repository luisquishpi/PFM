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
	
	console.log($scope.disciplinesPhasesBean);
	
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
		
		//Recursos Personas Día
		this.ProjectManagmentDay = function(){
			return this.ProjectManagmentHour()/$scope.realDisciplineBean.hoursPerDay;
		}	
		this.RequirementsDay = function(){
			return this.RequirementsHour()/$scope.realDisciplineBean.hoursPerDay;
		}
		this.AnalysisDay = function(){
			return this.AnalysisHour()/$scope.realDisciplineBean.hoursPerDay;
		}
		this.ImplementationDay = function(){
			return this.ImplementationHour()/$scope.realDisciplineBean.hoursPerDay;
		}
		this.TestsDay = function(){
			return this.TestsHour()/$scope.realDisciplineBean.hoursPerDay;
		}
		this.DeploymentDay = function(){
			return this.DeploymentHour()/$scope.realDisciplineBean.hoursPerDay;
		}
		this.VersionDay = function(){
			return this.VersionHour()/$scope.realDisciplineBean.hoursPerDay;
		}
		this.totalDay = function(){
			return this.totalHour()/$scope.realDisciplineBean.hoursPerDay;;
		}
		
		//Recursos Personas Mes
		this.ProjectManagmentMonth = function(){
			return this.ProjectManagmentDay()/$scope.realDisciplineBean.workDaysPerMonth;
		}	
		this.RequirementsMonth = function(){
			return this.RequirementsDay()/$scope.realDisciplineBean.workDaysPerMonth;
		}
		this.AnalysisMonth = function(){
			return this.AnalysisDay()/$scope.realDisciplineBean.workDaysPerMonth;
		}
		this.ImplementationMonth = function(){
			return this.ImplementationDay()/$scope.realDisciplineBean.workDaysPerMonth;
		}
		this.TestsMonth = function(){
			return this.TestsDay()/$scope.realDisciplineBean.workDaysPerMonth;
		}
		this.DeploymentMonth = function(){
			return this.DeploymentDay()/$scope.realDisciplineBean.workDaysPerMonth;
		}
		this.VersionMonth = function(){
			return this.VersionDay()/$scope.realDisciplineBean.workDaysPerMonth;
		}
		this.totalMonth = function(){
			return this.totalDay()/$scope.realDisciplineBean.workDaysPerMonth;;
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
	$scope.initPhase.totalAssignedProjectManagement = $scope.disciplinesPhasesBean.assignedHoursList[0].sumRoles[0];
	$scope.initPhase.totalAssignedRequirements = $scope.disciplinesPhasesBean.assignedHoursList[0].sumRoles[1];																	
	$scope.initPhase.totalAssignedAnalysisDesign = $scope.disciplinesPhasesBean.assignedHoursList[0].sumRoles[2];
	$scope.initPhase.totalAssignedImplementation = $scope.disciplinesPhasesBean.assignedHoursList[0].sumRoles[3];
	$scope.initPhase.totalAssignedTests = $scope.disciplinesPhasesBean.assignedHoursList[0].sumRoles[4];
	$scope.initPhase.totalAssignedDeployment = $scope.disciplinesPhasesBean.assignedHoursList[0].sumRoles[5];
	$scope.initPhase.totalAssignedVersion = $scope.disciplinesPhasesBean.assignedHoursList[0].sumRoles[6];
	
	$scope.elabPhase = new Phase();
	$scope.elabPhase.totalAssignedProjectManagement = $scope.disciplinesPhasesBean.assignedHoursList[1].sumRoles[0];
	$scope.elabPhase.totalAssignedRequirements = $scope.disciplinesPhasesBean.assignedHoursList[1].sumRoles[1];
	$scope.elabPhase.totalAssignedAnalysisDesign = $scope.disciplinesPhasesBean.assignedHoursList[1].sumRoles[2];
	$scope.elabPhase.totalAssignedImplementation = $scope.disciplinesPhasesBean.assignedHoursList[1].sumRoles[3];
	$scope.elabPhase.totalAssignedTests = $scope.disciplinesPhasesBean.assignedHoursList[1].sumRoles[4];
	$scope.elabPhase.totalAssignedDeployment = $scope.disciplinesPhasesBean.assignedHoursList[1].sumRoles[5];
	$scope.elabPhase.totalAssignedVersion = $scope.disciplinesPhasesBean.assignedHoursList[1].sumRoles[6];
	
	$scope.transPhase = new Phase();
	$scope.transPhase.totalAssignedProjectManagement = $scope.disciplinesPhasesBean.assignedHoursList[2].sumRoles[0];
	$scope.transPhase.totalAssignedRequirements = $scope.disciplinesPhasesBean.assignedHoursList[2].sumRoles[1];
	$scope.transPhase.totalAssignedAnalysisDesign = $scope.disciplinesPhasesBean.assignedHoursList[2].sumRoles[2];
	$scope.transPhase.totalAssignedImplementation = $scope.disciplinesPhasesBean.assignedHoursList[2].sumRoles[3];
	$scope.transPhase.totalAssignedTests = $scope.disciplinesPhasesBean.assignedHoursList[2].sumRoles[4];
	$scope.transPhase.totalAssignedDeployment = $scope.disciplinesPhasesBean.assignedHoursList[2].sumRoles[5];
	$scope.transPhase.totalAssignedVersion = $scope.disciplinesPhasesBean.assignedHoursList[2].sumRoles[6];
	
	$scope.constPhase = new Phase();
	$scope.constPhase.totalAssignedProjectManagement = $scope.disciplinesPhasesBean.assignedHoursList[3].sumRoles[0];
	$scope.constPhase.totalAssignedRequirements = $scope.disciplinesPhasesBean.assignedHoursList[3].sumRoles[1];
	$scope.constPhase.totalAssignedAnalysisDesign = $scope.disciplinesPhasesBean.assignedHoursList[3].sumRoles[2];
	$scope.constPhase.totalAssignedImplementation = $scope.disciplinesPhasesBean.assignedHoursList[3].sumRoles[3];
	$scope.constPhase.totalAssignedTests = $scope.disciplinesPhasesBean.assignedHoursList[3].sumRoles[4];
	$scope.constPhase.totalAssignedDeployment = $scope.disciplinesPhasesBean.assignedHoursList[3].sumRoles[5];
	$scope.constPhase.totalAssignedVersion = $scope.disciplinesPhasesBean.assignedHoursList[3].sumRoles[6];	
	
		
	$scope.totalProjectManagementHour = function(){
		return($scope.initPhase.ProjectManagmentHour()+$scope.elabPhase.ProjectManagmentHour()+
		$scope.constPhase.ProjectManagmentHour()+$scope.transPhase.ProjectManagmentHour());
	}
	$scope.totalRequirementsHour = function(){
		return($scope.initPhase.RequirementsHour()+$scope.elabPhase.RequirementsHour()+
		$scope.constPhase.RequirementsHour()+$scope.transPhase.RequirementsHour());
	}
	$scope.totalAnalysisHour = function(){
		return($scope.initPhase.AnalysisHour()+$scope.elabPhase.AnalysisHour()+
		$scope.constPhase.AnalysisHour()+$scope.transPhase.AnalysisHour());
	}
	$scope.totalImplementationHour = function(){
		return($scope.initPhase.ImplementationHour()+$scope.elabPhase.ImplementationHour()+
		$scope.constPhase.ImplementationHour()+$scope.transPhase.ImplementationHour());
	}
	$scope.totalTestsHour = function(){
		return($scope.initPhase.TestsHour()+$scope.elabPhase.TestsHour()+
		$scope.constPhase.TestsHour()+$scope.transPhase.TestsHour());
	}
	$scope.totalDeploymentHour = function(){
		return($scope.initPhase.DeploymentHour()+$scope.elabPhase.DeploymentHour()+
		$scope.constPhase.DeploymentHour()+$scope.transPhase.DeploymentHour());
	}
	$scope.totalVersionHour = function(){
		return($scope.initPhase.VersionHour()+$scope.elabPhase.VersionHour()+
		$scope.constPhase.VersionHour()+$scope.transPhase.VersionHour());
	}
	$scope.totalTotalHour = function(){
		return($scope.initPhase.totalHour()+$scope.elabPhase.totalHour()+
		$scope.constPhase.totalHour()+$scope.transPhase.totalHour());
	}
	
	$scope.totalProjectManagementDay = function(){
		return($scope.initPhase.ProjectManagmentDay()+$scope.elabPhase.ProjectManagmentDay()+
		$scope.constPhase.ProjectManagmentDay()+$scope.transPhase.ProjectManagmentDay());
	}
	$scope.totalRequirementsDay = function(){
		return($scope.initPhase.RequirementsDay()+$scope.elabPhase.RequirementsDay()+
		$scope.constPhase.RequirementsDay()+$scope.transPhase.RequirementsDay());
	}
	$scope.totalAnalysisDay = function(){
		return($scope.initPhase.AnalysisDay()+$scope.elabPhase.AnalysisDay()+
		$scope.constPhase.AnalysisDay()+$scope.transPhase.AnalysisDay());
	}
	$scope.totalImplementationDay = function(){
		return($scope.initPhase.ImplementationDay()+$scope.elabPhase.ImplementationDay()+
		$scope.constPhase.ImplementationDay()+$scope.transPhase.ImplementationDay());
	}
	$scope.totalTestsDay = function(){
		return($scope.initPhase.TestsDay()+$scope.elabPhase.TestsDay()+
		$scope.constPhase.TestsDay()+$scope.transPhase.TestsDay());
	}
	$scope.totalDeploymentDay = function(){
		return($scope.initPhase.DeploymentDay()+$scope.elabPhase.DeploymentDay()+
		$scope.constPhase.DeploymentDay()+$scope.transPhase.DeploymentDay());
	}
	$scope.totalVersionDay = function(){
		return($scope.initPhase.VersionDay()+$scope.elabPhase.VersionDay()+
		$scope.constPhase.VersionDay()+$scope.transPhase.VersionDay());
	}
	$scope.totalTotalDay = function(){
		return($scope.initPhase.totalDay()+$scope.elabPhase.totalDay()+
		$scope.constPhase.totalDay()+$scope.transPhase.totalDay());
	}
	
	$scope.totalProjectManagementMonth = function(){
		return($scope.initPhase.ProjectManagmentMonth()+$scope.elabPhase.ProjectManagmentMonth()+
		$scope.constPhase.ProjectManagmentMonth()+$scope.transPhase.ProjectManagmentMonth());
	}
	$scope.totalRequirementsMonth = function(){
		return($scope.initPhase.RequirementsMonth()+$scope.elabPhase.RequirementsMonth()+
		$scope.constPhase.RequirementsMonth()+$scope.transPhase.RequirementsMonth());
	}
	$scope.totalAnalysisMonth = function(){
		return($scope.initPhase.AnalysisMonth()+$scope.elabPhase.AnalysisMonth()+
		$scope.constPhase.AnalysisMonth()+$scope.transPhase.AnalysisMonth());
	}
	$scope.totalImplementationMonth = function(){
		return($scope.initPhase.ImplementationMonth()+$scope.elabPhase.ImplementationMonth()+
		$scope.constPhase.ImplementationMonth()+$scope.transPhase.ImplementationMonth());
	}
	$scope.totalTestsMonth = function(){
		return($scope.initPhase.TestsMonth()+$scope.elabPhase.TestsMonth()+
		$scope.constPhase.TestsMonth()+$scope.transPhase.TestsMonth());
	}
	$scope.totalDeploymentMonth = function(){
		return($scope.initPhase.DeploymentMonth()+$scope.elabPhase.DeploymentMonth()+
		$scope.constPhase.DeploymentMonth()+$scope.transPhase.DeploymentMonth());
	}
	$scope.totalVersionMonth = function(){
		return($scope.initPhase.VersionMonth()+$scope.elabPhase.VersionMonth()+
		$scope.constPhase.VersionMonth()+$scope.transPhase.VersionMonth());
	}
	$scope.totalTotalMonth = function(){
		return($scope.initPhase.totalMonth()+$scope.elabPhase.totalMonth()+
		$scope.constPhase.totalMonth()+$scope.transPhase.totalMonth());
	}
	
	$scope.totalProjectManagementDistribution = function(){
		return ($scope.totalProjectManagementHour()/$scope.totalTotalHour())*100;
	}
	$scope.totalRequirementsDistribution = function(){
		return ($scope.totalRequirementsHour()/$scope.totalTotalHour())*100;
	}
	$scope.totalAnalysisDistribution = function(){
		return ($scope.totalAnalysisHour()/$scope.totalTotalHour())*100;
	}
	$scope.totalImplementationDistribution = function(){
		return ($scope.totalImplementationHour()/$scope.totalTotalHour())*100;
	}
	$scope.totalTestsDistribution = function(){
		return ($scope.totalTestsHour()/$scope.totalTotalHour())*100;
	}
	$scope.totalDeploymentDistribution = function(){
		return ($scope.totalDeploymentHour()/$scope.totalTotalHour())*100;
	}
	$scope.totalVersionDistribution = function(){
		return ($scope.totalVersionHour()/$scope.totalTotalHour())*100;
	}
	$scope.totalTotalDistribution = function(){
		return ($scope.totalTotalHour()/$scope.totalTotalHour())*100;
	}	
}]);
