/**
 * 
 */
app.value("$isTest", false);
//var projectApp = angular.module('projectApp', [ "angularfaces" ]);
projectApp.factory('broadcastService', function($rootScope) {
    var sharedService = {};
    
    sharedService.data = '';

    sharedService.prepForBroadcast = function(msg) {
        this.data = msg;
        this.broadcastItem();
    };

    sharedService.broadcastItem = function() {
        $rootScope.$broadcast('handleBroadcast');
        console.log("broadcastItem")
    };

    return sharedService;
});

projectApp.service('bridgeService', function(){
	
	var svc={};
	
	svc.shareData = {};
	
	return svc;
});