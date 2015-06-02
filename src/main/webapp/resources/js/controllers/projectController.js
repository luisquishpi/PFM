/**
 * AngularJS ProjectController
 */

projectApp.controller("projectController", [
		'$scope',
		'$isTest',
		'bridgeService',
		'workTimeService',
		function($scope, $isTest, bridgeService, workTimeService) {
			if (!$isTest) {
				initJSFScope($scope);
			}

			var start, end;
			$scope.schedule = bridgeService.shareData;
			$scope.workDays = 0;
			$scope.workHours = 0;
			$scope.naturalDays = 0;

			function calculateWorkDaysAndHour() {

				workTimeService.calculateWorkDaysAndHour(
						$scope.projectBean.project.startString,
						$scope.projectBean.project.endString, $scope.schedule
								.listHoursEachDay());

				$scope.workDays = workTimeService.workDays();
				$scope.workHours = workTimeService.workHours();
				$scope.naturalDays = workTimeService.naturalDays();
			}

			$scope.initForTest = function() {
				calculateWorkDaysAndHour();
			}

			if (!$isTest) {
				$scope.$watchGroup([ "projectBean.project.startString",
						"projectBean.project.endString" ], function(newValues,
						oldValues, scope) {
					calculateWorkDaysAndHour();
				});
			}

			$scope.naturalMonths = function() {
				return $scope.naturalDays / 30;
			}

			$scope.workMonths = function() {
				return workTimeService.workMonths( $scope.schedule.workDays);
			}

			$scope.costNaturalMonth = function() {
				return (($scope.projectBean.project.cost / $scope
						.naturalMonths()).toFixed(2) / 1);
			}

			$scope.costNaturalDay = function() {
				return (($scope.projectBean.project.cost / $scope.naturalDays)
						.toFixed(2) / 1);
			}

			$scope.costWorkMonth = function(cost) {
				return $scope.projectBean.project.cost / $scope.workMonths();
			}

			$scope.costWorkDay = function(cost) {
				return $scope.projectBean.project.cost / $scope.workDays;
			}

			$scope.costWorkHour = function(cost) {
				return $scope.projectBean.project.cost / $scope.workHours;			
			}
			
		} ]);
