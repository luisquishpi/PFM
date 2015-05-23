/**
 * AngularJS theoricalPhaseController
 */

projectApp.controller("theoricalPhaseController", ['$scope', '$isTest', 'bridgeService', 'workTimeService', function ($scope, $isTest, bridgeService, workTimeService) {  
	
	$scope.schedule = bridgeService.shareData;
	
	if(!$isTest){
		  initJSFScope($scope);
		  workTimeService.calculateWorkDaysAndHour($scope.showTheoricalPhasesBean.project.startString, $scope.showTheoricalPhasesBean.project.endString, $scope.schedule.listHoursEachDay());
		  console.log(workTimeService);
	}
	
	$scope.averageMonthCost = function(){
		var cost = 0;
		for(i = 0; i < $scope.showTheoricalPhasesBean.employeeArray.length; i++){
			cost += $scope.showTheoricalPhasesBean.employeeArray[i].annualGrossSalary + $scope.showTheoricalPhasesBean.employeeArray[i].annualGrossSalary*$scope.showTheoricalPhasesBean.employeeArray[i].contract.insurance/100;
		}
		cost = cost/$scope.showTheoricalPhasesBean.employeeArray.length;
		return cost/12;
	}
	
	$scope.averageDayCost = function(){
		return $scope.averageMonthCost()/$scope.schedule.workDays;
	}
	
	$scope.averageHourCost = function(){
		var days = 0;
		for (i = 0; i < $scope.schedule.listHoursEachDay().length; i++){
			days += $scope.schedule.listHoursEachDay()[i].workHours;
		}
		return $scope.averageDayCost()/(days/5);
	}
	
	$scope.recomendedDays = function(){
		  return $scope.initTransDays();
	}
	
	$scope.initTransHours = function(){
		  return workTimeService.workHours()/10;
	}
	
	$scope.initTransDays = function(){
		  return workTimeService.workDays()/10;
	}
	
	$scope.initTransMonths = function(){
		  return workTimeService.workMonths($scope.schedule.workDays)/10;
	}
	
	$scope.initStartDate = function(){
		  return moment($scope.showTheoricalPhasesBean.project.startString, 'DD/MM/YYYY').format("DD/MM/YYYY");
	}
	
	$scope.initEndDate = function(){
		  return moment($scope.showTheoricalPhasesBean.project.startString, 'DD/MM/YYYY').add(workTimeService.naturalDays()*0.1, "days").format("DD/MM/YYYY");;
	}
	
	$scope.iterationAverageHours = function(){
		  return workTimeService.workHours()/10;
	}
	
	$scope.iterationAverageDays = function(){
		  return workTimeService.workDays()/10;
	}
	
	$scope.iterationAverageMonths = function(){
		return workTimeService.workMonths($scope.schedule.workDays)/10;
	}
	
	$scope.ElabHours = function(){
		  return workTimeService.workHours()*0.3;
	}
	
	$scope.ElabDays = function(){
		  return workTimeService.workDays()*0.3;
	}
	
	$scope.ElabMonths = function(){
		  return workTimeService.workMonths($scope.schedule.workDays)*0.3;
	}
	
	$scope.ElabStartDate = function(){
		  return moment($scope.initEndDate(), "DD/MM/YYYY").add(1, "days").format("DD/MM/YYYY");
	}
	
	$scope.ElabEndDate = function(){
		  return moment($scope.ElabStartDate(), "DD/MM/YYYY").add(workTimeService.naturalDays()*0.3, "days").format("DD/MM/YYYY");
	}
	
	$scope.ConstrHours = function(){
		  return workTimeService.workHours()*0.5;
	}
	
	$scope.ConstrDays = function(){
		  return workTimeService.workDays()*0.5;
	}
	
	$scope.ConstrMonths = function(){
		  return workTimeService.workMonths($scope.schedule.workDays)*0.5;
	}
	
	$scope.ConstrStartDate = function(){
		  return moment($scope.ElabEndDate(), "DD/MM/YYYY").add(1, "days").format("DD/MM/YYYY");
	}
	
	$scope.ConstrEndDate = function(){
		  return moment($scope.ConstrStartDate(), "DD/MM/YYYY").add(workTimeService.naturalDays()*0.5, "days").format("DD/MM/YYYY");
	}
	
	$scope.transStartDate = function(){
		  return moment($scope.ConstrEndDate(), "DD/MM/YYYY").add(1, "days").format("DD/MM/YYYY");
	}
	
	$scope.transEndDate = function(){
		  return moment($scope.transStartDate(), "DD/MM/YYYY").add(workTimeService.naturalDays()*0.1, "days").format("DD/MM/YYYY");
	}
	
	$scope.projectMonths = function(){
		return workTimeService.workMonths($scope.schedule.workDays);
	}
	
	/*Esfuerzo*/
	
	$scope.initCost = function(){
		  return $scope.showTheoricalPhasesBean.project.cost*0.05;
	}
	
	$scope.initPeopleHour = function(){
		  return $scope.initCost()/$scope.averageHourCost();
	}

	$scope.initPeopleDay = function(){
		  return $scope.initCost()/$scope.averageDayCost();
	}
	
	$scope.initPeopleMonth = function(){
		  return $scope.initCost()/$scope.averageMonthCost();
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
		  return $scope.showTheoricalPhasesBean.project.cost*0.2;
	}
	
	$scope.elabPeopleHour = function(){
		  return $scope.elabCost()/$scope.averageHourCost();
	}
	
	$scope.elabPeopleDay = function(){
		  return $scope.elabCost()/$scope.averageDayCost();
	}
	
	$scope.elabPeopleMonth = function(){
		  return $scope.elabCost()/$scope.averageMonthCost();
	}
	
	$scope.elabPeople = function(){
		  return $scope.elabPeopleHour()/$scope.ElabHours();
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
		  return $scope.showTheoricalPhasesBean.project.cost*0.65;
	}
	
	$scope.constrPeopleHour = function(){
		  return $scope.constrCost()/$scope.averageHourCost();
	}
	
	$scope.constrPeopleDay = function(){
		  return $scope.constrCost()/$scope.averageDayCost();
	}
	
	$scope.constrPeopleMonth = function(){
		  return $scope.constrCost()/$scope.averageMonthCost();
	}
	
	$scope.constrPeople = function(){
		  return $scope.constrPeopleHour()/$scope.ConstrHours();
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
		  return $scope.showTheoricalPhasesBean.project.cost*0.1;
	}
	
	$scope.transPeopleHour = function(){
		  return $scope.transCost()/$scope.averageHourCost();
	}
	
	$scope.transPeopleDay = function(){
		  return $scope.transCost()/$scope.averageDayCost();
	}
	
	$scope.transPeopleMonth = function(){
		  return $scope.transCost()/$scope.averageMonthCost();
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
		  return $scope.showTheoricalPhasesBean.project.cost/$scope.averageHourCost();
	}
	
	$scope.projectPeopleDay = function(){
		  return $scope.showTheoricalPhasesBean.project.cost/$scope.averageDayCost();
	}
	
	$scope.projectPeopleMonth = function(){
		  return $scope.showTheoricalPhasesBean.project.cost/$scope.averageMonthCost();
	}
	
	$scope.projectPeople = function(){
		  return $scope.projectPeopleHour()/workTimeService.workHours();
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
