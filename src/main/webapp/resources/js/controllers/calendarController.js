/**
 * Calendar controller
 */

projectApp.controller("calendarController",['$scope', '$isTest', 'bridgeService', function($scope, $isTest, bridgeService) {
	if(!$isTest){
	  initJSFScope($scope);
	}
	
	$scope.startDate = "2/2/2015";
	$scope.endDate = "5/5/2015";
	
	
	$scope.getEvents = function(startDate, endDate){
		for (var m = moment(startDate); m.isBefore(endDate); m.add(1, "days")){
			
		}
	}
	
}]);