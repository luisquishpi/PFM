/**
 * 
 */
var projectApp = angular.module('projectApp', [ "angularfaces" ]);
app.value("$isTest", false);

$(document).ready(function() {
    $('#calendar').fullCalendar({
    	lang: 'es',
    	buttonText: {
    	    today:    'Hoy',
    	    month:    'Mes',
    	    week:     'Semana',
    	    day:      'Dia'
    	},
    	events: function(start, end, timezone, callback) {
    		var scope = angular.element($('div[id$=angularContainer]')).scope();
    		var events = scope.getEvents(moment.utc(start,"DD/MM/YYYY"), moment.utc(end,"DD/MM/YYYY")); 
            callback(events);
        }
    })
});
function updateModel(xhr, status, args){
	
	var project = args.project;
	if(project != undefined && project.id > 0){
		var holidays = args.holidays;
		var schedule = args.schedule;
		var DATE_FORMAT = "DD/MM/YYYY";
		var scope = angular.element($('div[id$=angularContainer]')).scope();
		
        scope.startDate = moment.utc(project.startString, DATE_FORMAT);
    	scope.endDate = moment.utc(project.endString, DATE_FORMAT)
    	scope.iterationLength = project.iterationDays;
    	scope.holidays = JSON.parse(holidays);
    	scope.workHours = [
    			parseInt(schedule.sundayHours),
    			parseInt(schedule.mondayHours),
    			parseInt(schedule.tuesdayHours),
    			parseInt(schedule.wednesdayHours),
    			parseInt(schedule.thursdayHours),
    			parseInt(schedule.fridayHours),
    			parseInt(schedule.saturdayHours)
    	];

    	scope.$apply();
    	$("#calendar").fullCalendar( 'refetchEvents' );
	}else{
		$("#calendar").fullCalendar( 'removeEvents' );
	}
}   