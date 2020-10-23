class Clase extends ClaseBase {
	constructor(clase) {
		super(clase);
	}
}


class Clases extends ClasesBases {
	
	constructor() {
		super();
		
		var _especies =
		[
			{
			  nombre : "Elfo",
			  energia : 2,
			  salud : 6,
			  atributo: [ "DES", "INT", "CAR" ],
			  competencias: [ "Puedes llevar todas las armas, armaduras y escudos que existen." ],
			  ventajas: [ "<strong>Tiradas de Inteligencia</strong> para detectar puertas secretas.", "<strong>Tiradas de Carisma</strong> para resistir el encantamiento.", "<strong>Tiradas de Forrajeo</strong> en las Tierras Salvajes." ],
			  habilidades: [ "<strong>Linaje feérico</strong><br/>Eres inmune a los ataques paralizantes de los necrófagos. El resto de tipos de parálisis te afectan con normalidad.", "<strong>Lanzamiento de conjuros</strong><br/>También puedes lanzar conjuros. En la tabla de la página siguiente puedes encontrar el número de conjuros que eres capaz de memorizar cada día.<br/>Las reglas que deben seguirse para aprender y lanzar conjuros están descritas en la página 69 (57 ed. básica).", "<strong>Magia apresurada</strong><br/>Además, cuando realizas un ataque puedes gastar un punto de energía para lanzar al mismo tiempo un conjuro cuyo tiempo de lanzamiento sea de un asalto." ],
			  lhabilidades: [ "Linaje feérico, Lanzamiento de conjuros, Magia apresurada" ],
			  cordura: "INT",
			  origen: "Dungeon Hack", 
			  descripcion: "",
			  nombresF: [ "Elfa" ],
			  nombresM: [ "Elfo" ],
			},
			{
			  nombre : "Enano",
			  energia : 3,
			  salud : 10,
			  atributo: [ "FUE", "CON" ],
			  competencias: [ "Puedes llevar todas las armas, armaduras y escudos que existen." ],
			  ventajas: [ "<strong>Tiradas de Constitución</strong> para evitar el daño causado por el veneno.", "<strong>Tiradas de Inteligencia</strong> para encontrar trampas y para evitar el daño de conjuros y otros efectos mágicos." ],
			  habilidades: [ "<strong>Visión en la oscuridad</strong><br/>Tu especie tiene costumbre de vivir bajo tierra, por lo que ha desarrollado la capacidad de ver en la oscuridad no mágica.", "<strong>Nacidos de la piedra</strong><br/>Obtienes +1 a la efectividad de cualquier armadura hecha de metal que portes. Además, siempre que quieras puedes emplear un punto de energía para repetir una tirada de Absorción.", "<strong>Determinación</strong><br/>Cuando luchas, eres imparable, y transmites esa sensación a tus enemigos. Todas las criaturas que hayan probado tu acero obtienen un -1 a su puntuación de Moral durante el resto del combate." ],
			  lhabilidades: [ "Visión en la oscuridad, Nacidos de la piedra, Determinación" ],
			  cordura: "SAB",
			  origen: "Dungeon Hack", 
			  descripcion: "",
			  nombresF: [ "Enana" ],
			  nombresM: [ "Enano" ],
			},
			{
			  nombre : "Gnomo",
			  energia : 2,
			  salud : 6,
			  atributo: [ "CON", "INT" ],
			  competencias: [ "Puedes llevar cualquier arma a una mano, arcos cortos, ballestas de mano, ballestas ligeras, cerbatanas y hondas (adaptados a tu tamaño), y armaduras acolchadas, de cuero, de pieles y de cuero tachonado. También puedes portar un escudo pequeño." ],
			  ventajas: [ "<strong>Tiradas de Destreza</strong> para activar o reparar aparatos y mecanismos complejos.", "<strong>Tiradas de Inteligencia</strong> para descifrar enigmas o comprender el funcionamiento de máquinas." ],
			  habilidades: [ "<strong>Visión en la oscuridad</strong><br/>Tu especie proviene de túneles bajo tierra, por lo que ha desarrollado la capacidad de ver en la oscuridad no mágica.", "<strong>Lanzamiento de conjuros</strong><br/>También puedes lanzar conjuros. En la tabla de la página siguiente puedes encontrar el número de conjuros que eres capaz de memorizar cada día.<br/>Las reglas que deben seguirse para aprender y lanzar conjuros están descritas en la página 69 del manual de Dungeon Hack (57 de la básica).", "<strong>Fuente de maná</strong><br/>Posees una pequeña reserva mágica en tu sangre, que te permite extraer energías arcanas en momentos de extrema necesidad. En cualquier momento durante el día, puedes gastar 1 punto de Energía para concentrarte durante un Intervalo y cambiar uno de tus conjuros memorizados por otro del mismo nivel que no hayas memorizado." ],
			  lhabilidades: [ "Visión en la oscuridad, Lanzamiento de conjuros, Fuente de maná" ],
			  cordura: "INT",
			  origen: "<a href='https://naufragio.net/dungeon-hack/' target='_blank'>El Naufragio</a>",
			  descripcion: "",
			  nombresF: [ "Gnoma" ],
			  nombresM: [ "Gnomo" ],
			},
			{
			  nombre : "Mediano",
			  energia : 3,
			  salud : 6,
			  atributo: [ "FUE", "DES", "SAB" ],
			  competencias: [ "Puedes utilizar cualquier arma no más grande que una espada corta, escudos pequeños y cualquier armadura creada expresamente para seres del tamaño de un mediano —¡Incluso las armaduras para enanos son demasiado grandes!—" ],
			  ventajas: [ "<strong>Tiradas de Destreza</strong> para esconderse, para ocultarte en las tinieblas, para escaparte y para evitar un ataque cuerpo a cuerpo de un enemigo de igual o mayor tamaño que un ser humano ordinario.", "<strong>Tiradas de Pesca</strong> en las Tierras Salvajes" ],
			  habilidades: [ "<strong>Buena fortuna</strong><br/>Gracias a tu buena fortuna, cuando al realizar una tirada de característica obtienes un 1, puedes repetir dicha tirada, pero debes quedarte con el nuevo resultado —aunque sea otra vez un 1—.", "<strong>En el último momento</strong><br/>Cuando vas a sufrir las consecuencias de una trampa o dispositivo mágico, puedes gastar un punto de energía para evitarlas, aunque ya hayas fallado la tirada." ],
			  lhabilidades: [ "Buena fortuna, En el último momento" ],
			  cordura: "CAR",
			  origen: "Dungeon Hack", 
			  descripcion: "",
			  nombresF: [ "Mediana" ],
			  nombresM: [ "Mediano" ],
			},
			{
			  nombre : "Orco",
			  energia : 3,
			  salud : 8,
			  atributo: [ "FUE", "DES", "CON" ],
			  competencias: [ "Puedes llevar todas las armas, armaduras y escudos que existen." ],
			  ventajas: [ "<strong>Tiradas de Fuerza</strong> para derribar puertas, mover objetos pesados o levantar grandes pesos.", "<strong>Tiradas de Caza</strong> en las Tierras Salvajes." ],
			  habilidades: [ "<strong>Grito de guerra</strong><br/>Al comenzar un combate —si no has sido sorprendido— puedes gastar un punto de energía para bramar un colérico aullido de guerra que otorga +1 a la Iniciativa de tu equipo. Debes indicar al Árbitro que vas a utilizar esta habilidad antes de que se realice la tirada, ya que tu aullido resonará por todo el lugar.<br/>La bonificación a la Iniciativa aumenta en +1 al alcanzar los niveles undécimo, vigésimo primero y trigésimo primero, hasta un total de +4.", "<strong>Sed de sangre</strong><br/>Cuando entras en combate, te pones muy furioso hasta tal punto que, si causas daño a un enemigo que ya te ha herido en ese encuentro, le haces 2 puntos de daño adicionales.<br/>El daño adicional aumenta en 2 puntos al alcanzar los niveles undécimo, vigésimo primero y trigésimo primero, hasta un total de +8.", "<strong>Ira interna</strong><br/>Una vez al día, si tus puntos de salud son reducidos a 0 o menos mientras estás en combate, puedes hacer una tirada de Constitución; si la superas, tus puntos de salud se ajustan a 0 (en caso de que hubiesen quedado en negativo) y recuperas de forma inmediata 1d4 puntos de salud para seguir combatiendo. Si gastas un punto de energía, puedes hacer la tirada con Ventaja.<br/>Debes descansar adecuadamente antes de poder volver a usar esta habilidad." ],
			  lhabilidades: [ "Grito de guerra, Sed de sangre, Ira interna" ],
			  cordura: "SAB",
			  origen: "<a href='https://naufragio.net/dungeon-hack/' target='_blank'>El Naufragio</a>",
			  descripcion: "",
			  nombresF: [ "Orca" ],
			  nombresM: [ "Orco" ],
			},
		]
		
		var iespecies = 0;
		
		for (iespecies=0; iespecies<_especies.length; iespecies++) {
			this._clases.push(_especies[iespecies]);
		}
	}
	/*
	get clases() {
		return this._clases;
	}

	set clases(value) {
		this._clases = value;
	}*/
	
	clase(nombre) {
		var iclases=0;
		for (iclases=0; iclases<this._clases.length; iclases++) {
			if ( this._clases[iclases].nombre == nombre ) {
				return new Clase(this._clases[iclases]);
			}
		}
		return new Clase(this._clases[Comun.random(this._clases.length, 0)]);
	}
}


