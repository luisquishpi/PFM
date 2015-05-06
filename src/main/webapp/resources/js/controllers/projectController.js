/**
 * AngularJS ProjectController
 */
projectApp.controller('projectController', function ($scope, $isTest) {  
	if(!$isTest){
		  initJSFScope($scope);
	  }
	  var start;
	  var end;
	  
	  $scope.projectBean.project.start = moment(new Date($scope.projectBean.project.startString)).format("DD/MM/YYYY");
	  $scope.projectBean.project.end = moment(new Date($scope.projectBean.project.endString)).format("DD/MM/YYYY");
	  
	  
	  $scope.workDays = 0;
	  $scope.workHours = 0;
	  $scope.naturalDays = 0;
	  
	  $scope.$watchGroup(['projectBean.project.startString', 'projectBean.project.endString'], function(newValues, oldValues, scope) {
		  var days=0;
		  var hours=0;
		  start = moment($scope.projectBean.project.startString, "DD/MM/YYYY");
		  end = moment($scope.projectBean.project.endString, "DD/MM/YYYY");
		  end = end.add(1,'days');
		  for (var m = moment(start); m.isBefore(end); m.add(1, 'days')) {
			  var workHours = $scope.workingDays[m.day()].workHours;
			  if(workHours>0){
				  days++;
			  	  hours+=workHours;
			  }
			}
		  $scope.workDays = days;
		  $scope.workHours = hours;
		  $scope.naturalDays= end.diff(start,'days');
	  });
	  
	  $scope.naturalMonths = function(){
		  return $scope.naturalDays/30;
	  }
	  
	  $scope.workMonths = function(){
		  console.log($scope.workDays);
		  return $scope.workDays/$scope.projectBean.projectSchedule.workDays;
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
	  	   
});
