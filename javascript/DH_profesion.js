class Profesion {
	constructor(profesion) {
		this._nombre = profesion.nombre;
		this._precio = profesion.precio;
		this._salud = profesion.salud;
		this._moral = profesion.moral;
		this._ataque = profesion.ataque;
		this._defensa = profesion.defensa;
		this._aventura = profesion.aventura;
		this._habilidades = profesion.habilidades;
	}
	
		
	get nombre() {
		return this._nombre;
	}	
	set nombre(value) {
		this._nombre = value;
	}
			
	get precio() {
		return this._precio;
	}	
	set precio(value) {
		this._precio = value;
	}
	
	get salud() {
		return this._salud;
	}	
	set salud(value) {
		this._salud = value;
	}	
	

	set aventura(value) {
		this._aventura = value;
	}
	get aventura() {
		return this._aventura;
	}
	
	set moral(value) {
		this._moral = value;
	}
	get moral() {
		return this._moral;
	}	
		
	get habilidades() {
		return this._habilidades;
	}
	
	get habilidad() {
		if ( this._habilidades.length == 0 ) {
			return null;
		}
		var _habilidades_aux = this._habilidades;
		if ( this._habilidades.length > 1 ) {
			_habilidades_aux = Comun.shuffle(this._habilidades);
		}
		return _habilidades_aux[0];
	}
	
}


class Profesiones {
	
