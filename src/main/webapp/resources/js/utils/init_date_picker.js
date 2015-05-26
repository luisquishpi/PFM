$(function() {
    $('input[name$="daterange"]').daterangepicker({
        timePicker: false,
        format: 'DD/MM/YYYY',
        locale: {
            applyLabel: 'Aceptar',
            cancelLabel: 'Cancelar',
            fromLabel: 'Del',
            toLabel: 'Al',
            daysOfWeek: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi','Sa'],
            monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Deciembre'],
            firstDay: 1
        }
    });
});