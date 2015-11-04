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

    this.personajeSeleccionado = {};
	this.hayUnPersonajeSeleccionado = false;
	this.seleccionarPersonaje = function(personaje) { 
        self.personajeSeleccionado = personaje;
        self.hayUnPersonajeSeleccionado = true;
        self.obtenerEstadisticasPersonajeSeleccionado();
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
    
    this.buscarAMrX = function(){
    	DuelosService.buscarAMrX(
    			self.jugadorSeleccionado.id,
    			self.personajeSeleccionado.id,
    			self.posicionElegida,
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
    			self.personajes = data.data;
    		}
    	);
    }
    
    this.iniciarDuelo = function(pos) {
    	self.posicionElegida = pos;
    	DuelosService.iniciarDuelo(
    			self.jugadorSeleccionado.id,
    			self.personajeSeleccionado.id,
    			self.posicionElegida,
        		function(data) {
        			self.resultado = data.data;
        			$('#encontreRivalModal').modal('show');
        		},
        		function(data) {
        			self.resultado = data.data;
        			$('#mrXModal').modal('show');
        		}
        	);
    }
});
  