/**
 * AngularJS theoricalPhaseController
 */

projectApp.controller("assignedPhaseController",
	[
	'$scope',
	'$isTest',
	'bridgeService',
	'workTimeService',
	'DateUtils',
	function($scope, $isTest, bridgeService,
			workTimeService, DateUtils) {

		if (!$isTest) {
			initJSFScope($scope);
			$scope.calendarController = bridgeService.shareData;
		}

		var projectDays = $scope.calendarController.getEvents(moment.utc($scope.calendarController.startDate), moment.utc($scope.calendarController.endDate));
		
		
		$scope.inceptionPhaseLength = new PhaseLength("I", projectDays, $scope.projectSchedule);
		$scope.elaborationPhaseLength = new PhaseLength("E", projectDays, $scope.projectSchedule);
		$scope.constructionPhaseLength = new PhaseLength("C", projectDays, $scope.projectSchedule);
		$scope.transitionPhaseLength = new PhaseLength("T", projectDays, $scope.projectSchedule);

		$scope.inceptionPhaseLength.initialIteration = 1;
		$scope.elaborationPhaseLength.initialIteration = $scope.inceptionPhaseLength.iterations
				+ $scope.inceptionPhaseLength.initialIteration;
		$scope.constructionPhaseLength.initialIteration = $scope.elaborationPhaseLength.iterations
				+ $scope.elaborationPhaseLength.initialIteration;
		$scope.transitionPhaseLength.initialIteration = $scope.constructionPhaseLength.iterations
				+ $scope.constructionPhaseLength.initialIteration;

		var projectHours = $scope.inceptionPhaseLength.hours()
				+ $scope.elaborationPhaseLength.hours()
				+ $scope.constructionPhaseLength.hours()
				+ $scope.transitionPhaseLength.hours();
		
		$scope.getPhaseLength = function(phase){
			return phase.hours() / projectHours;
		};

		function PhaseLength(phase, projectDays,
				projectSchedule) {
			this.phase = phase;
			this.projectSchedule = projectSchedule;

			this.phaseDays = projectDays
					.filter(
							function(el) {
								return el.title.substring(
										0, 1) === phase;
							})
					.sort(
							function(a, b) {
								if (a.startDate
										.isBefore(b.startDate)) {
									return -1;
								}
								return 1;
							});

			this.hours = function() {
				var phaseHours = 0;
				this.phaseDays.forEach(function(element,
						index, array) {
					phaseHours += parseInt(element.hours);
				});
				return phaseHours;
			}
			this.days = function() {
				return this.phaseDays.length;
			}
			this.months = function() {
				return this.days() / 21;
			}
			this.startDate = this.phaseDays[0] ? this.phaseDays[0].startDate : null;
			this.endDate = this.phaseDays[this.phaseDays.length - 1] ? this.phaseDays[this.phaseDays.length - 1].startDate : null;
			this.iterations = this.days() / 13;
			this.initialIteration = 0;
			this.finalIteration = function() {
				var result = this.iterations
						+ this.initialIteration - 1;
				return result < 0 || isNaN(result) ? this.initialIteration
						: result;
			};
			this.avgIterationHours = this.iterations == 0 ? 0 : this.hours() / this.iterations;
			this.avgIterationDays = this.iterations == 0 ? 0 : this.days() / this.iterations;
			this.avgIterationMonths = this.iterations == 0 ? 0 : this.months() / this.iterations;
		}

	} 
]);
