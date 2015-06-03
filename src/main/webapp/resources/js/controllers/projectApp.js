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

projectApp.service("PeopleTimeService", function(){
	//Personas-hora
	this.inicioPeoleHour = function(costEffort, avgHourCost){
		return costEffort/avgHourCost;
	}
	
	this.elaboracionPeoleHour = function(costEffort, avgHourCost){
		return costEffort/avgHourCost;
	}
	
	this.construccionPeoleHour = function(costEffort, avgHourCost){
		return costEffort/avgHourCost;
	}
	
	this.transicionPeoleHour = function(costEffort, avgHourCost){
		return costEffort/avgHourCost;
	}
	
	this.proyectoPeoleHour = function(costEffort, avgHourCost){
		return costEffort/avgHourCost;
	}
	
	//Personas-dia
	this.inicioPeoleDay = function(costEffort, avgDayCost){
		return costEffort/avgDayCost;
	}
	
	this.elaboracionPeoleDay = function(costEffort, avgDayCost){
		return costEffort/avgDayCost;
	}
	
	this.construccionPeoleDay = function(costEffort, avgDayCost){
		return costEffort/avgDayCost;
	}
	
	this.transicionPeoleDay = function(costEffort, avgDayCost){
		return costEffort/avgDayCost;
	}
	
	this.proyectoPeoleDay = function(costEffort, avgDayCost){
		return costEffort/avgDayCost;
	}
	
	//Personas-mes
	this.inicioPeoleMonth = function(costEffort, avgMonthCost){
		return costEffort/avgMonthCost;
	}
	
	this.elaboracionPeoleMonth = function(costEffort, avgMonthCost){
		return costEffort/avgMonthCost;
	}
	
	this.construccionPeoleMonth = function(costEffort, avgMonthCost){
		return costEffort/avgMonthCost;
	}
	
	this.transicionPeoleMonth = function(costEffort, avgMonthCost){
		return costEffort/avgMonthCost;
	}
	
	this.proyectoPeoleMonth = function(costEffort, avgMonthCost){
		return costEffort/avgMonthCost;
	}
	
});