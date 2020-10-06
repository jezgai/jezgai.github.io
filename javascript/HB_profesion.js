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
			{
			  nombre : "Atleta",
			  habprincipales : "Preparación, Presencia, Primeros Auxilios y Supervivencia",
			  nhabprincipales : 4,
			  habsecundarias : "Conducir, Disfraz, Disparar, Juego, Liderazgo, Montar, Pelear, Persuasión y Pilotar. Escoge una de entre Ciencia Natural o Humanidades, reflejando qué tipo de estudios ha tenido aparte de ser atleta",
			  nhabsecundarias : 10,
			  dotesinvestigativas : "Elige 6 dotes entre: Adulación, Alta Sociedad, Burocracia, Consuelo, Espionaje, Flirtear, Imitar, Intimidación y Trivialidades. Si como Habilidad secundaria ha escogido Ciencia Natural puede escoger también una de estas Dotes Investigativas como parte de las 6 que tiene que escoger: Biología, Botánica, Geología, Medicina o Química. Si como Habilidad secundaria ha escogido Humanidades puede escoger también una de estas Dotes Investigativas como parte de las 6 que tiene que escoger: Análisis de Textos, Fotografía, Historia, Historia del Arte, Idiomas o Lingüística",
			  requisito : "Vigor y Destreza 50",
			},
			{
			  nombre : "Aviador",
			  habprincipales : "Disparar, Percepción, Pilotar y Supervivencia",
			  nhabprincipales : 4,
			  habsecundarias : "Ciencia Natural, Conducir, Explosivos, Humanidades, Juego, Liderazgo, Mantenimiento, Pelear, Preparación y Primeros Auxilios",
			  nhabsecundarias : 10,
			  dotesinvestigativas : "Elige 6 dotes entre: Adulación, Alta Sociedad, Astronomía, Botánica, Callejeo, Demoliciones, Espionaje, Fabricar, Flirtear, Fotografía, Geología, Idiomas, Jerga Militar, Mecánica de Vehículos, Medicina, Química, Tozudo o Vigilancia Electrónica",
			  requisito : "",
			},
			{
			  nombre : "Científico",
			  habprincipales : "Ciencia Natural, Conocimiento Académico, Mantenimiento y Primeros Auxilios",
			  nhabprincipales : 4,
			  habsecundarias : "Conducir, Explosivos, Humanidades, Negociar, Ocultar, Percepción, Persuasión y Preparación",
			  nhabsecundarias : 8,
			  dotesinvestigativas : "Elige 7 dotes entre: Adulación, Análisis de Datos, Análisis de Documentos, Análisis de Textos, Antropología, Antropología Forense, Arqueología, Arquitectura, Astronomía, Balística, Biología, Botánica, Burocracia, Criptografía, Demoliciones, Entomología Forense, Fabricar, Fotografía, Geología, Idiomas, Investigar, Medicina o Química",
			  requisito : "Perspicacia 60",
			},
			{
			  nombre : "Criminal",
			  habprincipales : "Infiltración, Liderazgo, Pelear y Vigilancia",
			  nhabprincipales : 4,
			  habsecundarias : "Conducir, Disparar, Explosivos, Hurtar, Juego, Negociar, Ocultar, Percepción, Persuasión y Presencia",
			  nhabsecundarias : 10,
			  dotesinvestigativas : "Elige 6 dotes entre: Adulación, Balística, Callejeo, Cerrajería, Detección de Mentiras, Fotografía, Huellas Dactilares, Interrogatorio, Intimidación, Jerga Policial, Lengua de Plata, Negociador Innato, Recogida de Pruebas, Robar Coches o Vigilancia Electrónica",
			  requisito : "",
			},
			{
			  nombre : "Detective privado",
			  habprincipales : "Infiltración, Pelear, Percepción y Vigilancia",
			  nhabprincipales : 4,
			  habsecundarias : "Conducir, Conocimiento Académico, Disparar, Hurtar, Liderazgo, Juego, Ocultar, Persuasión, Primeros Auxilios y Presencia",
			  nhabsecundarias : 10,
			  dotesinvestigativas : "Elige 6 dotes entre: Adulación, Análisis de Datos, Arquitectura, Balística, Burocracia, Callejeo, Consuelo, Criptografía, Derecho, Detección de Mentiras, Espionaje, Fotografía, Huellas Dactilares, Interrogatorio, Intimidación, Investigar, Jerga Policial, Líder Innato, Mecánica de Vehículos, Recogida de Pruebas, Robar Coches o Tozudo",
			  requisito : "",
			},
			{
			  nombre : "Diletante",
			  habprincipales : "Liderazgo, Negociar, Persuasión y Presencia",
			  nhabprincipales : 4,
			  habsecundarias : "Escoge 10 Habilidades (que no sean Habilidades principales)",
			  nhabsecundarias : 10,
			  dotesinvestigativas : "Elige 6 dotes entre: Adulación y Alta Sociedad son obligatorias para todos los diletantes. Deben escoger también entre Negociación o Negociador Innato. Y escogen 3 Dotes Investigativas más que deben estar relacionadas con las Habilidades principales o secundarias que tenga el personaje",
			  requisito : "",
			},
			{
			  nombre : "Diplomático",
			  habprincipales : "Liderazgo, Negociar, Persuasión y Presencia",
			  nhabprincipales : 4,
			  habsecundarias : "Conocimiento Académico, Disparar, Humanidades, Juego, Montar, Pelear, Percepción, Preparación, Primeros Auxilios y Supervivencia",
			  nhabsecundarias : 10,
			  dotesinvestigativas : "Elige 6 dotes entre: Adulación, Alta Sociedad, Análisis de Datos, Análisis de Documentos, Análisis de Textos, Antropología, Arqueología, Burocracia, Contabilidad Forense, Criptografía, Derecho, Detección de Mentiras, Espionaje, Flirtear, Fotografía, Historia, Historia del Arte, Idiomas, Imitar, Interrogatorio, Intimidación, Lengua de Plata, Líder Innato, Negociación, Negociador Innato y Trivialidades",
			  requisito : "Perspicacia 50",
			},
			{
			  nombre : "Escritor",
			  habprincipales : "Conocimiento Académico, Humanidades, Percepción y Persuasión",
			  nhabprincipales : 4,
			  habsecundarias : "Ciencia Natural, Conducir, Negociar, Pelear, Preparación y Presencia",
			  nhabsecundarias : 6,
			  dotesinvestigativas : "Elige 8 dotes entre: Adulación, Alta sociedad, Análisis de Datos, Análisis de Documentos, Análisis de Textos, Antropología, Arqueología, Astronomía, Balística, Callejeo, Consuelo, Criptografía, Detección de Mentiras, Espionaje, Flirtear, Historia, Historia del Arte, Historia Oral, Idiomas, Investigar, Lengua de Plata, Lingüística, Ocultismo, Religión Comparada, Tozudo o Trivialidades",
			  requisito : "Perspicacia 60",
			},
			{
			  nombre : "Espía",
			  habprincipales : "Disparar, Infiltración, Percepción y Persuasión",
			  nhabprincipales : 4,
			  habsecundarias : "Conducir, Disfraz, Explosivos, Hurtar, Juego, Liderazgo, Mantenimiento, Ocultar, Presencia, Primeros Auxilios, Supervivencia y Vigilancia",
			  nhabsecundarias : 12,
			  dotesinvestigativas : "Elige 5 dotes entre: Adulación, Alta Sociedad, Balística, Burocracia, Callejeo, Cerrajería, Demoliciones, Derecho, Detección de Mentiras, Espionaje, Flirtear, Fotografía, Idiomas, Imitar, Interrogatorio, Intimidación, Jerga Militar, Jerga Policial, Lengua de Plata, Líder Innato, Mecánica de Vehículos, Robar Coches o Vigilancia Electrónica",
			  requisito : "",
			},
			{
			  nombre : "Explorador",
			  habprincipales : "Ciencia Natural, Disparar, Preparación y Supervivencia",
			  nhabprincipales : 4,
			  habsecundarias : "Conocimiento Académico, Humanidades, Infiltración, Liderazgo, Mantenimiento, Montar, Pelear, Percepción, Pilotar y Primeros Auxilios",
			  nhabsecundarias : 10,
			  dotesinvestigativas : "Elige 6 dotes entre: Alta Sociedad, Antropología, Arqueología, Arquitectura, Astronomía, Biología, Botánica, Fabricar, Fotografía, Geología, Historia, Historia del Arte, Historia Oral, Idiomas, Mecánica de Vehículos, Medicina, Ocultismo o Religión Comparada",
			  requisito : "Perspicacia 50",
			},
			{
			  nombre : "Gran cazador blanco",
			  habprincipales : "Disparar, Liderazgo, Presencia y Supervivencia",
			  nhabprincipales : 4,
			  habsecundarias : "Ciencia Natural, Humanidades, Infiltración, Juego, Montar, Negociar, Pelear, Percepción, Preparación y Primeros Auxilios",
			  nhabsecundarias : 10,
			  dotesinvestigativas : "Elige 6 dotes entre: Alta Sociedad, Balística, Biología, Botánica, Fotografía, Geología, Idiomas, Intimidar, Jerga Militar, Lengua de Plata, Líder Innato, Lingüística, Medicina, Negociación o Tozudo",
			  requisito : "",
			},
			{
			  nombre : "Marino",
			  habprincipales : "Mantenimiento, Pelear, Pilotar y Supervivencia",
			  nhabprincipales : 4,
			  habsecundarias : "Hurtar, Infiltración, Juego, Liderazgo, Ocultar, Persuasión, Preparación y Primeros Auxilios",
			  nhabsecundarias : 8,
			  dotesinvestigativas : "Elige 6 dotes entre: Adulación, Biología, Callejeo, Cerrajería, Detección de Mentiras, Fabricar, Historia Oral, Idiomas, Intimidación, Mecánica de Vehículos o Tozudo",
			  requisito : "",
			},
			{
			  nombre : "Médico",
			  habprincipales : "Ciencia Natural, Conocimiento Académico, Presencia y Primeros Auxilios",
			  nhabprincipales : 4,
			  habsecundarias : "Conducir, Humanidades, Negociar, Percepción, Persuasión y Preparación",
			  nhabsecundarias : 6,
			  dotesinvestigativas : "Elige 8 dotes entre: Adulación, Análisis de Datos, Antropología, Antropología Forense, Balística, Biología, Botánica, Burocracia, Consuelo, Detección de Mentiras, Entomología Forense, Fotografía, Idiomas, Investigar, Lengua de Plata, Medicina, Psicología Forense, Recogida de Pruebas, Química o Trivialidades",
			  requisito : "Perspicacia 60",
			},
			{
			  nombre : "Miembro del clero",
			  habprincipales : "Conocimiento Académico, Humanidades, Persuasión y Presencia",
			  nhabprincipales : 4,
			  habsecundarias : "Ciencia Natural, Conducir, Liderazgo, Negociar, Percepción, Preparación, Primeros Auxilios y Supervivencia",
			  nhabsecundarias : 8,
			  dotesinvestigativas : "Elige 7 dotes entre: Todos los miembros del clero tienen la Dote Investigativa Religión Comparada y además escogen 6 Dotes de esta lista: Adulación, Alta Sociedad, Análisis de Documentos, Análisis de Textos, Antropología, Arqueología, Arquitectura, Astronomía, Biología, Botánica, Consuelo, Derecho, Detección de Mentiras, Historia, Historia del Arte, Idiomas, Investigar, Lengua de Plata, Psicología Forense, Recogida de Pruebas y Trivialidades",
			  requisito : "Perspicacia 50",
			},
			{
			  nombre : "Policía",
			  habprincipales : "Disparar, Liderazgo, Percepción y Vigilancia",
			  nhabprincipales : 4,
			  habsecundarias : "Conducir, Hurtar, Infiltración, Juego, Mantenimiento, Ocultar, Pelear, Persuasión, Preparación y Presencia",
			  nhabsecundarias : 10,
			  dotesinvestigativas : "Elige 6 dotes entre: Balística, Burocracia, Callejeo, Consuelo, Detección de Mentiras, Huellas Dactilares, Interrogatorio, Intimidación, Jerga Policial, Líder Innato, Mecánica de Vehículos, Recogida de Pruebas, Robar Coches o Tozudo",
			  requisito : "",
			},
			{
			  nombre : "Político",
			  habprincipales : "Liderazgo, Negociar, Persuasión y Presencia",
			  nhabprincipales : 4,
			  habsecundarias : "Ciencia Natural, Conducir, Conocimiento Académico, Disfraz, Disparar, Humanidades, Juego y Percepción",
			  nhabsecundarias : 8,
			  dotesinvestigativas : "Elige 7 dotes entre: Adulación, Alta Sociedad, Burocracia, Contabilidad Forense, Consuelo, Derecho, Detección de Mentiras, Espionaje, Flirtear, Historia Oral, Idiomas, Imitar, Lengua de Plata, Líder Innato, Negociación, Negociador Innato y Trivialidades",
			  requisito : "",
			},
			{
			  nombre : "Profesor",
			  habprincipales : "Ciencia Natural, Conocimiento Académico, Humanidades y Persuasión",
			  nhabprincipales : 4,
			  habsecundarias : "Conducir, Negociar, Mantenimiento, Percepción, Preparación, Presencia, Primeros Auxilios y Supervivencia",
			  nhabsecundarias : 8,
			  dotesinvestigativas : "Elige 7 dotes entre: Adulación, Análisis de Datos, Análisis de Documentos, Análisis de Textos, Antropología, Antropología Forense, Arqueología, Arquitectura, Astronomía, Biología, Botánica, Burocracia, Consuelo, Derecho, Entomología Forense, Fabricar, Fotografía, Geología, Historia, Historia del Arte, Idiomas, Investigar, Lingüística, Medicina, Ocultismo, Psicología Forense, Química, Religión Comparada o Trivialidades",
			  requisito : "Perspicacia 70",
			},
			{
			  nombre : "Reportero",
			  habprincipales : "Infiltración, Percepción, Presencia y Vigilancia",
			  nhabprincipales : 4,
			  habsecundarias : "Conducir, Conocimiento Académico, Disfraz, Humanidades, Hurtar, Mantenimiento, Negociar, Ocultar, Persuasión y Preparación",
			  nhabsecundarias : 10,
			  dotesinvestigativas : "Elige 6 dotes entre: Adulación, Alta Sociedad, Análisis de Datos, Análisis de Documentos, Callejeo, Cerrajería, Contabilidad Forense, Derecho, Detección de Mentiras, Fotografía, Historia, Idiomas, Interrogatorio, Investigar, Lengua de Plata, Lingüística, Recogida de Pruebas o Trivialidades",
			  requisito : "",
			},
			{
			  nombre : "Sheriff",
			  habprincipales : "Disparar, Liderazgo, Pelear y Percepción",
			  nhabprincipales : 4,
			  habsecundarias : "Conducir, Hurtar, Infiltración, Juego, Montar, Ocultar, Persuasión, Primeros Auxilios, Supervivencia y Vigilancia",
			  nhabsecundarias : 10,
			  dotesinvestigativas : "Elige 6 dotes entre: Balística, Biología, Botánica, Burocracia, Consuelo, Detección de Mentiras, Huellas Dactilares, Interrogatorio, Intimidación, Jerga Policial, Líder Innato, Recogida de Pruebas, Robar Coches o Tozudo",
			  requisito : "",
			},
			{
			  nombre : "Soldado",
			  habprincipales : "Disparar, Liderazgo, Pelear, Percepción y Supervivencia",
			  nhabprincipales : 5,
			  habsecundarias : "Conducir, Explosivos, Infiltración, Juego, Mantenimiento, Ocultar, Pilotar, Preparación, Primeros Auxilios y Vigilancia",
			  nhabsecundarias : 10,
			  dotesinvestigativas : "Elige 5 dotes entre: Balística, Callejeo, Cerrajería, Demoliciones, Fabricar, Interrogatorio, Intimidación, Jerga Militar, Mecánica de Vehículos, Robar Coches o Tozudo",
			  requisito : "",
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


