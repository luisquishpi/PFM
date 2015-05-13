/**
 * 
 */
var projectApp = angular.module("projectApp", []);

projectApp.service("workTimeService", function(){

	var workingDays = 0;
	var workingHours = 0;
	var naturalDays = 0;
	
	this.calculateWorkDaysAndHour = function(startString, endString, listHoursEachDay ){
		  
		var days=0, hours=0;		  
		  start = moment(startString, "DD/MM/YYYY");
		  end = moment(endString, "DD/MM/YYYY");
		  if((start.isValid() && end.isValid()) && start.isBefore(end)){
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