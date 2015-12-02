package ar.edu.datos.appModels
import org.eclipse.xtend.lib.annotations.Accessors
import org.uqbar.commons.utils.Observable
import domain.EstadisticasPersonajes
import domain.Jugador
import domain.Ubicacion
import retador.Iniciador
import homes.HomeJuego
import java.util.LinkedHashMap
import retador.Retador
import duelos.Duelo
import domain.Personaje
import java.util.List

@Accessors
@Observable
class DatosDueloAppModel {
	
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
		juego.jugadores
	}
		
	def datosDeEstadisticas(Integer idJugador, Integer idPersonaje){
		this.homeJuego.estadisticasDePersonajeSeleccionado(idJugador,idPersonaje).dameSusPropiedades
	}
	
	def datosDeEstadisticas2(Integer idJugador, Integer idPersonaje){
		this.homeJuego.estadisticasDePersonajeSeleccionado(idJugador,idPersonaje).minificadas2
	}
	
	def minificadas2(EstadisticasPersonajes it) {
		
		
		#[new DatosDeEstadisticas("JUGADAS",String.valueOf(vecesUsadoAntesDelDuelo)),
		new DatosDeEstadisticas("JUGADAS",String.valueOf(vecesKills))
		,new DatosDeEstadisticas("JUGADAS",String.valueOf(vecesDeads))
		,new DatosDeEstadisticas("JUGADAS",String.valueOf(vecesAssist))
		,new DatosDeEstadisticas("JUGADAS",String.valueOf(mejorUbicacion))
		, new DatosDeEstadisticas("JUGADAS",String.valueOf(String.valueOf(calificacion.categoria).toLowerCase))]
		
		
	}
	
	def minificadas(EstadisticasPersonajes it) {
		new EstadisticasMinificadas(vecesUsadoAntesDelDuelo,vecesQueGanoDuelo,vecesKills,
			vecesDeads,vecesAssist,mejorUbicacion,calificacion.categoria)
	}
	
	def dameSusPropiedades(EstadisticasPersonajes it) {
		val propiedades = new LinkedHashMap<String, Object>();
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
			duelo.resultado.msj, duelo.resultado.veredicto,
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
	
	def caracteristicas(Personaje personaje) {
		val propiedades = new LinkedHashMap<String, Object>();
		propiedades.put("Especialidades",personaje.especialidades)
		propiedades.put("Debilidades",personaje.debilidades)
		propiedades.put("Mejor Posicion",personaje.ubicacionIdeal)
		propiedades
	}
	
	def caracteristicasDelPersonaje(Personaje personaje){
		personaje.caracteristicas
	}
	
	def personajesMinificados() {
		this.homeJuego.jugador.estadisticasPersonajes.map[new PersonajesMinificados(it.personaje.nombreEid)]
	}
	
	
	def estadisticasMinificadas(){
		this.homeJuego.jugador.estadisticasPersonajes.map[new EstadisticasMinificadas(
			vecesUsadoAntesDelDuelo,vecesQueGanoDuelo,vecesKills,vecesDeads,vecesAssist,mejorUbicacion,calificacion.categoria)
		]
	}
	
	def nombreEid(Personaje it) {
		new Pair(id,nombre)
	}
	
}

@Accessors
class PersonajesMinificados {
	
	int id
	String nombre
	new(Pair<Integer, String> pair) {
		this.id = pair.key
		this.nombre = pair.value
	}
	
}

@Accessors
class DatosDeEstadisticas{
	
	String valorDelCampo
	
	String nombreDelCampo
	
	new (String valorDelCampo, String nombreDelCampo){
		this.valorDelCampo = valorDelCampo
		this.nombreDelCampo = nombreDelCampo
	}
}

@Accessors
class EstadisticasMinificadas {
	
	DatosDeEstadisticas jugadas
	DatosDeEstadisticas ganadas
	DatosDeEstadisticas kills
	DatosDeEstadisticas deads 
	DatosDeEstadisticas assists
	DatosDeEstadisticas mejorUbicacion
	DatosDeEstadisticas puntaje
	
	new(int jugadas, int ganadas, int kills, int deads, int assists , Ubicacion mejorUbicacion, String puntaje) {
		this.jugadas = new DatosDeEstadisticas("JUGADAS",String.valueOf(jugadas))
		this.ganadas = new DatosDeEstadisticas("GANADAS",String.valueOf(ganadas))
		this.kills = new DatosDeEstadisticas("KILLS",String.valueOf(kills))
		this.deads = new DatosDeEstadisticas("DEADS",String.valueOf(deads))
		this.assists = new DatosDeEstadisticas("ASSISTS",String.valueOf(assists))
		this.mejorUbicacion = new DatosDeEstadisticas("MEJOR UBICACION",String.valueOf(String.valueOf(mejorUbicacion).toLowerCase))
		this.puntaje = new DatosDeEstadisticas("PUNTAJE",puntaje)
	}	
	
}