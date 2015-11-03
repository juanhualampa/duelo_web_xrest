angular.module('duelosApp')
.service('DuelosService',function($http){
//	this.obtenerDatos = function(callback){
//		$http.get('/prueba').then(callback);
//		//LO HACE
//	}
	
	this.obtenerEstadisticasPersonajeSeleccionado = function(callback){
		$http.get('/estadisticas').then(callback);
	}
	
	this.obtenerPosiciones = function(callback){
		$http.get('/posiciones').then(callback);
	}
	
    this.datosDelJuego=function(){
        return {            
                posicionesDuelos: [ { nombre: 'TOP' }, { nombre: 'BOTTOM' }, { nombre: 'JUNGLE' }, { nombre: 'MIDDLE' } ],
                jugadorSeleccionado: {
                    // nombre: 'pepe',
                    personajes: [
                    {
                        id: 1,
                        nombre: 'amumu',
                        source: 'assets/images/amumu.png',
                        estadisticas: {
                            'Jugadas': '3',
                            'Ganadas': '2',
                            'Kills': '1',
                            'Deads': '1',
                            'Assists': '1',
                            'Mejor Ubicacion': 'TOP',
                            'Puntaje': 'NI-IDEA'
                        },
                        caracteristicas: {
                            'Especialidades': [
                            'amumu',
                            'otraEspecialidad'
                            ],
                            'Debilidades': [
                            'unaDebilidad',
                            'otraDebilidad'
                            ],
                            'Mejor Posicion': [
                            'TOP'
                            ]
                        }
                    },
                    {
                        id: 2,
                        nombre: 'ahri',
                        source: 'assets/images/ahri.png',
                        estadisticas: {
                            'Jugadas': '3',
                            'Ganadas': '2',
                            'Kills': '1',
                            'Deads': '1',
                            'Assists': '1',
                            'Mejor Ubicacion': 'BOTTOM',
                            'Puntaje': 'MANCO'
                        },
                        caracteristicas: {
                            'Especialidades': [
                            'ahri',
                            'otraEspecialidad'
                            ],
                            'Debilidades': [
                            'unaDebilidad',
                            'otraDebilidad'
                            ],
                            'Mejor Posicion': [
                            'BOTTOM'
                            ]
                        }
                    },
                    {
                        id: 3,
                        nombre: 'olaf',
                        source: 'assets/images/olaf.png',
                        estadisticas: {
                            'Jugadas': '3',
                            'Ganadas': '2',
                            'Kills': '1',
                            'Deads': '1',
                            'Assists': '1',
                            'Mejor Ubicacion': 'TOP',
                            'Puntaje': 'RAMPAGE'
                        },
                        caracteristicas: {
                            'Especialidades': [
                            'olaf',
                            'otraEspecialidad'
                            ],
                            'Debilidades': [
                            'unaDebilidad',
                            'otraDebilidad'
                            ],
                            'Mejor Posicion': [
                            'TOP'
                            ]
                        }
                    },
                    {
                        id: 4,
                        nombre: 'pudge',
                        source: 'assets/images/pudge.png',
                        estadisticas: {
                            'Jugadas': '3',
                            'Ganadas': '2',
                            'Kills': '1',
                            'Deads': '1',
                            'Assists': '1',
                            'Mejor Ubicacion': 'JUNGLE',
                            'Puntaje': 'DOMINADOR'
                        },
                        caracteristicas: {
                            'Especialidades': [
                            'pudge',
                            'otraEspecialidad'
                            ],
                            'Debilidades': [
                            'unaDebilidad',
                            'otraDebilidad'
                            ],
                            'Mejor Posicion': [
                            'JUNGLE'
                            ]
                        }
                    },
                    {
                        id: 5,
                        nombre: 'witchdoctor',
                        source: 'assets/images/witchdoctor.png',
                        estadisticas: {
                            'Jugadas': '3',
                            'Ganadas': '2',
                            'Kills': '1',
                            'Deads': '1',
                            'Assists': '1',
                            'Mejor Ubicacion': 'MIDDLE',
                            'Puntaje': 'KILLING-SPREAD'
                        },
                        caracteristicas: {
                            'Especialidades': [
                            'witch',
                            'otraEspecialidad'
                            ],
                            'Debilidades': [
                            'unaDebilidad',
                            'otraDebilidad'
                            ],
                            'Mejor Posicion': [
                            'MIDDLE'
                            ]
                        }
                    },
                    {
                        id: 6,
                        nombre: 'viper',
                        source: 'assets/images/viper.png',
                        estadisticas: {
                            'Jugadas': '3',
                            'Ganadas': '2',
                            'Kills': '1',
                            'Deads': '1',
                            'Assists': '1',
                            'Mejor Ubicacion': 'BOTTOM',
                            'Puntaje': 'NOOB'
                        },
                        caracteristicas: {
                            'Especialidades': [
                            'viper',
                            'otraEspecialidad'
                            ],
                            'Debilidades': [
                            'unaDebilidad',
                            'otraDebilidad'
                            ],
                            'Mejor Posicion': [
                            'BOTTOM'
                            ]
                        }
                    }
                    ]
                },
                rivalesPosibles: [
                {
                   
                        nombre: 'pepe',
                        personajes: [
                        {
                            id: 7,
                            nombre: 'amumu',
                            source: 'assets/images/amumu.png',
                            estadisticas: {
                                'Jugadas': '6',
                                'Ganadas': '4',
                                'Kills': '3',
                                'Deads': '1',
                                'Assists': '1',
                                'Mejor Ubicacion': 'BOTTOM',
                                'Puntaje': 'alguno'
                            },
                            caracteristicas: {
                                'Especialidades': [
                                'amumu',
                                'otraEspecialidad'
                                ],
                                'Debilidades': [
                                'unaDebilidad',
                                'otraDebilidad'
                                ],
                                'Mejor Posicion': [
                                'BOTTOM'
                                ]
                            }
                        },
                        {
                            id: 8,
                            nombre: 'ahri',
                            source: 'assets/images/ahri.png',
                            estadisticas: {
                                'Jugadas': '7',
                                'Ganadas': '2',
                                'Kills': '1',
                                'Deads': '0',
                                'Assists': '0',
                                'Mejor Ubicacion': 'JUNGLE',
                                'Puntaje': 'MANCO'
                            },
                            caracteristicas: {
                                'Especialidades': [
                                'ahri',
                                'otraEspecialidad'
                                ],
                                'Debilidades': [
                                'unaDebilidad',
                                'otraDebilidad'
                                ],
                                'Mejor Posicion': [
                                'JUNGLE'
                                ]
                            }
                        },
                        {
                            id: 9,
                            nombre: 'olaf',
                            source: 'assets/images/olaf.png',
                            estadisticas: {
                                'Jugadas': '5',
                                'Ganadas': '2',
                                'Kills': '2',
                                'Deads': '3',
                                'Assists': '0',
                                'Mejor Ubicacion': 'BOTTOM',
                                'Puntaje': 'RAMPAGE'
                            },
                            caracteristicas: {
                                'Especialidades': [
                                'olaf',
                                'otraEspecialidad'
                                ],
                                'Debilidades': [
                                'unaDebilidad',
                                'otraDebilidad'
                                ],
                                'Mejor Posicion': [
                                'BOTTOM'
                                ]
                            }
                        },
                        {
                            id: 10,
                            nombre: 'pudge',
                            source: 'assets/images/pudge.png',
                            estadisticas: {
                                'Jugadas': '8',
                                'Ganadas': '8',
                                'Kills': '7',
                                'Deads': '0',
                                'Assists': '1',
                                'Mejor Ubicacion': 'MIDDLE',
                                'Puntaje': 'DOMINADOR'
                            },
                            caracteristicas: {
                                'Especialidades': [
                                'pudge',
                                'otraEspecialidad'
                                ],
                                'Debilidades': [
                                'unaDebilidad',
                                'otraDebilidad'
                                ],
                                'Mejor Posicion': [
                                'MIDDLE'
                                ]
                            }
                        }
                        ]
                    }
                ]
        }
    }
});