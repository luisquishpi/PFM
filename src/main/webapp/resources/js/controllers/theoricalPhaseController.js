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
		  return new Date("2/3/2015");
	}
	
	$scope.initEndDate = function(){
		  return new Date("20/3/2015");
	}
	
	$scope.iterationAverageHours = function(){
		  return 106.4;
	}
	
	$scope.iterationAverageDays = function(){
		  return 13.3;
	}
	
	$scope.ElabHours = function(){
		  return 319.2;
	}
	
	$scope.ElabDays = function(){
		  return 39.9;
	}
	
	$scope.ElabMonths = function(){
		  return 1.89;
	}
	
	$scope.ElabStartDate = function(){
		  return new Date("21/3/2015");
	}
	
	$scope.ElabEndDate = function(){
		  return new Date("15/5/2015");
	}
	
	$scope.ConstrHours = function(){
		  return 532;
	}
	
	$scope.ConstrDays = function(){
		  return 66.5;
	}
	
	$scope.ConstrMonths = function(){
		  return 3.15;
	}
	
	$scope.ConstrStartDate = function(){
		  return new Date("16/5/2015");
	}
	
	$scope.ConstrEndDate = function(){
		  return new Date("17/5/2015");
	}
	
	$scope.transStartDate = function(){
		  return new Date("18/8/2015");
	}
	
	$scope.transEndDate = function(){
		  return new Date("5/9/2015");
	}
	
	$scope.initCost = function(){
		  return 4250;
	}
	
	$scope.initPeopleHour = function(){
		  return 276.51;
	}

	$scope.initPeopleDay = function(){
		  return 34.57;
	}
	
	$scope.initPeopleMonth = function(){
		  return 1.65;
	}
	
	$scope.initPeople = function(){
		  return 2.6;
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
		  return 17000;
	}
	
	$scope.elabPeopleHour = function(){
		  return 1106.05;
	}
	
	$scope.elabPeopleDay = function(){
		  return 138.28;
	}
	
	$scope.elabPeopleMonth = function(){
		  return 6.58;
	}
	
	$scope.elabPeople = function(){
		  return 3.47;
	}
	
	$scope.elabDistributionIteration = function(){
		  return 7;
	}
	
	$scope.elabPeopleHourIteration = function(){
		  return 368.68;
	}
	
	$scope.elabPeopleDayIteration = function(){
		  return 46.09;
	}
	
	$scope.elabPeopleMonthIteration = function(){
		  return 2.19;
	}
	
	$scope.constrCost = function(){
		  return 55250;
	}
	
	$scope.constrPeopleHour = function(){
		  return 3594.66;
	}
	
	$scope.constrPeopleDay = function(){
		  return 449.41;
	}
	
	$scope.constrPeopleMonth = function(){
		  return 21.40;
	}
	
	$scope.constrPeople = function(){
		  return 6.76;
	}
	
	$scope.constrDistributionIteration = function(){
		  return 13;
	}
	
	$scope.constrPeopleHourIteration = function(){
		  return 718.93;
	}
	
	$scope.constrPeopleDayIteration = function(){
		  return 89.88;
	}
	
	$scope.constrPeopleMonthIteration = function(){
		  return 4.28;
	}
	
	$scope.transCost = function(){
		  return 8500;
	}
	
	$scope.transPeopleHour = function(){
		  return 553.03;
	}
	
	$scope.transPeopleDay = function(){
		  return 69.14;
	}
	
	$scope.transPeopleMonth = function(){
		  return 3.29;
	}
	
	$scope.transPeople = function(){
		  return 5.20;
	}
	
	$scope.transDistributionIteration = function(){
		  return 10;
	}
	
	$scope.transPeopleHourIteration = function(){
		  return 553.03;
	}
	
	$scope.transPeopleDayIteration = function(){
		  return 69.14;
	}
	
	$scope.transPeopleMonthIteration = function(){
		  return 3.29;
	}
	
	$scope.proyectPeopleHour = function(){
		  return 5530.3;
	}
	
	$scope.proyectPeopleDay = function(){
		  return 691.39;
	}
	
	$scope.proyectPeopleMonth = function(){
		  return 32.92;
	}
	
	$scope.proyectPeople = function(){
		  return 5.20;
	}
	
	$scope.proyectDistributionIteration = function(){
		  return 10;
	}
	
	$scope.proyectPeopleHourIteration = function(){
		  return 553.03;
	}
	
	$scope.proyectPeopleDayIteration = function(){
		  return 69.14;
	}
	
	$scope.proyectPeopleMonthIteration = function(){
		  return 3.29;
	}
	
}]);