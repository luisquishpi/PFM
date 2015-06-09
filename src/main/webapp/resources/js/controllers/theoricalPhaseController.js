/**
 * AngularJS theoricalPhaseController
 */

projectApp.controller("theoricalPhaseController", ['$scope', '$isTest', 'bridgeService', 'workTimeService', function ($scope, $isTest, bridgeService, workTimeService) {  
	
	$scope.phasesFinished = false;
	$scope.schedule = bridgeService.shareData;
	if(!$isTest){
		  initJSFScope($scope);
		  workTimeService.calculateWorkDaysAndHour($scope.showTheoricalPhasesBean.project.startString, $scope.showTheoricalPhasesBean.project.endString, $scope.schedule.listHoursEachDay());
	}

	//Constantes
	var DATE_FORMAT = "DD/MM/YYYY";
	var INICIO_DISTRIBUTION_DURATION = 10;
	var ELABORACION_DISTRIBUTION_DURATION = 30;
	var CONSTRUCCION_DISTRIBUTION_DURATION = 50;
	var TRANSICION_DISTRIBUTION_DURATION = 10;
	
	var INICIO_DISTRIBUTION_EFFORT = 5;
	var ELABORACION_DISTRIBUTION_EFFORT = 20;
	var CONSTRUCCION_DISTRIBUTION_EFFORT = 65;
	var TRANSICION_DISTRIBUTION_EFFORT = 10;	
	
	var ITERATION_INITIAL_VALUE = 1;
	var NEXT_DAY_VALUE = 1;
	
	/********************************/
	addDaysToDate = function(date, numberOfDays){
		return moment(date, DATE_FORMAT).add(numberOfDays, "days").format(DATE_FORMAT);
	}
	
	$scope.recomendedDays = function(){
		  return $scope.inicioDays();
	}
	
	$scope.initStartDate = function(){
		return moment($scope.showTheoricalPhasesBean.project.startString, DATE_FORMAT).format(DATE_FORMAT);
	}
	
	$scope.initEndDate = function(){
		return addDaysToDate($scope.showTheoricalPhasesBean.project.startString, $scope.naturalDays*($scope.inicioPercentaje()/100));
	}	
	
	$scope.ElabStartDate = function(){
		return addDaysToDate($scope.initEndDate(), NEXT_DAY_VALUE);
	}
	
	$scope.ElabEndDate = function(){
		return addDaysToDate($scope.ElabStartDate(), $scope.naturalDays*($scope.elaboracionPercentaje()/100));
	}	
	
	$scope.ConstrStartDate = function(){
		return addDaysToDate($scope.ElabEndDate(), NEXT_DAY_VALUE);
	}
	
	$scope.ConstrEndDate = function(){
		return addDaysToDate($scope.ConstrStartDate(), $scope.naturalDays*($scope.construccionPercentaje()/100));
	}
	
	$scope.transStartDate = function(){
		return addDaysToDate($scope.ConstrEndDate(), NEXT_DAY_VALUE);
	}
	
	$scope.transEndDate = function(){
		  return addDaysToDate($scope.transStartDate(), $scope.naturalDays*($scope.transicionPercentaje()/100));
	}	
	
	$scope.averageMonthCost = function(){
		var cost = 0;
		for(i = 0; i < $scope.showTheoricalPhasesBean.employeeList.length; i++){
			cost += $scope.showTheoricalPhasesBean.employeeList[i].annualGrossSalary + 
				$scope.showTheoricalPhasesBean.employeeList[i].annualGrossSalary*$scope.showTheoricalPhasesBean.employeeList[i].contract.insurance/100;
		}
		return (cost/$scope.showTheoricalPhasesBean.employeeList.length)/$scope.schedule.monthsPerYear;		
	}
	
	$scope.avgMonthCost = $scope.averageMonthCost();
	
	$scope.averageDayCost = function(){
		return $scope.avgMonthCost/$scope.schedule.workDays;
	}	
	
	$scope.avgDayCost = $scope.averageDayCost();
	
	$scope.averageHourCost = function(){
		var days = 0;
		for (i = 0; i < $scope.schedule.listHoursEachDay().length; i++){
			days += $scope.schedule.listHoursEachDay()[i].workHours;
		}
		return $scope.avgDayCost/(days/$scope.schedule.daysPerWeek());
	}	
	
	$scope.avgHourCost = $scope.averageHourCost();
	
	/********************************/	

	$scope.workHours = workTimeService.workHours();
	$scope.workDays = workTimeService.workDays();
	$scope.workMonths = workTimeService.workMonths($scope.schedule.workDays);
	$scope.naturalDays = workTimeService.naturalDays();
	
	/************** DuraciÃ³n ********************/
	//Fila de Distribucion
	$scope.inicioPercentaje = function() {
		return INICIO_DISTRIBUTION_DURATION;
	}
	
	$scope.elaboracionPercentaje = function() {
		return ELABORACION_DISTRIBUTION_DURATION;
	}	
	
	$scope.construccionPercentaje = function() {
		return CONSTRUCCION_DISTRIBUTION_DURATION;
	}	
	
	$scope.transicionPercentaje = function() {
		return TRANSICION_DISTRIBUTION_DURATION;
	}	
	
	$scope.proyectoPercentaje = function() {
		return $scope.inicioPercentaje() + $scope.elaboracionPercentaje() + $scope.construccionPercentaje() + $scope.transicionPercentaje();
	}
	//Fin de Fila de Distribucion
	
	//Fila de Horas
	$scope.inicioHours = function() {
		return $scope.workHours*($scope.inicioPercentaje()/100);
	}
	$scope.elaboracionHours = function() {
		return $scope.workHours*($scope.elaboracionPercentaje()/100);
	}
	$scope.construccionHours = function() {
		return $scope.workHours*($scope.construccionPercentaje()/100);
	}
	$scope.transicionHours = function() {
		return $scope.workHours*($scope.transicionPercentaje()/100);
	}	
	$scope.proyectoHours = function() {
		return $scope.inicioHours() + $scope.elaboracionHours() + $scope.construccionHours() + $scope.transicionHours();
	}		
	//Fin de Fila de Horas
	
	//Fila de Dias
	$scope.inicioDays = function() {
		return $scope.workDays*($scope.inicioPercentaje()/100);
	}
	$scope.elaboracionDays = function() {
		return $scope.workDays*($scope.elaboracionPercentaje()/100);
	}
	$scope.construccionDays = function() {
		return $scope.workDays*($scope.construccionPercentaje()/100);
	}
	$scope.transicionDays = function() {
		return $scope.workDays*($scope.transicionPercentaje()/100);
	}	
	$scope.proyectoDays = function() {
		return $scope.inicioDays() + $scope.elaboracionDays() + $scope.construccionDays() + $scope.transicionDays();
	}		
	//Fin de Fila de Dias	
	
	//Fila de Meses
	$scope.inicioMonths = function() {
		return $scope.workMonths*($scope.inicioPercentaje()/100);
	}
	$scope.elaboracionMonths = function() {
		return $scope.workMonths*($scope.elaboracionPercentaje()/100);
	}
	$scope.construccionMonths = function() {
		return $scope.workMonths*($scope.construccionPercentaje()/100);
	}
	$scope.transicionMonths = function() {
		return $scope.workMonths*($scope.transicionPercentaje()/100);
	}	
	$scope.proyectoMonths = function() {
		return $scope.inicioMonths() + $scope.elaboracionMonths() + $scope.construccionMonths() + $scope.transicionMonths();
	}		
	//Fin de Fila de Meses
	
	//Fila de Fecha inicio
	$scope.inicioStartDate = function() {
		return $scope.initStartDate();
	}
	$scope.elaboracionStartDate = function() {
		return $scope.ElabStartDate();
	}
	$scope.construccionStartDate = function() {
		return $scope.ConstrStartDate();
	}
	$scope.transicionStartDate = function() {
		return $scope.transStartDate();
	}	
	$scope.proyectoStartDate = function() {
		return $scope.initStartDate();
	}		
	//Fin de Fila Fecha de inicio
	
	//Fila de Fecha fin
	$scope.inicioEndDate = function() {
		return $scope.initEndDate();
	}
	$scope.elaboracionEndDate = function() {
		return $scope.ElabEndDate();
	}
	$scope.construccionEndDate = function() {
		return $scope.ConstrEndDate();
	}
	$scope.transicionEndDate = function() {
		return $scope.transEndDate();
	}	
	$scope.proyectoEndDate = function() {
		return $scope.transicionEndDate();
	}		
	//Fin de Fila Fecha de fin	
	
	//Fila de Iteraciones
	$scope.inicioIteration = function() {
		return $scope.inicioDays()/$scope.recomendedDays();
	}
	$scope.elaboracionIteration = function() {
		return $scope.elaboracionDays()/$scope.recomendedDays();
	}
	$scope.construccionIteration = function() {
		return $scope.construccionDays()/$scope.recomendedDays();
	}
	$scope.transicionIteration = function() {
		return $scope.transicionDays()/$scope.recomendedDays();
	}	
	$scope.proyectoIteration = function() {
		return $scope.inicioIteration() + $scope.elaboracionIteration() + $scope.construccionIteration() + $scope.transicionIteration();
	}		
	//Fin de Fila de Iteraciones
	
	//Fila de Inicio Iteracion
	$scope.inicioStartIteration = function() {
		return ITERATION_INITIAL_VALUE;
	}
	$scope.elaboracionStartIteration = function() {
		return $scope.inicioIteration()+$scope.inicioStartIteration();
	}
	$scope.construccionStartIteration = function() {
		return $scope.elaboracionIteration()+$scope.elaboracionStartIteration();
	}
	$scope.transicionStartIteration = function() {
		return $scope.construccionIteration()+$scope.construccionStartIteration();
	}	
	$scope.proyectoStartIteration = function() {
		return $scope.inicioStartIteration();
	}		
	//Fin de Fila Inicio Iteracion	
	

	//Fila de Fin Iteracion
	$scope.inicioEndIteration = function() {
		return $scope.inicioIteration()+$scope.inicioStartIteration()-1;
	}
	$scope.elaboracionEndIteration = function() {
		return $scope.elaboracionIteration()+$scope.elaboracionStartIteration()-1;
	}
	$scope.construccionEndIteration = function() {
		return $scope.construccionIteration()+$scope.construccionStartIteration()-1;
	}
	$scope.transicionEndIteration = function() {
		return $scope.transicionIteration()+$scope.transicionStartIteration()-1;;
	}	
	$scope.proyectoEndIteration = function() {
		return $scope.transicionEndIteration();
	}		
	//Fin de Fila Fin Iteracion	
	
	//Fila de Media/horas iteraciÃ³n
	$scope.inicioAverageHours = function() {
		return $scope.inicioHours()/$scope.inicioIteration();
	}
	$scope.elaboracionAverageHours = function() {
		return $scope.elaboracionHours()/$scope.elaboracionIteration();
	}
	$scope.construccionAverageHours = function() {
		return $scope.construccionHours()/$scope.construccionIteration();
	}
	$scope.transicionAverageHours = function() {
		return $scope.transicionHours()/$scope.transicionIteration();
	}	
	$scope.proyectoAverageHours = function() {
		return $scope.proyectoHours()/$scope.proyectoIteration();
	}	
	//Fin de Fila de Media/horas iteraciÃ³n
	
	//Fila de Media/dias iteraciÃ³n
	$scope.inicioAverageDays = function() {
		return $scope.inicioDays()/$scope.inicioIteration();
	}
	$scope.elaboracionAverageDays = function() {
		return $scope.elaboracionDays()/$scope.elaboracionIteration();
	}
	$scope.construccionAverageDays = function() {
		return $scope.construccionDays()/$scope.construccionIteration();
	}
	$scope.transicionAverageDays = function() {
		return $scope.transicionDays()/$scope.transicionIteration();
	}	
	$scope.proyectoAverageDays = function() {
		return $scope.proyectoDays()/$scope.proyectoIteration();
	}	
	//Fin de Fila de Media/dias iteraciÃ³n	
	
	//Fila de Media/mes iteraciÃ³n
	$scope.inicioAverageMonths = function() {
		return $scope.inicioMonths()/$scope.inicioIteration();
	}
	$scope.elaboracionAverageMonths = function() {
		return $scope.elaboracionMonths()/$scope.elaboracionIteration();
	}
	$scope.construccionAverageMonths = function() {
		return $scope.construccionMonths()/$scope.construccionIteration();
	}
	$scope.transicionAverageMonths = function() {
		return $scope.transicionMonths()/$scope.transicionIteration();
	}	
	$scope.proyectoAverageMonths = function() {
		return $scope.proyectoMonths()/$scope.proyectoIteration();
	}	
	//Fin de Fila de Media/mes iteraciÃ³n	
	/************** Fin DuraciÃ³n ********************/
	
	/************** Esfuerzo ********************/
	//Fila de Distribucion
	$scope.inicioPercentajeEffort = function() {
		return INICIO_DISTRIBUTION_EFFORT;
	}
	
	$scope.elaboracionPercentajeEffort = function() {
		return ELABORACION_DISTRIBUTION_EFFORT;
	}	
	
	$scope.construccionPercentajeEffort = function() {
		return CONSTRUCCION_DISTRIBUTION_EFFORT;
	}	
	
	$scope.transicionPercentajeEffort = function() {
		return TRANSICION_DISTRIBUTION_EFFORT;
	}	
	
	$scope.proyectoPercentajeEffort = function() {
		return $scope.inicioPercentajeEffort() + $scope.elaboracionPercentajeEffort() + $scope.construccionPercentajeEffort() + $scope.transicionPercentajeEffort();
	}
	//Fin de Fila de Distribucion	
	
	//Fila de Coste
	$scope.inicioCosteEffort = function() {
		console.log($scope.showTheoricalPhasesBean);
		return $scope.showTheoricalPhasesBean.project.cost*($scope.inicioPercentajeEffort()/100);
	}
	
	$scope.elaboracionCosteEffort = function() {
		return $scope.showTheoricalPhasesBean.project.cost*($scope.elaboracionPercentajeEffort()/100);
	}	
	
	$scope.construccionCosteEffort = function() {
		return $scope.showTheoricalPhasesBean.project.cost*($scope.construccionPercentajeEffort()/100);
	}	
	
	$scope.transicionCosteEffort = function() {
		return $scope.showTheoricalPhasesBean.project.cost*($scope.transicionPercentajeEffort()/100);
	}	
	
	$scope.proyectoCosteEffort = function() {
		return $scope.showTheoricalPhasesBean.project.cost*($scope.proyectoPercentajeEffort()/100);
	}
	//Fin de Fila de Coste		
	
	//Fila de Personas-hora
	$scope.inicioPeopleHour = function() {
		console.log($scope.inicioCosteEffort());
		return $scope.inicioCosteEffort()/$scope.avgHourCost;
	}
	
	$scope.elaboracionPeopleHour = function() {
		return $scope.elaboracionCosteEffort()/$scope.avgHourCost;
	}	
	
	$scope.construccionPeopleHour = function() {
		return $scope.construccionCosteEffort()/$scope.avgHourCost;
	}	
	
	$scope.transicionPeopleHour = function() {
		return $scope.transicionCosteEffort()/$scope.avgHourCost;
	}	
	
	$scope.proyectoPeopleHour = function() {
		return $scope.proyectoCosteEffort()/$scope.avgHourCost;
	}
	//Fin de Fila de Personas-hora			
	
	//Fila de Personas-dia
	$scope.inicioPeopleDay = function() {
		return $scope.inicioCosteEffort()/$scope.avgDayCost;
	}
	
	$scope.elaboracionPeopleDay = function() {
		return $scope.elaboracionCosteEffort()/$scope.avgDayCost;
	}	
	
	$scope.construccionPeopleDay = function() {
		return $scope.construccionCosteEffort()/$scope.avgDayCost;
	}	
	
	$scope.transicionPeopleDay = function() {
		return $scope.transicionCosteEffort()/$scope.avgDayCost;
	}	
	
	$scope.proyectoPeopleDay = function() {
		return $scope.proyectoCosteEffort()/$scope.avgDayCost;
	}
	//Fin de Fila de Personas-dia		
	
	//Fila de Personas-mes
	$scope.inicioPeopleMonth = function() {
		return $scope.inicioCosteEffort()/$scope.avgMonthCost;
	}
	
	$scope.elaboracionPeopleMonth = function() {
		return $scope.elaboracionCosteEffort()/$scope.avgMonthCost;
	}	
	
	$scope.construccionPeopleMonth = function() {
		return $scope.construccionCosteEffort()/$scope.avgMonthCost;
	}	
	
	$scope.transicionPeopleMonth = function() {
		return $scope.transicionCosteEffort()/$scope.avgMonthCost;
	}	
	
	$scope.proyectoPeopleMonth = function() {
		return $scope.proyectoCosteEffort()/$scope.avgMonthCost;
	}
	//Fin de Fila de Personas-dia		
	
	//Fila de personas
	$scope.inicioPeople = function() {
		return $scope.inicioPeopleHour()/$scope.inicioHours();
	}
	
	$scope.elaboracionPeople = function() {
		return $scope.elaboracionPeopleHour()/$scope.elaboracionHours();
	}	
	
	$scope.construccionPeople = function() {
		return $scope.construccionPeopleHour()/$scope.construccionHours();
	}	
	
	$scope.transicionPeople = function() {
		return $scope.transicionPeopleHour()/$scope.transicionHours();
	}	
	
	$scope.proyectoPeople = function() {
		return $scope.proyectoPeopleHour()/$scope.proyectoHours();
	} 
	//Fin de Fila de personas
	
	//Inicio fila distribucion-iteracion
	$scope.inicioDistribucionIteration = function() {
		return $scope.inicioPercentajeEffort()/$scope.inicioIteration();
	}
	
	$scope.elaboracionDistribucionIteration = function() {
		return $scope.elaboracionPercentajeEffort()/$scope.elaboracionIteration();
	}	
	
	$scope.construccionDistribucionIteration = function() {
		return $scope.construccionPercentajeEffort()/$scope.construccionIteration();
	}	
	
	$scope.transicionDistribucionIteration = function() {
		return $scope.transicionPercentajeEffort()/$scope.transicionIteration();
	}	
	
	$scope.proyectoDistribucionIteration = function() {
		return $scope.proyectoPercentajeEffort()/$scope.proyectoIteration();
	} 	
	//Fin fila distribucion-iteracion
	
	//Inicio fila persona-hora-iteracion
	$scope.inicioPersonHourIteration = function() {
		return $scope.inicioPeopleHour()/$scope.inicioIteration();
	}
	
	$scope.elaboracionPersonHourIteration = function() {
		return $scope.elaboracionPeopleHour()/$scope.elaboracionIteration();
	}	
	
	$scope.construccionPersonHourIteration = function() {
		return $scope.construccionPeopleHour()/$scope.construccionIteration();
	}	
	
	$scope.transicionPersonHourIteration = function() {
		return $scope.transicionPeopleHour()/$scope.transicionIteration();
	}	
	
	$scope.proyectoPersonHourIteration = function() {
		return $scope.proyectoPeopleHour()/$scope.proyectoIteration();
	} 	
	//Fin fila persona-hora-iteracion	
	
	//Inicio fila persona-dia-iteracion
	$scope.inicioPersonDayIteration = function() {
		return $scope.inicioPeopleDay()/$scope.inicioIteration();
	}
	
	$scope.elaboracionPersonDayIteration = function() {
		return $scope.elaboracionPeopleDay()/$scope.elaboracionIteration();
	}	
	
	$scope.construccionPersonDayIteration = function() {
		return $scope.construccionPeopleDay()/$scope.construccionIteration();
	}	
	
	$scope.transicionPersonDayIteration = function() {
		return $scope.transicionPeopleDay()/$scope.transicionIteration();
	}	
	
	$scope.proyectoPersonDayIteration = function() {
		return $scope.proyectoPeopleDay()/$scope.proyectoIteration();
	} 	
	//Fin fila persona-dia-iteracion	
	
	//Inicio fila persona-mes-iteracion
	$scope.inicioPersonMonthIteration = function() {
		return $scope.inicioPeople();
	}
	
	$scope.elaboracionPersonMonthIteration = function() {
		return $scope.elaboracionPeople();
	}	
	
	$scope.construccionPersonMonthIteration = function() {
		return $scope.construccionPeople();
	}	
	
	$scope.transicionPersonMonthIteration = function() {
		return $scope.transicionPeople();
	}	
	
	$scope.proyectoPersonMonthIteration = function() {
		return $scope.proyectoPeopleMonth()/$scope.proyectoIteration();
	} 	
	//Fin fila persona-mes-iteracion	
	/************** Fin Esfuerzo ********************/
	
	if(!$isTest){
		bridgeService.shareData= $scope;
		$scope.phasesFinished = true;
	}
	
}]);
