var phonecatApp = angular.module('projectApp', ["angularfaces"]); 

phonecatApp.controller(
	  'ProjectCtrl', function ($scope, test) {  
 
	  !test && initJSFScope($scope);
	   
	  $scope.laborMonth = function(){
		  return $scope.consultProjectBean.laborDay/30;  
	  }
	  
	  $scope.naturalDays = function(){
		  return $scope.consultProjectBean.end.add(1,'days').diff($scope.consultProjectBean.start,'days');
	  }
	  
	  $scope.naturalMonths = function(){
		  return $scope.naturalDays()/30;
	  }
	  
	  $scope.workMonths = function(){
		  return $scope.workDays()/$scope.consultProjectBean.WorkDaysMonth;
	  }
	  
	  $scope.workDays = function (){
		  var days=0;
		  for (var m = $scope.consultProjectBean.start; m.isBefore($scope.consultProjectBean.end); $scope.consultProjectBean.start.add(1, 'days')) {
			  if(($scope.consultProjectBean.workingDays).indexOf(m.day())>-1)
				  days++
			}
		  return days+1;
	  }
	  
	  $scope.workHours = function(){
		  return 1080;
	  }
	  
	  $scope.costNaturalMonth = function(){
		  return (($scope.consultProjectBean.cost/$scope.naturalMonths()).toFixed(2)/1);
	  }
	  
	  $scope.costNaturalDay = function(){
		  return (($scope.consultProjectBean.cost/$scope.naturalDays()).toFixed(2)/1);
	  }
	  
	  $scope.costWorkMonth = function(){
		  return $scope.consultProjectBean.cost/$scope.workMonths();
	  }
	  
	  $scope.costWorkDay = function(){
		  return $scope.consultProjectBean.cost/$scope.workDays();
	  }
	  
	  $scope.costWorkHour = function(){
		  return $scope.consultProjectBean.cost/$scope.workHours();
	  }
	  
	  $scope.mediumPersonMonth = function(){
		  alert($scope.costWorkMonth());
		  return $scope.costWorkMonth()/$scope.consultProjectBean.mediumCostMonth;
	  }
	  
	  $scope.mediumPersonDay = function(){
		  return $scope.costWorkDay()/$scope.consultProjectBean.mediumCostDay;
	  }
	  
	  $scope.mediumPersonHour = function(){
		  return $scope.costWorkHour()/$scope.consultProjectBean.mediumCostHour;
	  }
	  
	  
});
