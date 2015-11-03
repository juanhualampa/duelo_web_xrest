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

@Controller
class DatosController {
	
	extension JSONUtils = new JSONUtils
	
	def static void main(String[] args){
		XTRest.start(DatosController,9000)
	}
	
	RetarADueloAppModel appModel
	
	new(){
		appModel = new RetarADueloAppModel(new HomeJuego())
	}
	
	
	@Get('/posiciones')
	def Result datos(){
		val ret = appModel.posiciones
		//RepoTareas.instance.allInstances
		//#["Algun dato","Otro dato mas","Un tercer dato"]
		response.contentType = ContentType.APPLICATION_JSON
		ok(ret.toJson)
	}
	
	
	@Get('/personajes')
	
	
	@Get('/estadisticas')
	def Result estadisticas(){
		val ret = appModel.estadisticas
		//RepoTareas.instance.allInstances
		//#["Algun dato","Otro dato mas","Un tercer dato"]
		response.contentType = ContentType.APPLICATION_JSON
		ok(ret.toJson)
	}
	
	
	
}