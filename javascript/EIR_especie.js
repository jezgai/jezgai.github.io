class Especie {
	constructor(especie) {
		this._nombre = especie.nombre;
		this._descripcion = especie.descripcion;
		this._claves = especie.claves;
		this._idiomas = especie.idiomas;
        this._movimiento = especie.movimiento;
		this._talentos = especie.talentos;
		this._ltalentos = especie.ltalentos;
		this._clases = especie.clases;
	}
	
	get nombre() {
		return this._nombre;
	}	
	set nombre(value) {
		this._nombre = value;
	}
		
	get descripcion() {
		return this._descripcion;
	}	
	set descripcion(value) {
		this._descripcion = value;
	}
		
	get claves() {
		return this._claves;
	}	
	set claves(value) {
		this._claves = value;
	}
	
			
	get idiomas() {
		return this._idiomas;
	}	
	set idiomas(value) {
		this._idiomas = value;
	}

	get movimiento() {
		return this._movimiento;
	}	
	set movimiento(value) {
		this._movimiento = value;
	}	
	
}


class Especies {
	
	constructor() {
		this.especies =
		[
			{
			  nombre : "Alto Elfo",
			  descripcion : "",
			  claves : [ "[Elfo]", "[Feérico]", "[Medio]" ],
              idiomas: [ "Seldein", "Común" ],
			  movimiento : "12",
			  talentos: [ "<strong>Afinidad Arcana</strong><br/>Suma tu nivel a tu poder máximo", "<strong>Sentidos Agudizados</strong><br/>Ventaja en pruebas de Sabiduría que impliquen oído o vista" ],
			  ltalentos: [ "Afinidad Arcana", "Sentidos Agudizados" ],
			  clases: [ "Bardo", "Clérigo", "Guardián Arcano", "Hechicero", "Duelista", "Doncella de Laenia", "Sacerdote" ],
			},
			{
			  nombre : "Elfo de los Bosques",
			  descripcion : "",
			  claves : [ "[Elfo]", "[Feérico]", "[Medio]" ],
              idiomas: [ "Seldein", "Común" ],
			  movimiento : "14",
			  talentos: [ "<strong>Sentidos Agudizados</strong><br/>Ventaja en pruebas de Sabiduría que impliquen oído o vista", "<strong>Soñador</strong><br/>Tu descanso dura 4 horas y puedes descansar una vez cada 12 horas" ],
			  ltalentos: [ "Sentidos Agudizados", "Soñador" ],
			  clases: [ "Bardo", "Druida", "Explorador", "Hoja de Otoño", "Señor de las Bestias" ],
			},
			{
			  nombre : "Enano",
			  descripcion : "",
			  claves : [ "[Enano]", "[Humanoide]", "[Medio]" ],
              idiomas: [ "Khozled", "Común" ],
			  movimiento : "10",
			  talentos: [ "<strong>Resistencia Natural</strong><br/>Ventaja en pruebas de salvación de Fortaleza para evitar venenos y resistencia al daño de veneno.", 
							"<strong>Visión en la oscuridad</strong><br/>Ves en la oscuridad a 24 metros de distancia" ],
			  ltalentos: [ "Resistencia Natural", "Visión en la oscuridad" ],
			  clases: [ "Clérigo", "Guerrero", "Irredento", "Pionero", "Defensor" ],
			},
			{
			  nombre : "Ervo",
			  descripcion : "Humanoides con rasgos de ciervo. Desconfiados y amantes de la Naturaleza.",
			  claves : [ "[Ervo]", "[Humanoide]", "[Medio]" ],
              idiomas: [ "Seldein", "Común" ],
			  movimiento : "12",
			  talentos: [ "<strong>Cornada</strong><br/>Puede usar los cuernos como arma con daño 1d8 perforante [P] con clave [Ligera]", 
							"<strong>Don de Eir</strong><br/>Usando la acción bonus y gastando 1 PE puede sanar a una criatura que toque tantos PG como 1d6 + nivel. Además usando conjuro Curar heridas sana 1d8 PG adicionales" ],
			  ltalentos: [ "Cornada", "Don de Eir" ],
			  clases: [ "Bardo", "Druida", "Explorador", "Señor de las Bestias" ],
			},
			{
			  nombre : "Humano",
			  descripcion : "",
			  claves : [ "[Humano]", "[Humanoide]", "[Medio]" ],
              idiomas: [ "Común" ],
			  movimiento : "12",
			  talentos: [ "<strong>Ambición y Progreso</strong><br/>Cada vez que subas a un nivel par añades un punto a la puntuación del atributo que escojas (máximo 20)" ],
			  ltalentos: [ "Ambición y Progreso" ],
			  clases: [ "Adalid", "Bárbaro", "Bardo", "Caído", "Cazador de demonios", "Clérigo", "Druida", "Explorador", "Guerrero", "Hechicero", "Pícaro", "Señor de las Bestias", "Vagarr", "Duelista", "Doncella de Laenia", "Defensor", "Sacerdote" ],
			},
			{
			  nombre : "Roano",
			  descripcion : "Humanoides con aspecto de ratón. Aman la vida tranquila, comer y dormir bien",
			  claves : [ "[Roano]", "[Humanoide]", "[Pequeño]" ],
              idiomas: [ "Común" ],
			  movimiento : "12",
			  talentos: [ "<strong>Rapidez</strong><br/>Ventaja en pruebas de Iniciativa",
							"<strong>Valentía</strong><br/>Ventaja en salvaciones contra efectos y conjuros que apliquen el estado [Asustado]" ],
			  ltalentos: [ "Rapidez", "Valentía" ],
			  clases: [ "Bardo", "Clérigo", "Explorador", "Guerrero", "Hechicero", "Pícaro", "Defensor" ],
			},
			{
			  nombre : "Semielfo",
			  descripcion : "",
			  claves : [ "[Semielfo]", "[Humanoide]", "[Medio]" ],
              idiomas: [ "Común" ],
			  movimiento : "12",
			  talentos: [ "<strong>Linaje Feérico</strong><br/>Ventaja en salvaciones para resistir conjuros y efectos que te intenten imponer la clave [Encantado]", 
						"<strong>Sentidos Agudizados</strong><br/>Ventaja en pruebas de Sabiduría que impliquen oído o vista" ],
			  ltalentos: [ "Linaje Feérico", "Sentidos Agudizados" ],
			  clases: [ "Adalid", "Bardo", "Caído", "Cazador de demonios", "Clérigo", "Druida", "Explorador", "Guerrero", "Hechicero", "Pícaro", "Señor de las Bestias", "Duelista", "Sacerdote" ],
			},
			{
			  nombre : "Gnomo",
			  descripcion : "",
			  claves : [ "[Gnomo]", "[Feérico]", "[Pequeño]" ],
              idiomas: [ "Gnomo", "Común" ],
			  movimiento : "9",
			  talentos: [ "<strong>Astucia de gnomo</strong><br/>Ventaja en Salvación de Voluntad contra magia", 
					"<strong>Visión en la oscuridad</strong><br/>Ves en la oscuridad a 24 metros de distancia" ],
			  ltalentos: [ "Astucia de gnomo", "Visión en la oscuridad" ],
			  clases: [ "Bardo", "Druida", "Explorador", "Hechicero", "Pícaro", "Hoja de Otoño" ],
			},
			{
			  nombre : "Goblin",
			  descripcion : "",
			  claves : [ "[Goblin]", "[Feérico]", "[Medio]" ],
              idiomas: [ "Trasgo", "Común" ],
			  movimiento : "9",
			  talentos: [ "<strong>Salvar el pellejo</strong><br/>Puedes salir del combate sin generar ataque de oportunidad o esconderte como acción adicional.", 
					"<strong>Visión en la oscuridad</strong><br/>Ves en la oscuridad a 24 metros de distancia" ],
			  ltalentos: [ "Salvar el pellejo", "Visión en la oscuridad" ],
			  clases: [ "Bardo", "Druida", "Explorador", "Hechicero", "Pícaro", "Guerrero" ],
			},
			{
			  nombre : "Halfling",
			  descripcion : "Medianos, halfling, hobbits (para ambientanciones distintas a la de Eirendor)",
			  claves : [ "[Halfling]", "[Humanoide]", "[Pequeño]" ],
              idiomas: [ "Halfling", "Común" ],
			  movimiento : "10",
			  talentos: [ "<strong>Certero</strong><br/>Tienes un +1 en todos los ataques de proyectiles", "<strong>Escurridizo</strong><br/>Ventaja en todas las pruebas relacionadas con moverse en silencio" ],
			  ltalentos: [ "Certero", "Escurridizo" ],
			  clases: [ "Adalid", "Bardo", "Clérigo", "Druida", "Explorador", "Guerrero", "Hechicero", "Pícaro", "Señor de las Bestias" ],
			},
			{
			  nombre : "Sylvari",
			  descripcion : "Seres feéricos ligados intimamente a los árboles. En lugar de sangre tienen savia",
			  claves : [ "[Sylvari]", "[Feérico]", "[Medio]" ],
              idiomas: [ "Seldeín", "Común" ],
			  movimiento : "14",
			  talentos: [ "<strong>Forma arbórea</strong><br/>Cualquier tirada para sorprenderte en un bosque recibirá desventaja y tú obtendrás ventaja en tu prueba de Sabiduría. Eres vulnerable al daño fuego [F]",
						"<strong>Forma arbórea</strong><br/>Una vez por día y gastando un PE, puedes fundirte con un árbol, formando parte de su tronco durante 1 hora siendo indistinguible, o puedes aumentar de tamaño y conseguir más dureza durante dos asaltos, obteniendo resistencia al daño contundente [G] y perforante [P], ganando la clave [Grande] y obteniendo ventaja en las pruebas de Fuerza. Después de esta transformación, ganas un nivel de agotamiento." ],
			  ltalentos: [ "Forma arbórea", "Forma arbórea" ],
			  clases: [ "Bardo", "Druida", "Explorador", "Señor de las Bestias" ],
			},
			{
			  nombre : "Semiorco",
			  descripcion : "Mestizos de humano y orco. ",
			  claves : [ "[Semiorco]", "[Humanoide]", "[Medio]" ],
              idiomas: [ "Orco", "Común" ],
			  movimiento : "12",
			  talentos: [ "<strong>Ataques salvajes</strong><br/>Cuando saques un crítico con un arma cuerpo a cuerpo puedes repetir uno de los dados de daño del arma y sumarlo al daño adicional del crítico", 
							"<strong>Visión en la oscuridad</strong><br/>Ves en la oscuridad a 24 metros de distancia" ],
			  ltalentos: [ "Ataques salvajes", "Visión en la oscuridad" ],
			  clases: [ "Bárbaro", "Bardo", "Caído", "Cazador de demonios", "Clérigo", "Druida", "Explorador", "Guerrero", "Hechicero", "Pícaro" ],
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
