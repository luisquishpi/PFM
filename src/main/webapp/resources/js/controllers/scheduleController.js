/**
 * AngularJS HorarioController
 */
projectApp.controller("scheduleController", function($scope, $isTest) {

	if(!$isTest){
		  initJSFScope($scope);
	}

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
});