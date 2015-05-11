/**
 * AngularJS HorarioController
 */
projectApp.controller("scheduleController",['$scope', '$isTest', 'bridgeService', function($scope, $isTest, bridgeService) {

	if(!$isTest){
	  initJSFScope($scope);
	}
	
	$scope.workDays = $scope.projectBean.projectSchedule.workDays;
	$scope.monthsPerYear = 12;
	$scope.hoursPerDay = function() {
		return $scope.hoursPerWeek() / 5;
	}
	$scope.hoursPerWeek = function() {
		return $scope.projectBean.projectSchedule.mondayHours
				+ $scope.projectBean.projectSchedule.tuesdayHours
				+ $scope.projectBean.projectSchedule.wednesdayHours
				+ $scope.projectBean.projectSchedule.thursdayHours
				+ $scope.projectBean.projectSchedule.fridayHours
				+ $scope.projectBean.projectSchedule.saturdayHours
				+ $scope.projectBean.projectSchedule.sundayHours;
	}
	$scope.daysPerYear = function() {
		return $scope.monthsPerYear * $scope.projectBean.projectSchedule.workDays;
	}
	$scope.hoursPerMonth = function() {
		return $scope.hoursPerDay() * $scope.projectBean.projectSchedule.workDays;
	}
	$scope.hoursPerYear = function() {
		return $scope.hoursPerDay() * $scope.daysPerYear();
	}
	
	if(!$isTest){
	$scope.$watchGroup(["projectBean.projectSchedule.mondayHours",
	                    "projectBean.projectSchedule.tuesdayHours",
	                    "projectBean.projectSchedule.wednesdayHours",
	                    "projectBean.projectSchedule.thursdayHours",
	    				"projectBean.projectSchedule.fridayHours",
	    				"projectBean.projectSchedule.saturdayHours",
	    				"projectBean.projectSchedule.sundayHours",
	    				"projectBean.projectSchedule.workDays"
	                    ], function(newValues, oldValues, scope) {
		alert("Entra controlador");
		bridgeService.shareData=scope;
	  });
	}
	
	$scope.listHoursEachDay = function(){
		var lista = [];
		
		lista.push({workHours:$scope.projectBean.projectSchedule.sundayHours});
		lista.push({workHours:$scope.projectBean.projectSchedule.mondayHours});
		lista.push({workHours:$scope.projectBean.projectSchedule.tuesdayHours});
		lista.push({workHours:$scope.projectBean.projectSchedule.wednesdayHours});
		lista.push({workHours:$scope.projectBean.projectSchedule.thursdayHours});
		lista.push({workHours:$scope.projectBean.projectSchedule.fridayHours});
		lista.push({workHours:$scope.projectBean.projectSchedule.saturdayHours});
		return lista;
	}
}]);
