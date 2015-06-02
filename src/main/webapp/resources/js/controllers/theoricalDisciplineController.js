/**
 * 
 */
projectApp.controller("theoricalDisciplineController", ['$scope', '$isTest', 'PeopleTimeService', function ($scope, $isTest, PeopleTimeService) {  
	
	if(!$isTest){
		  initJSFScope($scope);
	}
	
	var DISTRIBUCION_GESTION_INICIO = 14;
	var DISTRIBUCION_REQUISITOS_INICIO = 38;
	var DISTRIBUCION_ANALISIS_INICIO = 19;
	var DISTRIBUCION_IMPLEMENTACION_INICIO = 8;
	var DISTRIBUCION_PRUEBAS_INICIO = 8;
	var DISTRIBUCION_DESPLIEGUE_INICIO = 3;
	var DISTRIBUCION_ENTORNO_INICIO = 10;
	var DISTRIBUCION_TOTAL_INICIO = 100;
	
	var DISTRIBUCION_GESTION_ELABORACION = 12;
	var DISTRIBUCION_REQUISITOS_ELABORACION = 18;
	var DISTRIBUCION_ANALISIS_ELABORACION = 36;
	var DISTRIBUCION_IMPLEMENTACION_ELABORACION = 13;
	var DISTRIBUCION_PRUEBAS_ELABORACION = 10;
	var DISTRIBUCION_DESPLIEGUE_ELABORACION = 3;
	var DISTRIBUCION_ENTORNO_ELABORACION = 8;
	var DISTRIBUCION_TOTAL_ELABORACION = 100;
	
	var DISTRIBUCION_GESTION_CONSTRUCCION = 10;
	var DISTRIBUCION_REQUISITOS_CONSTRUCCION = 8;
	var DISTRIBUCION_ANALISIS_CONSTRUCCION = 16;
	var DISTRIBUCION_IMPLEMENTACION_CONSTRUCCION = 34;
	var DISTRIBUCION_PRUEBAS_CONSTRUCCION = 24;
	var DISTRIBUCION_DESPLIEGUE_CONSTRUCCION = 3;
	var DISTRIBUCION_ENTORNO_CONSTRUCCION = 5;
	var DISTRIBUCION_TOTAL_CONSTRUCCION = 100;
	
	var DISTRIBUCION_GESTION_TRANSICION = 14;
	var DISTRIBUCION_REQUISITOS_TRANSICION = 4;
	var DISTRIBUCION_ANALISIS_TRANSICION = 4;
	var DISTRIBUCION_IMPLEMENTACION_TRANSICION = 19;
	var DISTRIBUCION_PRUEBAS_TRANSICION = 24;
	var DISTRIBUCION_DESPLIEGUE_TRANSICION = 30;
	var DISTRIBUCION_ENTORNO_TRANSICION = 5;
	var DISTRIBUCION_TOTAL_TRANSICION = 100;
		
	var DISTRIBUCION_GESTION_PROYECTO = 11;
	var DISTRIBUCION_REQUISITOS_PROYECTO = 11;
	var DISTRIBUCION_ANALISIS_PROYECTO = 19;
	var DISTRIBUCION_IMPLEMENTACION_PROYECTO = 27;
	var DISTRIBUCION_PRUEBAS_PROYECTO= 20;
	var DISTRIBUCION_DESPLIEGUE_PROYECTO = 6;
	var DISTRIBUCION_ENTORNO_PROYECTO = 6;
	var DISTRIBUCION_TOTAL_PROYECTO = 100;
	
	/***********************Personas-hora*************************/
	//Fase Inicio
	$scope.initialProjectManagmentHour = function(){
		return 38.7;
	}
	
	$scope.initialRequirementsHour = function(){
		return 105.1;
	}
	
	$scope.initialAnalysisHour = function(){
		return 52.5;
	}
	
	$scope.initialImplementationHour = function(){
		return 22.1;
	}
	
	$scope.initialTestsHour = function(){
		return 22.1;
	}
	
	$scope.initialDeploymentHour = function(){
		return 8.3;
	}
	
	$scope.initialVersionHour = function(){
		return 27.7;
	}
	
	$scope.totalInitialHour = function(){
		return 276.6;
	}
	
	//Fase Elaboracion
	$scope.elaborationProjectManagmentHour = function(){
		return 132.8;
	}
	
	$scope.elaborationProjectManagmentHour = function(){
		return 199.1;
	}
	
	$scope.elaborationAnalysisHour = function(){
		return 398.3;
	}
	
	$scope.elaborationImplementationHour = function(){
		return 143.8;
	}
	
	$scope.elaborationTestsHour = function(){
		return 110.6;
	}
	
	$scope.elaborationDeploymentHour = function(){
		return 33.2;
	}
	
	$scope. = function(){
		return
	}
}]);