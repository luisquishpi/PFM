/**
 * AngularJS resourceController
 */

projectApp.controller("resourceController", ['$scope', '$http', '$isTest', 'bridgeService', 'workTimeService', 'EmployeeUtils', 'DateUtils',  function ($scope, $http, $isTest, bridgeService, workTimeService, EmployeeUtils, DateUtils) {  
		
	function EmployeeResource(employee){
		this.employee = employee;
		this.projectMesignHours=0;
		this.requirementsHours=0;
		this.analysisDementationHours=0;
		this.implanagementHours=0;
		this.testsHours=0;
		this.deployHours=0;
		this.environmentHours=0;
		this.availableEmployeeHours=0;
	}
	
	function Phase(){
		this.assignedEmployees=[];
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
	}
	
	$scope.discipline = bridgeService.shareData;
	$scope.employeeListSelected=[];
	
	//Inicialización de elementos de fase de inicio
	$scope.initPhase = new Phase();
	$scope.initPhase.projectManagementTheoricalRelative=$scope.discipline.initialPercentajeProjectManagment();
	$scope.initPhase.requirementsTheoricalRelative=$scope.discipline.initialPercentajeRequirements();
	$scope.initPhase.analysisDesignTheoricalRelative=$scope.discipline.initialPercentajeAnalysis();
	$scope.initPhase.implementationTheoricalRelative=$scope.discipline.initialPercentajeImplementation();
	$scope.initPhase.testsTheoricalRelative=$scope.discipline.initialPercentajeTests();
	$scope.initPhase.deployTheoricalRelative=$scope.discipline.initialPercentajeDeployment();
	$scope.initPhase.enviromentTheoricalRelative=$scope.discipline.initialPercentajeVersion();
	
	$scope.elabPhase = new Phase();
	$scope.transPhase = new Phase();
	$scope.constPhase = new Phase();
	
	
	//verifica si un empleado tiene un rol
	$scope.employeeHasRole = function(employee, role){
		return EmployeeUtils.hasRole(employee, role);
	}
	
	
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
			for(var i=0;i<phase.assignedEmployees.length;i++){
				if($scope.employeeListSelected[p].id == phase.assignedEmployees[i].employee.id)
					seen = true;
			}
			if(!seen){
				$scope.employeeListSelected[p].availableHours = $scope.availableEmployeeHours(phase, $scope.employeeListSelected[p]);
				phase.assignedEmployees.push(new EmployeeResource($scope.employeeListSelected[p]));
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
		phase.assignedEmployees.splice(phase.assignedEmployees.indexOf(item), 1);		
	}
	
	//Se calcula las horas asignadas del empleado perteneciente  cierta fase
	$scope.assignHours = function(employeeResource){
		var hoursTotal = parseFloat(employeeResource.projectManagementHours)+parseFloat(employeeResource.requirementsHours)+parseFloat(employeeResource.analysisDesignHours)+
		parseFloat(employeeResource.implementationHours)+parseFloat(employeeResource.testsHours)+parseFloat(employeeResource.deployHours)+parseFloat(employeeResource.environmentHours);
		if(isNaN(hoursTotal))
			return 0;
		return hoursTotal;
	}
	
	
	$scope.sum = function(items, prop){
	    return items.reduce( function(a, b){
	        return a + parseFloat(b[prop]);
	    }, 0);
	};
	
	//Se cuentan las horas totales de disciplina de cierta fase
	$scope.disciplineHoursTotal = function(phase, discipline){
		var hoursTotal = parseFloat($scope.sum(phase.assignedEmployees, discipline));
		if(isNaN(hoursTotal))
			return 0;
		return hoursTotal;
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