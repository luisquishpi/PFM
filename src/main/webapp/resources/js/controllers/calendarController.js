/**
 * Calendar controller
 */

projectApp.controller("calendarController",['$scope', '$isTest', 'bridgeService', function($scope, $isTest, bridgeService) {
	if(!$isTest){
	  initJSFScope($scope);
	}
	
	$scope.initDatesArray = function() {
		var array = new Array(13);
		array[0] = moment("2/3/2015", 'DD/MM/YYYY').format("DD/MM/YYYY");
		return array;
	}
	
	$scope.elabDatesArray = function() {
		var array = new Array(39);
		array[0] = moment("23/3/2015", 'DD/MM/YYYY').format("DD/MM/YYYY");
		return array;	}
	
	$scope.constrDatesArray = function() {
		var array = new Array(65);
		array[0] = moment("15/5/2015", 'DD/MM/YYYY').format("DD/MM/YYYY");
		return array;	}
	
	$scope.transDatesArray = function() {
		var array = new Array(11);
		array[0] = moment("16/8/2015", 'DD/MM/YYYY').format("DD/MM/YYYY");
		return array;	}
}]);