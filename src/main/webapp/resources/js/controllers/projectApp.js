projectApp.factory('broadcastService', function($rootScope) {
    var sharedService = {};
    
    sharedService.data = '';

    sharedService.prepForBroadcast = function(msg) {
        this.data = msg;
        this.broadcastItem();
    };

    sharedService.broadcastItem = function() {
        $rootScope.$broadcast('handleBroadcast');
    };

    return sharedService;
});

projectApp.service('bridgeService', function(){
	
	var svc={};
	
	svc.shareData = {};
	
	return svc;
});

projectApp.service("workTimeService", function(){

	var workingDays = 0;
	var workingHours = 0;
	var naturalDays = 0;
	
	function validateDateFormat(startString, endString){
		var re = new RegExp("[0-9]{1,2}/[0-9]{1,2}/[0-9]{4}");		
		return (startString).match(re) && (endString).match(re)
	}
	
	this.calculateWorkDaysAndHour = function(startString, endString, listHoursEachDay ){
		var days=0, hours=0;	
		start = moment(startString, "DD/MM/YYYY");
		end = moment(endString, "DD/MM/YYYY");
		if(validateDateFormat(startString, endString) && ((start.isValid() && end.isValid()) && start.isBefore(end))){
			  end = end.add(1,"days");
			  for (var m = moment(start); m.isBefore(end); m.add(1, "days")) {
				  var workHours = listHoursEachDay[m.day()].workHours;
				  if(workHours>0){
					  days++;
				  	  hours+=workHours;
				  }
			  }
			  naturalDays= end.diff(start,"days");
			  workingDays = days;
			  workingHours = hours;
		  }
		  else{
			  naturalDays = 0;			  
		  }
	}
	
	this.workHours = function(){
		return workingHours;
	}
	
	this.workDays = function(){
		return workingDays;
	}
	
	this.naturalDays = function(){
		return naturalDays;
	}
	
	this.workMonths = function(workDaysMonth){
		  return workingDays/workDaysMonth;
	}
});
projectApp.service("DateUtils", function(){
	
	this.isBetween = function(test, start, end) {
    	
    	start = moment(start).set('hour',10);
    	end = moment(end).set('hour',10);
    	test = moment.utc(test).set('hour', 10);
    	
    	var between = test.isAfter(start, 'day') && test.isBefore(end, 'day');
    	var sameStart = test.diff(start, 'days') == 0; //test.isSame(start, 'day');
    	var sameEnd = test.diff(end, 'days') == 0; //test.isSame(end, 'day');
    	return between || sameStart  || sameEnd;
    }
	
	this.dateDiffInDays = function(start, end) {
		start = moment(start,"DD/MM/YYYY HH:mm:ss");
		end = moment(end,"DD/MM/YYYY HH:mm:ss");
		var ms = moment.utc(end).diff(start);
		var d = moment.duration(ms);
		return Math.floor(d.asDays());
	}
	
	var DATE_FORMAT = "DD/MM/YYYY";
	this.moment = function(date){
		return moment(date, DATE_FORMAT);
	}

});

