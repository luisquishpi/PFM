/**
 * 
 */


describe("Unit: Testing services", function(){
	var workTimeService;
	
	beforeEach(function(){
		module("projectApp");
	});
	beforeEach(inject(function(_workTimeService_){
		workTimeService = _workTimeService_;
	}));
	
	beforeEach(function(){
		workTimeService.calculateWorkDaysAndHour("02/03/2015", "04/09/2015", [{workHours:0},{workHours:8},{workHours:8},{workHours:8},{workHours:8},{workHours:5},{workHours:0}]);
	});
	
	it('Las horas trabajadas deberian ser 999', function(){
		expect(workTimeService.workHours()).toBe(999);
	});
	
	it('Los dias trabajados deberían ser 135', function(){
		expect(workTimeService.workDays()).toBe(135);
	});
	
	it('Los meses trabajados deberían ser 6.428571428571429', function(){
		expect(workTimeService.workMonths(21)).toBe(6.428571428571429);
	});
	
	it('Los días naturales deberían ser 187', function(){
		expect(workTimeService.naturalDays()).toBe(187);
	});
});
