/**
 * Calendar controller
 */

projectApp.controller("calendarController",['$scope', '$isTest', 'bridgeService', function($scope, $isTest, bridgeService) {
	if(!$isTest){
	  initJSFScope($scope);
	}
	
	$scope.startDate = "2/2/2015"; //momment
	$scope.endDate = "5/5/2015"; //momment
	$scope.iterationLength = 10;
	$scope.holidays = [];
	$scope.workHours = {
			workHours: 8, //LUN
			workHours: 8, //LUN
			workHours: 8,
			workHours: 0,
			workHours: 8,
			workHours: 8,
			workHours: 0,
	}
	
	$scope.phases = ["I", "E", "E", "E", "C", "C", "C", "C", "C", "P"];
	
	$scope.getEvents = function(startDate, endDate){
		var events = [];
		for (var m = moment(startDate); m.isBefore(endDate); m.add(1, "days")){
			var projectDay = $scope.getProjectDay(m);
			if( projectDay > 0){
				var hours = $scope.workHours[m.isoWeekDay - 1];
				event.push({
					title: $scope.getIteration(projectDay) + "<br/> Dia:" + projectDay + "<br/> Horas:" + hours,
					start: m,
					end: m.add(1, 'days')
				});
			}
		}
	}
	
	$scope.getProjectDay = function(date){
		var days = 0;
		for (var m = moment($scope.startDate); m.isBefore(date); m.add(1, "days")){
			if($scope.workHours[m.day()] > 0){
				var isHoliday = false;
				for (var i = 0; i < $scope.holidays.length; i++){
					if(m.isBetween($scope.holidays[i].startDate, $scope.holidays[i].endtDate)){
						isHoliday = true;
						break;
					} 
				}
				if(!isHoliday){
					days++;
				}
			}
			
		}
		return days;
	}
	
	$scope.getIteration = function(days){
		var it = parseInt(days / $scope.iterationLength);
		return $scope.phases[it] + "-" + (it + 1);
	}
	
}]);