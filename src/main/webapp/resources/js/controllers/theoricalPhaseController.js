/**
 * AngularJS theoricalPhaseController
 */

projectApp.controller("theoricalPhaseController", ['$scope', '$controller', function ($scope, $controller, $isTest) {  
	if(!$isTest){
		  initJSFScope($scope);
	 }
	
	var projectControllerViewModel = $scope.$new();
	
	$controller('projectController',{$scope : projectControllerViewModel });                                                                                                                                                                                     
	
	$scope.recomendedDays = function(){
		  return 13.3;
	}
	
	$scope.initTransHours = function(){
		  return projectControllerViewModel.workhours/10;
	}
	
	$scope.initTransDays = function(){
		  return projectControllerViewModel.workdays/10;
	}
	
	$scope.initTransMonths = function(){
		  return projectControllerViewModel.workmonths/10;
	}
	
	$scope.initStartDate = function(){
		  return "2/3/2015";
	}
	
	$scope.initEndDate = function(){
		  return "20/3/2015";
	}
	
	$scope.iterationAverageHours = function(){
		  return projectControllerViewModel.workhours/10;
	}
	
	$scope.iterationAverageDays = function(){
		  return projectControllerViewModel.workdays/10;
	}
	
	$scope.iterationAverageMonths = function(){
		  return projectControllerViewModel.workmonths/10;
	}
	
	$scope.ElabHours = function(){
		  return projectControllerViewModel.workhours/30;
	}
	
	$scope.ElabDays = function(){
		  return projectControllerViewModel.workdays/30;
	}
	
	$scope.ElabMonths = function(){
		  return projectControllerViewModel.workmonths/30;
	}
	
	$scope.ElabStartDate = function(){
		  return "21/3/2015";
	}
	
	$scope.ElabEndDate = function(){
		  return "15/5/2015";
	}
	
	$scope.ConstrHours = function(){
		  return projectControllerViewModel.workhours/50;
	}
	
	$scope.ConstrDays = function(){
		  return projectControllerViewModel.workdays/50;
	}
	
	$scope.ConstrMonths = function(){
		  return projectControllerViewModel.workmonths/50;
	}
	
	$scope.ConstrStartDate = function(){
		  return "16/5/2015";
	}
	
	$scope.ConstrEndDate = function(){
		  return "17/5/2015";
	}
	
	$scope.transStartDate = function(){
		  return "18/8/2015";
	}
	
	$scope.transEndDate = function(){
		  return "5/9/2015";
	}
	
	$scope.initCost = function(){
		  return projectControllerViewModel.projectBean.project.cost*0.05;
	}
	
	$scope.initPeopleHour = function(){
		  return $scope.initCost()/projectControllerViewModel.costWorkHour();
	}

	$scope.initPeopleDay = function(){
		  return $scope.initCost()/projectControllerViewModel.costWorkDay();
	}
	
	$scope.initPeopleMonth = function(){
		  return $scope.initCost()/projectControllerViewModel.costWorkMonth();
	}
	
	$scope.initPeople = function(){
		  return $scope.initPeopleHour()/$scope.initTransHours();
	}
	
	$scope.initDistributionIteration = function(){
		  return 5;
	}
	
	$scope.initPeopleHourIteration = function(){
		  return 276.51;
	}
	
	$scope.initPeopleDayIteration = function(){
		  return 34.57;
	}
	
	$scope.initPeopleMonthIteration = function(){
		  return 1.65;
	}
	
	$scope.elabCost = function(){
		  return projectControllerViewModel.projectBean.project.cost*0.2;
	}
	
	$scope.elabPeopleHour = function(){
		  return $scope.elabCost()/projectControllerViewModel.costWorkHour();
	}
	
	$scope.elabPeopleDay = function(){
		  return $scope.elabCost()/projectControllerViewModel.costWorkDay();;
	}
	
	$scope.elabPeopleMonth = function(){
		  return $scope.elabCost()/projectControllerViewModel.costWorkMonth();;
	}
	
	$scope.elabPeople = function(){
		  return $scope.elabPeopleHour()/$scope.elabHours();
	}
	
	$scope.elabDistributionIteration = function(){
		  return 7;
	}
	
	$scope.elabPeopleHourIteration = function(){
		  return $scope.elabPeopleHour()/3;
	}
	
	$scope.elabPeopleDayIteration = function(){
		  return $scope.elabPeopleDay()/3;
	}
	
	$scope.elabPeopleMonthIteration = function(){
		  return $scope.elabPeopleMonth()/3;
	}
	
	$scope.constrCost = function(){
		  return projectControllerViewModel.projectBean.project.cost*0.65;
	}
	
	$scope.constrPeopleHour = function(){
		  return $scope.constrCost()/projectControllerViewModel.costWorkHour();
	}
	
	$scope.constrPeopleDay = function(){
		  return $scope.constrCost()/projectControllerViewModel.costWorkDay();
	}
	
	$scope.constrPeopleMonth = function(){
		  return $scope.constrCost()/projectControllerViewModel.costWorkMonth();
	}
	
	$scope.constrPeople = function(){
		  return $scope.constrPeopleHour()/$scope.constrHours();
	}
	
	$scope.constrDistributionIteration = function(){
		  return 13;
	}
	
	$scope.constrPeopleHourIteration = function(){
		  return $scope.constrPeopleHour()/5;
	}
	
	$scope.constrPeopleDayIteration = function(){
		  return $scope.constrPeopleDay()/5;
	}
	
	$scope.constrPeopleMonthIteration = function(){
		  return $scope.constrPeopleMonth()/5;
	}
	
	$scope.transCost = function(){
		  return projectControllerViewModel.projectBean.project.cost*0.1;
	}
	
	$scope.transPeopleHour = function(){
		  return $scope.transCost()/projectControllerViewModel.costWorkHour();
	}
	
	$scope.transPeopleDay = function(){
		  return $scope.transCost()/projectControllerViewModel.costWorkDay();
	}
	
	$scope.transPeopleMonth = function(){
		  return $scope.transCost()/projectControllerViewModel.costWorkMonth();
	}
	
	$scope.transPeople = function(){
		  return $scope.transPeopleHour()/$scope.initTransHours();
	}
	
	$scope.transDistributionIteration = function(){
		  return 10;
	}
	
	$scope.transPeopleHourIteration = function(){
		  return $scope.transPeopleHour();
	}
	
	$scope.transPeopleDayIteration = function(){
		  return $scope.transPeopleDay();
	}
	
	$scope.transPeopleMonthIteration = function(){
		  return $scope.transPeopleMonth();
	}
	
	$scope.projectPeopleHour = function(){
		  return projectControllerViewModel.projectBean.project.cost/projectControllerViewModel.costWorkHour();
	}
	
	$scope.projectPeopleDay = function(){
		  return projectControllerViewModel.projectBean.project.cost/projectControllerViewModel.costWorkDay();;
	}
	
	$scope.projectPeopleMonth = function(){
		  return projectControllerViewModel.projectBean.project.cost/projectControllerViewModel.costWorkMonth();;
	}
	
	$scope.projectPeople = function(){
		  return $scope.projectPeopleHour()/projectControllerViewModel.workhours;
	}
	
	$scope.projectDistributionIteration = function(){
		  return 10;
	}
	
	$scope.projectPeopleHourIteration = function(){
		  return $scope.projectPeopleHour()/10;
	}
	
	$scope.projectPeopleDayIteration = function(){
		  return $scope.projectPeopleDay()/10;
	}
	
	$scope.projectPeopleMonthIteration = function(){
		  return $scope.projectPeopleMonth()/10;
	}
	
}]);
