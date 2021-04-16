
class Habilidad {
	constructor (habilidad) {
		this._nombre = habilidad.nombre;
		this._descripcion = habilidad.descripcion;
		this._atributo = habilidad.atributo;
	}
}

class Habilidades {
	constructor () {
		this._habilidades = 
		[
			{ 
				nombre: "Atizar",
				descripcion: "Combate cuerpo a cuerpo, armado, desarmado.",
				atributo: "Tocho",
			},
			{ 
				nombre: "Como pez en el agua",
				descripcion: "Nadar, bucear, aguantar la respiración.",
				atributo: "Tocho",
			},
			{ 
				nombre: "En forma",
				descripcion: "Correr, saltar, trepar.",
				atributo: "Tocho",
			},
			{ 
				nombre: "Harrijasotzaile",
				descripcion: "Levantar, sostener peso, cargar.",
				atributo: "Tocho",
			},
			{ 
				nombre: "Gaupasero",
				descripcion: "Alternar, trasnochar, vigor.",
				atributo: "Tocho",
			},
			{ 
				nombre: "Crimen",
				descripcion: "(Abrir cerraduras, falsificar, sistemas de seguridad, vaciar bolsillos, cantar reggaeton).",
				atributo: "Habil",
			},
			{ 
				nombre: "Montar",
				descripcion: "Cabalgar, dirigir.",
				atributo: "Habil",
			},
			{ 
				nombre: "Disparar",
				descripcion: "Combate a distancia, tirar dardos, jugar a pelota vasca.",
				atributo: "Habil",
			},
			{ 
				nombre: "Conducir",
				descripcion: "Motos, coches, camiones, tractores John Deere.",
				atributo: "Habil",
			},
			{ 
				nombre: "Equilibrio",
				descripcion: "Huir por una cornisa, caminar derecho en un control de alcoholemia.",
				atributo: "Habil",
			},
			{ 
				nombre: "Esquivar",
				descripcion: "Evitar pelotas de goma en una “manifa”, evadir señoras en las rebajas o sus paraguas en días de lluvia.",
				atributo: "Habil",
			},
			{ 
				nombre: "Es lo mío",
				descripcion: "Oficio (Carpintería, pastoreo, vendedor, mecánico, tasador, tocar la txalaparta).",
				atributo: "Habil",
			},
			{ 
				nombre: "Pilotar",
				descripcion: "Aviones, helicópteros.",
				atributo: "Habil",
			},
			{ 
				nombre: "Tengo yo un amigo",
				descripcion: "Bajos fondos, callejear.",
				atributo: "Espabilao",
			},
			{ 
				nombre: "Yo sé",
				descripcion: "Conocimiento (Arte, ciencia, cultura, historia, legislación).",
				atributo: "Espabilao",
			},
			{ 
				nombre: "Labia",
				descripcion: "Engañar, etiqueta, persuadir, seducción.",
				atributo: "Espabilao",
			},
			{ 
				nombre: "Idioma",
				descripcion: "(Euskera, castellano, inglés, ruso, japonés, francés, caló).",
				atributo: "Espabilao",
			},
			{ 
				nombre: "Sigilo",
				descripcion: "Infiltración, pasar desapercibido entre la multitud.",
				atributo: "Espabilao",
			},
			{ 
				nombre: "Actorazo",
				descripcion: "Interpretar, disfrazarse, farolear.",
				atributo: "Espabilao",
			},
			{ 
				nombre: "Lince",
				descripcion: "Investigar, perspicacia.",
				atributo: "Espabilao",
			},
			{ 
				nombre: "Manitas",
				descripcion: "Reparar, construir, apañar.",
				atributo: "Espabilao",
			},
			{ 
				nombre: "Liderazgo",
				descripcion: "Dirigir, mando, alentar.",
				atributo: "Espabilao",
			},
			{ 
				nombre: "Jugar",
				descripcion: "Al mus, al bingo.",
				atributo: "Espabilao",
			},
			{ 
				nombre: "Matasanos",
				descripcion: "Primeros auxilios, cirugía, diagnóstico.",
				atributo: "Espabilao",
			},
			{ 
				nombre: "Supervivencia",
				descripcion: "Cazar, seguir rastros, aguantar el txikiteo con mostos.",
				atributo: "Espabilao",
			},
			{ 
				nombre: "Tecnología",
				descripcion: "Identificación, uso y modificación de aparatos tecnológicos.",
				atributo: "Espabilao",
			},
			{ 
				nombre: "Templado",
				descripcion: "Nervios de acero para permanecer sereno e impasible.",
				atributo: "Espabilao",
			},
		]
		
	}
	
	habilidad(nbhabilidad) {
		var indice=0;
		for (indice=0; indice<this._habilidades.length; indice++) {
			if ( this._habilidades[indice] == nbhabilidad )
				return indice;
		}
		return indice;
	}
}
