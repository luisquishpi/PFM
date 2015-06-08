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
    	var sameStart = test.isSame(start, 'day');
    	var sameEnd = test.isSame(end, 'day');
    	
    	return between || sameStart  || sameEnd;
    }
	
});

projectApp.service("peopleTimeService", function(){
	//Personas-hora
	this.inicioPeopleHour = function(costEffort, avgHourCost){
		return costEffort/avgHourCost;
	}
	
	this.elaboracionPeopleHour = function(costEffort, avgHourCost){
		return costEffort/avgHourCost;
	}
	
	this.construccionPeopleHour = function(costEffort, avgHourCost){
		return costEffort/avgHourCost;
	}
	
	this.transicionPeopleHour = function(costEffort, avgHourCost){
		return costEffort/avgHourCost;
	}
	
	this.proyectoPeopleHour = function(costEffort, avgHourCost){
		return costEffort/avgHourCost;
	}
	
	//Personas-dia
	this.inicioPeopleDay = function(costEffort, avgDayCost){
		return costEffort/avgDayCost;
	}
	
	this.elaboracionPeopleDay = function(costEffort, avgDayCost){
		return costEffort/avgDayCost;
	}
	
	this.construccionPeopleDay = function(costEffort, avgDayCost){
		return costEffort/avgDayCost;
	}
	
	this.transicionPeopleDay = function(costEffort, avgDayCost){
		return costEffort/avgDayCost;
	}
	
	this.proyectoPeopleDay = function(costEffort, avgDayCost){
		return costEffort/avgDayCost;
	}
	
	//Personas-mes
	this.inicioPeopleMonth = function(costEffort, avgMonthCost){
		return costEffort/avgMonthCost;
	}
	
	this.elaboracionPeopleMonth = function(costEffort, avgMonthCost){
		return costEffort/avgMonthCost;
	}
	
	this.construccionPeopleMonth = function(costEffort, avgMonthCost){
		return costEffort/avgMonthCost;
	}
	
	this.transicionPeopleMonth = function(costEffort, avgMonthCost){
		return costEffort/avgMonthCost;
	}
	
	this.proyectoPeopleMonth = function(costEffort, avgMonthCost){
		return costEffort/avgMonthCost;
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