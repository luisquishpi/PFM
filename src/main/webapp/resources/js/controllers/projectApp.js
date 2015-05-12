/**
 * 
 */
app.value("$isTest", false);
//var projectApp = angular.module('projectApp', [ "angularfaces" ]);
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

	
	
	var workDays = 0;
	var workHours = 0;
	var naturalDays = 0;
	
	this.calculateWorkDaysAndHour = function(startString, endString, listHoursEachDay ){
		  
		  var days=0, hours=0;
		  var re = new RegExp("[0-9]{2}/[0-9]{2}/[0-9]{4}");
		  var validateStart = (startString).match(re);
		  var validateEnd = (endString).match(re); 
		  if(validateStart!=null && validateEnd!=null){
			  start = moment($scope.projectBean.project.startString, "DD/MM/YYYY");
			  end = moment($scope.projectBean.project.endString, "DD/MM/YYYY");
			  end = end.add(1,"days");
			  for (var m = moment(start); m.isBefore(end); m.add(1, "days")) {
				  var workHours = listHoursEachDay()[m.day()].workHours;
				  if(workHours>0){
					  days++;
				  	  hours+=workHours;
				  }
			  }
			  $scope.naturalDays= end.diff(start,"days");
		  }
	}
	
	this.workHours = function(){
		return workHours;
	}
	
	this.workDays = function(){
		return workDays;
	}
	
	this.naturalDays = function(){
		return naturalDays;
	}
	
	this.workMonths = function(workDaysMonth){
		  return workDays/workDaysMonth;
	}
	
});