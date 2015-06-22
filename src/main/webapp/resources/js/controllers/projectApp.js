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
projectApp.service("ProjectResourcesService", function(){
	
	this.toEmployeeResourceList = function(hoursRolePhaseList, projectSchedule, phase) {
    	/*var list = [];
    	/*var availability = projectSchedule.averageHoursPerDay() * projectSchedule.project.iterationDays; 
    	hoursRolePhaseList.forEach(function logArrayElements(element, index, array) {
    	    
    	});
    	return list;*/
		return [
        { employee : { id : 1},
        	hourlyCost : 12,
			projectManagementHours : 20,
			requirementsHours : 40,
			analysisDesignHours : 20,
			implementationHours : 0,
			testsHours : 0,
			deployHours : 20,
			environmentHours : 0,
			totalHours : function(){ return 100 },
			availableEmployeeHours : 100}
		];
    }
	
	/*function employeeSalaryHour (employee){
		var annualSalary = EmployeeUtils.totalAnnualSalary(employee);
		var monthlySalary = annualSalary/$scope.discipline.phases.schedule.monthsPerYear;
		var dailySalary = monthlySalary/$scope.discipline.phases.schedule.workDays;
		return dailySalary/$scope.discipline.phases.schedule.hoursPerDay();
	}*/
	
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
	}

});