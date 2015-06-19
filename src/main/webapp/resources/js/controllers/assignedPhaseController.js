/**
 * AngularJS theoricalPhaseController
 */

projectApp.controller("assignedPhaseController",
	[
	'$scope',
	'$isTest',
	'bridgeService',
	'DateUtils',
	'ProjectResourcesService',
	function($scope, $isTest, bridgeService, DateUtils, projectResourcesService) {

		if (!$isTest) {
			initJSFScope($scope);
			$scope.calendarController = bridgeService.shareData;
		}

		var projectDays = $scope.calendarController.getEvents($scope.calendarController.startDate, $scope.calendarController.endDate);
		
		/* PHASES OBJECTS */
		$scope.inceptionPhaseLength = new PhaseLength("I", projectDays, $scope.projectSchedule, $scope.phasesEmployees);
		$scope.elaborationPhaseLength = new PhaseLength("E", projectDays, $scope.projectSchedule, $scope.phasesEmployees);
		$scope.constructionPhaseLength = new PhaseLength("C", projectDays, $scope.projectSchedule, $scope.phasesEmployees);
		$scope.transitionPhaseLength = new PhaseLength("T", projectDays, $scope.projectSchedule, $scope.phasesEmployees);

		$scope.inceptionPhaseLength.initialIteration = 1;
		$scope.elaborationPhaseLength.initialIteration = $scope.inceptionPhaseLength.iterations
				+ $scope.inceptionPhaseLength.initialIteration;
		$scope.constructionPhaseLength.initialIteration = $scope.elaborationPhaseLength.iterations
				+ $scope.elaborationPhaseLength.initialIteration;
		$scope.transitionPhaseLength.initialIteration = $scope.constructionPhaseLength.iterations
				+ $scope.constructionPhaseLength.initialIteration;
		
		/* PROJECT LENGTH TOTALS */
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
		
		$scope.projectIterations = $scope.inceptionPhaseLength.iterations
		+ $scope.elaborationPhaseLength.iterations
		+ $scope.constructionPhaseLength.iterations
		+ $scope.transitionPhaseLength.iterations;
		
		$scope.projectInitialIterations = 1;
		$scope.projectFinalIterations = 10;
		$scope.projectAvgIterationHours = $scope.projectHours / 10;
		$scope.projectAvgIterationDays = $scope.projectDays / 10;
		$scope.projectAvgIterationMonths = $scope.projectMonths / 10;
		
		/* PROJECT EFFORT TOTALS */
		$scope.projectEffort = 100;
		$scope.projectCost = $scope.inceptionPhaseLength.cost()
		+ $scope.elaborationPhaseLength.cost()
		+ $scope.constructionPhaseLength.cost()
		+ $scope.transitionPhaseLength.cost();
		
		$scope.projectEffortHours = $scope.inceptionPhaseLength.totalHours()
		+ $scope.elaborationPhaseLength.totalHours()
		+ $scope.constructionPhaseLength.totalHours()
		+ $scope.transitionPhaseLength.totalHours();
		
		$scope.projectEffortDays = $scope.inceptionPhaseLength.totalDays
		+ $scope.elaborationPhaseLength.totalDays
		+ $scope.constructionPhaseLength.totalDays
		+ $scope.transitionPhaseLength.totalDays;
		
		$scope.projectEffortMonths = $scope.inceptionPhaseLength.totalMonths
		+ $scope.elaborationPhaseLength.totalMonths
		+ $scope.constructionPhaseLength.totalMonths
		+ $scope.transitionPhaseLength.totalMonths;
		
		$scope.projectEmployees = ( ($scope.inceptionPhaseLength.realEmployees() / $scope.inceptionPhaseLength.hours())
		+ ($scope.elaborationPhaseLength.realEmployees() / $scope.elaborationPhaseLength.hours())
		+ ($scope.constructionPhaseLength.realEmployees() / $scope.constructionPhaseLength.hours())
		+ ($scope.transitionPhaseLength.realEmployees() / $scope.transitionPhaseLength.hours()) 
		) / $scope.projectHours ;
		
		$scope.projectIterationDistribution = $scope.projectEffort / $scope.projectIterations;
		
		$scope.projectIterationResourcesPerHour = $scope.projectEffortHours / $scope.projectIterations;
		$scope.projectIterationResourcesPerDay = $scope.projectEffortDays / $scope.projectIterations;
		$scope.projectIterationResourcesPerMonth = $scope.projectEffortMonths / $scope.projectIterations;
		
		
		/* PHASE SUMMARIES */
		$scope.getPhaseLength = function(phase){
			return phase.hours() / $scope.projectHours;
		};
		$scope.getPhaseEffortDistribution = function(phase){
			var total = $scope.inceptionPhaseLength.totalHours +
			$scope.elaborationPhaseLength.totalHours +
			$scope.constructionPhaseLength.totalHours +
			$scope.transitionPhaseLength.totalHours;
			
			return phase.totalHours / total;
		};
		$scope.getIterationDistribution = function(phase){
			return $scope.getPhaseEffortDistribution(phase) / phase.iterations;
		};
		$scope.getIterationDistribution = function(phase){
			return $scope.getPhaseEffortDistribution(phase) / phase.iterations;
		};

		function PhaseLength(phase, projectDays, projectSchedule, phasesEmployees) {
			this.phase = phase;
			this.projectSchedule = projectSchedule;
			this._phaseHours = null;

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
			
			this.phaseEmployees = projectResourcesService.toEmployeeResourceList(phasesEmployees, projectSchedule, this.phase);
			
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
				return this.days() / this.projectSchedule.workDays;
			}
			this.startDate = this.phaseDays[0] ? this.phaseDays[0].startDate : null;
			this.endDate = this.phaseDays[this.phaseDays.length - 1] ? this.phaseDays[this.phaseDays.length - 1].startDate : null;
			this.iterations = this.days() / this.projectSchedule.project.iterationDays;
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
			this.cost = function(){
				var cost = 0;
				this.phaseEmployees.forEach(function(el, i, arr){
					cost += el.totalHours() * el.hourlyCost;
				});
				return cost;
			};
			this.totalHours = function(){
				var hours = 0;
				this.phaseEmployees.forEach(function(el, i, arr){
					hours += el.totalHours();
				});
				return hours;
			};
			
			this.hoursPerWeek = function() {
				return this.projectSchedule.mondayHours
				+ this.projectSchedule.tuesdayHours
				+ this.projectSchedule.wednesdayHours
				+ this.projectSchedule.thursdayHours
				+ this.projectSchedule.fridayHours
				+ this.projectSchedule.saturdayHours
				+ this.projectSchedule.sundayHours;
			};
			
			this.daysPerWeek = function(){
				var days = 0;
				if(this.projectSchedule.mondayHours > 0){
					days = days +1;
				}
				if(this.projectSchedule.tuesdayHours > 0){
					days = days +1;
				}
				if(this.projectSchedule.wednesdayHours > 0){
					days = days +1;
				}
				if(this.projectSchedule.thursdayHours > 0){
					days = days +1;
				}
				if(this.projectSchedule.fridayHours > 0){
					days = days +1;
				}
				if(this.projectSchedule.saturdayHours > 0){
					days = days +1;
				}
				if(this.projectSchedule.sundayHours > 0){
					days = days +1;
				}
				return days;
			};
			
			this.averageHoursPerDay = function(){
				return this.hoursPerWeek() / this.daysPerWeek();
			};
			this.totalDays = this.totalHours() / this.averageHoursPerDay();
			this.totalMonths = this.totalDays / this.projectSchedule.workDays;
			this.realEmployees = function(){
				var persons = 0;
				this.phaseEmployees.forEach(function(el, i, arr){
					persons += el.totalHours() / el.availableEmployeeHours;
				});
				return persons;
			}; 
			this.iterationResourcesPerHour = function(){
				return this.totalHours() / this.iterations;
			};
			this.iterationResourcesPerDay = function(){
				return this.totalDays / this.iterations;
			};
			this.iterationResourcesPerMonth = function(){
				return this.totalMonths / this.iterations;
			};
			
		}

	} 
]);
