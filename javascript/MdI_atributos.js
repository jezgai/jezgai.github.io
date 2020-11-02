
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
				nombre: "Brío",
				descripcion: "Fuerza, resistencia, valor y coraje del personaje.",
				nombrepdf: "Brio",
			},
			{ 
				nombre: "Picaresca",
				descripcion: "Astucia, sigilo y rapidez de mente y de reflejos.",
				nombrepdf: "Picaresca",
			},
			{ 
				nombre: "Galantería",
				descripcion: "Carisma, belleza, presencia, porte, educación y estatus social.",
				nombrepdf: "Galanteria",
			},
			{ 
				nombre: "Erudición",
				descripcion: "Inteligencia, conocimiento y disciplina mental.",
				nombrepdf: "Erudicion",
			},
		]
		
	}
}
