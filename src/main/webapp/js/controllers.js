'use strict';
var app = angular.module('duelosApp')
app.controller('DatosPersonajeController',function (DuelosService) {
	var self = this;
	this.posicionesDuelos = {};
    this.obtenerPosiciones = function(){
    	DuelosService.obtenerPosiciones(
    		function(data) {
    			self.posicionesDuelos = data.data;
    		}
    	);
    }
    this.obtenerPosiciones();
    
    
    this.personajes = {};
    this.obtenerPersonajes = function(){
    	DuelosService.obtenerPersonajes(
    		function(data) {
    			self.personajes = data.data;
    		}
    	);
    }
    this.obtenerPersonajes();
    this.jugadorSeleccionado = {id:'1'};
    
    this.estadisticasPersonajeSeleccionado = {};
    
	this.rivalElegido = null;
	this.rivales = null;
		//this.datos.rivalesPosibles
	
	this.personajeSeleccionado = {};
	this.hayUnPersonajeSeleccionado = false;
	//this.selectedmodal = "#mrXModal";
	this.seleccionarPersonaje = function(personaje) { 
        self.personajeSeleccionado = personaje;
        self.hayUnPersonajeSeleccionado = true;
        self.obtenerEstadisticasPersonajeSeleccionado();
        //this.buscarRival(this.personajeSeleccionado);
        //this.selected = "#encontreRivalModal";
    };
    
    
    this.obtenerEstadisticasPersonajeSeleccionado = function(){
    	DuelosService.obtenerEstadisticasPersonajeSeleccionado(
    			self.jugadorSeleccionado.id,
    			self.personajeSeleccionado.id,
        		function(data) {
        			self.estadisticasPersonajeSeleccionado = data.data;
        		}
        	);
    }
    
    
    this.darPersonaje = function(jugador){
    	return jugador.personajes;
    }
    
    this.personajes = {};
    this.obtenerPersonajes = function(){
    	DuelosService.obtenerPersonajes(
    		function(data) {
    			self.personajes = data;
    		}
    	);
    }
    
    
    /*
     * USE FOR EN FORS porque perdi bocha de tiempo usando map y filter y no los hice andar
     */

    this.agregarSiCumple = function (personajeSel,rivalesPosibles,arrayPersonajes){
    	for (var i = 0; i < arrayPersonajes.length; i++){
    		if (
    			personajeSel.estadisticas.Puntaje ==
    			arrayPersonajes[i].estadisticas.Puntaje	)
    			{
    			rivalesPosibles.push(arrayPersonajes[i]);
    			}
    	}
    }
    
//    this.textoDelServicePostaPrueba = {};
//    this.obtenerTextoDelServicePostaPrueba = function(){
//    	
//    	DuelosService.obtenerDatos(
//    		function(data) {
//    			this.textoDelServicePostaPrueba = data.data;
//    			
//    		}
//    	);
//    	
//    }
    
    
    this.buscarRival = function(personajeSel) {
    	var rivalesPosibles = [];
    	for (var i = 0; i < self.rivales.length; i++)
    	{
    		self.agregarSiCumple(personajeSel,rivalesPosibles,self.rivales[i].personajes)
    	}
    	if (rivalesPosibles.length > 0){
    		self.rivalElegido = rivalesPosibles[0];
    		self.selectedmodal = "#encontreRivalModal";
    	}
    	else {
    		self.selectedmodal = "#mrXModal";
    	}
    };
});
  