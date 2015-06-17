/**
 * AngularJS resourceController
 */

projectApp.controller("resourceController", ['$scope', '$isTest', 'bridgeService', 'workTimeService', 'EmployeeUtils', 'DateUtils', function ($scope, $isTest, bridgeService, workTimeService, EmployeeUtils, DateUtils) {
	$scope.discipline = bridgeService.shareData;
	if(!$isTest){
		  initJSFScope($scope);
		  workTimeService.calculateWorkDaysAndHour($scope.resourcesBean.project.startString, 
				  $scope.resourcesBean.project.endString, $scope.discipline.phases.schedule.listHoursEachDay());
	}
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
			return ($scope.disciplineHoursTotal($scope.initPhase.assignedEmployee, "projectManagementHours")+$scope.disciplineHoursTotal($scope.initPhase.assignedEmployee, 'requirementsHours')
			+$scope.disciplineHoursTotal($scope.initPhase.assignedEmployee, 'analysisDesignHours')+$scope.disciplineHoursTotal($scope.initPhase.assignedEmployee, 'implementationHours')
			+$scope.disciplineHoursTotal($scope.initPhase.assignedEmployee, 'testsHours')+$scope.disciplineHoursTotal($scope.initPhase.assignedEmployee, 'deployHours')
			+$scope.disciplineHoursTotal($scope.initPhase.assignedEmployee, 'environmentHours'));
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
	
	//Se cuentan las horas totales de disciplina de cierta fase
	$scope.disciplineHoursTotal = function(arrayEmployee, discipline){
		var hoursTotal = parseFloat($scope.sum(arrayEmployee, discipline));
		if(isNaN(hoursTotal)){
			return 0;
		}
		return hoursTotal;
	}
	
	$scope.employeeListSelected=[];
	
	$scope.elabPhase = new Phase(ELAB_PHASE);
	$scope.constPhase = new Phase(CONST_PHASE);
	$scope.transPhase = new Phase(TRANS_PHASE);
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
	
	$scope.initPhase.projectManagementAssigned = $scope.disciplineHoursTotal($scope.initPhase.assignedEmployee, "projectManagementHours");
	$scope.initPhase.requirementsAssigned = $scope.disciplineHoursTotal($scope.initPhase.assignedEmployee, 'requirementsHours');
	$scope.initPhase.analysisDesignAssigned = $scope.disciplineHoursTotal($scope.initPhase.assignedEmployee, 'analysisDesignHours');
	$scope.initPhase.implementationAssigned = $scope.disciplineHoursTotal($scope.initPhase.assignedEmployee, 'implementationHours');
	$scope.initPhase.testsAssigned = $scope.disciplineHoursTotal($scope.initPhase.assignedEmployee, 'testsHours');
	$scope.initPhase.deployAssigned = $scope.disciplineHoursTotal($scope.initPhase.assignedEmployee, 'deployHours');
	$scope.initPhase.enviromentAssigned = $scope.disciplineHoursTotal($scope.initPhase.assignedEmployee, 'environmentHours');
		
	
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
				$scope.employeeListSelected[p].availableHours = $scope.availableEmployeeHours(phase, $scope.employeeListSelected[p]);
				phase.assignedEmployee.push(new EmployeeResource($scope.employeeListSelected[p]));
				count++;
			}
			seen = false;
		}
		if(count > 0)
			PF('growl').renderMessage({"summary":"Recursos",
            "detail":count+" Empleado(s) agregado(s) a la fase correctamente",
            "severity":"info"});
	}
	
	//Se elimina el empleado de la fase correspondiente
	$scope.deleteEmployee = function(phase, item){
		phase.assignedEmployee.splice(phase.assignedEmployee.indexOf(item), 1);		
	}
	
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
		 
        for(employeeHours in $scope.initPhase.assignedEmployee){
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.projectMesignHours, phase:"INICIO", role:"PROJECT_MANAGEMENT"});
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.requirementsHours, phase:"INICIO", role:"REQUIREMENTS"});
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.analysisDementationHours, phase:"INICIO", role:"ANALYSIS_DESIGN"});
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.implanagementHours, phase:"INICIO", role:"IMPLEMENTATION"});
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.testsTheoricalRelative, phase:"INICIO", role:"TEST"});
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.deployTheoricalRelative, phase:"INICIO", role:"DEPLOY"});
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.environmentHours, phase:"INICIO", role:"ENVIRONMENT_REVISION_CONTROL"});
        }
        
        for(employeeHours in $scope.elabPhase.assignedEmployee){
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.projectMesignHours, phase:"ELABORACION", role:"PROJECT_MANAGEMENT"});
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.requirementsHours, phase:"ELABORACION", role:"REQUIREMENTS"});
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.analysisDementationHours, phase:"ELABORACION", role:"ANALYSIS_DESIGN"});
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.implanagementHours, phase:"ELABORACION", role:"IMPLEMENTATION"});
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.testsTheoricalRelative, phase:"ELABORACION", role:"TEST"});
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.deployTheoricalRelative, phase:"ELABORACION", role:"DEPLOY"});
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.environmentHours, phase:"ELABORACION", role:"ENVIRONMENT_REVISION_CONTROL"});
        }
        
        for(employeeHours in $scope.constPhase.assignedEmployee){
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.projectMesignHours, phase:"CONSTRUCCION", role:"PROJECT_MANAGEMENT"});
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.requirementsHours, phase:"CONSTRUCCION", role:"REQUIREMENTS"});
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.analysisDementationHours, phase:"CONSTRUCCION", role:"ANALYSIS_DESIGN"});
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.implanagementHours, phase:"CONSTRUCCION", role:"IMPLEMENTATION"});
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.testsTheoricalRelative, phase:"CONSTRUCCION", role:"TEST"});
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.deployTheoricalRelative, phase:"CONSTRUCCION", role:"DEPLOY"});
        	data.push({project:{id:1}, employee: employeeHours.employee, workHours: employeeHours.environmentHours, phase:"CONSTRUCCION", role:"ENVIRONMENT_REVISION_CONTROL"});
        }
        
        for(employeeHours in $scope.transPhase.assignedEmployee){
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