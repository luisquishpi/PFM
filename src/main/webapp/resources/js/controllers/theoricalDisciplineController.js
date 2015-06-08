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
	
	/************************Disciplinas**************************/
	//Fase Inicio
	$scope.initialPercentajeProjectManagment = function(){
		return DISTRIBUCION_GESTION_INICIO;
	}
	
	$scope.initialPercentajeRequirements = function(){
		return DISTRIBUCION_REQUISITOS_INICIO;
	}
	
	$scope.initialPercentajeAnalysis = function(){
		return DISTRIBUCION_ANALISIS_INICIO;
	}
	
	$scope.initialPercentajeImplementation = function(){
		return DISTRIBUCION_IMPLEMENTACION_INICIO;
	}
	
	$scope.initialPercentajeTests = function(){
		return DISTRIBUCION_PRUEBAS_INICIO;
	}
	
	$scope.initialPercentajeDeployment = function(){
		return DISTRIBUCION_DESPLIEGUE_INICIO;
	}
	
	$scope.initialPercentajeVersion = function(){
		return DISTRIBUCION_ENTORNO_INICIO;
	}
	
	$scope.totalInitialPercentaje = function(){
		return DISTRIBUCION_TOTAL_INICIO;
	}
	
	//Fase Elaboración
	$scope.elaborationPercentajeProjectManagment = function(){
		return DISTRIBUCION_GESTION_ELABORACION;
	}
	
	$scope.elaborationPercentajeRequirements = function(){
		return DISTRIBUCION_REQUISITOS_ELABORACION;
	}
	
	$scope.elaborationPercentajeAnalysis = function(){
		return DISTRIBUCION_ANALISIS_ELABORACION;
	}
	
	$scope.elaborationPercentajeImplementation = function(){
		return DISTRIBUCION_IMPLEMENTACION_ELABORACION;
	}
	
	$scope.elaborationPercentajeTests = function(){
		return DISTRIBUCION_PRUEBAS_ELABORACION;
	}
	
	$scope.elaborationPercentajeDeployment = function(){
		return DISTRIBUCION_DESPLIEGUE_ELABORACION;
	}
	
	$scope.elaborationPercentajeVersion = function(){
		return DISTRIBUCION_ENTORNO_ELABORACION;
	}
	
	$scope.totalElaborationPercentaje = function(){
		return DISTRIBUCION_TOTAL_ELABORACION;
	}
	
	//Fase Construcción
	$scope.constructionPercentajeProjectManagment = function(){
		return DISTRIBUCION_GESTION_CONSTRUCCION;
	}
	
	$scope.constructionPercentajeRequirements = function(){
		return DISTRIBUCION_REQUISITOS_CONSTRUCCION;
	}
	
	$scope.constructionPercentajeAnalysis = function(){
		return DISTRIBUCION_ANALISIS_CONSTRUCCION;
	}
	
	$scope.constructionPercentajeImplementation = function(){
		return DISTRIBUCION_IMPLEMENTACION_CONSTRUCCION;
	}
	
	$scope.constructionPercentajeTests = function(){
		return DISTRIBUCION_PRUEBAS_CONSTRUCCION;
	}
	
	$scope.constructionPercentajeDeployment = function(){
		return DISTRIBUCION_DESPLIEGUE_CONSTRUCCION;
	}
	
	$scope.constructionPercentajeVersion = function(){
		return DISTRIBUCION_ENTORNO_CONSTRUCCION;
	}
	
	$scope.totalConstructionPercentaje = function(){
		return DISTRIBUCION_TOTAL_CONSTRUCCION;
	}
	
	//Fase Transición
	$scope.transitionPercentajeProjectManagment = function(){
		return DISTRIBUCION_GESTION_TRANSICION;
	}
	
	$scope.transitionPercentajeRequirements = function(){
		return DISTRIBUCION_REQUISITOS_TRANSICION;
	}
	
	$scope.transitionPercentajeAnalysis = function(){
		return DISTRIBUCION_ANALISIS_TRANSICION;
	}
	
	$scope.transitionPercentajeImplementation = function(){
		return DISTRIBUCION_IMPLEMENTACION_TRANSICION;
	}
	
	$scope.transitionPercentajeTests = function(){
		return DISTRIBUCION_PRUEBAS_TRANSICION;
	}
	
	$scope.transitionPercentajeDeployment = function(){
		return DISTRIBUCION_DESPLIEGUE_TRANSICION;
	}
	
	$scope.transitionPercentajeVersion = function(){
		return DISTRIBUCION_ENTORNO_TRANSICION;
	}
	
	$scope.totalTransitionPercentaje = function(){
		return DISTRIBUCION_TOTAL_TRANSICION;
	}
	
	//Fase Proyecto
	$scope.projectPercentajeProjectManagment = function(){
		return DISTRIBUCION_GESTION_PROYECTO;
	}
	
	$scope.projectPercentajeRequirements = function(){
		return DISTRIBUCION_REQUISITOS_PROYECTO;
	}
	
	$scope.projectPercentajeAnalysis = function(){
		return DISTRIBUCION_ANALISIS_PROYECTO;
	}
	
	$scope.projectPercentajeImplementation = function(){
		return DISTRIBUCION_IMPLEMENTACION_PROYECTO;
	}
	
	$scope.projectPercentajeTests = function(){
		return DISTRIBUCION_PRUEBAS_PROYECTO;
	}
	
	$scope.projectPercentajeDeployment = function(){
		return DISTRIBUCION_DESPLIEGUE_PROYECTO;
	}
	
	$scope.projectPercentajeVersion = function(){
		return DISTRIBUCION_ENTORNO_PROYECTO;
	}
	
	$scope.totalProjectPercentaje = function(){
		return DISTRIBUCION_TOTAL_PROYECTO;
	}

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
		return DISTRIBUCION_GESTION_ELABORACION/100*$scope.phases.elaboracionPeopleDay();
	}
	
	$scope.elaborationRequirementsDay = function(){
		return DISTRIBUCION_REQUISITOS_ELABORACION/100*$scope.phases.elaboracionPeopleDay();
	}
	
	$scope.elaborationAnalysisDay = function(){
		return DISTRIBUCION_ANALISIS_ELABORACION/100*$scope.phases.elaboracionPeopleDay();
	}
	
	$scope.elaborationImplementationDay = function(){
		return DISTRIBUCION_IMPLEMENTACION_ELABORACION/100*$scope.phases.elaboracionPeopleDay();
	}
	
	$scope.elaborationTestsDay = function(){
		return DISTRIBUCION_PRUEBAS_ELABORACION/100*$scope.phases.elaboracionPeopleDay();
	}
	
	$scope.elaborationDeploymentDay = function(){
		return DISTRIBUCION_DESPLIEGUE_ELABORACION/100*$scope.phases.elaboracionPeopleDay();
	}
	
	$scope.elaborationVersionDay = function(){
		return DISTRIBUCION_ENTORNO_ELABORACION/100*$scope.phases.elaboracionPeopleDay();
	}
	
	$scope.totalElaborationDay = function(){
		return DISTRIBUCION_TOTAL_ELABORACION/100*$scope.phases.elaboracionPeopleDay();
	}
	
	//Fase construccion
	$scope.constructionProjectManagmentDay = function(){
		return DISTRIBUCION_GESTION_CONSTRUCCION/100*$scope.phases.construccionPeopleDay();
	}
	
	$scope.constructionRequirementsDay = function(){
		return DISTRIBUCION_REQUISITOS_CONSTRUCCION/100*$scope.phases.construccionPeopleDay();
	}
	$scope.constructionAnalysisDay = function(){
		return DISTRIBUCION_ANALISIS_CONSTRUCCION/100*$scope.phases.construccionPeopleDay();
	}
	
	$scope.constructionImplementationDay = function(){
		return DISTRIBUCION_IMPLEMENTACION_CONSTRUCCION/100*$scope.phases.construccionPeopleDay();
	}
	
	$scope.constructionTestsDay = function(){
		return DISTRIBUCION_PRUEBAS_CONSTRUCCION/100*$scope.phases.construccionPeopleDay();
	}
	
	$scope.constructionDeploymentDay = function(){
		return DISTRIBUCION_DESPLIEGUE_CONSTRUCCION/100*$scope.phases.construccionPeopleDay();
	}
	
	$scope.constructionVersionDay = function(){
		return DISTRIBUCION_ENTORNO_CONSTRUCCION/100*$scope.phases.construccionPeopleDay();
	}
	
	$scope.totalConstructionDay = function(){
		return DISTRIBUCION_TOTAL_CONSTRUCCION/100*$scope.phases.construccionPeopleDay();
	}
	
	//Fase Transicion
	$scope.transitionProjectManagmentDay = function(){
		return DISTRIBUCION_GESTION_TRANSICION/100*$scope.phases.transicionPeopleDay();
	}
	
	$scope.transitionRequirementsDay = function(){
		return DISTRIBUCION_REQUISITOS_TRANSICION/100*$scope.phases.transicionPeopleDay();
	}
	
	$scope.transitionAnalysisDay = function(){
		return DISTRIBUCION_ANALISIS_TRANSICION/100*$scope.phases.transicionPeopleDay();
	}
	
	$scope.transitionImplementationDay = function(){
		return DISTRIBUCION_IMPLEMENTACION_TRANSICION/100*$scope.phases.transicionPeopleDay();
	}
	
	$scope.transitionTestsDay = function(){
		return DISTRIBUCION_PRUEBAS_TRANSICION/100*$scope.phases.transicionPeopleDay();
	}
	
	$scope.transitionDeploymentDay = function(){
		return DISTRIBUCION_DESPLIEGUE_TRANSICION/100*$scope.phases.transicionPeopleDay();
	}
	
	$scope.transitionVersionDay = function(){
		return DISTRIBUCION_ENTORNO_TRANSICION/100*$scope.phases.transicionPeopleDay();
	}
	
	$scope.totalTransitionDay = function(){
		return DISTRIBUCION_TOTAL_TRANSICION/100*$scope.phases.transicionPeopleDay();
	}
	
	//Totales de proyecto
	$scope.projectProjectManagmentDay = function(){
		return DISTRIBUCION_GESTION_PROYECTO/100*$scope.phases.proyectoPeopleDay();
	}
	
	$scope.projectRequirementsDay = function(){
		return DISTRIBUCION_REQUISITOS_PROYECTO/100*$scope.phases.proyectoPeopleDay();
	}
	
	$scope.projectAnalysisDay = function(){
		return DISTRIBUCION_ANALISIS_PROYECTO/100*$scope.phases.proyectoPeopleDay();
	}
	
	$scope.projectImplementationDay = function(){
		return DISTRIBUCION_IMPLEMENTACION_PROYECTO/100*$scope.phases.proyectoPeopleDay();
	}
	
	$scope.projectTestsDay = function(){
		return DISTRIBUCION_PRUEBAS_PROYECTO/100*$scope.phases.proyectoPeopleDay();
	}
	
	$scope.projectDeploymentDay = function(){
		return DISTRIBUCION_DESPLIEGUE_PROYECTO/100*$scope.phases.proyectoPeopleDay();
	}
	
	$scope.projectVersionDay = function(){
		return DISTRIBUCION_ENTORNO_PROYECTO/100*$scope.phases.proyectoPeopleDay();
	}
	
	$scope.totalProjectDay = function(){
		return DISTRIBUCION_TOTAL_PROYECTO/100*$scope.phases.proyectoPeopleDay();
	}
	
	
	
	
	/***********************Personas-mes*************************/
	//Fase Inicio
	$scope.initialProjectManagmentMonth = function(){
		return DISTRIBUCION_GESTION_INICIO/100*$scope.phases.inicioPeopleMonth();
	}
	
	$scope.initialRequirementsMonth = function(){
		return DISTRIBUCION_REQUISITOS_INICIO/100*$scope.phases.inicioPeopleMonth();
	}
	
	$scope.initialAnalysisMonth = function(){
		return DISTRIBUCION_ANALISIS_INICIO/100*$scope.phases.inicioPeopleMonth();
	}
	
	$scope.initialImplementationMonth = function(){
		return DISTRIBUCION_IMPLEMENTACION_INICIO/100*$scope.phases.inicioPeopleMonth();
	}
	
	$scope.initialTestsMonth = function(){
		return DISTRIBUCION_PRUEBAS_INICIO/100*$scope.phases.inicioPeopleMonth();
	}
	
	$scope.initialDeploymentMonth = function(){
		return DISTRIBUCION_DESPLIEGUE_INICIO/100*$scope.phases.inicioPeopleMonth();
	}
	
	$scope.initialVersionMonth = function(){
		return DISTRIBUCION_ENTORNO_INICIO/100*$scope.phases.inicioPeopleMonth();
	}
	
	$scope.totalInitialMonth = function(){
		return DISTRIBUCION_TOTAL_INICIO/100*$scope.phases.inicioPeopleMonth();
	}
	
	//Fase Elaboración
	$scope.elaborationProjectManagmentMonth = function(){
		return DISTRIBUCION_GESTION_ELABORACION/100*$scope.phases.elaboracionPeopleMonth();	}
	
	$scope.elaborationRequirementsMonth = function(){
		return DISTRIBUCION_REQUISITOS_ELABORACION/100*$scope.phases.elaboracionPeopleMonth();
	}
	
	$scope.elaborationAnalysisMonth = function(){
		return DISTRIBUCION_ANALISIS_ELABORACION/100*$scope.phases.elaboracionPeopleMonth();
	}
	
	$scope.elaborationImplementationMonth = function(){
		return DISTRIBUCION_IMPLEMENTACION_ELABORACION/100*$scope.phases.elaboracionPeopleMonth();
	}
	
	$scope.elaborationTestsMonth = function(){
		return DISTRIBUCION_PRUEBAS_ELABORACION/100*$scope.phases.elaboracionPeopleMonth();
	}
	
	$scope.elaborationDeploymentMonth = function(){
		return DISTRIBUCION_DESPLIEGUE_ELABORACION/100*$scope.phases.elaboracionPeopleMonth();
	}
	
	$scope.elaborationVersionMonth = function(){
		return DISTRIBUCION_ENTORNO_ELABORACION/100*$scope.phases.elaboracionPeopleMonth();
	}
	
	$scope.totalElaborationMonth = function(){
		return DISTRIBUCION_TOTAL_ELABORACION/100*$scope.phases.elaboracionPeopleMonth();
	}
	
	//Fase Construcción
	$scope.constructionProjectManagmentMonth = function(){
		return DISTRIBUCION_GESTION_CONSTRUCCION/100*$scope.phases.construccionPeopleMonth();
	}
	
	$scope.constructionRequirementsMonth = function(){
		return DISTRIBUCION_REQUISITOS_CONSTRUCCION/100*$scope.phases.construccionPeopleMonth();
	}
	
	$scope.constructionAnalysisMonth = function(){
		return DISTRIBUCION_ANALISIS_CONSTRUCCION/100*$scope.phases.construccionPeopleMonth();
	}
	
	$scope.constructionImplementationMonth = function(){
		return DISTRIBUCION_IMPLEMENTACION_CONSTRUCCION/100*$scope.phases.construccionPeopleMonth();
	}
	
	$scope.constructionTestsMonth = function(){
		return DISTRIBUCION_PRUEBAS_CONSTRUCCION/100*$scope.phases.construccionPeopleMonth();
	}
	
	$scope.constructionDeploymentMonth = function(){
		return DISTRIBUCION_DESPLIEGUE_CONSTRUCCION/100*$scope.phases.construccionPeopleMonth();
	}
	
	$scope.constructionVersionMonth = function(){
		return DISTRIBUCION_ENTORNO_CONSTRUCCION/100*$scope.phases.construccionPeopleMonth();
	}
	
	$scope.totalConstructionMonth = function(){
		return DISTRIBUCION_TOTAL_CONSTRUCCION/100*$scope.phases.construccionPeopleMonth();
	}
	
	//Fase Transición
	$scope.transitionProjectManagmentMonth = function(){
		return DISTRIBUCION_GESTION_TRANSICION/100*$scope.phases.transicionPeopleMonth();
	}
	
	$scope.transitionRequirementsMonth = function(){
		return DISTRIBUCION_REQUISITOS_TRANSICION/100*$scope.phases.transicionPeopleMonth();
	}
	
	$scope.transitionAnalysisMonth = function(){
		return DISTRIBUCION_ANALISIS_TRANSICION/100*$scope.phases.transicionPeopleMonth();
	}
	
	$scope.transitionImplementationMonth = function(){
		return DISTRIBUCION_IMPLEMENTACION_TRANSICION/100*$scope.phases.transicionPeopleMonth();
	}
	
	$scope.transitionTestsMonth = function(){
		return DISTRIBUCION_PRUEBAS_TRANSICION/100*$scope.phases.transicionPeopleMonth();
	}
	
	$scope.transitionDeploymentMonth = function(){
		return DISTRIBUCION_DESPLIEGUE_TRANSICION/100*$scope.phases.transicionPeopleMonth();
	}
	
	$scope.transitionVersionMonth = function(){
		return DISTRIBUCION_ENTORNO_TRANSICION/100*$scope.phases.transicionPeopleMonth();
	}
	
	$scope.totalTransitionMonth = function(){
		return DISTRIBUCION_TOTAL_TRANSICION/100*$scope.phases.transicionPeopleMonth();
	}
	
	//Fase Proyecto
	$scope.projectProjectManagmentMonth = function(){
		return DISTRIBUCION_GESTION_PROYECTO/100*$scope.phases.proyectoPeopleMonth();
	}
	
	$scope.projectRequirementsMonth = function(){
		return DISTRIBUCION_REQUISITOS_PROYECTO/100*$scope.phases.proyectoPeopleMonth();
	}
	
	$scope.projectAnalysisMonth = function(){
		return DISTRIBUCION_ANALISIS_PROYECTO/100*$scope.phases.proyectoPeopleMonth();
	}
	
	$scope.projectImplementationMonth = function(){
		return DISTRIBUCION_IMPLEMENTACION_PROYECTO/100*$scope.phases.proyectoPeopleMonth();
	}
	
	$scope.projectTestsMonth = function(){
		return DISTRIBUCION_PRUEBAS_PROYECTO/100*$scope.phases.proyectoPeopleMonth();
	}
	
	$scope.projectDeploymentMonth = function(){
		return DISTRIBUCION_DESPLIEGUE_PROYECTO/100*$scope.phases.proyectoPeopleMonth();
	}
	
	$scope.projectVersionMonth = function(){
		return DISTRIBUCION_ENTORNO_PROYECTO/100*$scope.phases.proyectoPeopleMonth();
	}
	
	$scope.totalProjectMonth = function(){
		return DISTRIBUCION_TOTAL_PROYECTO/100*$scope.phases.proyectoPeopleMonth();
	}
}]);
