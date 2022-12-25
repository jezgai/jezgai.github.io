class Especie {
	constructor(especie) {
		this._nombre = especie.nombre;
		this._requisitos = especie.requisitos;
		this._rapidez = especie.rapidez;
		this._habilidades = especie.habilidades;
		this._lhabilidades = especie.lhabilidades;
	}
	
	get nombre() {
		return this._nombre;
	}	
	set nombre(value) {
		this._nombre = value;
	}
			
	get requisitos() {
		return this._requisitos;
	}	
	set requisitos(value) {
		this._requisitos = value;
	}
	
	get rapidez() {
		return this._rapidez;
	}	
	set rapidez(value) {
		this._rapidez = value;
	}	
	
	get habilidades() {
		return this._habilidades;
	}	
	set habilidades(value) {
		this._habilidades = value;
	}	

	get lhabilidades() {
		return this._lhabilidades;
	}	
}


class Especies {
	
	constructor() {
		this._especies =
		[
			{
			  nombre : "Elfo",
			  requisitos : "Destreza 13-, Carisma 13-",
			  rapidez : "Te puedes mover hasta 35 pies (10,5 m) por asalto.",
			  habilidades: [ "<strong>Linaje feérico</strong><br/>Eres inmune a los ataques paralizantes de los necrófagos y tienes Ventaja en las tiradas para resistir el conjuro Dormir." ],
			  lhabilidades: [ "Linaje feérico, " ],
			},
			{
			  nombre : "Enano",
			  requisitos : "Constitución 13-",
			  rapidez : "Te puedes mover 25 pies (7,5 m) por asalto.",
			  habilidades: [ "<strong>Visión en la oscuridad</strong><br/>Tu especie tiene costumbre de vivir bajo tierra, por lo que ha desarrollado la capacidad de ver en la oscuridad no mágica.", "<strong>Corpulencia</strong><br/>Eres muy resistente. Siempre que quieras puedes emplear un punto de energía para repetir una tirada de Absorción." ],
			  lhabilidades: [ "Visión en la oscuridad, Corpulencia, " ],
			},
			{
			  nombre : "Gatónido",
			  requisitos : "Destreza 13-",
			  rapidez : "Te puedes mover hasta 35 pies (10,5 m) por asalto.",
			  habilidades: [ "<strong>Visión en la oscuridad</strong><br/>Tu especie proviene de túneles bajo tierra, por lo que ha desarrollado la capacidad de ver en la oscuridad no mágica.", 
							 "<strong>Baja estatura</strong><br/>Tu tamaño es más pequeño que lo habitual, por lo que tienes dificultades para usar armas y armaduras comunes." ],
			  lhabilidades: [ "Visión en la oscuridad, Baja estatura, " ],
			},
			{
			  nombre : "Gnomo",
			  requisitos : "Inteligencia 13-",
			  rapidez : "Te puedes mover 25 pies (7,5 m) por asalto.",
			  habilidades: [ "<strong>Visión en la oscuridad</strong><br/>Tu especie proviene de túneles bajo tierra, por lo que ha desarrollado la capacidad de ver en la oscuridad no mágica.", "<strong>Baja estatura</strong><br/>Tu tamaño es más pequeño que lo habitual, por lo que tienes dificultades para usar armas y armaduras comunes.", "<strong>Fuente de maná</strong><br/>Si eres capaz de lanzar conjuros preparándolos, puedes gastar un punto de energía durante un Intervalo para cambiar un conjuro preparado por otro de tu lista de conjuros conocidos." ],
			  lhabilidades: [ "Visión en la oscuridad, Baja estatura, Fuente de maná, " ],
			},
			{
			  nombre : "Humano",
			  requisitos : "Ninguno",
			  rapidez : "Te puedes mover hasta 35 pies (10,5 m) por asalto.",
			  habilidades: [ "<strong>Buen desarrollo</strong><br/>Puedes reducir en un punto una de tus Características (después de generarlas) en el momento de la Creación de personaje." ],
			  lhabilidades: [ "Buen desarrollo, " ],
			},
			{
			  nombre : "Mediano",
			  requisitos : "Ninguno",
			  rapidez : "Te puedes mover 25 pies (7,5 m) por asalto.",
			  habilidades: [ "<strong>Baja estatura</strong><br/>Tu tamaño es más pequeño que lo habitual, por lo que tienes dificultades para usar armas y armaduras comunes.", "<strong>Buena suerte</strong><br/>Gracias a tu buena fortuna, cuando al realizar una tirada de característica obtienes un 1, puedes repetir dicha tirada, pero debes quedarte con el nuevo resultado —aunque sea otra vez un 1—." ],
			  lhabilidades: [ "Baja estatura, Buena suerte, " ],
			},
			{
			  nombre : "Orco",
			  requisitos : "Fuerza 13-",
			  rapidez : "Te puedes mover hasta 35 pies (10,5 m) por asalto.",
			  habilidades: [ "<strong>Ira interna</strong><br/>Tu cólera desatada te permite seguir combatiendo aunque tu cuerpo haya sido derrotado. Si tus puntos de salud son reducidos a 0, puedes gastar un punto de energía para ajustarlos a 1 y seguir luchando.", "<strong>Furia orca</strong><br/>Cuando causas daño con un arma cuerpo a cuerpo, obtienes +1 a la tirada de daño." ],
			  lhabilidades: [ "Ira interna, Furia orca, " ],
			},
			{
			  nombre : "Semielfo",
			  requisitos : "Carisma 13-",
			  rapidez : "Te puedes mover hasta 35 pies (10,5 m) por asalto.",
			  habilidades: [ "<strong>Ánimo</strong><br/>Tu personalidad es más alegre que el resto de tus compañeros. Fuera del combate, si un aliado que esté en un radio de 30 pies (9 m) de ti realiza una tirada de característica, puedes gastar un punto de energía para otorgar +2 al resultado.<br/>Debe ser capaz de escucharte y debes declarar el uso de esta habilidad antes de que tire el dado.", "<strong>Herencia dual</strong><br/>Elige entre Linaje feérico o Buen desarrollo<ul><li><strong>Linaje feérico</strong>. Eres inmune a los ataques paralizantes de los necrófagos y tienes Ventaja en las tiradas para resistir el conjuro Dormir.</li><li><strong>Buen desarrollo</strong>. Puedes reducir en un punto una de tus Características (después de generarlas) en el momento de la Creación de personaje.</li></ul>" ],
			  lhabilidades: [ "Ánimo, Herencia dual, " ],
			},
			{
			  nombre : "Semiorco",
			  requisitos : "Fuerza 13-, Destreza 13-",
			  rapidez : "Te puedes mover hasta 35 pies (10,5 m) por asalto.",
			  habilidades: [ "<strong>Sed de sangre</strong><br/>Antes de realizar un ataque cuerpo a cuerpo puedes declarar que atacas brutalmente, recibiendo un -2 al resultado de la tirada de ataque y +1 a la Efectividad del arma.", "<strong>Herencia dual</strong><br/>Elige entre Ira interna o Buen desarrollo<ul><li><strong>Ira interna</strong>. Tu cólera desatada te permite seguir combatiendo aunque tu cuerpo haya sido derrotado. Si tus puntos de salud son reducidos a 0, puedes gastar un punto de energía para ajustarlos a 1 y seguir luchando.</li><li><strong>Buen desarrollo</strong>. Puedes reducir en un punto una de tus Características (después de generarlas) en el momento de la Creación de personaje.</li></ul>" ],
			  lhabilidades: [ "Sed de sangre, Herencia dual, " ],
			},
		]
	}
	
	get especies() {
		return this._especies;
	}

	set especies(value) {
		this._especies = value;
	}
	
	especie(nombre) {
		var iespecies=0;
		for (iespecies=0; iespecies<this._especies.length; iespecies++) {
			if ( this._especies[iespecies].nombre == nombre ) {
				return new Especie(this._especies[iespecies]);
			}
		}
		return new Especie(this._especies[Comun.random(this._especies.length, 0)]);
	}
}


