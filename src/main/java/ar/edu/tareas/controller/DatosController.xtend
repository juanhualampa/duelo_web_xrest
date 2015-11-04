package ar.edu.tareas.controller

import org.uqbar.xtrest.api.Result
import org.uqbar.xtrest.api.XTRest
import org.uqbar.xtrest.api.annotation.Body
import org.uqbar.xtrest.api.annotation.Controller
import org.uqbar.xtrest.api.annotation.Get
import org.uqbar.xtrest.api.annotation.Put
import org.uqbar.xtrest.http.ContentType
import org.uqbar.xtrest.json.JSONUtils
import ar.edu.tareas.repos.RepoDatos
import domain.Descripcion
import homes.HomeJuego
import appModels.RetarADueloAppModel
import org.uqbar.commons.model.UserException
import domain.NoHayOponenteException
import ar.edu.tareas.xtrest.JSONPropertyUtils

@Controller
class DatosController {

	extension JSONUtils = new JSONUtils
	extension JSONPropertyUtils = new JSONPropertyUtils

	def static void main(String[] args) {
		XTRest.start(DatosController, 9000)
	}

	RetarADueloAppModel appModel

	new() {
		appModel = new RetarADueloAppModel(new HomeJuego())
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

	@Get('/estadisticas/:idJugador/:idPersonaje')
	def Result estadisticas() {
		val ret = appModel.datosDeEstadisticas(Integer.valueOf(idJugador), Integer.valueOf(idPersonaje))
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
			badRequest("No hay rival para vos ");
		}

	}

	@Get('/buscarAMrX/:idJugador/:idPersonaje/:pos')
	def Result mrX() {
		val duelo = appModel.iniciarDueloConMrX(Integer.valueOf(idJugador), Integer.valueOf(idPersonaje), pos)
		response.contentType = ContentType.APPLICATION_JSON
		ok(duelo.toJson)

	}

}
