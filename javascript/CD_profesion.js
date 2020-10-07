class Profesion {
	constructor(clase) {
		this._nombre = clase.nombre;
		
		this._habilidades = clase.habilidades;
	}
		
	get nombre() {
		return this._nombre;
	}	
	set nombre(value) {
		this._nombre = value;
	}
			
	get habilidades() {
		return this._habilidades;
	}	
	set habilidades(value) {
		this._habilidades = value;
	}	

}


class Profesiones {
	
	constructor() {
		this._profesiones =
		[
			{
			  nombre : "Anticuario",
			  habilidades :  "Ciencias ocultas, Ciencias sociales y humanidades (Historia y hasta otras dos a su elección), Idioma (uno no nativo), Manejo de archivos / Embaucar-",
			},
			{
			  nombre : "Detective de la policía",
			  habilidades :  "Burocracia, Ciencias sociales y humanidades (Criminalística) / Discreción, Esconder/se, Escuchar, Percibir / Autoridad, Intimidar / Armas de fuego (Armas cortas y hasta una más a su elección).",
			},
			{
			  nombre : "Detective privado",
			  habilidades :  "Burocracia / Arte (Interpretación) / Discreción, Esconder/se, Escuchar, Percibir / Bajos fondos, Intimidar / Armas de cuerpo a cuerpo (una a su elección), Armas de Fuego (Armas Cortas), Lucha.",
			},
			{
			  nombre : "Diletante",
			  habilidades :  "Ciencias sociales y humanidades (al menos dos a su elección) / Arte (una a su elección) / Autoridad, Protocolo.",
			},
			{
			  nombre : "Escritor",
			  habilidades :  "Ciencias sociales y humanidades (entre una y tres a su elección), Idiomas (uno además del nativo), Manejo de archivos / Arte (Escritura) / Percibir / Autoridad.",
			},
			{
			  nombre : "Explorador",
			  habilidades :  "Burocracia, Ciencias naturales (una a su elección), Ciencias sociales y humanidades (al menos una a su elección), Idiomas (uno además del nativo), Primeros auxilios / Orientación, Percibir, Seguir rastros, Supervivencia / Armas de fuego (Armas Largas), Forma física.",
			},
			{
			  nombre : "Médico",
			  habilidades :  "Ciencias naturales (Biología o Farmacología y hasta una más a su elección), Idiomas (latín), Manejo de archivos, Medicina, Primeros auxilios, Psicología / Percibir / Autoridad.",
			},
			{
			  nombre : "Periodista",
			  habilidades :  "Ciencias sociales y humanidades (al menos una a su elección), Manejo de archivos / Arte (Escritura) / Discreción, Esconder/se, Escuchar, Percibir / y una de estas tres: Psicología, Bajos fondos o Embaucar.",
			},
			{
			  nombre : "Profesor universitario",
			  habilidades :  "Burocracia, Ciencias naturales (al menos dos a su elección) o Ciencias sociales y humanidades (al menos dos a su elección), Idiomas (al menos uno además del nativo), Manejo de archivos / Autoridad, Oratoria.",
			},
			{
			  nombre : "Religioso",
			  habilidades :  "Ciencias naturales (una a su elección), Ciencias ocultas, Ciencias sociales y humanidades (al menos una a su elección), Idiomas (al menos uno además del nativo), Psicología / Autoridad, Oratoria.",
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


