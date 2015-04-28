/**
 * AngularJS ProjectController
 */
projectApp.controller(
	  'projectController', function ($scope, test) {  
	  
	  !test && initJSFScope($scope);

	  $scope.consultProjectBean.project.start = moment($scope.consultProjectBean.project.start);
	  $scope.consultProjectBean.project.end = moment($scope.consultProjectBean.project.end);

	  $scope.naturalDays = function(){
		  return $scope.consultProjectBean.project.end.add(1,'days').diff($scope.consultProjectBean.project.start,'days');
	  }
	  
	  $scope.naturalMonths = function(){
		  return $scope.naturalDays()/30;
	  }
	  
	  $scope.workMonths = function(){
		  return $scope.workDays()/$scope.consultProjectBean.project.WorkDaysMonth;
	  }
	  
	  $scope.workDays = function (){
		  var days=0;
		  for (var m = $scope.consultProjectBean.project.start; m.isBefore($scope.consultProjectBean.project.end); $scope.consultProjectBean.project.start.add(1, 'days')) {
			  if(($scope.consultProjectBean.workingDays).indexOf(m.day())>-1)
				  days++
			}
		  return days+1;
	  }
	  
	  $scope.workHours = function(){
		  return 1080;
	  }
	  
	  $scope.costNaturalMonth = function(){
		  return (($scope.consultProjectBean.project.cost/$scope.naturalMonths()).toFixed(2)/1);
	  }
	  
	  $scope.costNaturalDay = function(){
		  return (($scope.consultProjectBean.project.cost/$scope.naturalDays()).toFixed(2)/1);
	  }
	  
	  $scope.costWorkMonth = function(){
		  return $scope.consultProjectBean.project.cost/$scope.workMonths();
	  }
	  
	  $scope.costWorkDay = function(){
		  return $scope.consultProjectBean.project.cost/$scope.workDays();
	  }
	  
	  $scope.costWorkHour = function(){
		  return $scope.consultProjectBean.project.cost/$scope.workHours();
	  }
	  
	  $scope.mediumPersonMonth = function(){
		  return $scope.costWorkMonth()/$scope.consultProjectBean.project.mediumCostMonth;
	  }
	  
	  $scope.mediumPersonDay = function(){
		  return $scope.costWorkDay()/$scope.consultProjectBean.project.mediumCostDay;
	  }
	  
	  $scope.mediumPersonHour = function(){
		  return $scope.costWorkHour()/$scope.consultProjectBean.project.mediumCostHour;
	  }	  
});
