/**
 * 
 */
projectApp.controller("theoricalDisciplineController", ['$scope', '$isTest', function ($scope, $isTest) {  
	
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
	
	$scope.elaborationRequirementsHour = function(){
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
	
	$scope.elaborationVersionHour = function(){
		return 88.5;
	}
	
	$scope.totalElaborationHour = function(){
		return 1106.3;
	}
	
	//Fase Construccion
	$scope.constructionProjectManagmentHour = function(){
		return 359.5;
	}
	
	$scope.constructionRequirementsHour = function(){
		return 287.6;
	}
	$scope.constructionAnalysisHour = function(){
		return 575.3;
	}
	
	$scope.constructionImplementationHour = function(){
		return 1222.4;
	}
	
	$scope.constructionTestsHour = function(){
		return 862.9;
	}
	
	$scope.constructionDeploymentHour = function(){
		return 107.9;
	}
	
	$scope.constructionVersionHour = function(){
		return 179.8;
	}
	
	$scope.totalConstructionHour = function(){
		return 3595.3;
	}
	
	//Fase Transicion
	$scope.transitionProjectManagmentHour = function(){
		return 77.4;
	}
	
	$scope.transitionRequirementsHour = function(){
		return 22.1;
	}
	
	$scope.transitionAnalysisHour = function(){
		return 22.1;
	}
	
	$scope.transitionImplementationHour = function(){
		return 105.1;
	}
	
	$scope.transitionTestsHour = function(){
		return 132.8;
	}
	
	$scope.transitionDeploymentHour = function(){
		return 165.9;
	}
	
	$scope.transitionVersionHour = function(){
		return 27.7;
	}
	
	$scope.totalTransitionHour = function(){
		return 553.1
	}
	
	//Totales proyecto
	$scope.projectManagmentHour = function(){
		return 608.4;
	}
	
	$scope.projectRequirementsHour = function(){
		return 614;
	}
	
	$scope.projectAnalysisHour = function(){
		return 1048.2;
	}
	
	$scope.projectImplementationHour = function(){
		return 1493.4;
	}
	
	$scope.projectTestsHour = function(){
		return 1128.4;
	}
	
	$scope.projectDeploymentHour = function(){
		return 315.3;
	}
	
	$scope.projectVersionHour = function(){
		return 323.6;
	}
	
	$scope.totalprojectHour = function(){
		return 5531.3;
	}
	
	/*****************************Personas-dia*******************************/
	//Fase inicio
	$scope.initialProjectManagmentDay = function(){
		return 4.8;
	}
	
	$scope.initialRequirementsDay = function(){
		return 13.1;
	}
	
	$scope.initialAnalysisDay = function(){
		return 6.6;
	}
	
	$scope.initialImplementationDay = function(){
		return 2.8;
	}
	
	$scope.initialTestsDay = function(){
		return 2.8;
	}
	
	$scope.initialDeploymentDay = function(){
		return 1;
	}
	
	$scope.initialVersionDay = function(){
		return 3.5;
	}
	
	$scope.totalInitialDay = function(){
		return 34.6;
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
		return 9.7
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
		return 186.7
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
	
	$scope.totalprojectDay = function(){
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
