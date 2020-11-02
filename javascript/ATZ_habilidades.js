
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
				descripcion: "",
				nombrepdf: "Atletismo",
				atributo: "Vigor",
			},
			{ 
				nombre: "Combate",
				descripcion: "",
				nombrepdf: "Combate",
				atributo: "Vigor",
			},
			{ 
				nombre: "Intimidar",
				descripcion: "",
				nombrepdf: "Intimidar",
				atributo: "Vigor",
			},			
			{ 
				nombre: "Pelear",
				descripcion: "",
				nombrepdf: "Pelear",
				atributo: "Vigor",
			},
			{ 
				nombre: "Resistencia",
				descripcion: "",
				nombrepdf: "Resistencia",
				atributo: "Vigor",
			},			
			{ 
				nombre: "Supervivencia",
				descripcion: "",
				nombrepdf: "Supervivencia",
				atributo: "Vigor",
			},		
			{ 
				nombre: "Actuar",
				descripcion: "",
				nombrepdf: "Actuar",
				atributo: "Picaresca",
			},	
			{ 
				nombre: "Disparar",
				descripcion: "",
				nombrepdf: "Disparar",
				atributo: "Picaresca",
			},	
			{ 
				nombre: "Falsificar",
				descripcion: "",
				nombrepdf: "Falsificar",
				atributo: "Picaresca",
			},	
			{ 
				nombre: "Percepción",
				descripcion: "",
				nombrepdf: "Percepcion",
				atributo: "Picaresca",
			},	
			{ 
				nombre: "Robar",
				descripcion: "",
				nombrepdf: "Robar",
				atributo: "Picaresca",
			},	
			{ 
				nombre: "Sigilo",
				descripcion: "",
				nombrepdf: "Sigilo",
				atributo: "Picaresca",
			},
			{ 
				nombre: "Autoridad",
				descripcion: "",
				nombrepdf: "Autoridad",
				atributo: "Personalidad",
			},
			{ 
				nombre: "Contactos",
				descripcion: "",
				nombrepdf: "Contactos",
				atributo: "Personalidad",
			},
			{ 
				nombre: "Empatía",
				descripcion: "",
				nombrepdf: "Empatia",
				atributo: "Personalidad",
			},
			{ 
				nombre: "Encanto",
				descripcion: "",
				nombrepdf: "Encanto",
				atributo: "Personalidad",
			},
			{ 
				nombre: "Provocar",
				descripcion: "",
				nombrepdf: "Provocar",
				atributo: "Personalidad",
			},
			{ 
				nombre: "Sangre fría",
				descripcion: "",
				nombrepdf: "SangreFria",
				atributo: "Personalidad",
			},
			{ 
				nombre: "Burocracia",
				descripcion: "",
				nombrepdf: "Burocracia",
				atributo: "Intelecto",
			},
			{ 
				nombre: "Conducir/Pilotar",
				descripcion: "",
				nombrepdf: "Conducir",
				atributo: "Intelecto",
			},
			{ 
				nombre: "Conocimiento de la sociedad",
				descripcion: "",
				nombrepdf: "ConoSociedad",
				atributo: "Intelecto",
			},
			{ 
				nombre: "Estudios académicos",
				descripcion: "",
				nombrepdf: "EstudiosAcademicos",
				atributo: "Intelecto",
			},
			{ 
				nombre: "Primeros Auxilios",
				descripcion: "",
				nombrepdf: "PrimAuxilios",
				atributo: "Intelecto",
			},
			{ 
				nombre: "Tecnología/Mecánica",
				descripcion: "",
				nombrepdf: "Tecnologia",
				atributo: "Intelecto",
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
