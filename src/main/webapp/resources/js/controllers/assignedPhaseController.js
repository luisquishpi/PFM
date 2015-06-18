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
		
		
		/* PHASES OBJECTS */
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
		
		/* PROJECT TOTALS */
		$scope.projectHours = $scope.inceptionPhaseLength.hours()
				+ $scope.elaborationPhaseLength.hours()
				+ $scope.constructionPhaseLength.hours()
				+ $scope.transitionPhaseLength.hours();
		
		$scope.projectLength = 100;
		
		$scope.projectDays = $scope.inceptionPhaseLength.days() + 
		$scope.elaborationPhaseLength.days() +
		$scope.constructionPhaseLength.days() +
		$scope.transitionPhaseLength.days();
		
		$scope.projectMonths = $scope.inceptionPhaseLength.months() + 
		$scope.elaborationPhaseLength.months() +
		$scope.constructionPhaseLength.months() +
		$scope.transitionPhaseLength.months();
		
		$scope.projectStartDate = $scope.inceptionPhaseLength.startDate;
		$scope.projectEndDate = $scope.transitionPhaseLength.endDate;
		
		$scope.projectIterations = 10;
		$scope.projectInitialIterations = 1;
		$scope.projectFinalIterations = 10;
		$scope.projectAvgIterationHours = $scope.projectHours / 10;
		$scope.projectAvgIterationDays = $scope.projectDays / 10;
		$scope.projectAvgIterationMonths = $scope.projectMonths / 10;
		
		
		
		$scope.getPhaseLength = function(phase){
			return phase.hours() / $scope.projectHours;
		};

		function PhaseLength(phase, projectDays, projectSchedule) {
			this.phase = phase;
			this.projectSchedule = projectSchedule;
			this._phaseHours = null;
			console.log(this.projectSchedule);
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
			/* LENGTH */
			this.hours = function() {
				if(this._phaseHours != null){
					return this._phaseHours;
				}
				var phaseHours = 0;
				this.phaseDays.forEach(function(element,
						index, array) {
					phaseHours += parseInt(element.hours);
				});
				this._phaseHours = phaseHours;
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
			
			/* EFFORT */
			
		}

	} 
]);
