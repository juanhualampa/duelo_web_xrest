package ar.edu.datos.appModels
import org.eclipse.xtend.lib.annotations.Accessors
import org.uqbar.commons.utils.Observable
import domain.EstadisticasPersonajes
import domain.Jugador
import domain.Ubicacion
import retador.Iniciador
import homes.HomeJuego
import java.util.HashMap
import retador.Retador
import duelos.Duelo

@Accessors
@Observable
class RetarADueloAppModel {
	
	HomeJuego homeJuego
	
	new(HomeJuego homeJuego){
		this.homeJuego = homeJuego
	}
	
	def posiciones(){
		#[Ubicacion.TOP,Ubicacion.BOTTOM,Ubicacion.MIDDLE, Ubicacion.JUNGLE]
	}
	
	def juego(){
		this.homeJuego.juego
	}
	
	def obtenerJugador(Integer idJugador){
		this.jugadores.findFirst[id.equals(idJugador)]
	}
	
	def jugadores(){
		this.homeJuego.juego.jugadores
	}
		
	def datosDeEstadisticas(Integer idJugador, Integer idPersonaje){
		this.homeJuego.estadisticasDePersonajeSeleccionado(idJugador,idPersonaje).dameSusPropiedades
	}
	
	def dameSusPropiedades(EstadisticasPersonajes it) {
		val propiedades = new HashMap<String, Object>();
		propiedades.put("Jugadas",vecesUsadoAntesDelDuelo)
		propiedades.put("Ganadas",vecesQueGanoDuelo)
		propiedades.put("Kills",vecesKills)
		propiedades.put("Deads",vecesDeads)	
		propiedades.put("Assists",vecesAssist)
		propiedades.put("Mejor ubicacion",mejorUbicacion)
		propiedades.put("Puntaje",calificacion.categoria)
		propiedades
	}
	
	def iniciarDuelo(Integer idJugador,Integer idPersonaje,String pos){
		val duelo = juego.iniciarReto(obtenerJugador(idJugador),obtenerPersonaje(idJugador,idPersonaje),
			obtenerUbicacionDe(pos))
		duelo.datos
	}
	
	def iniciarDueloConMrX(Integer idJugador,Integer idPersonaje,String pos){
		val retador = new Iniciador(obtenerJugador(idJugador),obtenerPersonaje(idJugador,idPersonaje),
			obtenerUbicacionDe(pos))
		val mrX = juego.generarMRX(retador,1)
		val duelo = new Duelo( retador,mrX)
		duelo.realizarse
		duelo.datos
	}
	
	def datos(Duelo duelo){
		#[propiedadesParaLasEstadisticas(duelo.retador),propiedadesParaLasEstadisticas(duelo.retado),
			duelo.retador.personaje.nombre, duelo.retado.personaje.nombre,
			duelo.resultado.msj, duelo.resultado.saludo,
			duelo.retador.puntaje, duelo.retado.puntaje,
			duelo.retador.personaje.source, duelo.retado.personaje.source
		]
	}
	def puntaje(Retador ret){
		ret.jugador.estadisticas(ret.personaje).poderDeAtaque
	}
	
	def propiedadesParaLasEstadisticas(Retador it) {
		jugador.estadisticas(personaje).dameSusPropiedades
	}
	
	def obtenerUbicacionDe(String posicion) {
		Ubicacion.valueOf(posicion)
	}
	
	def obtenerPersonaje(Integer idJugador, Integer idPersonaje) {
		obtenerJugador(idJugador).personajePor(idPersonaje)
	}
	
	def personajePor(Jugador jugador, Integer idPersonaje) {
		jugador.estadisticasPersonajes.map[personaje].findFirst[id.equals(idPersonaje)]
	}
	
}