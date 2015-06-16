/**
 * AngularJS resourceController
 */

projectApp.controller("resourceController", ['$scope', '$isTest', 'bridgeService', 'workTimeService', 'EmployeeUtils', 'DateUtils', function ($scope, $isTest, bridgeService, workTimeService, EmployeeUtils, DateUtils) {
	if(!$isTest){
		  initJSFScope($scope);
		  workTimeService.calculateWorkDaysAndHour($scope.resourcesBean.project.startString, 
				  $scope.resourcesBean.project.endString, $scope.discipline.phases.schedule.listHoursEachDay());
	}
	var INIT_PHASE = "INIT";
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
	
	function Phase(phase){
		this.phase = phase;
		this.assignedEmployee = [];
		this.numberOfAssignedPeople;

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
			return this.projectManagementAssigned+ this.requirementsAssigned+ 
				this.analysisDesignAssigned+ this.implementationAssigned+ 
				this.testsAssigned+this.deployAssigned+this.enviromentAssigned;
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
			return (this.projectManagementAssigned/this.projectManagementTheoricalAbsolute)*100;
		}
		
		this.requirementsRelativeDifference = function(){
			return (this.requirementsAssigned/this.requirementsTheoricalAbsolute)*100;
		}
		
		this.analysisDesignRelativeDifference = function(){
			return (this.analysisDesignAssigned/this.analysisDesignTheoricalAbsolute)*100;
		}
		
		this.implementationRelativeDifference = function(){
			return (this.implementationAssigned/this.implementationTheoricalAbsolute)*100;
		}
		
		this.testsRelativeDifference = function(){
			return (this.testsAssigned/this.testsTheoricalAbsolute)*100;
		}
		
		this.deployRelativeDifference = function(){
			return (this.deployAssigned/this.deployTheoricalAbsolute)*100;
		}
		
		this.enviromentRelativeDifference = function(){
			return (this.enviromentAssigned/this.enviromentTheoricalAbsolute)*100;
		}		
		
		this.totalRelativeDifference = function(){
			return (this.totalAssigned()/this.totalTheoricalAbsolute())*100;;
		}	
		
		this.projectManagementProposal = function(){
			return (this.projectManagementTheoricalRelative*this.totalTheoricalAbsolute()*this.numberOfAssignedPeople)/(this.numberOfProposalsPeople()*100);
		}	
		
		this.requirementsProposal = function(){
			return (this.requirementsTheoricalRelative*this.totalTheoricalAbsolute()*this.numberOfAssignedPeople)/(this.numberOfProposalsPeople()*100);
		}	
		
		this.analysisDesignProposal = function(){
			return (this.analysisDesignTheoricalRelative*this.totalTheoricalAbsolute()*this.numberOfAssignedPeople)/(this.numberOfProposalsPeople()*100);
		}
		
		this.implementationProposal = function(){
			return (this.implementationTheoricalRelative*this.totalTheoricalAbsolute()*this.numberOfAssignedPeople)/(this.numberOfProposalsPeople()*100);
		}	
		
		this.testsProposal = function(){
			return (this.testsTheoricalRelative*this.totalTheoricalAbsolute()*this.numberOfAssignedPeople)/(this.numberOfProposalsPeople()*100);
		}	
		
		this.deployProposal = function(){
			return (this.deployTheoricalRelative*this.totalTheoricalAbsolute()*this.numberOfAssignedPeople)/(this.numberOfProposalsPeople()*100);
		}	
		
		this.enviromentProposal = function(){
			return (this.enviromentTheoricalRelative*this.totalTheoricalAbsolute()*this.numberOfAssignedPeople)/(this.numberOfProposalsPeople()*100);
		}
		
		this.totalProposal = function(){
			return this.projectManagementProposal()+this.requirementsProposal()+
			this.analysisDesignProposal()+this.implementationProposal()+
			this.testsProposal()+this.deployProposal()+this.enviromentProposal();
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
				totalEmployeeHours += $scope.availableEmployeeHours(phase,$scope.resourcesBean.employeeList[i]);
			}
			return totalEmployeeHours/($scope.resourcesBean.employeeList.length-1);
		};
		
		this.availableEmployeeHours = function(employee){
			return $scope.availableEmployeeHours(this.phase, employee);
		}
		
		this.numberOfProposalsPeople = function(){
			return this.totalTheoricalAbsolute()/this.averageEmployeeHours();
		}
		
	}
	
	$scope.sum = function(items, prop){
	    return items.reduce( function(a, b){
	        return a + parseFloat(b[prop]);
	    }, 0);
	};	
	
	calculateAssigned = function(employeeList, phase){
		return parseFloat($scope.sum(employeeList, phase));
	}	
	
	$scope.discipline = bridgeService.shareData;
	$scope.employeeListSelected=[];

	//Inicialización de elementos de fase de inicio
	$scope.initPhase = new Phase(INIT_PHASE);
	
	if($isTest){
		$scope.initPhase.assignedEmployee = $scope.inicioAssignedEmployeeMock.employeeList;
		$scope.initPhase.numberOfAssignedPeople = $scope.inicioNumberOfAssignedPeopleMock;
	}
	

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
	
	$scope.initPhase.projectManagementAssigned = calculateAssigned($scope.initPhase.assignedEmployee, 'projectManagementHours');
	$scope.initPhase.requirementsAssigned = calculateAssigned($scope.initPhase.assignedEmployee, 'requirementsHours');
	$scope.initPhase.analysisDesignAssigned = calculateAssigned($scope.initPhase.assignedEmployee, 'analysisDesignHours');
	$scope.initPhase.implementationAssigned = calculateAssigned($scope.initPhase.assignedEmployee, 'implementationHours');
	$scope.initPhase.testsAssigned = calculateAssigned($scope.initPhase.assignedEmployee, 'testsHours');
	$scope.initPhase.deployAssigned = calculateAssigned($scope.initPhase.assignedEmployee, 'deployHours');
	$scope.initPhase.enviromentAssigned = calculateAssigned($scope.initPhase.assignedEmployee, 'environmentHours');
	
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
		for(var p=0;p<$scope.employeeListSelected.length;p++){
			for(var i=0;i<phase.assignedEmployees.length;i++){
				if($scope.employeeListSelected[p].id == phase.assignedEmployees[i].employee.id)
					seen = true;
			}
			if(!seen){
				$scope.employeeListSelected[p].availableHours = $scope.availableEmployeeHours(phase, $scope.employeeListSelected[p]);
				phase.assignedEmployees.push(new EmployeeResource($scope.employeeListSelected[p]));
				PF('growl').renderMessage({"summary":"Recursos",
		            "detail":"Empleado "+$scope.employeeListSelected[p].name+" agregado a fase correctamente",
		            "severity":"info"});
			}
			seen = false;
		}
	}
	
	//Se elimina el empleado de la fase correspondiente
	$scope.deleteEmployee = function(phase, item){
		phase.assignedEmployees.splice(phase.assignedEmployees.indexOf(item), 1);		
	}
	
	//Se calcula las horas asignadas del empleado perteneciente  cierta fase
	$scope.assignHours = function(employeeResource){
		return parseFloat(employeeResource.projectManagementHours)+parseFloat(employeeResource.requirementsHours)+parseFloat(employeeResource.analysisDesignHours)+
		parseFloat(employeeResource.implementationHours)+parseFloat(employeeResource.testsHours)+parseFloat(employeeResource.deployHours)+parseFloat(employeeResource.environmentHours);
	}
	
	//Se cuentan las horas totales de disciplina de cierta fase
	$scope.disciplineHoursTotal = function(phase, discipline){
		return parseFloat($scope.sum(phase.assignedEmployees, discipline));
	}
	
	//Validaciones de asignacion de horas
	$scope.checkEmployee = function(employeeResource){
		var hours_assigned = parseFloat(employeeResource.projectManagementHours)+parseFloat(employeeResource.requirementsHours)+parseFloat(employeeResource.analysisDesignHours)+
		parseFloat(employeeResource.implementationHours)+parseFloat(employeeResource.testsHours)+parseFloat(employeeResource.deployHours)+parseFloat(employeeResource.environmentHours);
		return hours_assigned>employeeResource.employee.availableHours;
		
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
		var averageHoursPerDay = $scope.discipline.phases.schedule.averageHoursPerDay();
		var iterationDays = $scope.resourcesBean.project.iterationDays;
		return averageHoursPerDay*iterationDays;
	}	
	
	$scope.nmlEmployeeHours = $scope.normalEmployeeHours();
	
	$scope.availableEmployeeHours = function(phase, employee){
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
		return $scope.nmlEmployeeHours;
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
	
	//servicio rest
	$scope.saveHoursRolePhaseArray = function(){
        var data = [];
		 
        for(employeeHours in $scope.initPhase.assignedEmployees){
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.projectMesignHours, phase:"INICIO", role:"PROJECT_MANAGEMENT"});
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.requirementsHours, phase:"INICIO", role:"REQUIREMENTS"});
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.analysisDementationHours, phase:"INICIO", role:"ANALYSIS_DESIGN"});
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.implanagementHours, phase:"INICIO", role:"IMPLEMENTATION"});
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.testsTheoricalRelative, phase:"INICIO", role:"TEST"});
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.deployTheoricalRelative, phase:"INICIO", role:"DEPLOY"});
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.environmentHours, phase:"INICIO", role:"ENVIRONMENT_REVISION_CONTROL"});
        }
        
        for(employeeHours in $scope.elabPhase.assignedEmployees){
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.projectMesignHours, phase:"ELABORACION", role:"PROJECT_MANAGEMENT"});
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.requirementsHours, phase:"ELABORACION", role:"REQUIREMENTS"});
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.analysisDementationHours, phase:"ELABORACION", role:"ANALYSIS_DESIGN"});
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.implanagementHours, phase:"ELABORACION", role:"IMPLEMENTATION"});
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.testsTheoricalRelative, phase:"ELABORACION", role:"TEST"});
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.deployTheoricalRelative, phase:"ELABORACION", role:"DEPLOY"});
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.environmentHours, phase:"ELABORACION", role:"ENVIRONMENT_REVISION_CONTROL"});
        }
        
        for(employeeHours in $scope.constrPhase.assignedEmployees){
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.projectMesignHours, phase:"CONSTRUCCION", role:"PROJECT_MANAGEMENT"});
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.requirementsHours, phase:"CONSTRUCCION", role:"REQUIREMENTS"});
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.analysisDementationHours, phase:"CONSTRUCCION", role:"ANALYSIS_DESIGN"});
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.implanagementHours, phase:"CONSTRUCCION", role:"IMPLEMENTATION"});
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.testsTheoricalRelative, phase:"CONSTRUCCION", role:"TEST"});
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.deployTheoricalRelative, phase:"CONSTRUCCION", role:"DEPLOY"});
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.environmentHours, phase:"CONSTRUCCION", role:"ENVIRONMENT_REVISION_CONTROL"});
        }
        
        for(employeeHours in $scope.transPhase.assignedEmployees){
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.projectMesignHours, phase:"TRANSICION", role:"PROJECT_MANAGEMENT"});
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.requirementsHours, phase:"TRANSICION", role:"REQUIREMENTS"});
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.analysisDementationHours, phase:"TRANSICION", role:"ANALYSIS_DESIGN"});
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.implanagementHours, phase:"TRANSICION", role:"IMPLEMENTATION"});
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.testsTheoricalRelative, phase:"TRANSICION", role:"TEST"});
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.deployTheoricalRelative, phase:"TRANSICION", role:"DEPLOY"});
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.environmentHours, phase:"TRANSICION", role:"ENVIRONMENT_REVISION_CONTROL"});
        }
        
		$http.post('/PFM/rest/Employees/Save', data).
		    success(function(data, status, headers, config) {
		      $scope.message = JSON.stringify(data);
		    }).
		    error(function(data, status, headers, config) {
		      // log error
		    })
	}	

}]);	