projectApp.service("EmployeeUtils", function(){
	
	Array.prototype.contains = function(obj) {
	    var i = this.length;
	    while (i--) {
	        if (this[i] === obj) {
	            return true;
	        }
	    }
	    return false;
	}
	
	this.totalAnnualSalary = function(employee){
		return employee.annualGrossSalary+(employee.annualGrossSalary*(employee.contract.insurance/100));
	}
	
	this.numberOfEmployees = function(employeeList){
		return employeeList.length;
	}	
	
	this.countNumberOfRoles = function(employeeList, role){
		var result = 0;
		var numberOfRoles = 1;
		for(i=0; i<this.numberOfEmployees(employeeList); i++){
			if(this.hasRole(employeeList[i],role)){
				result++;
			}
		}
		return result;
	}
	
	this.hasRole = function(employee, role){
		var result = false;
		if(employee.roles.contains(role)){
			result = true;
		}
		return result;
	}	
});
projectApp.service("projectResourcesService", function(){
	Array.prototype.unique = function() {
	    var a = [], l = this.length;
	    for(var i=0; i<l; i++) {
	      for(var j=i+1; j<l; j++)
	            if (this[i].id === this[j].id) j = ++i;
	      a.push(this[i]);
	    }
	    return a;
	};	
	
	Array.prototype.exists = function(employee) {
	    var a = [], l = this.length;
	    for(var i=0; i<l; i++) {
	    	if (this[i].id === employee.id){
	    		return true;
	    	}
	    }
	    return false;
	};	
	
	function mapPhaseStrToPhaseEnum(phaseStr){
		if(phaseStr==="INIT"){
			return "INICIO";
		}
		if(phaseStr==="ELAB"){
			return "ELABORACION";
		}
		if(phaseStr==="CONST"){
			return "CONSTRUCCION";
		}
		if(phaseStr==="TRANS"){
			return "TRANSICION";
		}
	}
	
	function convertFromHourRolePhaseToEmployeeResource(employeeResource, resource){
		if(resource.role==='PROJECT_MANAGEMENT'){
			employeeResource.projectManagementHours = resource.workHours;
		}
		if(resource.role==='REQUIREMENTS'){
			employeeResource.requirementsHours = resource.workHours;
		}
		if(resource.role==='ANALYSIS_DESIGN'){
			employeeResource.analysisDesignHours = resource.workHours;
		}
		if(resource.role==='IMPLEMENTATION'){
			employeeResource.implementationHours = resource.workHours;
		}
		if(resource.role==='TESTS'){
			employeeResource.testsHours = resource.workHours;
		}
		if(resource.role==='DEPLOY'){
			employeeResource.deployHours = resource.workHours;
		}
		if(resource.role==='ENVIROMENT_REVISION_CONTROL'){
			employeeResource.environmentHours = resource.workHours;
		}
		
	}
	
	function getEmployeeList(resourcesList){
		var employeeList = [];
		resourcesList.map(function(resource){
			var employee = resource.employee;
			employeeList.push(employee);
		});

		employeeList = employeeList.unique();
		return employeeList;
	}
	
	
	function normalEmployeeHours(projectInfo){
		var averageHoursPerDay = projectInfo.schedule.averageHoursPerDay();
		var iterationDays = projectInfo.project.iterationDays;
		return averageHoursPerDay*iterationDays;
	}
	
	function availableEmployeeHours(projectInfo, phase, employee){
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
		return normalEmployeeHours(projectInfo)*phase.availableHoursFactor();
	}	

	this.toEmployeeResourceList = function(projectInfo, phase) {
		var employeeList = getEmployeeList(projectInfo.resourcesList);
		var employeeResourceList = [];
		
		employeeList.map(function(employee){
			var employeeResource = new EmployeeResource();
			var existsInPhase = false;
			projectInfo.resourcesList.map(function(resource){
				if(resource.Phases===mapPhaseStrToPhaseEnum(phase.phase) && resource.employee.id===employee.id){
					employeeResource.availableEmployeeHours = availableEmployeeHours(projectInfo, phase, employee);
					employeeResource.employee = employee;
					employeeResource.hourlyCost = employeeSalaryHour(employee, projectInfo.schedule);
					convertFromHourRolePhaseToEmployeeResource(employeeResource, resource);
					existsInPhase = true;
				}
			})
			if(existsInPhase){
				employeeResourceList.push(employeeResource);
			}
		});
		
		return employeeResourceList;
    }
	
	
	function employeeSalaryHour (employee, projectSchedule){
		
		var annualSalary = employee.annualGrossSalary;
		var monthlySalary = annualSalary/12;
		var dailySalary = monthlySalary/projectSchedule.workDays;
		return dailySalary/projectSchedule.averageHoursPerDay();
	}
	
	function EmployeeResource(){
		this.employee = null;
		this.hourlyCost = 0;
		this.projectManagementHours=0;
		this.requirementsHours=0;
		this.analysisDesignHours=0;
		this.implementationHours=0;
		this.testsHours=0;
		this.deployHours=0;
		this.environmentHours=0;
		this.availableEmployeeHours = 0;
		this.totalHours = function(){
			return this.projectManagementHours + 
			this.requirementsHours + 
			this.analysisDesignHours +  
			this.implementationHours +
			this.testsHours +
			this.deployHours +
			this.environmentHours;
			
		}
	}

});
