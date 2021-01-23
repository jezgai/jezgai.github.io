class Profesion {
	constructor(clase) {
		this._nombre = clase.nombre;
		
		this._habilidades = clase.habilidades;
		
		if ( clase.lhabilidades.length > 1 ) {
			this._lhabilidades = Comun.shuffle( clase.lhabilidades[Comun.random(clase.lhabilidades.length),0] );
		}
		else {
			this._lhabilidades = Comun.shuffle(clase.lhabilidades[0]);
		}
		this._lresto = Comun.shuffle(clase.lresto);

		this._puntosProfesion = [];
		this._puntosResto = [];
		
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
			  habilidades :  "Ciencias ocultas, Ciencias sociales y humanidades (Historia y hasta otras dos a su elección), Idioma (uno no nativo), Manejo de archivos y Embaucar.",
			  lhabilidades : [ [ "Ciencias ocultas", "Historia", "Arqueología", "Idioma 2", "Manejo de archivos", "Embaucar" ], 
							   [ "Ciencias ocultas", "Historia", "Geografía", "Idioma 2", "Manejo de archivos", "Embaucar" ],
							   [ "Ciencias ocultas", "Historia", "Antropología", "Idioma 2", "Manejo de archivos", "Embaucar" ] ],
			  lresto : [ "Psicología", "Oratoria", "Bricolaje", "Escuchar", "Esquivar", "Falsificación" ]
			},
			{
			  nombre : "Detective de la policía",
			  habilidades :  "Burocracia, Ciencias sociales y humanidades (Criminología), Discreción, Esconder/se, Escuchar, Percibir, Autoridad, Intimidar y Armas de fuego (Armas cortas y hasta una más a su elección).",
			  lhabilidades : [ [ "Burocracia", "Criminología", "Discreción", "Percibir", "Autoridad", "Intimidar", "Armas de fuego cortas" ] ],
			  lresto : [ "Escuchar", "Esconder/se", "Armería", "Primeros auxilios", "Armas automáticas", "Conducir" ],
			},
			{
			  nombre : "Detective privado",
			  habilidades :  "Burocracia, Arte (Interpretación), Discreción, Esconder/se, Escuchar, Percibir, Bajos fondos, Intimidar, Armas de cuerpo a cuerpo (una a su elección), Armas de Fuego (Armas Cortas) y Lucha.",
			  lhabilidades : [ [ "Burocracia", "Interpretación", "Esconder/se", "Percibir", "Bajos fondos", "Intimidar", "Armas de fuego cortas", "Lucha" ] ],
			  lresto : [ "Escuchar", "Armas cortas", "Discreción", "Sociología", "Autoridad", "Intimidar" ],
			},
			{
			  nombre : "Diletante",
			  habilidades :  "Ciencias sociales y humanidades (al menos dos a su elección), Arte (una a su elección), Autoridad y Protocolo.",
			  lhabilidades : [ [ "Criminología", "Derecho", "Pintura", "Autoridad", "Protocolo", "Esquivar" ], 
							   [ "Geografía", "Sociología", "Música", "Autoridad", "Protocolo", "Forma física" ],
							   [ "Ciencias políticas", "Arqueología", "Escultura", "Autoridad", "Protocolo", "Lucha" ] ],
			  lresto : [ "Escuchar", "Esconder/se", "Discreción", "Embaucar", "Oratoria" ],
			},
			{
			  nombre : "Escritor",
			  habilidades :  "Ciencias sociales y humanidades (entre una y tres a su elección), Idiomas (uno además del nativo), Manejo de archivos, Arte (Escritura), Percibir y Autoridad.",
			  lhabilidades : [ [ "Historia", "Idioma 2", "Manejo de archivos", "Escritura", "Percibir", "Autoridad" ], 
							   [ "Geografía", "Idioma 2", "Manejo de archivos", "Escritura", "Percibir", "Autoridad" ],
							   [ "Sociología", "Idioma 2", "Manejo de archivos", "Escritura", "Percibir", "Autoridad" ] ],
			  lresto : [ "Escuchar", "Conducir", "Discreción", "Psicología", "Oratoria" ],

			},
			{
			  nombre : "Explorador",
			  habilidades :  "Burocracia, Ciencias naturales (una a su elección), Ciencias sociales y humanidades (al menos una a su elección), Idiomas (uno además del nativo), Primeros auxilios / Orientación, Percibir, Seguir rastros, Supervivencia / Armas de fuego (Armas Largas), Forma física.",
			  lhabilidades : [ [ "Burocracia", "Botánica", "Geografía", "Idioma 2", "Orientación", "Seguir rastros", "Supervivencia", "Forma física" ] ],
			  lresto : [ "Primeros auxilios", "Percibir", "Armas largas", "Escuchar", "Esquivar" ],		  
			},
			{
			  nombre : "Médico",
			  habilidades :  "Ciencias naturales (Biología o Farmacología y hasta una más a su elección), Idiomas (latín), Manejo de archivos, Medicina, Primeros auxilios, Psicología, Percibir y Autoridad.",
			  lhabilidades : [ [ "Biología", "Botánica", "Latín", "Manejo de archivos", "Medicina", "Primeros auxilios", "Autoridad" ], 
							   [ "Farmacología", "Botánica", "Latín", "Manejo de archivos", "Medicina", "Primeros auxilios", "Autoridad" ] ],
			  lresto : [ "Percibir", "Psicología", "Escuchar", "Discreción", "Intimidar" ],
			},
			{
			  nombre : "Periodista",
			  habilidades :  "Ciencias sociales y humanidades (al menos una a su elección), Manejo de archivos, Arte (Escritura), Discreción, Esconder/se, Escuchar, Percibir y una de estas tres: Psicología, Bajos fondos o Embaucar.",
			  lhabilidades : [ [ "Criminología", "Manejo de archivos", "Escritura", "Escuchar", "Percibir", "Psicología" ], 
							   [ "Derecho", "Manejo de archivos", "Escritura", "Escuchar", "Percibir", "Bajos fondos" ], 
							   [ "Sociología", "Manejo de archivos", "Escritura", "Escuchar", "Percibir", "Embaucar" ] ],
			  lresto : [ "Esconder/se", "Discreción", "Armas de fuego cortas", "Conducir", "Intimidar" ],
			},
			{
			  nombre : "Profesor universitario",
			  habilidades :  "Burocracia, Ciencias naturales (al menos dos a su elección) o Ciencias sociales y humanidades (al menos dos a su elección), Idiomas (al menos uno además del nativo), Manejo de archivos, Autoridad, Oratoria.",
			  lhabilidades : [ [ "Burocracia", "Botánica", "Farmacología", "Manejo de archivos", "Psicología", "Autoridad" ], 
							   [ "Burocracia", "Historia", "Arqueología", "Manejo de archivos", "Psicología", "Autoridad" ] ],
			  lresto : [ "Idioma 2", "Oratoria", "Escuchar", "Discreción", "Intimidar" ],
			},
			{
			  nombre : "Religioso",
			  habilidades :  "Ciencias naturales (una a su elección), Ciencias ocultas, Ciencias sociales y humanidades (al menos una a su elección), Idiomas (al menos uno además del nativo), Psicología, Autoridad y Oratoria.",
			  lhabilidades : [ [ "Química", "Ciencias ocultas", "Sociología", "Idioma 2", "Psicología", "Autoridad", "Oratoria" ], 
							   [ "Botánica", "Ciencias ocultas", "Antropología", "Latín", "Psicología", "Autoridad", "Oratoria" ], 
							   [ "Farmacología", "Ciencias ocultas", "Derecho", "Idioma 2", "Psicología", "Autoridad", "Oratoria" ] ],
			  lresto : [ "Esconder/se", "Discreción", "Esquivar", "Embaucar", "Mecánica" ],
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


