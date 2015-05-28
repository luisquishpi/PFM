/**
 * Calendar controller
 */

projectApp.controller("calendarController",['$scope', '$isTest', 'DateUtils', function($scope, $isTest, DateUtils) {
	if(!$isTest){
	  initJSFScope($scope);
	}
	
	$scope.startDate;
	$scope.endDate;
	$scope.iterationLength;
	$scope.holidays;
	$scope.workHours;
	
	$scope.phases = [{label:"I", color: "#FFFF99"}, 
	                 {label:"E", color: "#99FF99"}, 
	                 {label:"E", color: "#99FF99"}, 
	                 {label:"E", color: "#99FF99"}, 
	                 {label:"C", color: "#99CCFF"},
	                 {label:"C", color: "#99CCFF"}, 
	                 {label:"C", color: "#99CCFF"}, 
	                 {label:"C", color: "#99CCFF"}, 
	                 {label:"C", color: "#99CCFF"}, 
	                 {label:"P", color: "#FF99FF"}];
	
	$scope.getEvents = function(startDate, endDate){
		if($scope.workHours === undefined){
			return [];
		}
		var events = [];
		var projectDay = null;
		for (var m = moment(startDate); m.isBefore(endDate); m.add(1, "days")){
			var validDay = $scope.getProjectDay(m, projectDay);
			if( validDay > 0){
				projectDay = validDay;
				var hours = $scope.workHours[m.day()];
				var iteration = $scope.getIteration(projectDay);
				events.push({
					title: projectDay + "-" + iteration.label + "\n Dia:" + projectDay + "\n Horas:" + hours,
					start: moment(m),
					allDay: true,
					backgroundColor : iteration,
				});
			}
		}
		for (var i = 0; i < $scope.holidays.length; i++){
			events.push({
				title: 'F E R I A D O',
				start: moment($scope.holidays[i].start),
				end: moment($scope.holidays[i].end).add(1,'days'),
				allDay: true,
				backgroundColor : '#FF3333',
				borderColor : '#FF3333'
			});
		}
		return events;
	}
	
	$scope.getProjectDay = function(date, previousDay){
		var days = 0;
		var isHoliday = false;
		if($scope.workHours[date.day()] != 0 && DateUtils.isBetween(date, $scope.startDate, $scope.endDate) ){
			for (var i = 0; i < $scope.holidays.length; i++){
				if(DateUtils.isBetween(date,$scope.holidays[i].start,$scope.holidays[i].end)){
					isHoliday = true;
					break;
				}
			}
			if(!isHoliday){
				if(previousDay == null){
					var m = moment.utc($scope.startDate);
					do{
						isHoliday = false;
						if($scope.workHours[m.day()] != 0){
							for (var i = 0; i < $scope.holidays.length; i++){
								if(DateUtils.isBetween(m,$scope.holidays[i].start,$scope.holidays[i].end)){
									isHoliday = true;
									break;
								} 
							}
							if(!isHoliday){
								days++;
							}
						}
						m.add(1, "days");
					}while( m.isBefore(date) || m.isSame(date) );
				}else{
					days = previousDay + 1;
				}
			}
		}
		return days;
	}
	
	$scope.getIteration = function(days){
		var it = parseInt(days / $scope.iterationLength);
		var phaseId = it > 9 ? 9 : it;
		return { label: $scope.phases[phaseId].label + "-" + (it + 1), color : $scope.phases[phaseId].color };
	}
	
}]);
