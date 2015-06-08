/**
 * 
 */
projectApp.controller("theoricalDisciplineController", ['$scope', '$isTest', 'bridgeService', function ($scope, $isTest, bridgeService) {  
	
	if(!$isTest){
		  initJSFScope($scope);
	}
	$scope.phases = bridgeService.shareData;
	
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
		return DISTRIBUCION_GESTION_INICIO/100*$scope.phases.inicioPeopleHour();
	}
	
	$scope.initialRequirementsHour = function(){
		return DISTRIBUCION_REQUISITOS_INICIO/100*$scope.phases.inicioPeopleHour();
	}
	
	$scope.initialAnalysisHour = function(){
		return DISTRIBUCION_ANALISIS_INICIO/100*$scope.phases.inicioPeopleHour();
	}
	
	$scope.initialImplementationHour = function(){
		return DISTRIBUCION_IMPLEMENTACION_INICIO/100*$scope.phases.inicioPeopleHour();
	}
	
	$scope.initialTestsHour = function(){
		return DISTRIBUCION_PRUEBAS_INICIO/100*$scope.phases.inicioPeopleHour();
	}
	
	$scope.initialDeploymentHour = function(){
		return DISTRIBUCION_DESPLIEGUE_INICIO/100*$scope.phases.inicioPeopleHour();
	}
	
	$scope.initialVersionHour = function(){
		return DISTRIBUCION_ENTORNO_INICIO/100*$scope.phases.inicioPeopleHour();
	}
	
	$scope.totalInitialHour = function(){
		return DISTRIBUCION_TOTAL_INICIO/100*$scope.phases.inicioPeopleHour();
	}
	
	//Fase Elaboracion
	$scope.elaborationProjectManagmentHour = function(){
		return DISTRIBUCION_GESTION_ELABORACION/100*$scope.phases.elaboracionPeopleHour();
	}
	
	$scope.elaborationRequirementsHour = function(){
		return DISTRIBUCION_REQUISITOS_ELABORACION/100*$scope.phases.elaboracionPeopleHour();
	}
	
	$scope.elaborationAnalysisHour = function(){
		return DISTRIBUCION_ANALISIS_ELABORACION/100*$scope.phases.elaboracionPeopleHour();
	}
	
	$scope.elaborationImplementationHour = function(){
		return DISTRIBUCION_IMPLEMENTACION_ELABORACION/100*$scope.phases.elaboracionPeopleHour();
	}
	
	$scope.elaborationTestsHour = function(){
		return DISTRIBUCION_PRUEBAS_ELABORACION/100*$scope.phases.elaboracionPeopleHour();
	}
	
	$scope.elaborationDeploymentHour = function(){
		return DISTRIBUCION_DESPLIEGUE_ELABORACION/100*$scope.phases.elaboracionPeopleHour();
	}
	
	$scope.elaborationVersionHour = function(){
		return DISTRIBUCION_ENTORNO_ELABORACION/100*$scope.phases.elaboracionPeopleHour();
	}
	
	$scope.totalElaborationHour = function(){
		return DISTRIBUCION_TOTAL_ELABORACION/100*$scope.phases.elaboracionPeopleHour();
	}
	
	//Fase Construccion
	$scope.constructionProjectManagmentHour = function(){
		return DISTRIBUCION_GESTION_CONSTRUCCION/100*$scope.phases.construccionPeopleHour();
	}
	
	$scope.constructionRequirementsHour = function(){
		return DISTRIBUCION_REQUISITOS_CONSTRUCCION/100*$scope.phases.construccionPeopleHour();
	}
	$scope.constructionAnalysisHour = function(){
		return DISTRIBUCION_ANALISIS_CONSTRUCCION/100*$scope.phases.construccionPeopleHour();
	}
	
	$scope.constructionImplementationHour = function(){
		return DISTRIBUCION_IMPLEMENTACION_CONSTRUCCION/100*$scope.phases.construccionPeopleHour();
	}
	
	$scope.constructionTestsHour = function(){
		return DISTRIBUCION_PRUEBAS_CONSTRUCCION/100*$scope.phases.construccionPeopleHour();
	}
	
	$scope.constructionDeploymentHour = function(){
		return DISTRIBUCION_DESPLIEGUE_CONSTRUCCION/100*$scope.phases.construccionPeopleHour();
	}
	
	$scope.constructionVersionHour = function(){
		return DISTRIBUCION_ENTORNO_CONSTRUCCION/100*$scope.phases.construccionPeopleHour();
	}
	
	$scope.totalConstructionHour = function(){
		return DISTRIBUCION_TOTAL_CONSTRUCCION/100*$scope.phases.construccionPeopleHour();
	}
	
	//Fase Transicion
	$scope.transitionProjectManagmentHour = function(){
		return DISTRIBUCION_GESTION_TRANSICION/100*$scope.phases.transicionPeopleHour();
	}
	
	$scope.transitionRequirementsHour = function(){
		return DISTRIBUCION_REQUISITOS_TRANSICION/100*$scope.phases.transicionPeopleHour();
	}
	
	$scope.transitionAnalysisHour = function(){
		return DISTRIBUCION_ANALISIS_TRANSICION/100*$scope.phases.transicionPeopleHour();
	}
	
	$scope.transitionImplementationHour = function(){
		return DISTRIBUCION_IMPLEMENTACION_TRANSICION/100*$scope.phases.transicionPeopleHour();
	}
	
	$scope.transitionTestsHour = function(){
		return DISTRIBUCION_PRUEBAS_TRANSICION/100*$scope.phases.transicionPeopleHour();
	}
	
	$scope.transitionDeploymentHour = function(){
		return DISTRIBUCION_DESPLIEGUE_TRANSICION/100*$scope.phases.transicionPeopleHour();
	}
	
	$scope.transitionVersionHour = function(){
		return DISTRIBUCION_ENTORNO_TRANSICION/100*$scope.phases.transicionPeopleHour();
	}
	
	$scope.totalTransitionHour = function(){
		return DISTRIBUCION_TOTAL_TRANSICION/100*$scope.phases.transicionPeopleHour();
	}
	
	//Totales proyecto
	$scope.projectProjectManagmentHour = function(){
		return DISTRIBUCION_GESTION_PROYECTO/100*$scope.phases.proyectoPeopleHour();
	}
	
	$scope.projectRequirementsHour = function(){
		return DISTRIBUCION_REQUISITOS_PROYECTO/100*$scope.phases.proyectoPeopleHour();
	}
	
	$scope.projectAnalysisHour = function(){
		return DISTRIBUCION_ANALISIS_PROYECTO/100*$scope.phases.proyectoPeopleHour();
	}
	
	$scope.projectImplementationHour = function(){
		return DISTRIBUCION_IMPLEMENTACION_PROYECTO/100*$scope.phases.proyectoPeopleHour();
	}
	
	$scope.projectTestsHour = function(){
		return DISTRIBUCION_PRUEBAS_PROYECTO/100*$scope.phases.proyectoPeopleHour();
	}
	
	$scope.projectDeploymentHour = function(){
		return DISTRIBUCION_DESPLIEGUE_PROYECTO/100*$scope.phases.proyectoPeopleHour();
	}
	
	$scope.projectVersionHour = function(){
		return DISTRIBUCION_ENTORNO_PROYECTO/100*$scope.phases.proyectoPeopleHour();
	}
	
	$scope.totalProjectHour = function(){
		return DISTRIBUCION_TOTAL_PROYECTO/100*$scope.phases.proyectoPeopleHour();
	}
	
	/*****************************Personas-dia*******************************/
	//Fase inicio
	$scope.initialProjectManagmentDay = function(){
		return DISTRIBUCION_GESTION_INICIO/100*$scope.phases.inicioPeopleDay();
	}
	
	$scope.initialRequirementsDay = function(){
		return DISTRIBUCION_REQUISITOS_INICIO/100*$scope.phases.inicioPeopleDay();
	}
	
	$scope.initialAnalysisDay = function(){
		return DISTRIBUCION_ANALISIS_INICIO/100*$scope.phases.inicioPeopleDay();
	}
	
	$scope.initialImplementationDay = function(){
		return DISTRIBUCION_IMPLEMENTACION_INICIO/100*$scope.phases.inicioPeopleDay();
	}
	
	$scope.initialTestsDay = function(){
		return DISTRIBUCION_PRUEBAS_INICIO/100*$scope.phases.inicioPeopleDay();
	}
	
	$scope.initialDeploymentDay = function(){
		return DISTRIBUCION_DESPLIEGUE_INICIO/100*$scope.phases.inicioPeopleDay();
	}
	
	$scope.initialVersionDay = function(){
		return DISTRIBUCION_ENTORNO_INICIO/100*$scope.phases.inicioPeopleDay();
	}
	
	$scope.totalInitialDay = function(){
		return DISTRIBUCION_TOTAL_INICIO/100*$scope.phases.inicioPeopleDay();
	}
	
	//Fase Elaboracion
	$scope.elaborationProjectManagmentDay = function(){
		return 16.6;
	}
	
	$scope.elaborationRequirementsDay = function(){
		return 24.9;
	}
	
	$scope.elaborationAnalysisDay = function(){
		return 49.8;
	}
	
	$scope.elaborationImplementationDay = function(){
		return 18;
	}
	
	$scope.elaborationTestsDay = function(){
		return 13.8;
	}
	
	$scope.elaborationDeploymentDay = function(){
		return 4.1;
	}
	
	$scope.elaborationVersionDay = function(){
		return 11.1;
	}
	
	$scope.totalElaborationDay = function(){
		return 138.3;
	}
	
	//Fase construccion
	$scope.constructionProjectManagmentDay = function(){
		return 44.9;
	}
	
	$scope.constructionRequirementsDay = function(){
		return 36;
	}
	
	$scope.constructionAnalysisDay = function(){
		return 71.9;
	}
	
	$scope.constructionImplementationDay = function(){
		return 152.8;
	}
	
	$scope.constructionTestsDay = function(){
		return 107.9;
	}
	
	$scope.constructionDeploymentDay = function(){
		return 13.5;
	}
	
	$scope.constructionVersionDay = function(){
		return 22.5;
	}
	
	$scope.totalConstructionDay = function(){
		return 449.4;
	}
	
	//Fase Transicion
	$scope.transitionProjectManagmentDay = function(){
		return 9.7;
	}
	
	$scope.transitionRequirementsDay = function(){
		return 2.8;
	}
	
	$scope.transitionAnalysisDay = function(){
		return 2.8;
	}
	
	$scope.transitionImplementationDay = function(){
		return 13.1;
	}
	
	$scope.transitionTestsDay = function(){
		return 16.6;
	}
	
	$scope.transitionDeploymentDay = function(){
		return 20.7;
	}
	
	$scope.transitionVersionDay = function(){
		return 3.5;
	}
	
	$scope.totalTransitionDay = function(){
		return 69.1;
	}
	
	//Totales de proyecto
	$scope.projectProjectManagmentDay = function(){
		return 76.1;
	}
	
	$scope.projectRequirementsDay = function(){
		return 76.7;
	}
	
	$scope.projectAnalysisDay = function(){
		return 131;
	}
	
	$scope.projectImplementationDay = function(){
		return 186.7;
	}
	
	$scope.projectTestsDay = function(){
		return 141;
	}
	
	$scope.projectDeploymentDay = function(){
		return 39.4;
	}
	
	$scope.projectVersionDay = function(){
		return 40.4;
	}
	
	$scope.totalProjectDay = function(){
		return 691.4;
	}
	
	
	
	
	/***********************Personas-mes*************************/
	//Fase Inicio
	$scope.initialProjectManagmentMonth = function(){
		return 0.23;
	}
	
	$scope.initialRequirementsMonth = function(){
		return 0.63;
	}
	
	$scope.initialAnalysisMonth = function(){
		return 0.31;
	}
	
	$scope.initialImplementationMonth = function(){
		return 0.13;
	}
	
	$scope.initialTestsMonth = function(){
		return 0.13;
	}
	
	$scope.initialDeploymentMonth = function(){
		return 0.05;
	}
	
	$scope.initialVersionMonth = function(){
		return 0.16;
	}
	
	$scope.totalInitialMonth = function(){
		return 1.6;
	}
	
	//Fase Elaboración
	$scope.elaborationProjectManagmentMonth = function(){
		return 0.79;
	}
	
	$scope.elaborationRequirementsMonth = function(){
		return 1.19;
	}
	
	$scope.elaborationAnalysisMonth = function(){
		return 2.37;
	}
	
	$scope.elaborationImplementationMonth = function(){
		return 0.86;
	}
	
	$scope.elaborationTestsMonth = function(){
		return 0.66;
	}
	
	$scope.elaborationDeploymentMonth = function(){
		return 0.2;
	}
	
	$scope.elaborationVersionMonth = function(){
		return 0.53;
	}
	
	$scope.totalElaborationMonth = function(){
		return 6.6;
	}
	
	//Fase Construcción
	$scope.constructionProjectManagmentMonth = function(){
		return 2.14;
	}
	
	$scope.constructionRequirementsMonth = function(){
		return 1.71;
	}
	
	$scope.constructionAnalysisMonth = function(){
		return 3.42;
	}
	
	$scope.constructionImplementationMonth = function(){
		return 7.28;
	}
	
	$scope.constructionTestsMonth = function(){
		return 5.14;
	}
	
	$scope.constructionDeploymentMonth = function(){
		return 0.64;
	}
	
	$scope.constructionVersionMonth = function(){
		return 1.07;
	}
	
	$scope.totalConstructionMonth = function(){
		return 21.4;
	}
	
	//Fase Transición
	$scope.transitionProjectManagmentMonth = function(){
		return 0.46;
	}
	
	$scope.transitionRequirementsMonth = function(){
		return 0.13;
	}
	
	$scope.transitionAnalysisMonth = function(){
		return 0.13;
	}
	
	$scope.transitionImplementationMonth = function(){
		return 0.63;
	}
	
	$scope.transitionTestsMonth = function(){
		return 0.79;
	}
	
	$scope.transitionDeploymentMonth = function(){
		return 0.99;
	}
	
	$scope.transitionVersionMonth = function(){
		return 0.16;
	}
	
	$scope.totalTransitionMonth = function(){
		return 3.3;
	}
	
	//Fase Proyecto
	$scope.projectProjectManagmentMonth = function(){
		return 3.62;
	}
	
	$scope.projectRequirementsMonth = function(){
		return 3.65;
	}
	
	$scope.projectAnalysisMonth = function(){
		return 6.24;
	}
	
	$scope.projectImplementationMonth = function(){
		return 8.89;
	}
	
	$scope.projectTestsMonth = function(){
		return 6.72;
	}
	
	$scope.projectDeploymentMonth = function(){
		return 1.88;
	}
	
	$scope.projectVersionMonth = function(){
		return 1.93;
	}
	
	$scope.totalProjectMonth = function(){
		return 32.9;
	}
}]);
