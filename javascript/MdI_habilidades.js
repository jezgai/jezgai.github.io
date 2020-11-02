
class Habilidad {
	constructor (habilidad) {
		this._nombre = habilidad.nombre;
		this._descripcion = habilidad.descripcion;
		this._nombrepdf = habilidad.nombrepdf;
		this._atributo = habilidad.atributo;
	}
}

class Habilidades {
	constructor () {
		this._habilidades = 
		[ 
			{ 
				nombre: "Atletismo",
				descripcion: "Actividades físicas como trepar, nadar, correr, saltar...",
				nombrepdf: "Atletismo",
				atributo: "Brío",
			},
			{ 
				nombre: "Combate cuerpo a cuerpo",
				descripcion: "Con armas como espadas, hachas, botellas...",
				nombrepdf: "CCaC",
				atributo: "Brío",
			},
			{ 
				nombre: "Equitación",
				descripcion: "No solo montar a caballo, sino a cualquier bestia de monta.",
				nombrepdf: "Equitacion",
				atributo: "Brío",
			},			
			{ 
				nombre: "Combate sin armas",
				descripcion: "Tanto a puñetazos como usando técnicas más elaboradas",
				nombrepdf: "CsA",
				atributo: "Brío",
			},
			{ 
				nombre: "Intimidar",
				descripcion: "Imponer la voluntad sobre otros mediante amenaza de violencia.",
				nombrepdf: "Intimidar",
				atributo: "Brío",
			},			
			{ 
				nombre: "Supervivencia",
				descripcion: "Sobrevivir en la naturaleza: selvas, desiertos, montañas...",
				nombrepdf: "Supervivencia",
				atributo: "Brío",
			},		
			{ 
				nombre: "Acrobacias",
				descripcion: "",
				nombrepdf: "Acrobacias",
				atributo: "Picaresca",
			},	
			{ 
				nombre: "Combate a distancia",
				descripcion: "",
				nombrepdf: "CaD",
				atributo: "Picaresca",
			},	
			{ 
				nombre: "Engañar",
				descripcion: "",
				nombrepdf: "Enganar",
				atributo: "Picaresca",
			},	
			{ 
				nombre: "Latrocinio",
				descripcion: "",
				nombrepdf: "Latrocinio",
				atributo: "Picaresca",
			},	
			{ 
				nombre: "Perspicacia",
				descripcion: "",
				nombrepdf: "Perspicacia",
				atributo: "Picaresca",
			},	
			{ 
				nombre: "Sigilo",
				descripcion: "",
				nombrepdf: "Sigilo",
				atributo: "Picaresca",
			},
			{ 
				nombre: "Bajos fondos",
				descripcion: "",
				nombrepdf: "BajosFondos",
				atributo: "Galantería",
			},
			{ 
				nombre: "Arte",
				descripcion: "",
				nombrepdf: "Arte",
				atributo: "Galantería",
			},
			{ 
				nombre: "Comercio",
				descripcion: "",
				nombrepdf: "Comercio",
				atributo: "Galantería",
			},
			{ 
				nombre: "Diplomacia",
				descripcion: "",
				nombrepdf: "Diplomacia",
				atributo: "Galantería",
			},
			{ 
				nombre: "Seducción",
				descripcion: "",
				nombrepdf: "Seduccion",
				atributo: "Galantería",
			},
			{ 
				nombre: "Trato con animales",
				descripcion: "",
				nombrepdf: "TratoConAnimales",
				atributo: "Galantería",
			},
			{ 
				nombre: "Humanidades",
				descripcion: "",
				nombrepdf: "Humanidades",
				atributo: "Erudición",
			},
			{ 
				nombre: "Ciencias",
				descripcion: "",
				nombrepdf: "Ciencias",
				atributo: "Erudición",
			},
			{ 
				nombre: "Ingeniería",
				descripcion: "",
				nombrepdf: "Ingenieria",
				atributo: "Erudición",
			},
			{ 
				nombre: "Lingüística",
				descripcion: "",
				nombrepdf: "Linguistica",
				atributo: "Erudición",
			},
			{ 
				nombre: "Medicina",
				descripcion: "",
				nombrepdf: "Medicina",
				atributo: "Erudición",
			},
			{ 
				nombre: "Navegación",
				descripcion: "",
				nombrepdf: "Navegacion",
				atributo: "Erudición",
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
