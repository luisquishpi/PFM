/**
 * 
 */
var projectApp = angular.module('projectApp', [ "angularfaces", 'ngAnimate',
		'ui.bootstrap' ]);
app.value("$isTest", false);
function initCaledars(){
	$(".datepicker").daterangepicker(
			{
				singleDatePicker : true,
				timePicker : false,
				format : 'DD/MM/YYYY',
				locale : {
					applyLabel : 'Aceptar',
					cancelLabel : 'Cancelar',
					fromLabel : 'Del',
					toLabel : 'Al',
					daysOfWeek : [ 'Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa' ],
					monthNames : [ 'Enero', 'Febrero', 'Marzo', 'Abril',
							'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
							'Octubre', 'Noviembre', 'Deciembre' ],
					firstDay : 1,
					mindate : moment(),
				}
			});
	$(".datepicker").on(
			"apply.daterangepicker",
			function(ev, picker) {
				angular.element($(this)).triggerHandler("input");
				if (this.id.indexOf("startString") > 0) {
					var start = moment(this.value, "DD/MM/YYYY");
					$('input[id$=endString]').data('daterangepicker')
							.setMinDate(start);
				} else if (this.id.indexOf("endString") > 0) {
					var end = moment(this.value, "DD/MM/YYYY");
					$('input[id$=startString]').data('daterangepicker')
							.setMaxDate(end);
				}
			});
};
function handleNext() {
	angular.element($('#scheduleForm')).scope().handleNext();
	angular.element($('#scheduleForm')).scope().$apply();
	initCaledars();
};