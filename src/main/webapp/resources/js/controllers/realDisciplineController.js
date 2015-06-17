/**
 * 
 */
projectApp.controller("realDisciplineController", ['$scope', '$isTest', 'bridgeService', function ($scope, $isTest, bridgeService) {  
	
	if(!$isTest){
		  initJSFScope($scope);
	}	
	$scope.phases = bridgeService.shareData;
	
	if(!$isTest){
		bridgeService.shareData= $scope;
		$scope.disciplinesFinished = true;
	}
}]);
