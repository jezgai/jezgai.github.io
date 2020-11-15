class Clase {
	constructor(clase) {
		this._nombre = clase.nombre;
		this._energia = clase.energia;
		this._salud = clase.salud;
		this._atributo = clase.atributo;
		this._cordura = clase.cordura;
		this._competencias = clase.competencias;
		this._ventajas = clase.ventajas;
		this._habilidades = clase.habilidades;
		this._lhabilidades = clase.lhabilidades;
		this._origen = clase.origen;
		this._descripcion = clase.descripcion;
		this._nombresF = clase.nombresF;
		this._nombresM = clase.nombresM;
		this._motesF = clase.motesF;
		this._motesM = clase.motesM;
		this._equipo = clase.equipo;
	}
	
	get equipo() {
		return this._equipo;
	}
	
	get motesF() {
		return this._motesF;
	}
	
	get motesM() {
		return this._motesM;
	}
	
	get nombresF() {
		return this._nombresF;
	}
	
	get nombresM() {
		return this._nombresM;
	}
	
	get descripcion() {
		return this._descripcion;
	}	
	
	get origen() {
		return this._origen;
	}	
		
	get nombre() {
		return this._nombre;
	}	
	set nombre(value) {
		this._nombre = value;
	}
			
	get energia() {
		return this._energia;
	}	
	set energia(value) {
		this._energia = value;
	}
	
	get salud() {
		return this._salud;
	}	
	set salud(value) {
		this._salud = value;
	}	
	
	get atributo() {
		return this._atributo;
	}	
	set atributo(value) {
		this._atributo = value;
	}	

	set cordura(value) {
		this._cordura = value;
	}
	get cordura() {
		return this._cordura;
	}	
	
	get competencias() {
		return this._competencias;
	}
	
	get ventajas() {
		return this._ventajas;
	}	
	
	get habilidades() {
		return this._habilidades;
	}	

	get lhabilidades() {
		return this._lhabilidades;
	}	
}


class Clases {
	
