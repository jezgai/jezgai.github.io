class Profesion {
	constructor(clase) {
		this._nombre = clase.nombre;
		
		this._habprincipales = clase.habprincipales;
		this._nhabprincipales = clase.nhabprincipales;
		
		this._habsecundarias = clase.habsecundarias;
		this._nhabsecundarias = clase.nhabsecundarias;
		
		this._dotesinvestigativas = clase.dotesinvestigativas;
		
		this._requisito = clase.requisito;
	}
		
	get nombre() {
		return this._nombre;
	}	
	set nombre(value) {
		this._nombre = value;
	}
			
	get habprincipales() {
		return this._habprincipales;
	}	
	set habprincipales(value) {
		this._habprincipales = value;
	}	
		
	get nhabprincipales() {
		return this._nhabprincipales;
	}	
	set nhabprincipales(value) {
		this._nhabprincipales = value;
	}	
		
	get habsecundarias() {
		return this._habsecundarias;
	}	
	set habsecundarias(value) {
		this._habsecundarias = value;
	}	
		
	get nhabsecundarias() {
		return this._nhabsecundarias;
	}	
	set nhabsecundarias(value) {
		this._nhabsecundarias = value;
	}	
	get dotesinvestigativas() {
		return this._dotesinvestigativas;
	}	
	set dotesinvestigativas(value) {
		this._dotesinvestigativas = value;
	}	
	
	get requisito() {
		return this._requisito;
	}	
	set requisito(value) {
		this._requisito = value;
	}
}


class Profesiones {
	
	constructor() {
		this._profesiones =
		[
			{
			  nombre : "Agente de la ley",
			  habprincipales :  "Disparar, Liderazgo, Percepción y Vigilancia",
			  nhabprincipales : 4,
			  habsecundarias : "Ciencia Natural, Conducir, Infiltración, Juego, Negociar, Ocultar, Pelear, Persuasión, Preparación y Presencia",
			  nhabsecundarias : 10,
			  dotesinvestigativas : "Elige 6 dotes entre: Antropología Forense, Balística, Burocracia, Callejeo, Consuelo, Contabilidad Forense, Detección de Mentiras, Entomología Forense, Espionaje, Huellas Dactilares, Interrogatorio, Intimidación, Investigar, Líder Innato, Negociación, Jerga Policial, Recogida de Pruebas, Robar Coches, Tozudo, Vigilancia Electrónica",
			  requisito : "",
			},
			{
			  nombre : "Abogado",
			  habprincipales : "Conocimiento Académico, Humanidades, Persuasión y Presencia" ,
			  nhabprincipales : 4,
			  habsecundarias : "Conducir, Liderazgo, Negociar, Percepción, Preparación y Vigilancia" ,
			  nhabsecundarias : 6,
			  dotesinvestigativas : "Elige 8 dotes entre: Adulación, Alta Sociedad, Análisis de Datos, Burocracia, Callejeo, Contabilidad Forense, Consuelo, Derecho, Detección de Mentiras, Historia Oral, Interrogatorio, Intimidación, Investigar, Jerga Policial, Lengua de Plata, Negociación y Negociador Innato",
			  requisito : "",
			},
			{
			  nombre : "Alienista",
			  habprincipales : "Ciencia Natural, Conocimiento Académico, Persuasión y Presencia",
			  nhabprincipales : 4,
			  habsecundarias : "Conducir, Humanidades, Juego, Negociar, Ocultar, Percepción, Preparación y Primeros Auxilios",
			  nhabsecundarias : 8,
			  dotesinvestigativas : "Elige 7 dotes entre: Adulación, Alta Sociedad, Análisis de Datos, Análisis de Textos, Antropología Forense, Burocracia, Consuelo, Detección de Mentiras, Flirtear, Historia Oral, Imitar, Interrogatorio, Investigar, Lengua de Plata, Psicología Forense e Hipnosis",
			  requisito : "",
			},
			{
			  nombre : "Arqueólogo",
			  habprincipales : "Conocimiento Académico, Humanidades, Preparación y Supervivencia" ,
			  nhabprincipales : 4,
			  habsecundarias : "Conducir, Disparar, Infiltración, Mantenimiento, Ocultar, Pelear, Percepción, Persuasión, Pilotar y Primeros Auxilios",
			  nhabsecundarias : 10,
			  dotesinvestigativas : "Elige 6 dotes entre: Análisis de Documentos, Análisis de Textos, Antropología, Arqueología, Burocracia, Criptografía, Fotografía, Historia, Historia del Arte, Historia Oral, Idiomas, Investigar, Lingüística, Ocultismo y Religión Comparada",
			  requisito : "",
			},
			{
			  nombre : "Artista",
			  habprincipales : "Disfraz, Humanidades, Percepción y Presencia",
			  nhabprincipales : 4,
			  habsecundarias : "Conducir, Conocimiento Académico, Juego, Liderazgo, Negociar, Ocultar, Pelear y Persuasión",
			  nhabsecundarias : 8,
			  dotesinvestigativas : "Elige 7 dotes entre: Adulación, Alta Sociedad, Análisis de Textos, Antropología, Callejeo, Consuelo, Criptografía, Fabricar, Flirtear, Fotografía, Historia del Arte, Historia Oral, Idiomas, Imitar, Investigar, Lingüística, Ocultismo, Religión Comparada, Tozudo y Trivialidades",
			  requisito : "Perspicacia 50",
			},
		]
	}
	
	get profesiones() {
		return this._profesiones;
	}

	set profesiones(value) {
		this._profesiones = value;
	}
	
	profesion(nombre) {
		var iprofesiones=0;
		for (iprofesiones=0; iprofesiones<this._profesiones.length; iprofesiones++) {
			if ( this._profesiones[iprofesiones].nombre == nombre ) {
				return new Profesion(this._profesiones[iprofesiones]);
			}
		}
		return new Profesion(this._profesiones[Comun.random(this._profesiones.length, 0)]);
	}
}


