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
			  descripcion: "Has nacido de la magia, la herencia del mundo de las fatas. Tienes una especial conexión con la naturaleza y con los sentimientos —el amor, la empatía,los celos, etc.— y la creatividad.<br/>" +
			"El pueblo élfico suele vivir en bosques y lugares tan lejanos como salvajes, apartados del bullicio de las ciudades humanas y los complejos enanos.<br/>" +
			"Tampoco es extraño encontrar algunos de los tuyos en los caminos, viajando y disfrutando de la vida y de las historias de las diferentes regiones.",
			  nombresF: [ "Ariawyn", "Dymphna", "Lierin", "Neasa", "Salanna", "Shearah", "Viessa" ],
			  nombresM: [ "Aidan", "Elduin", "Felaern", "Iefyr", "Gaeleath", "Mhaenil", "Virion" ],
			  magia: { numero: 0, conjuros: [ "Atraer muertos vivientes", "Bendición", "Curar heridas", "Detectar el Mal", "Orden", "Protección contra el Mal", "Purificar sustento", "Santuario", "Valentía" ] },
			  equipo: { narmasAD: 1, armasAD: [ "Arco largo", "Arco corto" ], 
						narmasCaC: 2, armasCaC: [ "Espada larga", "Espada corta", "Espada ropera", "Jabalina" ], 
						escudo: [ "Escudo pequeño", "Escudo mediano", "Escudo grande" ],
						armadura: [ "Acolchada", "Cuero", "Cuero tachonado" ],
						paquete: "Paquete de exploración", },
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
			  descripcion: "Perteneces a la orgullosa especie de los enanos.<br/>" +
					"Procedes de una abrupta región donde los tuyos construyen enormes y gloriosas ciudades subterráneas y las llenan de riquezas y tesoros inimaginables.<br/>" + 
					"A tu gente se le da especialmente bien crear herramientas, forjar armas y diseñar grandes estructuras. Por desgracia, ninguno de los tuyos es capaz de utilizar siquiera un ápice de magia.",
			  nombresF: [ "Anniken", "Burmaline", "Erna", "Gina", "Sif", "Tanja", "Udwada" ],
			  nombresM: [ "Dumli", "Godrig", "Helgig", "Joldurn", "Karnun", "Orrin", "Thedel" ],
			  magia: { numero:-1, conjuros: [] },
			  equipo: { narmasAD: 1, armasAD: [ "Ballesta ligera", "Ballesta de mano" ], 
						narmasCaC: 2, armasCaC: [ "Hacha de batalla", "Hacha de mano", "Martillo de guerra", "Gran hacha", "Martillo ligero" ], 
						escudo: [ "Escudo pequeño", "Escudo mediano", "Escudo grande" ],
						armadura: [ "Acolchada", "Cuero", "Cuero tachonado", "Cota de anillas", "Camisote de mallas", "Cota de escamas", "Coraza" ],
						paquete: "Paquete de mazmorras", },
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
			  origen: "<a href='https://naufragio.net/gnomo-para-dungeon-hack/' target='_blank'>El Naufragio</a>",
			  descripcion: "Eres un pequeño ser que comparte origen común con los enanos, pero tu excéntrica forma de ser dista mucho de su hosca actitud. No superas el metro quince de altura, y aunque esto pueda ser un impedimento en la sociedad humana, tu pueblo vive en hogares adaptados a vuestro tamaño.<br/>" +
					"Has sido dotado con el don de la excesiva creatividad y pasas la vida en busca del invento perfecto. Y, cuando logras crear tan insólito artefacto, no te conformas y sigues buscando.<br/>" +
					"Tu sociedad valora el intelecto y el talento por encima de todo, y los que no se hacen valer son exiliados. Quizás debes demostrar tu habilidad a tu pueblo, o no respetas la meritocracia que rige tu hogar. De un modo u otro, te has aventurado lejos de tu tierra natal en busca de algo que estimule tu imaginación.",
			  nombresF: [ "Clothos", "Deina", "Lakhesis", "Nortalis", "Trix", "Wilga" ],
			  nombresM: [ "Aldorian", "Blanbanter", "Coridhrius", "Excelsus", "Morix", "Zander" ],
			  magia: { numero:-1, conjuros: [] },
			  equipo: { narmasAD: 1, armasAD: [ "Arco corto", "Ballesta de mano", "Ballesta ligera", "Cerbatana", "Honda" ], 
						narmasCaC: 1, armasCaC: [ "Daga", "Espada corta", "Hacha de mano" ], 
						escudo: [ "Escudo pequeño" ],
						armadura: [ "Acolchada", "Cuero", "Piel", "Cuero tachonado" ],
						paquete: "Paquete de exploración", },
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
			  descripcion: "Eres un pequeño humanoide de aspecto similar al de un niño humano con orejas ligeramente puntiagudas.<br/>" +
					"Buscas tesoros para conseguir un hogar donde vivir tranquila y confortablemente el resto de tu vida.<br/>" +
					"Cuando no vas de aventuras, sueles reunirte con tus familiares en poblaciones rurales para disfrutar de sabrosa comida, buena bebida y charlas interesantes.",
			  nombresF: [ "Celesta", "Cercis", "Lavenda", "Lubelia", "Pimpernel", "Rosa", "Zinnia" ],
			  nombresM: [ "Abbo", "Buengo", "Drogo", "Poppo", "Remi", "Sago", "Turbin" ],
			  magia: { numero:-1, conjuros: [] },
			  equipo: { narmasAD: 1, armasAD: [ "Arco corto", "Cerbatana", "Honda", "Ballesta de mano" ], 
						narmasCaC: 1, armasCaC: [ "Daga", "Espada corta", "Hacha de mano" ], 
						escudo: [ "Escudo pequeño" ],
						armadura: [ "Acolchada", "Cuero", "Cuero tachonado" ],
						paquete: "Paquete del ladrón", },
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
			  origen: "<a href='https://naufragio.net/orco-para-dungeon-hack/' target='_blank'>El Naufragio</a>",
			  descripcion: "Formas parte de una tribu de humanoides de piel verde, de costumbres tribales y barbáricas, que despierta el desagrado de otras especies civilizadas.<br/>" +
				"Tu pueblo se rige por la ley del más fuerte, y quizás por eso abandonaste tu región natal. No congeniabas con otros miembros de tu clan, o tus actos fueron lo suficientemente vergonzosos como para ser exiliado.<br/>" +
				"De una forma u otra, ahora debes encontrar tu lugar en el mundo, a pesar de la creencia de que los tuyos sois malignos por naturaleza.",
			  nombresF: [ "Aggra", "Bathsheba", "Ekra", "Gorganda", "Stuka", "Uloth" ],
			  nombresM: [ "Durog", "Fauth", "Kurst", "Murnof", "Ostam", "Worver" ],
			  magia: { numero:-1, conjuros: [] },
			  equipo: { narmasAD: 1, armasAD: [ "Arco corto", "Ballesta ligera", "Ballesta pesada" ], 
						narmasCaC: 2, armasCaC: [ "Hacha de batalla", "Hacha de mano", "Martillo de guerra", "Gran hacha", "Martillo ligero", "Cimitarra", "Espada corta" ], 
						escudo: [ "Escudo pequeño", "Escudo mediano", "Escudo grande" ],
						armadura: [ "Acolchada", "Cuero", "Cuero tachonado", "Cota de anillas", "Camisote de mallas", "Cota de escamas", "Coraza" ],
						paquete: "Paquete de mazmorras", },
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


