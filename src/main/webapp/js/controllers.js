'use strict';
var app = angular.module('duelosApp')
app.controller('DatosPersonajeController',function ($scope, DuelosService) {
	$scope.posicionesDuelos = {};
    $scope.obtenerPosiciones = function(){
    	DuelosService.obtenerPosiciones(
    		function(data) {
    			$scope.posicionesDuelos = data.data;
    		}
    	);
    }
    $scope.obtenerPosiciones();
    
    
    $scope.personajes = {};
    $scope.obtenerPersonajes = function(){
    	DuelosService.obtenerPersonajes(
    		function(data) {
    			$scope.personajes = data.data;
    		}
    	);
    }
    $scope.obtenerPersonajes();
    $scope.jugadorSeleccionado = {id:'1'};
    
    $scope.estadisticasPersonajeSeleccionado = {};
    
	$scope.rivalElegido = null;
	$scope.rivales = null;
		//$scope.datos.rivalesPosibles
	
	$scope.personajeSeleccionado = {};
	$scope.hayUnPersonajeSeleccionado = false;
	//$scope.selectedmodal = "#mrXModal";
	$scope.seleccionarPersonaje = function(personaje) { 
        $scope.personajeSeleccionado = personaje;
        $scope.hayUnPersonajeSeleccionado = true;
        $scope.obtenerEstadisticasPersonajeSeleccionado();
        //$scope.buscarRival($scope.personajeSeleccionado);
        //$scope.selected = "#encontreRivalModal";
    };
    
    
    $scope.obtenerEstadisticasPersonajeSeleccionado = function(){
    	DuelosService.obtenerEstadisticasPersonajeSeleccionado(
    			$scope.jugadorSeleccionado.id,
    			$scope.personajeSeleccionado.id,
        		function(data) {
        			$scope.estadisticasPersonajeSeleccionado = data.data;
        		}
        	);
    }
    
    
    $scope.darPersonaje = function(jugador){
    	return jugador.personajes;
    }
    
    $scope.personajes = {};
    $scope.obtenerPersonajes = function(){
    	DuelosService.obtenerPersonajes(
    		function(data) {
    			$scope.personajes = data;
    		}
    	);
    }
    
    
    /*
     * USE FOR EN FORS porque perdi bocha de tiempo usando map y filter y no los hice andar
     */

    $scope.agregarSiCumple = function (personajeSel,rivalesPosibles,arrayPersonajes){
    	for (var i = 0; i < arrayPersonajes.length; i++){
    		if (
    			personajeSel.estadisticas.Puntaje ==
    			arrayPersonajes[i].estadisticas.Puntaje	)
    			{
    			rivalesPosibles.push(arrayPersonajes[i]);
    			}
    	}
    }
    
//    $scope.textoDelServicePostaPrueba = {};
//    $scope.obtenerTextoDelServicePostaPrueba = function(){
//    	
//    	DuelosService.obtenerDatos(
//    		function(data) {
//    			$scope.textoDelServicePostaPrueba = data.data;
//    			
//    		}
//    	);
//    	
//    }
    
    
    $scope.buscarRival = function(personajeSel) {
    	var rivalesPosibles = [];
    	for (var i = 0; i < $scope.rivales.length; i++)
    	{
    		$scope.agregarSiCumple(personajeSel,rivalesPosibles,$scope.rivales[i].personajes)
    	}
    	if (rivalesPosibles.length > 0){
    		$scope.rivalElegido = rivalesPosibles[0];
    		$scope.selectedmodal = "#encontreRivalModal";
    	}
    	else {
    		$scope.selectedmodal = "#mrXModal";
    	}
    };
});
  