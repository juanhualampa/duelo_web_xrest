package ar.edu.datos.controller

import org.uqbar.xtrest.api.Result
import org.uqbar.xtrest.api.XTRest
import org.uqbar.xtrest.api.annotation.Controller
import org.uqbar.xtrest.api.annotation.Get
import org.uqbar.xtrest.http.ContentType
import org.uqbar.xtrest.json.JSONUtils
import homes.HomeJuego
import domain.NoHayOponenteException
import ar.edu.datos.xtrest.JSONPropertyUtils
import ar.edu.datos.appModels.DatosDueloAppModel

@Controller
class DatosController {

	extension JSONUtils = new JSONUtils
	extension JSONPropertyUtils = new JSONPropertyUtils

	def static void main(String[] args) {
		XTRest.start(DatosController, 9000)
	}

	DatosDueloAppModel appModel

	new() {
		appModel = new DatosDueloAppModel(new HomeJuego())
	}

	@Get('/posiciones')
	def Result datos() {
		val ret = appModel.posiciones
		response.contentType = ContentType.APPLICATION_JSON
		ok(ret.toJson)
	}

	@Get('/personajes')
	def Result personajes() {
		val ret = appModel.homeJuego.personajes
		response.contentType = ContentType.APPLICATION_JSON
		ok(ret.toJson)
	}
	
	@Get('/personajesBuscados/:idPersonaje')
	def Result personajesBuscados(){
	val ret = appModel.personajesMinificados.filter[it.nombre.contains(idPersonaje)]
		response.contentType = ContentType.APPLICATION_JSON
		ok(ret.toJson)
	}
	
	@Get('/descripcion_personaje/:idJugador/:idPersonaje')
	def Result descripcion(){
		val ret = appModel.caracteristicasDelPersonaje(appModel.obtenerPersonaje(Integer.valueOf(idJugador), Integer.valueOf(idPersonaje)))
		response.contentType = ContentType.APPLICATION_JSON
		ok(ret.toJson)
	}
	
	@Get('/datos_minimos_personajes')
	def Result nombresPersonajes(){
		val ret = appModel.personajesMinificados
		response.contentType = ContentType.APPLICATION_JSON
		ok(ret.toJson)
	}

	@Get('/estadisticas/:idJugador/:idPersonaje')
	def Result estadisticas() {
		val ret = appModel.datosDeEstadisticas2(Integer.valueOf(idJugador), Integer.valueOf(idPersonaje))
		response.contentType = ContentType.APPLICATION_JSON
		ok(ret.toJson)
	}

	@Get('/iniciarDuelo/:idJugador/:idPersonaje/:pos')
	def Result iniciarDuelo() {
		try {
			val duelo = appModel.iniciarDuelo(Integer.valueOf(idJugador), Integer.valueOf(idPersonaje), pos)
			response.contentType = ContentType.APPLICATION_JSON
			ok(duelo.toJson)
		} catch (NoHayOponenteException e) {
			badRequest("No hay rival para vos");
		}
	}

	@Get('/buscarAMrX/:idJugador/:idPersonaje/:pos')
	def Result mrX() {
		val duelo = appModel.iniciarDueloConMrX(Integer.valueOf(idJugador), Integer.valueOf(idPersonaje), pos)
		response.contentType = ContentType.APPLICATION_JSON
		ok(duelo.toJson)

	}

}
