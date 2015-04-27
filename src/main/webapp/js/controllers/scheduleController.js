/**
 * AngularJS HorarioController
 */
projectApp.controller("scheduleController", function ($scope, $isTest) {	  
	  if(!$isTest){
		  initJSFScope($scope);
	  }	  
	  $scope.monthsPerYear = 12;	  
	  $scope.hoursPerDay = function(){
		  return $scope.hoursPerWeek() / 5;  
	  }	  
	  $scope.hoursPerWeek = function(){
		  return  $scope.scheduleBean.mondayHours + $scope.scheduleBean.tuesdayHours
		  + $scope.scheduleBean.wednesdayHours + $scope.scheduleBean.thursdayHours + $scope.scheduleBean.fridayHours
		  + $scope.scheduleBean.satrudayHours + $scope.scheduleBean.sundayHours;
	  }
	  $scope.daysPerYear = function(){
		  return $scope.monthsPerYear * $scope.scheduleBean.workDays;  
	  }
	  $scope.hoursPerMonth = function(){
		  return $scope.hoursPerDay() * $scope.scheduleBean.workDays;  
	  }
      $scope.hoursPerYear = function(){
		  return $scope.hoursPerDay() * $scope.daysPerYear();
	  }
});