	constructor() {
		this._clases =
		[
			{
			  nombre : "Bandolera/o",
			  energia : 4,
			  salud : 6,
			  atributo: [ "DES", "CAR" ],
			  competencias: [ "Puedes llevar pistola y trabuco, ballesta de mano y ligera, armas cuerpo a cuerpo de una mano y armaduras acolchadas, de cuero y de cuero tachonado" ],
			  ventajas: [ "<strong>Tiradas de Caza</strong> en las tierras salvajes.", "<strong>Tiradas de Iniciativa</strong> del grupo en combates en los que participe activamente." ],
			  habilidades: [ "<strong>Encanto del forajido</strong><br/>Enamoras con tu parlamento a una víctima humanoide (no elfo) si superas una tirada de Carisma. Mantendrá su personalidad pero estará agradecido y dispuesto por complacer tus deseos, cumpliendo las peticiones que no vayan en contra de sus intereses.<br/>Las peticiones contrarias a estos implican que debes superar una tirada de Carisma salvo que prometas al susodicho algo que desee.<br/>Podrás encantar a 1 objetivo si este tiene Nivel 5 o superior mientras que, si es inferior, puedes llegar a encantar 3d6 blancos.<br/>Si maltratas a la persona debes superar una nueva tirada de Carisma con desventaja.", 
							 "<strong>Disparo apresurado</strong><br/>Cuando realizas un ataque puedes gastar un punto de energía para disparar, simultáneamente, una pistola." ],
			  lhabilidades: [ "Encanto del forajido, Disparo apresurado" ],
			  cordura: "CAR",
			  origen: "<a href='https://www.lospergaminosdelfenix.com/2019/10/recurso-armas-de-fuego-para-dungeon-hack.html' target='_blank'>Armas de Fuego</a>", 
			  descripcion: "La sierras y caminos son tu hogar, las cuevas tu refugio y la bolsa de los ricos la paga por un día de trabajo. El mundo ha sido incapaz de escribir normas para ti pero, en lo más profundo, anhelas una forma de vivir más decente. Tu lengua es voraz y tu destreza con las armas una virtud de la que haces gala cuando la justicia te acorrala. Eres un forajido orgulloso de tu vida proscrita y ver el precio que ponen a tu cabeza, te da la entereza suficiente para seguir luchando",
			  nombresF: [ "Almudena", "Blasa", "Cayetana", "Constanza", "Dolores", "Faemina", "Leonor", "Macarena" ],
			  nombresM: [ "Aethe", "Frothak", "Morgulf", "Vavfir", "Skörn", "Thaddeus" ],
			  motesF: [ "La Castreja", "La Cazadora", "La Mesonera", "La Muda", "La Serrana", "La Extranjera", "La Galana", "La Joyosa" ],
			  motesM: [ "El Algarrobo", "El Estudiante", "El Gitano", "El Fraile", "Malasangre", "Manozurda", "El Arrastrao", "El Encamisao" ],
			  equipo: { narmasAD: 1, armasAD: [ "Trabuco", "Pistola" ], 
						narmasCaC: 1, armasCaC: [ "Navaja", "Alfanje", "Sable" ], 
						armadura: [ "Acolchada", "Cuero", "Cuero tachonado" ],
						nobjetos: 0, objetos: [ ] },
							
			},
			{
			  nombre : "Cazador/a",
			  energia : 4,
			  salud : 12,
			  atributo: [ "DES", "SAB" ],
			  competencias: [ "Puedes llevar todas las armas que existen, pero solo las armaduras acolchadas, de cuero, de pieles, de cuero tachonado, cota de anillas, cota de escamas y camisote de mallas." ],
			  ventajas: [ "<strong>Tiradas de Destreza</strong> para desactivar trampas.", "<strong>Tiradas de Orientación</strong> en las Tierras Salvajes.", "<strong>Tiradas de Caza</strong> en las Tierras Salvajes" ],
			  habilidades: [ "<strong>Guía experto</strong><br/>Si guías a tu grupo por las Tierras Salvajes puedes ignorar las condiciones del terreno difícil, pudiendo andar hasta 2 hexágonos durante un intervalo de viaje e incluso poder forzar la marcha para recorrer un hexágono adicional. Esta habilidad especial solo se tiene en cuenta para el viaje a pie.", 
							 "<strong>Tirador especialista</strong><br/>Cada vez que te enfrentes a una criatura por primera vez puedes recordar su rutina de combate. La próxima vez que te enfrentes a ese oponente, la efectividad de tus armas aumenta en +1.",
							 "<strong>La marca del cazador</strong><br/>Puedes gastar un punto de Energía para marcar a una criatura durante 1 Intervalo. Cada vez que ataques a dicha criatura puedes añadir 1d4 de daño adicional. Al alcanzar el quinto nivel, este daño adicional aumenta hasta 1d6, al décimo hasta 1d8, al decimoquinto hasta 1d10 y al vigésimo hasta 1d12. El daño adicional provocado por los ataques furtivos utiliza el mismo valor de efectividad que las armas con las que se ataque." ],
			  lhabilidades: [ "Guía experto, Tirador especialista, La marca del cazador" ],
			  cordura: "SAB",
			  origen: "<a href='https://www.lospergaminosdelfenix.com/2019/10/recurso-armas-de-fuego-para-dungeon-hack.html' target='_blank'>Armas de Fuego</a>", 
			  descripcion: "Eres un luchador versátil, adaptado para sobrevivir en plena naturaleza.<br/>Un excelente tirador, experto en el rastreo y el acoso. Sientes una empatía extraordinaria con las presas a las que das caza, resultando más fácil detectarlas y predecir sus movimientos. Incluso, en el caso de criaturas inteligentes, puedes interiorizar sus costumbres atávicas. Conoces el medio como la palma de tu mano y has llegado a desarrollar una intuición sobrenatural que te convierte en uno con el entorno que te rodea",
			  nombresF: [ "Astrid", "Adela", "Beranhild", "Beranwyn", "Dernhild", "Heruwyn", "Holdwyn", "Ivorwen" ],
			  nombresM: [ "Arahad", "Argeled", "Bran", "Beranbold", "Déorthain", "Derngar", "Grim", "Safi" ],
			  motesF: [ ],
			  motesM: [ ],
			  equipo: { narmasAD: 1, armasAD: [ "Arcabuz", "Mosquete" ], 
						narmasCaC: 1, armasCaC: [ "Daga", "Arpón", "Lanza" ], 
						armadura: [ "Acolchada", "Cuero", "Piel", "Cuero tachonado" ],
						nobjetos: 0, objetos: [ ] },
							
			},
			{
			  nombre : "Mosquetera/o",
			  energia : 3,
			  salud : 8,
			  atributo: [ "FUE", "DES", "CON" ],
			  competencias: [ "Puedes llevar todas las armas, armaduras y escudos que existen. Como parte de tu equipamiento especial llevas una bayoneta (Arma Ligera, Daño d4, 20 mo) que puedes calar en tu mosquete para convertirlo en un arma de asta (Arma de Dos Manos, Daño d10, Alcance cuerpo a cuerpo 10 pies, 3m)" ],
			  ventajas: [ "<strong>Tiradas de Constitución</strong> para recuperar energía.", "<strong>Tiradas de Forrajeo</strong> en las Tierras Salvajes." ],
			  habilidades: [ "<strong>Soldado de mil guerras</strong><br/>Puedes gastar 1 punto de Energía para entender otro idioma, tanto de forma oral como escrita. Sin embargo, no podrás hablarlo ni escribirlo con fluidez, delatando un marcado origen extranjero.", 
							 "<strong>Todos para uno</strong><br/>Durante el combate, si un aliado utiliza la acción de Proteger y te elige a ti, no solo te otorga ventaja en las tiradas de Destreza para evitar los ataques de los enemigos sino que también te otorgará ventaja en las tiradas para atacar.",
							 "<strong>Y uno para todos</strong><br/>Puedes gastar 1 punto de Energía para conceder a un objetivo un aumento de 1d6 puntos de salud total de forma temporal y le otorgas ventaja en sus tiradas durante 1 asalto por nivel de personaje." ],
			  lhabilidades: [ "Soldado de mil guerras, Todos para uno, Y uno para todos" ],
			  cordura: "SAB",
			  origen: "<a href='https://www.lospergaminosdelfenix.com/2019/10/recurso-armas-de-fuego-para-dungeon-hack.html' target='_blank'>Armas de Fuego</a>", 
			  descripcion: "Como el orgullo de la infantería ligera, has emprendido la carrera militar dentro del Ilustre Regimiento de Mosqueteros. Apadrinado por el mismísimo Rey de la nación, luchas en lejanas guerras bajo los pabellones de las casas nobiliarias. En el caos del conflicto son tu ingenio y tu instinto las mejores armas que puedes esgrimir.<br/>En ocasiones pendenciero, en otras galante caballero, provocas la admiración de enemigos y aliados mientras asisten, fascinados, el desfile de tu célebre batallón de combate.",
			  nombresF: [ "Anne", "Aquadia", "Constance", "Eglantine", "Eloise", "Ferris", "Reisha", "Valentine" ],
			  nombresM: [ "Aramis", "Athos", "Bazin", "Bonacieux", "D'́Artagnan", "Felton", "George", "Porthos" ],
			  motesF: [ ],
			  motesM: [ ],
			  equipo: { narmasAD: 1, armasAD: [ "Mosquete", "Pistola" ], 
						narmasCaC: 1, armasCaC: [ "Espada ropera", "Alabarda" ], 
						armadura: [ "Acolchada", "Cuero", "Cuero tachonado" ],
						nobjetos: 0, objetos: [ ] },
							
			},
			{
			  nombre : "Pirata",
			  energia : 4,
			  salud : 6,
			  atributo: [ "DES", "CON" ],
			  competencias: [ "Puedes llevar armas de fuego, armas cuerpo a cuerpo de una mano y armaduras acolchadas, de cuero y de cuero tachonado." ],
			  ventajas: [ "<strong>Tiradas de Pesca</strong> en las Tierras Salvajes.", "<strong>Tiradas de Orientación</strong> en el mar.", "<strong>Tiradas de Constitución</strong> para evitar la muerte." ],
			  habilidades: [ "<strong>Lobo de mar</strong><br/>Mientras navegas por alta mar puedes forzar la marcha a bordo de la embarcación que gobiernes. Por ejemplo, mientras estés al timón de una embarcación, un barco de guerra puede mover 4 hexágonos si los tripulantes gastan un punto de energía.", 
							 "<strong>Cinturón de pistolas</strong><br/>Si gastas un punto de Energía ignoras el tiempo de recarga de una pistola pudiendo realizar de forma directa un disparo en este asalto.",
							 "<strong>Las mil vidas del pirata</strong><br/>Cuando mueres lo haces bajo extrañas circunstancias. Deberás llegar a un acuerdo con el árbitro para concretar esa situación, permitiendo que sigas con vida, aunque recibirás un +1 a tus puntuaciones de Fuerza, Destreza, Constitución y Carisma.<br/>Un ejemplo de estas circunstancias podría ser que caes por la borda en un combate, desapareciendo en el agua. Tras esto, aparecerías de forma heróica cuando tus compañeros se vean en una situación de vida o muerte." ],
			  lhabilidades: [ "Lobo de mar, Cinturón de pistolas, Las mil vidas del pirata" ],
			  cordura: "SAB",
			  origen: "<a href='https://www.lospergaminosdelfenix.com/2019/10/recurso-armas-de-fuego-para-dungeon-hack.html' target='_blank'>Armas de Fuego</a>", 
			  descripcion: "Bucaneros o berberiscos, corsarios o filibusteros; los mares tiemblan ante la mera mención de sus nombres. Rufianes de dudosa reputación, navegan por los 7 mares como dueños y señores de sus corrientes tempestuosas. Odiados y perseguidos como meros ladrones, en realidad personifican la libertad que el hombre ha perdido al atarse a vulgares leyes y regulaciones. Ellos son la hermandad de una costa de aventureros sin patria ni bandera, unidos por el vínculo de la pólvora y el salitre.",
			  nombresF: [ "Anne", "Caryna", "Charlotte", "Genna", "Grace", "Jeanne", "Marion", "Mary" ],
			  nombresM: [ "Bartholomew", "Blackbeard", "Charles", "Edward", "Jack", "Morgan", "Stede", "William" ],
			  motesF: [ ],
			  motesM: [ ],
			  equipo: { narmasAD: 1, armasAD: [ "Pistola", "Arcabuz" ], 
						narmasCaC: 1, armasCaC: [ "Alfanje", "Sable", "Hacha de mano" ], 
						armadura: [ "Acolchada", "Cuero", "Cuero tachonado" ],
						nobjetos: 0, objetos: [ ] },
							
			},
			{
			  nombre : "Purificador/a",
			  energia : 2,
			  salud : 10,
			  atributo: [ "FUE", "DES", "CON" ],
			  competencias: [ "Puedes llevar todas las armas que existen, pero solo las armaduras acolchadas, de cuero, de pieles, de cuero tachonado, la cota de anillas, la cota de escamas y el camisote de mallas." ],
			  ventajas: [ "<strong>Tiradas de Constitución</strong> para evitar cualquier enfermedad o veneno.", "<strong>Tiradas de Carisma</strong> para resistir encantamientos.", "<strong>Tiradas de Sabiduría</strong> para avistar, sentir o escuchar." ],
			  habilidades: [ "<strong>Lluvia de balas</strong><br/>Cuando atacas con un arma de fuego a una criatura con alineamiento caótico aumenta un nivel la efectividad del arma. A partir del nivel 5 aumentas dos niveles la efectividad de tu arma y a partir del nivel 10 la aumentas tres niveles.", 
							 "<strong>Sello de purificación</strong><br/>Portas, como señal protectora, un emblema bendecido por tu orden. Recibes un +1 a la absorción. Aumenta en un +1 extra por cada 3 niveles que tengas. No se acumula a la absorción que generan los escudos, encantamientos u otros objetos mágicos de protección." ],
			  lhabilidades: [ "Lluvia de balas, Sello de purificación" ],
			  cordura: "SAB",
			  origen: "<a href='https://www.lospergaminosdelfenix.com/2019/10/recurso-armas-de-fuego-para-dungeon-hack.html' target='_blank'>Armas de Fuego</a>", 
			  descripcion: "Perteneces al escaso grupo de personas que, en nombre de su señor, se dedica a buscar y exterminar seres extraños por todo los lugares conocidos o por conocer. Tu palabra es la ley máxima y tu autoridad es casi irrechazable. Los paganos y los faltos de fé también caerán sobre el yugo de tus armas, haciendo que tus enemigos sientan pavor a tus acciones. Nada ni nadie podrá cesar tu objetivo y, por norma general, ningún ser despreciable saldrá con vida mientras te quede un resuello de la tuya.",
			  nombresF: [ "Alodia", "Angela", "Dyva", "Martia", "Xenia", "Viktoria", "Welma", "Zoe" ],
			  nombresM: [ "Angus", "Desmond", "Douglas", "Franken", "Gregor", "Triestre", "Wiston" ],
			  motesF: [ ],
			  motesM: [ ],
			  equipo: { narmasAD: 1, armasAD: [ "Pistola" ], 
						narmasCaC: 1, armasCaC: [ "Espada ropera", "Sable" ], 
						armadura: [ "Acolchada", "Cuero", "Piel", "Cuero tachonado" ],
						nobjetos: 0, objetos: [ ] },
			},
			{
			  nombre : "Veterana/o",
			  energia : 4,
			  salud : 8,
			  atributo: [ "FUE", "DES" ],
			  competencias: [ "Puedes llevar todas las armas, armaduras y escudos que existen, incluidas todas las armas de fuego." ],
			  ventajas: [ "<strong>Tiradas de Caza</strong> en las Tierras Salvajes.", "<strong>Tiradas de Constitución</strong> para recuperar energía." ],
			  habilidades: [ "<strong>Francotirador</strong><br/>Las armas son tu herramienta de trabajo y sabes utilizarlas con maestría. Puedes gastar un punto de energía para disparar un arma de fuego por encima del alcance máximo.", 
							 "<strong>Duelista</strong><br/>Ganas +2 a la Absorción cuando esgrimes una daga de parada.", 
							 "<strong>Defender el cuadro</strong><br/>Cuando utilizas la acción de Proteger puedes gastar un punto de energía para disparar, al mismo tiempo, una pistola." ],
			  lhabilidades: [ "Francotirador, Duelista, Defender el cuadro" ],
			  cordura: "SAB",
			  origen: "<a href='https://www.lospergaminosdelfenix.com/2019/10/recurso-armas-de-fuego-para-dungeon-hack.html' target='_blank'>Armas de Fuego</a>", 
			  descripcion: "La guerra ha terminado y tú, como veterano de los viejos tercios reales, regresas al hogar para darte cuenta que la vida fuera del campo de batalla es mucho más peligrosa y canalla.<br/>Tu exigua bolsa satisface escasamente tus deseos, y solo piensas en vender tu acero y plomo a aquel con suficientes arrestos para contratar un asesino. De que pague a tiempo dependerá el lado de la espada en el que se encontrará ese desgraciado.",
			  nombresF: [ "Agustina", "Catalina", "Estefanía", "Helena", "Golda", "Rania", "Petra", "Mavia" ],
			  nombresM: [ "Alonso", "Castoverde", "Diego", "Espinosa", "Francesco", "Gonzalo", "Julián", "Lope" ],
			  motesF: [ ],
			  motesM: [ ],
			  equipo: { narmasAD: 1, armasAD: [ "Arcabuz", "Pistola", "Mosquete" ], 
						narmasCaC: 1, armasCaC: [ "Espada ropera", "Estoque", "Sable" ], 
						armadura: [ "Acolchada", "Cuero", "Piel", "Cuero tachonado" ],
						nobjetos: 0, objetos: [ ] },
							
			},
			{
			  nombre : "Ladrón",
			  energia : 4,
			  salud : 4,
			  atributo: [ "DES" ],
			  competencias: [ "Puedes llevar todas las armas de proyectiles, armas cuerpo a cuerpo de una mano y armaduras acolchadas, armaduras de cuero y armaduras de cuero tachonado." ],
			  ventajas: [ "<strong>Tiradas de Destreza</strong> para trepar, abrir cerraduras con ganzúa y para desactivar trampas.", "<strong>Tiradas de Iniciativa</strong> del grupo en combates en los que participe activamente.", "<strong>Tiradas de Orientación</strong> en las Tierras Salvajes." ],
			  habilidades: [ "<strong>Combate con dos armas</strong><br/>Siempre que uses en cada mano un arma ligera —por ejemplo, dos dagas—, aumentas tu eficiencia en +1.", "<strong>Ataque sorpresa</strong><br/>Cuando atacas por sorpresa a una criatura, puedes gastar un punto de energía para realizar un ataque furtivo. Este ataque se realiza con ventaja y añade 1d4 al daño. Al alcanzar el quinto nivel, su daño adicional aumenta hasta 1d6, al décimo hasta 1d8, al decimoquinto hasta 1d10 y al vigésimo hasta 1d12.<br/>El daño adicional provocado por los ataques furtivos utiliza el mismo valor de eficiencia que las armas con las que se ataque." ],
			  lhabilidades: [ "Combate con dos armas, Ataque sorpresa" ],
			  cordura: "CAR",
			  origen: "Dungeon Hack", 
			  descripcion: "Independientemente de tu clase social de procedencia, has aprendido mucho acerca de cómo funcionan las calles —y las personas—.<br/>" +
				"Puede que cometas actos deshonrosos como robar o engañar, o tal vez utilices tus habilidades tan solo para poner un poco las cosas a tu favor.<br/>" +
				"No hay mucha gente que asegure querer tratar contigo, pero cuando se trata de sobrevivir y alcanzar lugares peligrosos no existe nadie mejor que tú. Odiarán admitirlo, pero siempre te miran a ti cuando las cosas se ponen realmente feas.",
			  nombresF: [ "Cora", "Imra", "Keyara", "Liana", "Marila", "Rinya", "Tressa" ],
			  nombresM: [ "Bal", "Daarenno", "Delbin", "Dymas", "Egrad", "Haladavar", "Merreth" ],
			  motesF: [ ],
			  motesM: [ ],
			  equipo: { narmasAD: 1, armasAD: [ "Pistola", "Ballesta de mano" ], 
						narmasCaC: 1, armasCaC: [ "Espada ropera", "Estoque", "Daga" ], 
						armadura: [ "Acolchada", "Cuero" ],
						nobjetos: 0, objetos: [ ] },
			},
			{
			  nombre : "Matasanos",
			  energia : 3,
			  salud : 4,
			  atributo: [ "SAB" ],
			  competencias: [ "Puedes emplear armaduras de cuero, cuero tachonado y acolchadas. Sabes manejar con soltura estoques, dagas y bastones." ],
			  ventajas: [ "<strong>Tiradas de Sabiduría</strong> para identificar y tratar enfermedades y heridas.", 
						"<strong>Tiradas de Forrajeo</strong> en cualquier terreno.", 
						"<strong>Tiradas de Constitución</strong> para resistir enfermedades y venenos." ],
			  habilidades: [ "<strong>Vendar heridas</strong><br/>Puedes emplear un intervalo en curar una herida reciente, empleando vendas y cataplasmas. El paciente recupera una cantidad variable de puntos de Salud, dependiendo de tu nivel.<br/>1d3 entre nivel 1 y 3, 1d6 entre nivel 4 y 7, 1d8 entre nivel 8 y 12, 1d10 entre nivel 13 y 18, 1d12 a partir del nivel 19<br/>Si gastas un punto de Energía, la curación será inmediata y no requerirá de un intervalo para producirse.", 
							"<strong>Cuidados médicos</strong><br/>Los aventureros a tu cuidado pueden repetir las tiradas de reacción contra venenos y enfermedades.<br/>Además repiten la tirada para recuperar puntos de Salud durante un Descanso, y se quedan con el mejor resultado. A partir de nivel 8 el dado aumenta a 1d8, a nivel 13 a 1d10, y a nivel 19 a 1d12.",
							"<strong>Maldición del sanador</strong><br/>Hasta los enemigos más acérrimos respetan a un sanador ejerciendo su labor. Cualquier adversario sanado por tí tendrá desventaja si intenta atacarte.",
							"<strong>Bendición del sanador</strong><br/>Tienes la obligación de curar a todo ser vivo, incluso a un enemigo, siempre que se comporte de forma pacífica." ],
			  lhabilidades: [ "Vendar heridas, Cuidados médicos, Maldición del sanador, Bendición del sanador" ],
			  cordura: "SAB",
			  origen: "<a href='https://carbonoscuro.wordpress.com/2020/01/20/sanador-herborista-nueva-clase-para-dungeon-hack/' target='_blank'>Carbonoscuro</a>", 
			  descripcion: "Eres un abnegado curandero que utiliza cataplasmas, ungüentos, decocciones y otros remedios naturales para aliviar el dolor, tratar enfermedades y curar heridas.<br/>" +
						   "No dudas en adentrarte en viejas ruinas plagadas de peligros junto a tus compañeros, pues sabes que más temprano que tarde necesitarán de tus habilidades.<br/" + 
						   "Tan solo recurres a las armas como defensa, pero no dudas en acabar con seres malvados si con ello salvas la vida a inocentes.",
			  nombresF: [ "Acacia", "Celinne", "Eulalia", "Hildegarda", "Lorain", "Salomé." ],
			  nombresM: [ "Cayo", "Democritus", "Lazare", "Orestes", "Probo", "Timoteus" ],
			  motesF: [ ],
			  motesM: [ ],
			  equipo: { narmasAD: 0, armasAD: [  ], 
						narmasCaC: 1, armasCaC: [ "Bastón", "Cuchillo", "Daga", "Estoque" ], 
						armadura: [ "Acolchada", "Cuero" ],
						nobjetos: 0, objetos: [ ] },
			},
		]
	}
	
	get clases() {
		return this._clases;
	}

	set clases(value) {
		this._clases = value;
	}
	
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


