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
	
	this.setZeroTime = function(date){
		var validate = moment.invalid(date);
		if(validate.isValid()){
			date.utc();
			date.set('hour', 0);
	    	date.set('minute', 0);
	    	date.set('second', 0);
	    	date.set('millisecond', 0);
		}
	},
	
	this.isBetween = function(test, start, end) {
    	var result = false;
    	start = moment(start);
    	end = moment(end);
    	
    	this.setZeroTime(test);
    	this.setZeroTime(start);
    	this.setZeroTime(end);

    	result = test.isAfter(start) && test.isBefore(end) || test.isSame(start) || test.isSame(end);
    	return result;
    }
	
});