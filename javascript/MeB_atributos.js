
class Atributo {
	constructor (atributo) {
		this._nombre = atributo.nombre;
		this._descripcion = atributo.descripcion;
		this._nombrepdf = atributo.nombrepdf;
	}
}

class Atributos {
	constructor () {
		this._atributos = 
		[ 
			{ 
				nombre: "Tocho",
				descripcion: "Estado físico del personaje, su fuerza, resistencia, capacidad atlética.",
				nombrepdf: "Tocho",
			},
			{ 
				nombre: "Habil",
				descripcion: "Muestra la destreza del personaje para desenvolverse con velocidad y precisión. Coordinación, habilidad, reflejos, manejo.",
				nombrepdf: "Habil",
			},
			{ 
				nombre: "Espabilao",
				descripcion: "Percibir el entorno y reaccionar adecuadamente, mostrando su intuición, ingenio, facilidad de palabra, velocidad mental y labia.",
				nombrepdf: "Espabilao",
			},
		]
		
	}
}