	constructor() {
		this._profesiones =
		[
			{
			  nombre : "Abogado",
			  precio : "10 mo",
			  salud : 6,
			  moral: 8,
			  ataque: +3,
			  defensa: +2,
			  aventura: "No",
			  habilidades: [ ],
			},
			{
			  nombre : "Arcanista",
			  precio : "20 mo",
			  salud : 4,
			  moral: 6,
			  ataque: +2,
			  defensa: +1,
			  aventura: "Sí",
			  habilidades: [ { nombre: "Lanzamiento de conjuros", descripcion: "El seguidor es capaz de lanzar conjuros según su nivel; no necesita preparar los conjuros: puede lanzar tantos Conjuros al día como su Nivel, pero no es capaz de lanzar Conjuros de Nivel 4 o superior." } ],
			},
			{
			  nombre : "Arquitecto",
			  precio : "4 mo",
			  salud : 4,
			  moral: 7,
			  ataque: +2,
			  defensa: +3,
			  aventura: "No",
			  habilidades: [ ],
			  lhabilidades: [ "" ],
			},
			{
			  nombre : "Artesano",
			  precio : "1 mo",
			  salud : 4,
			  moral: 6,
			  ataque: +2,
			  defensa: +2,
			  aventura: "No",
			  habilidades: [ ],
			  lhabilidades: [ "" ],
			},
			{
			  nombre : "Cartógrafo",
			  precio : "5 mo",
			  salud : 4,
			  moral: 7,
			  ataque: +2,
			  defensa: +3,
			  aventura: "Sí",
			  habilidades: [ ],
			},
			{
			  nombre : "Cazador",
			  precio : "2 mo",
			  salud : 8,
			  moral: 9,
			  ataque: +0,
			  defensa: +2,
			  aventura: "Sí",
			  habilidades: [ { nombre: "Talento para la caza", descripcion: "El seguidor otorga Ventaja a la primera tirada de Caza u Orientación en las Tierras Salvajes que se realice cuando él está acompañando al grupo." } ],
			},
			{
			  nombre : "Cocinero",
			  precio : "6 mc",
			  salud : 4,
			  moral: 6,
			  ataque: +3,
			  defensa: +3,
			  aventura: "No",
			  habilidades: [ ],
			},
			{
			  nombre : "Enterrador",
			  precio : "9 mp",
			  salud : 6,
			  moral: 9,
			  ataque: +1,
			  defensa: +3,
			  aventura: "No",
			  habilidades: [ ],
			},
			{
			  nombre : "Escriba",
			  precio : "1 mo",
			  salud : 4,
			  moral: 6,
			  ataque: +3,
			  defensa: +3,
			  aventura: "Sí",
			  habilidades: [ ],
			},
			{
			  nombre : "Escudero",
			  precio : "1 mp",
			  salud : 6,
			  moral: 7,
			  ataque: +2,
			  defensa: +2,
			  aventura: "Sí",
			  habilidades: [ { nombre: "Defensor", descripcion: "El seguidor puede usar su acción para otorgar Ventaja a la próxima tirada de esquivar de uno de sus empleadores. Puede usar esta habilidad una vez por combate. " } ],
			},
			{
			  nombre : "Guardia",
			  precio : "2 mo",
			  salud : 8,
			  moral: 9,
			  ataque: 0,
			  defensa: -2,
			  aventura: "Sí",
			  habilidades: [ { nombre: "Aura de defensa", descripcion: "El seguidor desprende un aura protectora que aumenta las capacidades defensivas de sus aliados cercanos. Cada criatura que sea considerada un aliado por el seguidor, en un radio de 10 pies (3 metros) a su alrededor, obtiene +1 a sus tiradas de reacción para esquivar ataques cuerpo a cuerpo." },
							 { nombre: "Defensor", descripcion: "El seguidor puede usar su acción para otorgar Ventaja a la próxima tirada de esquivar de uno de sus empleadores. Puede usar esta habilidad una vez por combate. " } ],
			},
			{
			  nombre : "Jornalero",
			  precio : "5 mp",
			  salud : 4,
			  moral: 6,
			  ataque: +2,
			  defensa: +3,
			  aventura: "No",
			  habilidades: [ ],
			},
			{
			  nombre : "Ladrón",
			  precio : "1 mo",
			  salud : 4,
			  moral: 7,
			  ataque: -1,
			  defensa: 0,
			  aventura: "Sí",
			  habilidades: [ ],
			},
			{
			  nombre : "Mensajero",
			  precio : "5 mo",
			  salud : 4,
			  moral: 8,
			  ataque: +2,
			  defensa: +2,
			  aventura: "Sí",
			  habilidades: [ ],
			},
			{
			  nombre : "Mercenario",
			  precio : "5 mo",
			  salud : 8,
			  moral: 9,
			  ataque: -2,
			  defensa: 0,
			  aventura: "Sí",
			  habilidades: [ { nombre: "Aura de ataque", descripcion: "El seguidor desprende un aura combativa que aumenta las capacidades bélicas de sus aliados cercanos. Cada criatura que sea considerada un aliado por el seguidor, en un radio de 10 pies (3 metros) a su alrededor, obtiene +1 a sus tiradas de ataque cuerpo a cuerpo." },
							 { nombre: "Hendedura", descripcion: "Si el seguidor acaba con un enemigo utilizando sus ataques físicos cuerpo a cuerpo, puede realizar una nueva tirada de ataque contra otro enemigo que esté al alcance. Esta habilidad sólo se puede usar una vez por asalto." } ],
			},
			{
			  nombre : "Portantorchas",
			  precio : "8 mc",
			  salud : 4,
			  moral: 6,
			  ataque: +3,
			  defensa: +3,
			  aventura: "Sí",
			  habilidades: [ ],
			},
			{
			  nombre : "Porteador",
			  precio : "7 mp",
			  salud : 6,
			  moral: 7,
			  ataque: +3,
			  defensa: +3,
			  aventura: "Sí",
			  habilidades: [ { nombre: "Mula de carga", descripcion: "El seguidor puede llevar 12 objetos de tamaño normal encima con facilidad." } ],
			  
			},
			{
			  nombre : "Profesor",
			  precio : "1 mo",
			  salud : 4,
			  moral: 8,
			  ataque: +3,
			  defensa: +2,
			  aventura: "No",
			  habilidades: [ ],
			},
			{
			  nombre : "Sacerdote",
			  precio : "3 mo",
			  salud : 4,
			  moral: 10,
			  ataque: +3,
			  defensa: +3,
			  aventura: "No",
			  habilidades: [ { nombre: "Lanzamiento de conjuros", descripcion: "El seguidor es capaz de lanzar conjuros según su nivel; no necesita preparar los conjuros: puede lanzar tantos Conjuros al día como su Nivel, pero no es capaz de lanzar Conjuros de Nivel 4 o superior." } ],
			},
			{
			  nombre : "Sanador",
			  precio : "10 mo",
			  salud : 4,
			  moral: 9,
			  ataque: +2,
			  defensa: -1,
			  aventura: "Sí",
			  habilidades: [ { nombre: "Cuidados médicos", descripcion: "El seguidor puede utilizar ungüentos, pócimas, vendas y demás enseres médicos para proporcionar algo de sanación natural una vez al día por paciente. El herido recupera 1d6 puntos de Salud tras descansar un Intervalo." } ],
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
		var iprofesion=0;
		for (iprofesion=0; iprofesion<this._profesiones.length; iprofesion++) {
			if ( this._profesiones[iprofesion].nombre == nombre ) {
				return new Profesion(this._profesiones[iprofesion]);
			}
		}
		return new Profesion(this._profesiones[Comun.random(this._profesiones.length, 0)]);
	}
	
	
	static desplegableProfesiones(aProfesiones, nbFuncSel) {
		
		var sprofesiones=" <strong>Profesion:</strong> <select class='w3-select'  name='profesion' onchange='" + nbFuncSel + "(this)'><option>--Aleatorio--</option>";
		var iprofesion=0;
		for (iprofesion=0; iprofesion< aProfesiones.profesiones.length; iprofesion++) {
			sprofesiones += "<option>" + aProfesiones.profesiones[iprofesion].nombre + "</option>";
		}
		sprofesiones += "</select>";
		return sprofesiones;
	}
}


