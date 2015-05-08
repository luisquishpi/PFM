/**
 * AngularJS ProjectController
 */
projectApp.controller("projectController",['$scope', '$isTest', 'bridgeService', function($scope, $isTest, bridgeService) {
	  if(!$isTest){
		  initJSFScope($scope);
	  }

	  var start, end;
	  var schedule = bridgeService.shareData;
	  $scope.workDays = 0;
	  $scope.workHours = 0;
	  $scope.naturalDays = 0;
	  
	  function calculateWorkDaysAndHour(){
		  
		  var days=0, hours=0;
		  
		  console.log(bridgeService.shareData);

		  var re = new RegExp("[0-9]{2}/[0-9]{2}/[0-9]{4}");
		  var validateStart = ($scope.projectBean.project.startString).match(re);
		  var validateEnd = ($scope.projectBean.project.endString).match(re); 
		  if(validateStart!=null && validateEnd!=null){
			  start = moment($scope.projectBean.project.startString, "DD/MM/YYYY");
			  end = moment($scope.projectBean.project.endString, "DD/MM/YYYY");
			  end = end.add(1,"days");
			  for (var m = moment(start); m.isBefore(end); m.add(1, "days")) {
				  var workHours = schedule.listHoursEachDay()[m.day()].workHours;
				  if(workHours>0){
					  days++;
				  	  hours+=workHours;
				  }
			  }
			  $scope.naturalDays= end.diff(start,"days");
		  }

		  $scope.workDays = days;
		  $scope.workHours = hours;
	  }
	  
	  $scope.initForTest = function(){
		  calculateWorkDaysAndHour();
	  }
	  
	  if(!$isTest){
		  $scope.$watchGroup(["projectBean.project.startString", "projectBean.project.endString"], function(newValues, oldValues, scope) {
			  calculateWorkDaysAndHour();
		  });
	  }
	  	  
	  $scope.naturalMonths = function(){
		  return $scope.naturalDays/30;
	  }
	  
	  $scope.workMonths = function(){
		  return $scope.workDays/schedule.workDays;
	  }
	  	  	  
	  $scope.costNaturalMonth = function(){
		  return (($scope.projectBean.project.cost/$scope.naturalMonths()).toFixed(2)/1);
	  }
	  
	  $scope.costNaturalDay = function(){
		  return (($scope.projectBean.project.cost/$scope.naturalDays).toFixed(2)/1);
	  }
	  
	  $scope.costWorkMonth = function(){
		  return $scope.projectBean.project.cost/$scope.workMonths();
	  }
	  
	  $scope.costWorkDay = function(){
		  return $scope.projectBean.project.cost/$scope.workDays;
	  }
	  
	  $scope.costWorkHour = function(){
		  return $scope.projectBean.project.cost/$scope.workHours;
	  }	
 
}]);
