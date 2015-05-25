describe("Test TheoricalPhaseController", function(){
	
	beforeEach(module("projectApp"));
	
	var theoricalPhaseCtrl, scope;
	
	beforeEach(inject(function($controller, $rootScope){
		scope = $rootScope;
		scope.showTheoricalPhasesBean = {
				  project:{
					  cost: 85000,
					  startString: "2/3/2015",
					  endString: "4/9/2015", 
				  },
				  annualGrossSalaryList: [40500, 38000, 30000, 28500, 40000, 25000, 23000, 24500, 
				                          24000, 24000, 18000, 18000, 18000, 18000, 22000, 21000, 
				                          20000, 25000, 30000, 20000],
                  insuranceList: [32.5, 32.5, 32.5, 32.5, 0.0, 32.5, 32.5, 32.5, 32.5, 32.5, 
                                  2.0, 2.0, 2.0, 2.0, 32.5, 32.5, 32.5, 0.0, 0.0, 32.5],				                          

		};
		controller = $controller("theoricalPhaseController", {
			$scope: scope,
			$isTest: true,
			workTimeService:
			{
				calculateWorkDaysAndHour: function(){
					return 0;
				},
				workHours: function(){
					return 1080;
				},
				workDays: function(){
					return 135;
				},
				workMonths: function(){
					return 6.428571428571429;
				},
				naturalDays: function(){
					return 187;
				},
			},
			bridgeService: 
			{
				shareData : {
					listHoursEachDay: function(){ 
										return [{workHours:0},{workHours:8},{workHours:8},{workHours:8},{workHours:8},{workHours:8},{workHours:0}];
									  },
					workDays: 21
			}}
		});
	}));
	
	//Test de las funciones que son globales para el resto de calculos
	
	it("Average month cost should be 2581.6770833333335", function(){
		expect(scope.averageMonthCost()).toBe(2581.6770833333335);
	});
	
	
	it("Average day cost should be 122.93700396825398", function(){
		expect(scope.averageDayCost()).toBe(122.93700396825398);
	});
	
	it("Average hour cost should be 15.367125496031747", function(){
		expect(scope.averageHourCost()).toBe(15.367125496031747);
	});
	
	it("Recomended days should be 13.5", function(){
		expect(scope.recomendedDays()).toBe(13.5);
	});
	
	/************** Duración ********************/
	//Fila de Distribucion
	it("Start percentaje should be 10", function(){
		expect(scope.inicioPercentaje()).toBe(10);
	});	
	
	it("Elaboration percentaje should be 30", function(){
		expect(scope.elaboracionPercentaje()).toBe(30);
	});	
	
	it("Construction percentaje should be 50", function(){
		expect(scope.construccionPercentaje()).toBe(50);
	});	
	
	it("Transition percentaje should be 10", function(){
		expect(scope.transicionPercentaje()).toBe(10);
	});	
	
	it("Project percentaje should be 100", function(){
		expect(scope.proyectoPercentaje()).toBe(100);
	});		
	//Fin de Fila de Distribucion
	
	//Fila de Horas
	it("Start hours should be 108", function(){
		expect(scope.inicioHours()).toBeCloseTo(108,1);
	});	
	
	it("Elaboration hours should be 324", function(){
		expect(scope.elaboracionHours()).toBeCloseTo(324,1);
	});	
	
	it("Construction hours should be 540", function(){
		expect(scope.construccionHours()).toBeCloseTo(540,1);
	});	
	
	it("Transition hours should be 108", function(){
		expect(scope.transicionHours()).toBeCloseTo(108,1);
	});	
	
	it("Project hours should be 1080", function(){
		expect(scope.proyectoHours()).toBeCloseTo(1080,1);
	});		
	//Fin de Fila de Horas	
	
	//Fila de Dias
	it("Start days should be 13.5", function(){
		expect(scope.inicioDays()).toBeCloseTo(13.5,1);
	});	
	
	it("Elaboration days should be 40.5", function(){
		expect(scope.elaboracionDays()).toBeCloseTo(40.5,1);
	});	
	
	it("Construction days should be 67.5", function(){
		expect(scope.construccionDays()).toBeCloseTo(67.5,1);
	});	
	
	it("Transition days should be 13.5", function(){
		expect(scope.transicionDays()).toBeCloseTo(13.5,1);
	});	
	
	it("Project days should be 135", function(){
		expect(scope.proyectoDays()).toBeCloseTo(135,1);
	});	
	//Fin de Fila de Dias	
	
	//Fila de Meses
	it("Start months should be close to 0.64", function(){
		expect(scope.inicioMonths()).toBeCloseTo(0.64,1);
	});	
	
	it("Elaboration months should be close to 1.93", function(){
		expect(scope.elaboracionMonths()).toBeCloseTo(1.93,1);
	});	
	
	it("Construction months should be close to 3.21", function(){
		expect(scope.construccionMonths()).toBeCloseTo(3.21,1);
	});	
	
	it("Transition months should be close to 0.64", function(){
		expect(scope.transicionMonths()).toBeCloseTo(0.64,1);
	});	
	
	it("Project months should be close to 6.43", function(){
		expect(scope.proyectoMonths()).toBeCloseTo(6.43,1);
	});	
	//Fin de Fila de Meses
	
	//Fila de Fecha inicio
	it("Start start date should be 2/3/2015", function(){
		expect(scope.inicioStartDate()).toBe(moment("2/3/2015", 'DD/MM/YYYY').format("DD/MM/YYYY"));
	});
	
	it("Elaboration start date should be 21/03/2015", function(){
		expect(scope.elaboracionStartDate()).toBe(moment("21/03/2015", 'DD/MM/YYYY').format("DD/MM/YYYY"));
	});
	
	it("Construction start date should be 2/3/2015", function(){
		expect(scope.construccionStartDate()).toBe(moment("17/05/2015", 'DD/MM/YYYY').format("DD/MM/YYYY"));
	});
	
	it("Transition start date should be 2/3/2015", function(){
		expect(scope.transicionStartDate()).toBe(moment("19/08/2015", 'DD/MM/YYYY').format("DD/MM/YYYY"));
	});
	
	it("Project start date should be 2/3/2015", function(){
		expect(scope.proyectoStartDate()).toBe(moment("02/03/2015", 'DD/MM/YYYY').format("DD/MM/YYYY"));
	});
	//Fin de Fila de Fecha inicio
	
	//Fila de Fecha fin
	it("Start start date should be 20/03/2015", function(){
		expect(scope.inicioEndDate()).toBe(moment("20/03/2015", 'DD/MM/YYYY').format("DD/MM/YYYY"));
	});
	
	it("Elaboration start date should be 16/05/2015", function(){
		expect(scope.elaboracionEndDate()).toBe(moment("16/05/2015", 'DD/MM/YYYY').format("DD/MM/YYYY"));
	});
	
	it("Construction start date should be 18/08/2015", function(){
		expect(scope.construccionEndDate()).toBe(moment("18/08/2015", 'DD/MM/YYYY').format("DD/MM/YYYY"));
	});
	
	it("Transition start date should be 06/09/2015", function(){
		expect(scope.transicionEndDate()).toBe(moment("06/09/2015", 'DD/MM/YYYY').format("DD/MM/YYYY"));
	});
	
	it("Project start date should be 06/09/2015", function(){
		expect(scope.proyectoEndDate()).toBe(moment("06/09/2015", 'DD/MM/YYYY').format("DD/MM/YYYY"));
	});
	//Fin de Fila de Fecha fin	
	
	//Fila de Iteraciones
	it("Start Iteration should be 1", function(){
		expect(scope.inicioIteration()).toBeCloseTo(1,1);
	});	
	
	it("Elaboration Iteration should be 3", function(){
		expect(scope.elaboracionIteration()).toBeCloseTo(3,1);
	});	
	
	it("Construction Iteration should be 5", function(){
		expect(scope.construccionIteration()).toBeCloseTo(5,1);
	});	
	
	it("Transition Iteration should be 1", function(){
		expect(scope.transicionIteration()).toBeCloseTo(1,1);
	});	
	
	it("Project Iteration should be 10", function(){
		expect(scope.proyectoIteration()).toBeCloseTo(10,1);
	});	
	//Fin de Fila de Iteraciones		
	
	//Fila de Inicio iteración
	it("Start start Iteration should be 1", function(){
		expect(scope.inicioStartIteration()).toBeCloseTo(1,1);
	});	
	
	it("Elaboration start Iteration should be 2", function(){
		expect(scope.elaboracionStartIteration()).toBeCloseTo(2,1);
	});	
	
	it("Construction start Iteration should be 5", function(){
		expect(scope.construccionStartIteration()).toBeCloseTo(5,1);
	});	
	
	it("Transition start Iteration should be 10", function(){
		expect(scope.transicionStartIteration()).toBeCloseTo(10,1);
	});	
	
	it("Project start Iteration should be 1", function(){
		expect(scope.proyectoStartIteration()).toBeCloseTo(1,1);
	});	
	//Fin de Fila de Inicio iteración	
	
	//Fila de Fin iteración
	it("Start start Iteration should be 1", function(){
		expect(scope.inicioEndIteration()).toBeCloseTo(1,1);
	});	
	
	it("Elaboration start Iteration should be 4", function(){
		expect(scope.elaboracionEndIteration()).toBeCloseTo(4,1);
	});	
	
	it("Construction start Iteration should be 9", function(){
		expect(scope.construccionEndIteration()).toBeCloseTo(9,1);
	});	
	
	it("Transition start Iteration should be 10", function(){
		expect(scope.transicionEndIteration()).toBeCloseTo(10,1);
	});	
	
	it("Project start Iteration should be 10", function(){
		expect(scope.proyectoEndIteration()).toBeCloseTo(10,1);
	});	
	//Fin de Fila de Fin iteración		
	
	//Fila de Media/horas iteración
	it("Start average hours Iteration should be 108", function(){
		expect(scope.inicioAverageHours()).toBeCloseTo(108,1);
	});	
	
	it("Elaboration average hours Iteration should be 108", function(){
		expect(scope.elaboracionAverageHours()).toBeCloseTo(108,1);
	});	
	
	it("Construction average hours Iteration should be 108", function(){
		expect(scope.construccionAverageHours()).toBeCloseTo(108,1);
	});	
	
	it("Transition average hours Iteration should be 108", function(){
		expect(scope.transicionAverageHours()).toBeCloseTo(108,1);
	});	
	
	it("Project average hours Iteration should be 108", function(){
		expect(scope.proyectoAverageHours()).toBeCloseTo(108,1);
	});	
	//Fin Fila de Media/horas iteración
	
	//Fila de Media/dias iteración
	it("Start average days Iteration should be 13.5", function(){
		expect(scope.inicioAverageDays()).toBeCloseTo(13.5,1);
	});	
	
	it("Elaboration average days Iteration should be 13.5", function(){
		expect(scope.elaboracionAverageDays()).toBeCloseTo(13.5,1);
	});	
	
	it("Construction average days Iteration should be 13.5", function(){
		expect(scope.construccionAverageDays()).toBeCloseTo(13.5,1);
	});	
	
	it("Transition average days Iteration should be 13.5", function(){
		expect(scope.transicionAverageDays()).toBeCloseTo(13.5,1);
	});	
	
	it("Project average days Iteration should be 13.5", function(){
		expect(scope.proyectoAverageDays()).toBeCloseTo(13.5,1);
	});	
	//Fin Fila de Media/dias iteración
	
	//Fila de Media/mes iteración
	it("Start average months Iteration should be 0.64", function(){
		expect(scope.inicioAverageMonths()).toBeCloseTo(0.64,1);
	});	
	
	it("Elaboration average months Iteration should be 0.64", function(){
		expect(scope.elaboracionAverageMonths()).toBeCloseTo(0.64,1);
	});	
	
	it("Construction average months Iteration should be 0.64", function(){
		expect(scope.construccionAverageMonths()).toBeCloseTo(0.64,1);
	});	
	
	it("Transition average months Iteration should be 0.64", function(){
		expect(scope.transicionAverageMonths()).toBeCloseTo(0.64,1);
	});	
	
	it("Project average months Iteration should be 0.64", function(){
		expect(scope.proyectoAverageMonths()).toBeCloseTo(0.64,1);
	});	
	//Fin Fila de Media/mes iteración
	
	/************** Esfuerzo ********************/
	//Fila de Distribucion
	it("Effort Start percentaje should be 5", function(){
		expect(scope.inicioPercentajeEffort()).toBeCloseTo(5,1);
	});
	it("Effort Elaboration percentaje should be 20", function(){
		expect(scope.elaboracionPercentajeEffort()).toBeCloseTo(20,1);
	});
	it("Effort Construction percentaje should be 65", function(){
		expect(scope.construccionPercentajeEffort()).toBeCloseTo(65,1);
	});
	it("Effort Transition percentaje should be 10", function(){
		expect(scope.transicionPercentajeEffort()).toBeCloseTo(10,1);
	});
	it("Effort Project percentaje should be 100", function(){
		expect(scope.proyectoPercentajeEffort()).toBeCloseTo(100,1);
	});
	//Fin Fila de Distribucion
	
	//Fila de Coste
	it("Effort Start cost should be 4250", function(){
		expect(scope.inicioCosteEffort()).toBeCloseTo(4250,1);
	});
	it("Effort Elaboration cost should be 17000", function(){
		expect(scope.elaboracionCosteEffort()).toBeCloseTo(17000,1);
	});
	it("Effort Construction cost should be 55250", function(){
		expect(scope.construccionCosteEffort()).toBeCloseTo(55250,1);
	});
	it("Effort Transition cost should be 8500", function(){
		expect(scope.transicionCosteEffort()).toBeCloseTo(8500,1);
	});
	it("Effort Project cost should be 85000", function(){
		expect(scope.proyectoCosteEffort()).toBeCloseTo(85000,1);
	});
	//Fin Fila de Coste	
	
	//Fila de Personas hora
	it("Start people hour should be 276.56", function(){
		expect(scope.inicioPeopleHour()).toBeCloseTo(276.56,1);
	});
	it("Elaboration people hour should be 1106.26", function(){
		expect(scope.elaboracionPeopleHour()).toBeCloseTo(1106.26,1);
	});
	it("Construction people hour should be 3595.34", function(){
		expect(scope.construccionPeopleHour()).toBeCloseTo(3595.34,1);
	});
	it("Transition people hour should be 553.13", function(){
		expect(scope.transicionPeopleHour()).toBeCloseTo(553.13,1);
	});
	it("Project people hour should be 5531.29", function(){
		expect(scope.proyectoPeopleHour()).toBeCloseTo(5531.29,1);
	});
	//Fin Fila de Personas hora		
	
	//Fila de Personas dia
	it("Start people day should be 34.57", function(){
		expect(scope.inicioPeopleDay()).toBeCloseTo(34.57,1);
	});
	it("Elaboration people day should be 138.28", function(){
		expect(scope.elaboracionPeopleDay()).toBeCloseTo(138.28,1);
	});
	it("Construction people day should be 449.42", function(){
		expect(scope.construccionPeopleDay()).toBeCloseTo(449.42,1);
	});
	it("Transition people day should be 69.14", function(){
		expect(scope.transicionPeopleDay()).toBeCloseTo(69.14,1);
	});
	it("Project people day should be 691.41", function(){
		expect(scope.proyectoPeopleDay()).toBeCloseTo(691.41,1);
	});
	//Fin Fila de Personas dia		
	
	//Fila de Personas mes
	it("Start people month should be 1.65", function(){
		expect(scope.inicioPeopleMonth()).toBeCloseTo(1.65,1);
	});
	it("Elaboration people month should be 6.58", function(){
		expect(scope.elaboracionPeopleMonth()).toBeCloseTo(6.58,1);
	});
	it("Construction people month should be 21.40", function(){
		expect(scope.construccionPeopleMonth()).toBeCloseTo(21.40,1);
	});
	it("Transition people month should be 3.29", function(){
		expect(scope.transicionPeopleMonth()).toBeCloseTo(3.29,1);
	});
	it("Project people month should be 32.92", function(){
		expect(scope.proyectoPeopleMonth()).toBeCloseTo(32.92,1);
	});
	//Fin Fila de Personas mes		
	
	//Fila de Personas 
	it("Start people month should be 2.56", function(){
		expect(scope.inicioPeople()).toBeCloseTo(2.56,1);
	});
	it("Elaboration people month should be 3.41", function(){
		expect(scope.elaboracionPeople()).toBeCloseTo(3.41,1);
	});
	it("Construction people month should be 6.66", function(){
		expect(scope.construccionPeople()).toBeCloseTo(6.66,1);
	});
	it("Transition people month should be 5.12", function(){
		expect(scope.transicionPeople()).toBeCloseTo(5.12,1);
	});
	it("Project people month should be 5.12", function(){
		expect(scope.proyectoPeople()).toBeCloseTo(5.12,1);
	});
	//Fin Fila de Personas 		
	
	//Fila de Distribucion Iteracion 
	it("Start distribution iteration should be 5", function(){
		expect(scope.inicioDistribucionIteration()).toBeCloseTo(5,1);
	});
	it("Elaboration distribution iteration should be 6.67", function(){
		expect(scope.elaboracionDistribucionIteration()).toBeCloseTo(6.67,1);
	});
	it("Construction distribution iteration should be 13", function(){
		expect(scope.construccionDistribucionIteration()).toBeCloseTo(13,1);
	});
	it("Transition distribution iteration should be 10", function(){
		expect(scope.transicionDistribucionIteration()).toBeCloseTo(10,1);
	});
	it("Project distribution iteration should be 10", function(){
		expect(scope.proyectoDistribucionIteration()).toBeCloseTo(10,1);
	});
	//Fin Fila de Distribucion Iteracion 		
	
	//Fila de Persona hora Iteracion 
	it("Start person hour iteration should be 276.56", function(){
		expect(scope.inicioPersonHourIteration()).toBeCloseTo(276.56,1);
	});
	it("Elaboration person hour iteration should be 368.75", function(){
		expect(scope.elaboracionPersonHourIteration()).toBeCloseTo(368.75,1);
	});
	it("Construction person hour iteration should be 719.07", function(){
		expect(scope.construccionPersonHourIteration()).toBeCloseTo(719.07,1);
	});
	it("Transition person hour iteration should be 553.13", function(){
		expect(scope.transicionPersonHourIteration()).toBeCloseTo(553.13,1);
	});
	it("Project person hour iteration should be 553.13", function(){
		expect(scope.proyectoPersonHourIteration()).toBeCloseTo(553.13,1);
	});
	//Fin Fila de Persona hora Iteracion 		

	//Fila de Persona dia Iteracion 
	it("Start person day iteration should be 34.57", function(){
		expect(scope.inicioPersonDayIteration()).toBeCloseTo(34.57,1);
	});
	it("Elaboration person day iteration should be 46.09", function(){
		expect(scope.elaboracionPersonDayIteration()).toBeCloseTo(46.09,1);
	});
	it("Construction person day iteration should be 89.88", function(){
		expect(scope.construccionPersonDayIteration()).toBeCloseTo(89.88,1);
	});
	it("Transition person day iteration should be 69.14", function(){
		expect(scope.transicionPersonDayIteration()).toBeCloseTo(69.14,1);
	});
	it("Project person day iteration should be 69.14", function(){
		expect(scope.proyectoPersonDayIteration()).toBeCloseTo(69.14,1);
	});
	//Fin Fila de Persona dia Iteracion
	
	//Fila de Persona mes Iteracion 
	it("Start person month iteration should be 2.56", function(){
		expect(scope.inicioPersonMonthIteration()).toBeCloseTo(2.56,1);
	});
	it("Elaboration person month iteration should be 3.41", function(){
		expect(scope.elaboracionPersonMonthIteration()).toBeCloseTo(3.41,1);
	});
	it("Construction person month iteration should be 6.66", function(){
		expect(scope.construccionPersonMonthIteration()).toBeCloseTo(6.66,1);
	});
	it("Transition person month iteration should be 5.12", function(){
		expect(scope.transicionPersonMonthIteration()).toBeCloseTo(5.12,1);
	});
	it("Project person month iteration should be 3.29", function(){
		expect(scope.proyectoPersonMonthIteration()).toBeCloseTo(3.29,1);
	});
	//Fin Fila de Persona mes Iteracion 	
	
})
