/**
 * AngularJS resourceController
 */

projectApp.controller("resourceController", ['$scope', '$isTest', 'bridgeService', 'workTimeService', 'EmployeeUtils', 'DateUtils', function ($scope, $isTest, bridgeService, workTimeService, EmployeeUtils, DateUtils) {  
		
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
}]);	