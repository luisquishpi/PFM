/**
 * AngularJS resourceController
 */

projectApp.controller("resourceController", ['$scope', '$isTest', 'bridgeService', 'workTimeService', 'EmployeeUtils', 'DateUtils', '$http', 'projectResourcesService', function ($scope, $isTest, bridgeService, workTimeService, EmployeeUtils, DateUtils, $http, projectResourcesService) {
	$scope.discipline = bridgeService.shareData;
	$scope.setSortType = function(type){
		$scope.sortType = function(element){
			return element.roles.indexOf(type);
		}
	};
	$scope.setSortCostHour = function(){
		$scope.sortType = function(element){
			return $scope.employeeSalaryHour(element);
		}
	};
	
	if(!$isTest){
		  initJSFScope($scope);
		  workTimeService.calculateWorkDaysAndHour($scope.resourcesBean.project.startString, 
				  $scope.resourcesBean.project.endString, $scope.discipline.phases.schedule.listHoursEachDay());
	}
	$scope.resourceFinished = false;
	var INIT_PHASE = "INIT";
	var ELAB_PHASE = "ELAB";
	var CONST_PHASE = "CONST";
	var TRANS_PHASE = "TRANS";
	
	function EmployeeResource(employee){
		this.employee = employee;
		this.projectManagementHours=0;
		this.requirementsHours=0;
		this.analysisDesignHours=0;
		this.implementationHours=0;
		this.testsHours=0;
		this.deployHours=0;
		this.environmentHours=0;
		this.availableEmployeeHours=0;
	}
	
	function ProjectInfo(){
		this.resourcesList;
		this.schedule;
		this.project;
	}
	
	function Phase(phase){
		this.phase = phase;
		this.assignedEmployee = [];
		this.numberOfAssignedPeople=0;

		this.projectManagementTheoricalRelative;
		this.requirementsTheoricalRelative;
		this.analysisDesignTheoricalRelative;
		this.implementationTheoricalRelative;
		this.testsTheoricalRelative;
		this.deployTheoricalRelative;
		this.enviromentTheoricalRelative;
		this.totalTheoricalRelative = function(){
			return this.projectManagementTheoricalRelative+ this.requirementsTheoricalRelative+ 
				this.analysisDesignTheoricalRelative+ this.implementationTheoricalRelative+ 
				this.testsTheoricalRelative+ this.deployTheoricalRelative+
				this.enviromentTheoricalRelative;
		}
		
		this.projectManagementTheoricalAbsolute;
		this.requirementsTheoricalAbsolute;
		this.analysisDesignTheoricalAbsolute;
		this.implementationTheoricalAbsolute;
		this.testsTheoricalAbsolute;
		this.deployTheoricalAbsolute;
		this.enviromentTheoricalAbsolute;
		this.totalTheoricalAbsolute = function(){
			return this.projectManagementTheoricalAbsolute+ this.requirementsTheoricalAbsolute+ 
				this.analysisDesignTheoricalAbsolute+ this.implementationTheoricalAbsolute+ 
				this.testsTheoricalAbsolute+ this.deployTheoricalAbsolute+
				this.enviromentTheoricalAbsolute;
		}
		
		this.projectManagementAssigned;
		this.requirementsAssigned;
		this.analysisDesignAssigned;
		this.implementationAssigned;
		this.testsAssigned;
		this.deployAssigned;
		this.enviromentAssigned;
		this.totalAssigned = function(){
			return ($scope.disciplineHoursTotal(this.assignedEmployee, "projectManagementHours")+$scope.disciplineHoursTotal(this.assignedEmployee, 'requirementsHours')
				+$scope.disciplineHoursTotal(this.assignedEmployee, 'analysisDesignHours')+$scope.disciplineHoursTotal(this.assignedEmployee, 'implementationHours')
				+$scope.disciplineHoursTotal(this.assignedEmployee, 'testsHours')+$scope.disciplineHoursTotal(this.assignedEmployee, 'deployHours')
				+$scope.disciplineHoursTotal(this.assignedEmployee, 'environmentHours'));
		};
		
		this.projectManagementAbsoluteDifference = function(){
			return this.projectManagementAssigned-this.projectManagementTheoricalAbsolute;
		};
		this.requirementsAbsoluteDifference = function(){
			return this.requirementsAssigned-this.requirementsTheoricalAbsolute;
		};
		this.analysisDesignAbsoluteDifference = function(){
			return this.analysisDesignAssigned-this.analysisDesignTheoricalAbsolute;
		};
		this.implementationAbsoluteDifference = function(){
			return this.implementationAssigned-this.implementationTheoricalAbsolute;
		};
		this.testsAbsoluteDifference = function(){
			return this.testsAssigned-this.testsTheoricalAbsolute;
		};
		this.deployAbsoluteDifference = function(){
			return this.deployAssigned-this.deployTheoricalAbsolute;
		};
		this.enviromentAbsoluteDifference = function(){
			return this.enviromentAssigned-this.enviromentTheoricalAbsolute;
		};
		this.totalAbsoluteDifference = function(){
			return this.projectManagementAbsoluteDifference() + this.requirementsAbsoluteDifference() + 
			this.analysisDesignAbsoluteDifference() + this.implementationAbsoluteDifference() + 
			this.testsAbsoluteDifference() + this.deployAbsoluteDifference()+
			this.enviromentAbsoluteDifference();
		}
		
		this.projectManagementRelativeDifference = function(){
			return ($scope.disciplineHoursTotal(this.assignedEmployee, "projectManagementHours")/this.projectManagementTheoricalAbsolute)*100;
		}
		
		this.requirementsRelativeDifference = function(){
			return ($scope.disciplineHoursTotal(this.assignedEmployee, "requirementsHours")/this.requirementsTheoricalAbsolute)*100;
		}
		
		this.analysisDesignRelativeDifference = function(){
			return ($scope.disciplineHoursTotal(this.assignedEmployee, "analysisDesignHours")/this.analysisDesignTheoricalAbsolute)*100;
		}
		
		this.implementationRelativeDifference = function(){
			return ($scope.disciplineHoursTotal(this.assignedEmployee, "implementationHours")/this.implementationTheoricalAbsolute)*100;
		}
		
		this.testsRelativeDifference = function(){
			return ($scope.disciplineHoursTotal(this.assignedEmployee, "testsHours")/this.testsTheoricalAbsolute)*100;
		}
		
		this.deployRelativeDifference = function(){
			return ($scope.disciplineHoursTotal(this.assignedEmployee, "deployHours")/this.deployTheoricalAbsolute)*100;
		}
		
		this.enviromentRelativeDifference = function(){
			return ($scope.disciplineHoursTotal(this.assignedEmployee, "environmentHours")/this.enviromentTheoricalAbsolute)*100;
		}		
		
		this.totalRelativeDifference = function(){
			return this.totalAssigned()/this.totalTheoricalAbsolute()*100;
		}	
		
		this.projectManagementProposal = function(){
			var val = (parseFloat(this.projectManagementTheoricalRelative)*parseFloat(this.totalTheoricalAbsolute())*parseFloat(this.numberOfAssignedPeople))/(parseFloat(this.numberOfProposalsPeople())*100);
			if(isNaN(val))
				return 0;
			return val;
		}	
		
		this.requirementsProposal = function(){
			var val = (parseFloat(this.requirementsTheoricalRelative)*parseFloat(this.totalTheoricalAbsolute())*parseFloat(this.numberOfAssignedPeople))/(parseFloat(this.numberOfProposalsPeople())*100);
			if(isNaN(val))
				return 0;
			return val;
		}	
		
		this.analysisDesignProposal = function(){
			var val = (parseFloat(this.analysisDesignTheoricalRelative)*parseFloat(this.totalTheoricalAbsolute())*parseFloat(this.numberOfAssignedPeople))/(parseFloat(this.numberOfProposalsPeople())*100);
			if(isNaN(val))
				return 0;
			return val;
		}
		
		this.implementationProposal = function(){
			var val = (parseFloat(this.implementationTheoricalRelative)*parseFloat(this.totalTheoricalAbsolute())*parseFloat(this.numberOfAssignedPeople))/(parseFloat(this.numberOfProposalsPeople())*100);
			if(isNaN(val))
				return 0;
			return val;
		}	
		
		this.testsProposal = function(){
			var val = (parseFloat(this.testsTheoricalRelative)*parseFloat(this.totalTheoricalAbsolute())*parseFloat(this.numberOfAssignedPeople))/(parseFloat(this.numberOfProposalsPeople())*100);
			if(isNaN(val))
				return 0;
			return val;
			
		}	
		
		this.deployProposal = function(){
			var val = (parseFloat(this.deployTheoricalRelative)*parseFloat(this.totalTheoricalAbsolute())*parseFloat(this.numberOfAssignedPeople))/(parseFloat(this.numberOfProposalsPeople())*100);
			if(isNaN(val))
				return 0;
			return val;
		}	
		
		this.enviromentProposal = function(){
			var val = (parseFloat(this.enviromentTheoricalRelative)*parseFloat(this.totalTheoricalAbsolute())*parseFloat(this.numberOfAssignedPeople))/(parseFloat(this.numberOfProposalsPeople())*100);
			if(isNaN(val))
				return 0;
			return val;
		}
		
		this.totalProposal = function(){			
			return (parseFloat(this.projectManagementProposal())+parseFloat(this.requirementsProposal())+parseFloat(this.analysisDesignProposal())
					+parseFloat(this.implementationProposal())+parseFloat(this.testsProposal())+parseFloat(this.deployProposal())
					+parseFloat(this.enviromentProposal()));
		}
		
		this.projectManagementProposalDiff = function(){
			return this.projectManagementAssigned-this.projectManagementProposal();
		}	
		
		this.requirementsProposalDiff = function(){
			return this.requirementsAssigned-this.requirementsProposal();
		}	
		
		this.analysisDesignProposalDiff = function(){
			return this.analysisDesignAssigned-this.analysisDesignProposal();
		}
		
		this.implementationProposalDiff = function(){
			return this.implementationAssigned-this.implementationProposal();
		}	
		
		this.testsProposalDiff = function(){
			return this.testsAssigned-this.testsProposal();
		}	
		
		this.deployProposalDiff = function(){
			return this.deployAssigned-this.deployProposal();
		}	
		
		this.enviromentProposalDiff = function(){
			return this.enviromentAssigned-this.enviromentProposal();
		}
		
		this.totalProposalDiff = function(){
			return this.projectManagementProposalDiff() + this.requirementsProposalDiff() + 
				this.analysisDesignProposalDiff() + this.implementationProposalDiff() + 
				this.testsProposalDiff() + this.deployProposalDiff() +
				this.enviromentProposalDiff();
		}			
		
		this.averageEmployeeHours = function(){
			var totalEmployeeHours = 0;
			for(i=0; i < $scope.resourcesBean.employeeList.length; i++){
				totalEmployeeHours += $scope.availableEmployeeHours(this,$scope.resourcesBean.employeeList[i]);
			}
			return totalEmployeeHours/($scope.resourcesBean.employeeList.length-1);
		};
		
		this.availableEmployeeHours = function(employee){
			return $scope.availableEmployeeHours(this, employee);
		}
		
		this.numberOfProposalsPeople = function(){
			return this.totalTheoricalAbsolute()/this.averageEmployeeHours();
		}
		
		this.availableHoursFactor = function(){
			if(this.phase===INIT_PHASE || this.phase===TRANS_PHASE){
				return 1;
			}
			
			if(this.phase===ELAB_PHASE){
				return 3;
			}	

			if(this.phase===CONST_PHASE){
				return 5;
			}			
		}
	}
	
	$scope.sum = function(items, prop){
	    return items.reduce( function(a, b){
	        return a + parseFloat(b[prop]);
	    }, 0);
	};	
	
	//Se cuentan las horas totales de disciplina de cierta fase
	$scope.disciplineHoursTotal = function(arrayEmployee, discipline){
		var hoursTotal = parseFloat($scope.sum(arrayEmployee, discipline));
		if(isNaN(hoursTotal)){
			return 0;
		}
		return hoursTotal;
	}
	
	$scope.employeeListSelected=[];
	
	$scope.initPhase = new Phase(INIT_PHASE);
	$scope.elabPhase = new Phase(ELAB_PHASE);
	$scope.constPhase = new Phase(CONST_PHASE);
	$scope.transPhase = new Phase(TRANS_PHASE);
	
	if($isTest){
		if($scope.phaseTest==INIT_PHASE){
			$scope.initPhase.assignedEmployee = $scope.inicioAssignedEmployeeMock.employeeList;
			$scope.initPhase.numberOfAssignedPeople = $scope.inicioNumberOfAssignedPeopleMock;	
		}

		if($scope.phaseTest==ELAB_PHASE){
			$scope.elabPhase.assignedEmployee = $scope.elaboracionAssignedEmployeeMock.employeeList;
			$scope.elabPhase.numberOfAssignedPeople = $scope.elaboracionNumberOfAssignedPeopleMock;		
		}
		
		if($scope.phaseTest==CONST_PHASE){
			$scope.constPhase.assignedEmployee = $scope.construccionAssignedEmployeeMock.employeeList;
			$scope.constPhase.numberOfAssignedPeople = $scope.construccionNumberOfAssignedPeopleMock;		
		}		
		
		if($scope.phaseTest==TRANS_PHASE){
			$scope.transPhase.assignedEmployee = $scope.transicionAssignedEmployeeMock.employeeList;
			$scope.transPhase.numberOfAssignedPeople = $scope.transicionNumberOfAssignedPeopleMock;		
		}			

	}else{
		if($scope.resourcesBean.resourcesList!='undefined'){
			var projectInfo = new ProjectInfo();
			projectInfo.resourcesList = $scope.resourcesBean.resourcesList;
			projectInfo.schedule = $scope.discipline.phases.schedule;
			projectInfo.project = $scope.resourcesBean.project;
			$scope.initPhase.assignedEmployee = projectResourcesService.toEmployeeResourceList(projectInfo, $scope.initPhase);
			$scope.elabPhase.assignedEmployee = projectResourcesService.toEmployeeResourceList(projectInfo, $scope.elabPhase);
			$scope.constPhase.assignedEmployee = projectResourcesService.toEmployeeResourceList(projectInfo,$scope.constPhase);
			$scope.transPhase.assignedEmployee = projectResourcesService.toEmployeeResourceList(projectInfo, $scope.transPhase);
		}
	}
	
	//Inicialización de elementos de fase de inicio
	$scope.initPhase.projectManagementTheoricalRelative=$scope.discipline.initialPercentajeProjectManagment();
	$scope.initPhase.requirementsTheoricalRelative=$scope.discipline.initialPercentajeRequirements();
	$scope.initPhase.analysisDesignTheoricalRelative=$scope.discipline.initialPercentajeAnalysis();
	$scope.initPhase.implementationTheoricalRelative=$scope.discipline.initialPercentajeImplementation();
	$scope.initPhase.testsTheoricalRelative=$scope.discipline.initialPercentajeTests();
	$scope.initPhase.deployTheoricalRelative=$scope.discipline.initialPercentajeDeployment();
	$scope.initPhase.enviromentTheoricalRelative=$scope.discipline.initialPercentajeVersion();
	
	$scope.initPhase.projectManagementTheoricalAbsolute=$scope.discipline.initialProjectManagmentHour();
	$scope.initPhase.requirementsTheoricalAbsolute=$scope.discipline.initialRequirementsHour();
	$scope.initPhase.analysisDesignTheoricalAbsolute=$scope.discipline.initialAnalysisHour();
	$scope.initPhase.implementationTheoricalAbsolute=$scope.discipline.initialImplementationHour();
	$scope.initPhase.testsTheoricalAbsolute=$scope.discipline.initialTestsHour();
	$scope.initPhase.deployTheoricalAbsolute=$scope.discipline.initialDeploymentHour();
	$scope.initPhase.enviromentTheoricalAbsolute=$scope.discipline.initialVersionHour();	
	
	$scope.initPhase.projectManagementAssigned = $scope.disciplineHoursTotal($scope.initPhase.assignedEmployee, "projectManagementHours");
	$scope.initPhase.requirementsAssigned = $scope.disciplineHoursTotal($scope.initPhase.assignedEmployee, 'requirementsHours');
	$scope.initPhase.analysisDesignAssigned = $scope.disciplineHoursTotal($scope.initPhase.assignedEmployee, 'analysisDesignHours');
	$scope.initPhase.implementationAssigned = $scope.disciplineHoursTotal($scope.initPhase.assignedEmployee, 'implementationHours');
	$scope.initPhase.testsAssigned = $scope.disciplineHoursTotal($scope.initPhase.assignedEmployee, 'testsHours');
	$scope.initPhase.deployAssigned = $scope.disciplineHoursTotal($scope.initPhase.assignedEmployee, 'deployHours');
	$scope.initPhase.enviromentAssigned = $scope.disciplineHoursTotal($scope.initPhase.assignedEmployee, 'environmentHours');
	
	$scope.initPhase.numberOfAssignedPeople=$scope.resourcesBean.project.peopleInicio;
	
	//Inicialización de elementos de fase de elaboracion
	$scope.elabPhase.projectManagementTheoricalRelative=$scope.discipline.elaborationPercentajeProjectManagment();
	$scope.elabPhase.requirementsTheoricalRelative=$scope.discipline.elaborationPercentajeRequirements();
	$scope.elabPhase.analysisDesignTheoricalRelative=$scope.discipline.elaborationPercentajeAnalysis();
	$scope.elabPhase.implementationTheoricalRelative=$scope.discipline.elaborationPercentajeImplementation();
	$scope.elabPhase.testsTheoricalRelative=$scope.discipline.elaborationPercentajeTests();
	$scope.elabPhase.deployTheoricalRelative=$scope.discipline.elaborationPercentajeDeployment();
	$scope.elabPhase.enviromentTheoricalRelative=$scope.discipline.elaborationPercentajeVersion();
	
	$scope.elabPhase.projectManagementTheoricalAbsolute=$scope.discipline.elaborationProjectManagmentHour();
	$scope.elabPhase.requirementsTheoricalAbsolute=$scope.discipline.elaborationRequirementsHour();
	$scope.elabPhase.analysisDesignTheoricalAbsolute=$scope.discipline.elaborationAnalysisHour();
	$scope.elabPhase.implementationTheoricalAbsolute=$scope.discipline.elaborationImplementationHour();
	$scope.elabPhase.testsTheoricalAbsolute=$scope.discipline.elaborationTestsHour();
	$scope.elabPhase.deployTheoricalAbsolute=$scope.discipline.elaborationDeploymentHour();
	$scope.elabPhase.enviromentTheoricalAbsolute=$scope.discipline.elaborationVersionHour();	
	
	$scope.elabPhase.projectManagementAssigned = $scope.disciplineHoursTotal($scope.elabPhase.assignedEmployee, "projectManagementHours");
	$scope.elabPhase.requirementsAssigned = $scope.disciplineHoursTotal($scope.elabPhase.assignedEmployee, 'requirementsHours');
	$scope.elabPhase.analysisDesignAssigned = $scope.disciplineHoursTotal($scope.elabPhase.assignedEmployee, 'analysisDesignHours');
	$scope.elabPhase.implementationAssigned = $scope.disciplineHoursTotal($scope.elabPhase.assignedEmployee, 'implementationHours');
	$scope.elabPhase.testsAssigned = $scope.disciplineHoursTotal($scope.elabPhase.assignedEmployee, 'testsHours');
	$scope.elabPhase.deployAssigned = $scope.disciplineHoursTotal($scope.elabPhase.assignedEmployee, 'deployHours');
	$scope.elabPhase.enviromentAssigned = $scope.disciplineHoursTotal($scope.elabPhase.assignedEmployee, 'environmentHours');
	
	$scope.elabPhase.numberOfAssignedPeople=$scope.resourcesBean.project.peopleElaboracion;
	
	//Inicialización de elementos de fase de construccion
	$scope.constPhase.projectManagementTheoricalRelative=$scope.discipline.constructionPercentajeProjectManagment();
	$scope.constPhase.requirementsTheoricalRelative=$scope.discipline.constructionPercentajeRequirements();
	$scope.constPhase.analysisDesignTheoricalRelative=$scope.discipline.constructionPercentajeAnalysis();
	$scope.constPhase.implementationTheoricalRelative=$scope.discipline.constructionPercentajeImplementation();
	$scope.constPhase.testsTheoricalRelative=$scope.discipline.constructionPercentajeTests();
	$scope.constPhase.deployTheoricalRelative=$scope.discipline.constructionPercentajeDeployment();
	$scope.constPhase.enviromentTheoricalRelative=$scope.discipline.constructionPercentajeVersion();
	
	$scope.constPhase.projectManagementTheoricalAbsolute=$scope.discipline.constructionProjectManagmentHour();
	$scope.constPhase.requirementsTheoricalAbsolute=$scope.discipline.constructionRequirementsHour();
	$scope.constPhase.analysisDesignTheoricalAbsolute=$scope.discipline.constructionAnalysisHour();
	$scope.constPhase.implementationTheoricalAbsolute=$scope.discipline.constructionImplementationHour();
	$scope.constPhase.testsTheoricalAbsolute=$scope.discipline.constructionTestsHour();
	$scope.constPhase.deployTheoricalAbsolute=$scope.discipline.constructionDeploymentHour();
	$scope.constPhase.enviromentTheoricalAbsolute=$scope.discipline.constructionVersionHour();	
	
	$scope.constPhase.projectManagementAssigned = $scope.disciplineHoursTotal($scope.constPhase.assignedEmployee, "projectManagementHours");
	$scope.constPhase.requirementsAssigned = $scope.disciplineHoursTotal($scope.constPhase.assignedEmployee, 'requirementsHours');
	$scope.constPhase.analysisDesignAssigned = $scope.disciplineHoursTotal($scope.constPhase.assignedEmployee, 'analysisDesignHours');
	$scope.constPhase.implementationAssigned = $scope.disciplineHoursTotal($scope.constPhase.assignedEmployee, 'implementationHours');
	$scope.constPhase.testsAssigned = $scope.disciplineHoursTotal($scope.constPhase.assignedEmployee, 'testsHours');
	$scope.constPhase.deployAssigned = $scope.disciplineHoursTotal($scope.constPhase.assignedEmployee, 'deployHours');
	$scope.constPhase.enviromentAssigned = $scope.disciplineHoursTotal($scope.constPhase.assignedEmployee, 'environmentHours');
	
	$scope.constPhase.numberOfAssignedPeople=$scope.resourcesBean.project.peopleConstruccion;	
	
	//Inicialización de elementos de fase de transicion
	$scope.transPhase.projectManagementTheoricalRelative=$scope.discipline.transitionPercentajeProjectManagment();
	$scope.transPhase.requirementsTheoricalRelative=$scope.discipline.transitionPercentajeRequirements();
	$scope.transPhase.analysisDesignTheoricalRelative=$scope.discipline.transitionPercentajeAnalysis();
	$scope.transPhase.implementationTheoricalRelative=$scope.discipline.transitionPercentajeImplementation();
	$scope.transPhase.testsTheoricalRelative=$scope.discipline.transitionPercentajeTests();
	$scope.transPhase.deployTheoricalRelative=$scope.discipline.transitionPercentajeDeployment();
	$scope.transPhase.enviromentTheoricalRelative=$scope.discipline.transitionPercentajeVersion();
	
	$scope.transPhase.projectManagementTheoricalAbsolute=$scope.discipline.transitionProjectManagmentHour();
	$scope.transPhase.requirementsTheoricalAbsolute=$scope.discipline.transitionRequirementsHour();
	$scope.transPhase.analysisDesignTheoricalAbsolute=$scope.discipline.transitionAnalysisHour();
	$scope.transPhase.implementationTheoricalAbsolute=$scope.discipline.transitionImplementationHour();
	$scope.transPhase.testsTheoricalAbsolute=$scope.discipline.transitionTestsHour();
	$scope.transPhase.deployTheoricalAbsolute=$scope.discipline.transitionDeploymentHour();
	$scope.transPhase.enviromentTheoricalAbsolute=$scope.discipline.transitionVersionHour();	
	
	$scope.transPhase.projectManagementAssigned = $scope.disciplineHoursTotal($scope.transPhase.assignedEmployee, "projectManagementHours");
	$scope.transPhase.requirementsAssigned = $scope.disciplineHoursTotal($scope.transPhase.assignedEmployee, 'requirementsHours');
	$scope.transPhase.analysisDesignAssigned = $scope.disciplineHoursTotal($scope.transPhase.assignedEmployee, 'analysisDesignHours');
	$scope.transPhase.implementationAssigned = $scope.disciplineHoursTotal($scope.transPhase.assignedEmployee, 'implementationHours');
	$scope.transPhase.testsAssigned = $scope.disciplineHoursTotal($scope.transPhase.assignedEmployee, 'testsHours');
	$scope.transPhase.deployAssigned = $scope.disciplineHoursTotal($scope.transPhase.assignedEmployee, 'deployHours');
	$scope.transPhase.enviromentAssigned = $scope.disciplineHoursTotal($scope.transPhase.assignedEmployee, 'environmentHours');
	
	$scope.transPhase.numberOfAssignedPeople=$scope.resourcesBean.project.peopleTransicion;
	
	//funcion que agrega empleado al array	
	$scope.copyEmployeeToList = function(employee){
		if(employee.selected){
			$scope.employeeListSelected.push(employee);
		}
		else{
			var index = $scope.employeeListSelected.indexOf(employee);
			$scope.employeeListSelected.splice(index,1);
		}
	}
		
	//Se agrega el empleado a la fase correspondiente
	$scope.addEmployee = function(phase){
		var seen = false;
		var count = 0;
		for(var p=0;p<$scope.employeeListSelected.length;p++){
			for(var i=0;i<phase.assignedEmployee.length;i++){
				if($scope.employeeListSelected[p].id == phase.assignedEmployee[i].employee.id)
					seen = true;
			}
			if(!seen){
				var emp = new EmployeeResource($scope.employeeListSelected[p]);
				emp.availableEmployeeHours=$scope.availableEmployeeHours(phase, $scope.employeeListSelected[p]);
				phase.assignedEmployee.push(emp);
				count++;
			}
			$scope.resourcesBean.employeeList[$scope.resourcesBean.employeeList.indexOf($scope.employeeListSelected[p])].selected=false;
			$scope.selectedAll = false;
			seen = false;
		}
		if(count > 0)
			PF('growl').renderMessage({"summary":"Recursos",
            "detail":count+" Empleado(s) agregado(s) a la fase correctamente",
            "severity":"info"});
		$scope.employeeListSelected=[];
	}
	
	//Se elimina el empleado de la fase correspondiente
	$scope.deleteEmployee = function(phase, item){
		phase.assignedEmployee.splice(phase.assignedEmployee.indexOf(item), 1);		
	}
	
	$scope.checkAll = function () {
		$scope.employeeListSelected.splice(0,$scope.employeeListSelected.length);
	    angular.forEach($scope.resourcesBean.employeeList, function (employee) {
	    	employee.selected = $scope.selectedAll;
	        $scope.copyEmployeeToList(employee);
	    });
	};
	
	//Se calcula las horas asignadas del empleado perteneciente  cierta fase
	$scope.assignHours = function(employeeResource){
		var hours=parseFloat(employeeResource.projectManagementHours)+parseFloat(employeeResource.requirementsHours)+parseFloat(employeeResource.analysisDesignHours)+
		parseFloat(employeeResource.implementationHours)+parseFloat(employeeResource.testsHours)+parseFloat(employeeResource.deployHours)+parseFloat(employeeResource.environmentHours);
		if(isNaN(hours))
			return 0;
		return hours;
	}
	
	//Validaciones de asignacion de horas
	$scope.checkEmployee = function(employeeResource){
		var hours_assigned = parseFloat(employeeResource.projectManagementHours)+parseFloat(employeeResource.requirementsHours)+parseFloat(employeeResource.analysisDesignHours)+
		parseFloat(employeeResource.implementationHours)+parseFloat(employeeResource.testsHours)+parseFloat(employeeResource.deployHours)+parseFloat(employeeResource.environmentHours);
		return hours_assigned>employeeResource.availableEmployeeHours;
		
	}	
	$scope.validateProjectManagementHours=function(employeeResource){		
		if($scope.checkEmployee(employeeResource)||(isNaN(parseFloat(employeeResource.projectManagementHours))))
			employeeResource.projectManagementHours = 0;
	}
	$scope.validateRequirementsHours=function(employeeResource){		
		if($scope.checkEmployee(employeeResource)||isNaN(parseFloat(employeeResource.requirementsHours)))
			employeeResource.requirementsHours = 0;
	}
	$scope.validateAnalysisDesignHours=function(employeeResource){		
		if($scope.checkEmployee(employeeResource)||isNaN(parseFloat(employeeResource.analysisDesignHours)))
			employeeResource.analysisDesignHours = 0;
	}
	$scope.validateImplementationHours=function(employeeResource){		
		if($scope.checkEmployee(employeeResource)||isNaN(parseFloat(employeeResource.implementationHours)))
			employeeResource.implementationHours = 0;
	}
	$scope.validateTestHours=function(employeeResource){		
		if($scope.checkEmployee(employeeResource)||isNaN(parseFloat(employeeResource.testsHours)))
			employeeResource.testsHours = 0;
	}
	$scope.validateDeployHours=function(employeeResource){		
		if($scope.checkEmployee(employeeResource)||isNaN(parseFloat(employeeResource.deployHours)))
			employeeResource.deployHours = 0;
	}
	$scope.validateEnvionmentHours=function(employeeResource){
		if($scope.checkEmployee(employeeResource)||isNaN(parseFloat(employeeResource.environmentHours)))
			employeeResource.environmentHours = 0;
	}
	// Fin validaciones de asignación de horas
	
	//Fase de inicio alcula el numero de personas propuestas
	$scope.normalEmployeeHours = function(){
		//todo: refactorizar - utilizar el metodo del servicio projectResourcesService
		var averageHoursPerDay = $scope.discipline.phases.schedule.averageHoursPerDay();
		var iterationDays = $scope.resourcesBean.project.iterationDays;
		return averageHoursPerDay*iterationDays;
	}	
	

	$scope.availableEmployeeHours = function(phase, employee){
		//todo: refactorizar - utilizar el metodo del servicio projectResourcesService
		var numberOfVacationDays = 0;
		if(typeof employee.vacations!== 'undefined'){
			if(employee.vacations.length>0){
				for(i=0; i<employee.vacations.length; i++){
					//todo: calcular las vacaciones!
					numberOfVacationDays = DateUtils.dateDiffInDays(employee.vacations[i].start, employee.vacations[i].end);
				}
			}
		}
		numberOfVacationDays = 0;
		return $scope.normalEmployeeHours()*phase.availableHoursFactor();
	}	
	
	var arrayRoles = ["PROJECT_MANAGEMENT", "REQUIREMENTS", "ANALYSIS_DESIGN", "IMPLEMENTATION", "TESTS", "DEPLOY", "ENVIROMENT_REVISION_CONTROL"];
	
	//calcula el salario por hora de un empleado
	$scope.employeeSalaryHour = function(employee){
		var annualSalary = EmployeeUtils.totalAnnualSalary(employee);
		var monthlySalary = annualSalary/$scope.discipline.phases.schedule.monthsPerYear;
		var dailySalary = monthlySalary/$scope.discipline.phases.schedule.workDays;
		return dailySalary/$scope.discipline.phases.schedule.hoursPerDay();
	}
	
	//verifica si un empleado tiene un rol
	$scope.employeeHasRole = function(employee, role){
		return EmployeeUtils.hasRole(employee, role);
	}
	
	//cuenta el numero de empleados con rol project management
	$scope.numberOfProjectManagement = function(){
		var POSITION_OF_ROLE = 0;
		return EmployeeUtils.countNumberOfRoles($scope.resourcesBean.employeeList,arrayRoles[POSITION_OF_ROLE]);
	}

	//cuenta el numero de empleados con rol requirements
	$scope.numberOfRequirements = function(){
		var POSITION_OF_ROLE = 1;
		return EmployeeUtils.countNumberOfRoles($scope.resourcesBean.employeeList, arrayRoles[POSITION_OF_ROLE]);
	}	
	
	//cuenta el numero de empleados con rol analysis
	$scope.numberOfAnalysisDesign = function(){
		var POSITION_OF_ROLE = 2;
		return EmployeeUtils.countNumberOfRoles($scope.resourcesBean.employeeList, arrayRoles[POSITION_OF_ROLE]);
	}	
	
	//cuenta el numero de empleados con rol implementation
	$scope.numberOfImplementation = function(){
		var POSITION_OF_ROLE = 3;
		return EmployeeUtils.countNumberOfRoles($scope.resourcesBean.employeeList, arrayRoles[POSITION_OF_ROLE]);
	}	
	
	//cuenta el numero de empleados con rol test
	$scope.numberOfTests = function(){
		var POSITION_OF_ROLE = 4;
		return EmployeeUtils.countNumberOfRoles($scope.resourcesBean.employeeList, arrayRoles[POSITION_OF_ROLE]);
	}	
	
	//cuenta el numero de empleados con rol deploy
	$scope.numberOfDeploy = function(){
		var POSITION_OF_ROLE = 5;
		return EmployeeUtils.countNumberOfRoles($scope.resourcesBean.employeeList, arrayRoles[POSITION_OF_ROLE]);
	}		
	
	//cuenta el numero de empleados con rol enviroment
	$scope.numberOfEnviroment = function(){
		var POSITION_OF_ROLE = 6;
		return EmployeeUtils.countNumberOfRoles($scope.resourcesBean.employeeList, arrayRoles[POSITION_OF_ROLE]);
	}
	
	//calcula el coste de cada empleado
	totalAssignedHoursEmployee = function(employeeResource){
		return parseFloat(employeeResource.projectManagementHours)+parseFloat(employeeResource.requirementsHours)+parseFloat(employeeResource.analysisDesignHours)+
		parseFloat(employeeResource.implementationHours)+parseFloat(employeeResource.testsHours)+parseFloat(employeeResource.deployHours)+parseFloat(employeeResource.environmentHours);;
	}
	
	$scope.employeeCost = function(employeeResource){
		return $scope.employeeSalaryHour(employeeResource.employee)*totalAssignedHoursEmployee(employeeResource);
	}
	
	function pushToDataArray(employees, data, tagPhase){
		for(var i=0; i< employees.length;i++){
        	data.push({project:{id:$scope.resourcesBean.project.id}, employee: employees[i].employee, workHours: employees[i].projectManagementHours, phase:tagPhase, role:arrayRoles[0]});
        	data.push({project:{id:$scope.resourcesBean.project.id}, employee: employees[i].employee, workHours: employees[i].requirementsHours, phase:tagPhase, role:arrayRoles[1]});
        	data.push({project:{id:$scope.resourcesBean.project.id}, employee: employees[i].employee, workHours: employees[i].analysisDesignHours, phase:tagPhase, role:arrayRoles[2]});
        	data.push({project:{id:$scope.resourcesBean.project.id}, employee: employees[i].employee, workHours: employees[i].implementationHours, phase:tagPhase, role:arrayRoles[3]});
        	data.push({project:{id:$scope.resourcesBean.project.id}, employee: employees[i].employee, workHours: employees[i].testsHours, phase:tagPhase, role:arrayRoles[4]});
        	data.push({project:{id:$scope.resourcesBean.project.id}, employee: employees[i].employee, workHours: employees[i].deployHours, phase:tagPhase, role:arrayRoles[5]});
        	data.push({project:{id:$scope.resourcesBean.project.id}, employee: employees[i].employee, workHours: employees[i].environmentHours, phase:tagPhase, role:arrayRoles[6]});
        }
	}
	
	//servicio rest
	$scope.saveHoursRolePhaseArray = function(){
		var data = [];
        var dataHours = [];
        pushToDataArray($scope.initPhase.assignedEmployee, dataHours, "INICIO");
        pushToDataArray($scope.elabPhase.assignedEmployee, dataHours, "ELABORACION");
        pushToDataArray($scope.transPhase.assignedEmployee, dataHours, "CONSTRUCCION");
        pushToDataArray($scope.constPhase.assignedEmployee, dataHours, "TRANSICION");
        
        var dataProposals = [];
        dataProposals.push($scope.initPhase.numberOfAssignedPeople);
        dataProposals.push($scope.elabPhase.numberOfAssignedPeople);
        dataProposals.push($scope.constPhase.numberOfAssignedPeople);
        dataProposals.push($scope.transPhase.numberOfAssignedPeople);
        
        data.push({hoursRolePhase:dataHours, peoplePhase:dataProposals});

		$http.post('/PFM/rest/Employees/Save', data).
		    success(function(data, status, headers, config) {
		    	PF('growl').renderMessage({"summary":"Recursos",
		            "detail":"Se han guardado los recursos correctamente",
		            "severity":"info"});
		    }).
		    error(function(data, status, headers, config) {
		    	PF('growl').renderMessage({"summary":"Recursos",
		            "detail":"Se ha producido un error al guardar los recursos",
		            "severity":"error"});
		    })
	}	
	$scope.resourceFinished = true;
}]);	
