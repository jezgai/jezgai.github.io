class Comun {
	static random(numero, desde) {
		return Math.floor(Math.random() * numero) + desde;
	}
	
	static atributo() {
		var v1 = Comun.random(6,1);
		var v2 = Comun.random(6,1);
		var v3 = Comun.random(6,1);
		var v=6;
		if ( v1 < v )
			v = v1;
		if ( v2 < v )
			v = v2;
		if ( v3 < v )
			v = v3;
		return v;
	}
	
	static shuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex;

	  while (0 !== currentIndex) {

		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	  }

	  return array;
	}

	
}

Array.prototype.clone = function() {
	return this.slice(0);
};

class Nombres {
    constructor() {
                            
		// https://iotools.cloud/es/tool/name-generator/
		this.nombresRaza = { "Elfo": {  
										"M": [ "Curufinwe", "Aegnor", "Legolas", "Lómion", "Lindirion", "Gael", "Aeron", "Vardamir", "Thranduil", "Eölon", "Angrod", "Duilin", "Ancalimon", "Arminas", "Faelar", "Thalion", "Lindir", "Vaelorian", "Glorfindel", "Celeborn", "Hirgon", "Valthor", "Turin", "Anarion", "Dagorhir", "Orodreth", "Voragorn", "Laelon", "Poldon", "Ragnor", "Morfindel", "Elthoron", "Lúthrandir", "Boromir", "Laeron", "Eldrin", "Valen", "Lorien", "Aelarion", "Kaelen", "Caelum", "Auron", "Silvan", "Thalion", "Eryn" ], 
										"F": [ "Elentari", "Tharanel", "Galadriel", "Noldorin", "Galadwen", "Melian", "Silanya", "Adunaphel", "Nolwen", "Morwen", "Aerithil", "Nirnaeth", "Aethra", "Hithriel", "Narmiriel", "Arwen", "Aerlinn", "Laerwen", "Aranel", "Lyssora", "Anya", "Aurelin", "Lyra", "Finduilas", "Vanya", "Nimlot", "Nimrodel", "Amarie", "Eleana", "Eirien", "Elenwe", "Faniel", "Aelyndil", "Lómeanor", "Faervel", "Lysandra", "Aeliana", "Thalassa", "Nayana", "Elowen", "Astraea", "Faerúnya", "Vanyarin", "Liriel", "Elarinya", "Aeliana", "Sylvaine", "Ithilwen", "Elowen", "Nienna" ], 
										"Apellidos": [ "Faenor", "Ithalion", "Silvanus", "Caelestis", "Orion", "Vanyar", "Thalador", "Miriel", "Aranel", "Galanodel", "Valinor", "Quelana", "Astanya", "Ilerion", "Valoria", "Nimloth", "Sylvaris", "Faelar", "Lorthani", "Thalanyr", "Alqualondë", "Thalasien", "Amaquina", "Faeriel", "Nimrodel", "Lumindil", "Araniel", "Indilwen", "Aeridor", "Ethuil" ] 
									  },
							 "Enano": {  
										"M": [ "Steinn", "Eorik", "Belgar", "Valgim", "Salin", "Yalgim", "Ulgim", "Ingmar", "Ulin", "Oin", "Farin", "Jalin", "Kili", "Gunnar", "Paldor", "Falin", "Palin", "Brokkr", "Faldor", "Hafgrim", "Korik", "Haldin", "Halvar", "Ralin", "Dagnir", "Walgim", "Korin", "Calgrim", "Raldor", "Eldgrim", "Orin", "Walgim", "Xalgim", "Norik", "Zorik" ], 
										"F": [ "Hilda", "Kelda", "Tora", "Bodil", "Dis", "Dagnal", "Yngvild", "Sif", "Freyja", "Edda", "Wanda", "Elin", "Jorunn", "Gunnvor", "Eira", "Kara", "Mina", "Ylva", "Olga", "Sigrid", "Thora", "Ragna", "Alvilda", "Vigdis", "Zofia", "Hilda", "Zara", "Kari", "Marta", "Ingrid", "Yrsa", "Tora", "Eira", "Ida", "Cara" ], 
										"Apellidos": [ "Stoneworker", "Ironshaper", "Mightyprotector", "Orehewer", "Stoneguard", "Rockminer", "Stonewalker", "Famouswarrior", "Stonetamer", "Healguard", "Goldkeeper", "Earthworker", "Swiftarrow", "Ironclad", "Ironkeeper", "Earthcaller", "Rockminer", "Tirelessworker", "Mountainprotector", "Seaguard", "Earthguard", "Hiddenminer", "Rockguardian", "Deepdelver", "Skilltracker", "Deepworker", "Gemstone", "Ironbeard", "Orecarver", "Ironbeard", "Deepdelver", "Rockmender", "Earthwarden", "Rockshaper", "Deepexplorer" ] 
									  },
							 "Gnomo": {  
										"M": [ "Boffin", "Topper", "Clank", "Jingle", "Rumble", "Whistle", "Pip", "Fizzwick", "Barnaby", "Zook", "Clank", "Brimble", "Boffin", "Rubble", "Jingle", "Fizzwick", "Niggle", "Tinker", "Topper", "Cogsworth", "Toadstool", "Whimsy", "Coggle", "Glimmer", "Sprig", "Nibbles", "Fizzwick", "Bumble", "Digger", "Jumbles" ], 
										"F": [ "Zinnia", "Iris", "Beryl", "Azalea", "Rosie", "Petunia", "Lily", "Violeta", "Daisy", "Poppy", "Coralia", "Petunia", "Brisa", "Ámbar", "Lila", "Flora", "Esmeralda", "Rosita", "Azulina", "Violeta", "Magnolia", "Burbuja", "Petunia", "Rosita", "Flora", "Camelia", "Violeta", "Azucena", "Hortensia", "Dalia" ], 
										"Apellidos": [ "Estornudo", "Despistado", "Martillazo", "Cogsworth", "Hierbamora", "Brotabotas", "Chispeante", "Engranaje", "Cascabonzuelos", "Tuercaloca", "Remache", "Despierto", "Hierro", "Campanas", "Chispa", "Brotabrisa", "Silbato", "Tropezón", "Engranes", "Vástago", "Remache", "Tuerca", "Filo", "Tejedor", "Rumor", "Topo", "Muelle", "Tintineo", "Vapor", "Zumbido" ] 
									  },
							 "Humano": {  
										"M": [ "Arwel", "Bevan", "Boroth", "Borrid", "Breagle", "Breglor", "Canhoreal", "Emrys", "Ethex", "Gringle", "Grinwit", "Gruwid", "Gruwth", "Gwestin", "Mannog", "Melnax", "Orthax", "Triunein", "Wenlan", "Yirmeor", "Faelan", "Hadrian", "Fastrid", "Bartholomew", "Renaldo", "Silas", "Torin", "Jafar", "Harkon", "Eldrin", "Caorlán", "Torvino", "Vladok", "Grimdúro", "Borgunn", "Kaelvar", "Ragnarok", "Albrekt", "Ervindo", "Stanimir" ], 
										"F": [ "Agune", "Beatriz", "Breagan", "Bronwyn", "Cannora", "Drelil", "Elgile", "Esme", "Griya", "Henaine", "Lirann", "Lirathil", "Lisabeth", "Moralil", "Morgwen", "Sybil", "Theune", "Wenain", "Ygwal", "Yslen", "Esmeralda", "Lysandra", "Linnea", "Zara", "Sasha", "Mara", "Solveig", "Imara", "Alessia", "Brynn", "Zelia", "Solveig", "Mara", "Esme", "Anya", "Briallen", "Lyra", "Katrina", "Rosalind", "Elara" ], 
										"Apellidos": [ "Abernathy", "Addercap", "Burl", "Candlewick", "Cormick", "Crumwaller", "Dunswallow", "Getri", "Glass", "Harkness", "Harper", "Loomer", "Malksmilk", "Smythe", "Sunderman", "Swinney", "Thatcher", "Tolmen", "Weaver", "Wolder", "Moonwhisper", "Rivers", "Ulfsson", "Croft", "Vancaskerkin", "Blackwood", "Colm", "al-Nasir", "Battlehammer", "Barrowight", "Holt", "Moonbrook", "Petrova", "Evenwood", "Chanthal", "Halfmoon" ] 
									  },
							 "Mediano": {  
										"M": [ "Quirino", "Gerardo", "Isidoro", "Peregrino", "Rosendo", "Anselmo", "Ferdinando", "Rolo", "Tobías", "Milo", "Simón", "Rufus", "Chester", "Tobías", "Arlo", "Ernie", "Pippin", "Milo", "Eldon", "Filbo", "Rori", "Osric", "Eldon", "Pimienta", "Cosme", "Finian", "Elwood", "Filbo", "Gilberto", "Odo" ], 
										"F": [ "Iris", "Freesia", "Jazmín", "Gisela", "Dalila", "Clavelina", "Eulalia", "Ailiana", "Brisa", "Hortensia", "Daisy", "Posie", "Linnet", "Willow", "Poppy", "Hazel", "Primrose", "Juniper", "Bryony", "Clover", "Serena", "Clarita", "Flora", "Clementina", "Tilia", "Lilia", "Melisa", "Rosita", "Violeta", "Belinda" ], 
										"Apellidos": [ "Topobueno", "Pradogrande", "Cerezuelo", "Cavatumbas", "Bolsóncerrado", "Madrigal", "Manzanilla", "Barrilbuena", "Colinaverde", "Corazónhogar", "Sotomonte", "Pradoaprisco", "Arroyuelo", "Trébol", "Pradoalto", "Topocálido", "Setoalto", "Tierrabuena", "Campoviejo", "Zarzamora", "Manzanares", "Pradollano", "Buenabodega", "Cardoncillo", "Zarzamora", "Cantoalegre", "Campoviejo", "Quebradizo", "Tragaluz", "Sotomonte" ] 
									  },
							 "Semielfo": {  
										"M": [ "Lysander", "Eldrin", "Kaelen", "Torvin", "Zephyr", "Eamon", "Lorien", "Gavril", "Silvan", "Rhysand", "Ronan", "Aric", "Adrian", "Lucian", "Caspian", "Silas", "Darian", "Tristan", "Quentin", "Cedric", "Lysander", "Arion", "Caspian", "Eldar", "Kaelen", "Zephyr", "Eamon", "Lorien", "Cedric", "Alderon" ], 
										"F": [ "Elysia", "Rowena", "Aeliana", "Isolde", "Liliana", "Seraphina", "Elowen", "Genevieve", "Aurora", "Vivienne", "Juliana", "Miriel", "Elaria", "Anya", "Rhiannon", "Seraphina", "Elowen", "Cassandra", "Genevieve", "Viviana", "Beatrix", "Rowena", "Silvania", "Seraphina", "Winifred", "Gwendolyn", "Aeliana", "Valencia", "Liliana", "Morwenna" ], 
										"Apellidos": [ "Cormak", "Baruk", "Voron", "Aerion", "Theron", "Valerius", "Casimir", "Halan", "Josua", "Marek", "Sylvandir", "Meliamne", "Baruk", "Cormak", "Faelan", "Valerius", "Morningsong", "Aerion", "Elion", "Galanor", "Torvin", "Gavril", "Voronwe", "Baruklyn", "Aerion", "Valerius", "Silvanus", "Theron", "Meliamne", "Zaltys" ] 
									  },
							 "Semiorco": {  
										"M": [ "Brendor", "Wesgar", "Garrock", "Brynda", "Torvin", "Jesk", "Grimmalk", "Vorka", "Falkrum", "Rhyland", "Rorgath", "Vargon", "Garrock", "Drogar", "Jortan", "Valga", "Hogar", "Gromar", "Borak", "Krell", "Bryssa", "Torvin", "Kazrin", "Maraak", "Grimm", "Lyza", "Falkrum", "Jessa", "Grelda", "Harkon" ], 
										"F": [ "Zaltira", "Griselda", "Waldruta", "Brunhilda", "Solveig", "Astrid", "Sigrid", "Iolanda", "Gerarda", "Hildegarda", "Valeria", "Brunilda", "Griselda", "Astrid", "Sigrid", "Hilda", "Matilda", "Godiva", "Reinhilda", "Ermengarda", "Adriana", "Aryana", "Valeria", "Daniela", "Camila", "Isolda", "Sofia", "Luciana", "Renata", "Elara" ], 
										"Apellidos": [ "Rompecráneos", "Corazónférreo", "Dienteacerado", "Hachasangrienta", "Ojosombrío", "Puñoférreo", "Pielverde", "Crinroja", "Lanzarrápida", "Gritoardiente", "Cuchilla", "Piedrahacha", "Cortaroca", "Rompefuego", "Hachafiel", "Dientenegro", "Quebrantahuesos", "Mazagrís", "Colmillos", "Rompehierro", "Earthshaker", "Warcaller", "Bloodaxe", "Steelheart", "Battlecry", "Skullcrusher", "Colmarrow", "Darkblade", "Ironfist", "Stoneshield" ] 
									  },
							 "Goblin": {  
										"M": [ "Colmillo Astuto", "Tripasucia", "Nariztorcida", "Muerdespada", "Chirridoz", "Roñoso el Breve", "Zurrón de Setas", "Ojos de Brasa", "Garrapata", "Piedralaguna", "Moco Brillante", "Mordisco Ruin", "Chasquido Óseo", "Sombra Veloz", "Garra Mugrienta", "Diente Agudo", "Piedra Astuta", "Pedrusco Rancio", "Mano Pegajosa", "Hedor Fétido", "Muerdespina", "Garrazo Oscuro", "Roñoso", "Chapucero", "Tripasalada", "Piedraloca", "Mocobrón", "Escarbadientes", "Trampuzas", "Hedor Gruñón", "Pedrusco Ágil", "Zarcillo Nudoso", "Muerdebarro", "Chirrido Vil", "Cachivache Cráneo", "Merdacio Loco", "Rataña Roída", "Tizón Astuto", "Risitas Filosas", "Hedor Cieno", "Nariz de Hongo", "Mano Pegajosa", "Mordisco de Hierro", "Zurrón Lleno", "Chirrido Siniestro", "Garra Rápida", "Brebaje Bubónico", "Ojo Bizco", "Trotamundos", "Colmillo Astuto" ], 
										"F": [ "Mala Hierbalagrima", "Cascabel Huesudo", "Tijera Filosarnosa", "Moquita Pegajosa", "Musgosa Dedopodrido", "Grus Gruñegrita", "Piedrita Resbalosa", "Carcajada Tinieblosa", "Bolsita de Abalorios", "Grumosa Robahuevos", "Piel de Sombra", "Garra Gemela", "Danza de Hongos", "Carcajada Verde", "Susurro de Oro", "Eco de la Cueva", "Ojo de Búho", "Chispa de Ruina", "Uña de Hierro", "Brisa de Barro", "Risa Descompuesta", "Bolsita de Chasquidos", "Chispa Siniestra", "Trepadora Chirriante", "Lengua Mordaz", "Púa Retorcida", "Ojo Bizco", "Uña Roída", "Joroba Saltarina", "Mano Pegajosa", "Piltrafilla Saltarina", "Verrugosa Chispeante", "Crujilda Dientesrotos", "Maloliente Gruñona", "Merdelina Robaplanes", "Carcajada Tenebrosa", "Burbuja Venenosa", "Chirriona Escurridiza", "Trompetilla Oxidada", "Engañifa Astuta", "Pócima Pícara", "Malicia Chispa", "Trepa Zarzal", "Burbuja Sombría", "Murmullo Ruinoso", "Carcajada Ácida", "Trizadura Veloz", "Joya Fétida", "Greñitas Húmedas", "Trampa Centelleante" ], 
										"Apellidos": [  ] 
									  } };
        this.nombresF = this.nombresRaza.Humano.F;
        this.nombresM = this.nombresRaza.Humano.M;
        this.apellidos = this.nombresRaza.Humano.Apellidos;
    }
    
    /*
    nombre(genero) {
		var nombre = "";
		if ( genero == "F" ) {
			nombre = this.nombresF[Comun.random(20,0)];
		}
		else {
			nombre = this.nombresM[Comun.random(20,0)];
		}
		
		nombre += " " + this.apellidos[Comun.random(20,0)];
		return nombre;
	}*/
	nombre(raza, genero) {
		var longitudnombre = this.nombresRaza[raza][genero].length;
		var longitudapellido = this.nombresRaza[raza]["Apellidos"].length;
		var nombre = this.nombresRaza[raza][genero][Comun.random(longitudnombre, 0)];
		if ( longitudapellido > 0 ) {
			nombre += " " + this.nombresRaza[raza]["Apellidos"][Comun.random(longitudapellido, 0)];
		}
		return nombre;
	}
    
}


class Rasgos {
	constructor() {
		this.alineamientos = [ { alineamiento: "Legal", valor: 5},
							   { alineamiento: "Neutral", valor: 15},
							   { alineamiento: "Caótico", valor: 20}];
		this.fisico = [ "Atlético", "Musculoso", "Corpulento", "Delicado", "Demacrado",
						"Grueso", "Larguirucho", "Fibrado", "Tosco", "Flaco",
						"Bajito", "Nervudo", "Esbelto", "Flácido", "Atractivo",
						"Fuerte", "Pequeño", "Imponente", "Flexible", "Nervioso" ];
		this.cara = [ "Hinchada", "Franca", "Huesuda", "Cincelada", "Delicada",
						"Alargada", "De patricio", "Picada", "Aguileña", "Rota",
						"Traviesa", "Delgada", "Ratuna", "Redonda", "Hundida",
						"Afilada", "Suave", "Cuadrada", "Ancha", "Lobuna"];
		this.piel = [ "Cicatriz de guerra", "Marca nacimiento", "Quemadura", "Oscura", "Maquillada",
						"Aceitosa", "Pálida", "Perfecta", "Piercings", "Marcas de viruela",
						"Hedionda", "Tatuada", "Rosada", "Rugosa", "Cetrina",
						"Quemada al sol", "Bronceada", "Pintura guerra", "Curtida", "Cicatriz de látigo" ];
		this.pelo = [ "Calvo", "Trenzado", "Erizado", "Recortado", "Ensortijado",
						"Despeinado", "Rastas", "Sucio", "Rizado", "Grasiento",
						"Flácido", "Largo", "Lujoso", "Cresta", "Aceitoso",
						"Coleta", "Sedoso", "Moño", "Ondulado", "Ralo" ];
		this.ropaje = [ "Antiguo", "Ensangrentado", "Ceremonial", "Decorado", "Excéntrico",
						"Elegante", "A la moda", "Inmundo", "Extravagante", "Manchado",
						"Extranjero", "Raído", "Desaliñado", "Librea", "Sobredimensionado",
						"Remendado", "Perfumado", "Rancio", "Rasgado", "Estrecho" ];
		this.habla = [ "Contundente", "Vozarrón", "Entrecortada", "Críptica", "Arrastrada",
						"Ahogada", "Florida", "Formal", "Grave", "Ronca",
						"Murmurosa", "Precisa", "Pintoresca", "Divagante", "Trepidante",
						"Dialecto", "Lenta", "Chirriante", "Tartamudeo", "Susurro" ];
		this.virtud = [ "Ambicioso", "Cauto", "Valiente", "Cortés", "Curioso",
						"Disciplinado", "Atento", "Generoso", "Gregario", "Honesto",
						"Honorable", "Humilde", "Idealista", "Justo", "Leal",
						"Piadoso", "Honrado", "Sereno", "Estoico", "Tolerante" ];
		this.trasfondo = [ "Alquimista", "Mendigo", "Carnicero", "Ladrón", "Charlatán",
							"Clérigo", "Cocinero", "Cultista", "Jugador", "Herborista",
							"Mago", "Marinero", "Mercenario", "Mercader", "Proscrito",
							"Artista", "Carterista", "Contrabandista", "Estudiante", "Rastreador" ];
		this.vicio = [ "Agresivo", "Arrogante", "Amargado", "Cobarde", "Cruel",
						"Mentiroso", "Poco serio", "Glotón", "Engreído", "Irascible",
						"Perezoso", "Nervioso", "Parcial", "Temerario", "Rudo",
						"Sospechoso", "Vano", "Vengativo", "Derrochador", "Quejumbroso" ];
		this.desgracia = [ "Abandonado", "Adicto", "Chantajeado", "Condenado", "Maldito",
							"Defraudado", "Degradado", "Desacreditado", "Repudiado", "Exiliado",
							"Incriminado", "Cazado", "Secuestrado", "Mutilado", "Pobre",
							"Perseguido", "Rechazado", "Reemplazado", "Robado", "Sospechoso" ];
		this.origen = [ "Aldeano", "Comprado por un mago", "Burgués", "Criado", "Desconocido",
						"Esclavo", "Exiliado", "Expósito", "Gobernante derrocado", "Granjero", 
						"Hidalgo", "Liberto", "Montañés", "Noble empobrecido", "Nómada", 
						"Orden religiosa", "Pastoril", "Pueblerino", "Siervo", "Villano" ];
	}
	
	alineamiento() {
		var valineamiento = Comun.random(20,1);
		var i=0;
		for (i=0; i<this.alineamientos.length; i++) {
			if ( this.alineamientos[i].valor >= valineamiento ) {
				return this.alineamientos[i].alineamiento;
			}
		}
		return this.alineamientos[0].alineamiento;
	}
	
	rasgos() {
		var rasgospj = [];
		rasgospj.push(this.alineamiento());
		rasgospj.push(this.trasfondo[Comun.random(20,0)]);
		rasgospj.push(this.desgracia[Comun.random(20,0)]);
		rasgospj.push(this.ropaje[Comun.random(20,0)]);
		rasgospj.push(this.habla[Comun.random(20,0)]);
		rasgospj.push(this.fisico[Comun.random(20,0)]);
		rasgospj.push(this.piel[Comun.random(20,0)]);
		rasgospj.push(this.cara[Comun.random(20,0)]);
		rasgospj.push(this.pelo[Comun.random(20,0)]);
		rasgospj.push(this.virtud[Comun.random(20,0)]);
		rasgospj.push(this.vicio[Comun.random(20,0)]);
		return rasgospj;
	}
	
	lrasgos() {
		var literales = [];
		literales.push("Alineamiento");
		literales.push("Trasfondo");
		literales.push("Infortunio");
		literales.push("Vestimenta");
		literales.push("Habla");
		literales.push("Físico");
		literales.push("Piel");
		literales.push("Rostro");
		literales.push("Pelo");
		literales.push("Virtud");
		literales.push("Vicio");
		return literales;
	}
	
	lcamposrasgos() {
		var campos = [];
		campos.push("Alineamiento");
		campos.push("Trasfondo");
		campos.push("Infortunio");
		campos.push("Ropa");
		campos.push("Habla");
		campos.push("Fisico");
		campos.push("Piel");
		campos.push("Rostro");
		campos.push("Pelo");
		campos.push("Virtud");
		campos.push("Vicio");
		return campos;
	}
	
	rasgospj(pj) {
		var literales = rasgos.lrasgos();
		var rasgospj = [];
		var i=0;
		for (i=0; i<literales.length; i++) {
			rasgospj.push(literales[i] + ": " + pj.rasgos[i]);
		}
		return rasgospj;
		
	}
	
}



class Habilidades {
	constructor() {
		this.habilidades = [ "Arma favorita", "Armero", "Ataque furtivo", "Atención", "Bendecir", "Blindado", "Compañero animal", "Daño brutal", 
							 "Defender", "Diplomacia", "Doble empuñadura", "Duro", "Exorcismo", "Hechicería", "Intuición", "Latrocinio", 
							 "Lengua de plata", "Liderar", "Manos sanadoras", "Pies ligeros", "Preparado", "Primeros auxilios", "Puntería", 
							 "Reacción rápida", "Remedios naturales", "Ritual", "Supervivencia", "Sutileza con armas", "Tirador", "Uso experto" ];
		this.descripcionHabilidades = {
								"Longevo": "Los elfos necesitan 1100 PX para subir a nivel 2 y después suben de nivel más lentamente.",
								"Feérico": "Los elfos tienen ventaja en las tiradas de salvación de Carisma y Sabiduría, son inmunes al sueño mágico y a la parálisis y pueden dormir sólo 4 horas al día para considerar que han hecho un descanso largo.",
								"Rotundo": "Los enanos tienen el paso corto y no tienen una gran agilidad para compensarlo. Su velocidad de combate es de 30 pies (8 metros) y tienen desventaja en las tiradas relacionadas con saltar y nadar debido a su gran densidad corporal.",
								"Sentidos pétreos": "Los enanos tienen ventaja para notar cambios y defectos en construcciones y cavidades subterráneas. Además tienen +1 a la sorpresa en subterráneos y construcciones.",
								"Comprender a los animales": "Los gnomos pueden entender de forma sencilla a los animales, así como hacerse entender por ellos. Aunque no pueden mantener una conversación complicada con un animal, los gnomos son capaces de dar y entender mensajes simples como «peligro», «ayuda», «haz guardia» y cosas similares.",
								"Vivaz": "Progresión rápida. Suben al nivel 2 con 900 PX, y después suben de nivel más rápidamente.",
								"Pequeño": "La velocidad de combate de los medianos es de 30 pies (8 metros) y, además, son incapaces de usar armas que hagan d10 de daño. En cuanto a las armas que hacen d8 de daño, deben usarlas con ambas manos debido a su pequeño tamaño.",
								"Sigilo natural": "Los medianos tienen ventaja en todas las tiradas de Destreza para esconderse o pasar desapercibidos. Pueden intentar esconderse justo antes de un combate.",
								"Herencia feérica": "Tienes ventaja en las tiradas de salvación de Carisma y Sabiduría y eres inmune al sueño mágico.",
								"Infravisión": "La infravisión les permite ver en la oscuridad hasta 80 pies (24 metros) sin problema. Esta visión es en blanco y negro.",
								"Arma favorita": "(I-II). Tras entrenar una semana con un arma, puedes convertirla en tu arma de especialista. Al hacerlo, aumentas el rango de crítico de un arma (harás críticos con 19-20 en vez de con 20). Al escoger por segunda vez este rasgo, aumenta el rango de crítico en otro punto (18-20 en vez de 20). Puedes cambiar de arma favorita con una semana de entrenamiento, pero solo puedes tener una.",
								"Armero": "Una vez al día y al descansar por lo menos 1 hora, puedes recuperar 1 punto de Calidad de un arma o armadura siempre que tengas las herramientas apropiadas. Además puedes ignorar 1 espacio de Peso que ocupe un arma y una armadura (hasta dos espacios en total).",
								"Ataque furtivo": "(I-II). Contra un enemigo desprevenido tienes ventaja al golpear y +1 dado de daño por rango de este rasgo siempre que uses un arma con Peso 1 o menor.",
								"Atención": "Tienes +1 a las tiradas de encontrar puertas secretas y sólo quedas sorprendido si en la tirada de sorpresa sale un 1, lo que te permite actuar aunque a tu grupo no. Además al rebuscar una localización, puedes encontrar puertas secretas (pero con un 6 o más, como de normal).",
								"Bendecir": "(I-II). Puedes bendecir a un aliado por rango de este rasgo al día. El aliado bendito puede decidir gastar la bendición cuando quiera, considerando que ha sacado un 15 en una tirada. Tras esto la bendición se agota. Si no se usa antes de realizar un descanso de cierta longitud (como una noche de sueño), también se agota.",
								"Blindado": "Llevar un conjunto de armadura, casco y/o escudo de Peso total 5 o superior te permite ignorar 1 punto de daño de cada ataque que recibes (aunque el daño mínimo sigue siendo 1).",
								"Compañero animal": "(I-V). Un animal te sigue como un aliado fiel que jamás te abandonará y que te entiende gracias a algún tipo de conexión especial. El animal es capaz de entender órdenes de cierta dificultad, pero no es un ser racional y no puede entender mensajes o realizar pensamientos complejos. Si el compañero animal muerte, puedes hacerte con otro si pasas una semana en las tierras salvajes. Este compañero animal tiene tantos DG como el rango de este rasgo -1 (a rango 1, tiene 1⁄2 DG) y sus estadísticas son las estándar para sus DG. Su Defensa básica es 13, su movimiento de combate es 80’/24 metros y hace 1d4 de daño, aumentando un grado el daño por cada rasgo (1d6 a rango 2, 1d8 a rango 3, 1d10 a rango 4 y 1d12 a rango 5). Adicionalmente escoge uno de estos rasgos para el animal:\n— Volador: El animal es volador, ganando una velocidad aérea de 120’/36 metros, pero su velocidad terrestre se reduce a 10’/3 metros. \n— Resistente: El animal aumenta sus DG en uno (si tiene 1⁄2DG, para a 1) y su Defensa básica aumenta a 14. \n— Zarpas y garras: El dado de ataque del animal baja en un grado (de 1d4 pasa a 1d3) pero tiene dos ataques por cada ronda.",
								"Daño brutal": "(I-II). +1 al daño con todos los ataques por cada rango de este rasgo.",
								"Defender": "(I-II). Cada ronda escoge un aliado a un máximo de 5 pies (1,5 metros) a ti por cada rango de este rasgo. Los aliados defendidos aumentan en +1 su CA por cada rango de este rasgo.",
								"Diplomacia": "Ganas +2 a las tiradas de reacción con los encuentros. Además puedes llevar un esbirro adicional.",
								"Doble empuñadura": "(I-II). Si llevas un arma de Peso 1 (o menos) en cada mano y el ataque de tu primera arma impacta, puedes hacer un segundo ataque con tu otra arma, pero tirando 1d20 sin modificadores de característica o de rasgo de arma (aunque sí mágicos). Si tienes un segundo rango, puedes sumar los bonificadores pertinentes a tu segundo ataque.",
								"Duro": "Al tirar los Dados de Golpe, puedes considerar todos los 1 y los 2 como un 3. Además siempre que subas de nivel, si tus tiradas son menores que los PG que ya tenías, ganas +2 PG (en vez de +1).",
								"Exorcismo": "(I-II). Ganas la capacidad de exorcizar seres sobrenaturales caóticos (como no muertos o demonios). Esto se puede hacer una vez por encuentro y punto de este rasgo. Para hacerlo debes realizar una tirada sumando tu nivel + los rangos que tengas en este rasgo y superar una dificultad de 10 + los DG del enemigo más fuerte presente al que puedas exorcizar. Si igualas o superas la dificultad, tiras tantos d6 como rangos de este rasgo. Estos son los puntos de exorcismo con los que puedes hacer las siguientes acciones. Los puntos no utilizados se pierden:\n— Ahuyentar: Gasta 1 punto de exorcismo por cada DG del enemigo. Este enemigo huye de ti a toda velocidad durante sus turnos. Si no puede huir, tiene desventaja al golpear mientras estés presente y todos los ataques para golpearle tendrán ventaja.\n— Desterrar (solo si tienes Alineamiento Legal): Gasta 2 puntos de exorcismo por cada DG de la criatura. Esta es automáticamente destruida (aunque algunos seres son desterrados a su plano).\n— Controlar (solo si tienes Alineamiento Caótico): Gasta 2 puntos de exorcismo por cada DG de la criatura. Esta pasa a estar bajo tu control. Puedes controlar a tantas criaturas como tu nivel + los rangos de este rasgo. El control dura hasta el siguiente anochecer, aunque hasta ese momento te servirán como esclavos sin mente.\n— Dañar (solo si tienes Alineamiento Neutral): Gasta 1 punto de exorcismo para hacer 1d8 de daño a una criatura que pueda ser exorcizada.",
								"Hechicería": "(I-VI). Puedes aprender 1 conjuro para poder lanzarlo de memoria por cada rango de este rasgo. Necesitas tener acceso al grimorio y estudiarlo durante un día, pero una vez lo aprendes jamás lo olvidas. A la hora de lanzar el conjuro, N es tu nivel +1. Cada conjuro memorizado solo puede ser lanzado una vez al día. Puedes cambiar los conjuros que tienes, olvidando unos por otros a gusto, pero gastando el día necesario en volver a memorizar el conjuro y necesitando acceso al grimorio.",
								"Intuición": "(I-II). Una vez al día por cada rango en este rasgo puedes tener éxito en una salvación que hubieras fallado.",
								"Latrocinio": "(I-II). Tienes ventaja en todas las tiradas de sigilo, robar y pasar inadvertido, así como de desactivar trampas, abrir cerraduras y otros mecanismos. Con un segundo rango en este rasgo puedes tirar 3d20 y quedarte con el mejor en estas situaciones (¡súper ventaja!).",
								"Lengua de plata": "Puedes vender las cosas un 10% más caras y comprarlas un 10% más baratas. Además puedes repetir un sólo d6 de una tirada de reacción, pero debes quedarte el segundo resultado.",
								"Liderar": "Los esbirros de tu grupo tienen +1 a golpear y +1 a la moral. Pueden considerar un éxito el primer fallo en una tirada de Moral de cada encuentro en tanto en cuanto te encuentres presente en batalla junto a ellos. Tener este rasgo más de una vez por grupo solo aumenta la Moral de los esbirros.",
								"Manos sanadoras": "(I-II). Cada mañana ganas 3 puntos de curación por rango que tengas en este rasgo. Como acción puedes curar tantos PG como quieras a un aliado, pero cada punto gastado desaparece de tu reserva de puntos de curación. Estos se renuevan cada mañana, pero nunca pueden superar el máximo que te da el rasgo.",
								"Pies ligeros": "Aumenta tu velocidad de movimiento en combate en +20’/6m y te da +1 a la defensa de Armadura mientras no estés cargado.",
								"Preparado": "Una vez al día puedes decidir reducir la Calidad de un objeto apropiado en 1 y tener ventaja en una tirada de salvación. El DJ tiene la última palabra a la hora de aceptar si el objeto se puede usar para esa tirada o no. Además una vez al día puedes declarar que un objeto que se acaba de romper (y pasar a Calidad 0) tiene Calidad 1.",
								"Primeros auxilios": "Estás acostumbrado a tratar las heridas más graves con velocidad. Tira 1d4 y reparte esos PG entre los heridos del grupo según desees. Si tienes vendas o materiales similares puedes gastar un punto de Calidad de los mismos para aumentar la curación a 2d3. Para hacer esto necesitas un turno de 10 minutos y sólo se puede hacer una vez al día como máximo.",
								"Puntería": "Puedes decidir disparar al combate cuerpo a cuerpo con un -2 y sin la posibilidad de dar a aliados.",
								"Reacción rápida": "Al principio de un combate, tienes 1/2 de posibilidades de poder actuar antes de tirar las iniciativas. Después se tiran las iniciativas y puedes actuar con normalidad (este rasgo te da un turno gratuito de actuación si se activa). En caso de que hayas sido sorprendido, conseguir acertar con este rasgo te permite actuar con normalidad.",
								"Remedios naturales": "Gracias a tus conocimientos de herboristería puedes mejorar la curación natural de tus aliados. Si tienes acceso a materiales naturales puedes ayudar a tu grupo, mejorando en +1 los PG que recuperan, y añadiendo +1 por cada 2 Dados de Golpe completos de la criatura herida. Así una criatura con 1 DG se curaría 1d4+Con+1, mientras que si tuviera 4 DG se curaría 1d4+Con+3.",
								"Ritual": "Puedes usar un grimorio dedicando 10 minutos a un ritual. El conjuro pasa a tener una duración de N horas en vez de N×10 minutos. Al hacer el ritual, el grimorio se gasta con normalidad.",
								"Supervivencia": "(I-II). Tienes ventaja en todas las tiradas para rastrear, buscar recursos naturales, cazar, escuchar ruidos y pasar inadvertido en la naturaleza. Con un segundo rango en este rasgo puedes tirar 3d20 y quedarte con el mejor (¡súper ventaja!).",
								"Sutileza con armas": "Puedes atacar con Destreza en vez de con Fuerza con armas cuerpo a cuerpo de Peso 1 o menor.",
								"Tirador": "Si no te mueves en tu ronda puedes decidir disparar dos veces con -4 (con arma sin Recarga), disparar y mover con -2 (con arma con Recarga) o disparar un sólo disparo con +2.",
								"Uso experto": "(I-III). Al usar un grimorio, tira 1d4. Si sacas igual o menos que tus rangos de este rasgo, el grimorio no se gasta y lo puedes volver a usar. Puedes emplear este rasgo tantas veces al día como rangos tengas, sin contar intentos fallidos.",
								"Emboscar": "Cuando en un combate el bando rival (y solo el bando rival) es sorprendido, los PJ goblin tiran con ventaja su ataque.",
								"Potencial": "Ganan +1 a una característica a su elección, y un +1 adicional cada 3 niveles (a nivel 3, 6 y 9)"
									  };
	}
	habilidad() {
		return this.habilidades[Comun.random(this.habilidades.length, 0)];
	}
	descripcion(nombrehabilidad) {
		if ( nombrehabilidad in this.descripcionHabilidades ) {
			return this.descripcionHabilidades[nombrehabilidad];
		}
		return nombrehabilidad;
	}
}

class Razas {
	constructor() {
		
		this.razasOriginal = [
						{ nombre: "Humano", peso: 75, habilidades: [ "Vivaz" ], habilidadesInfravision: [ "Potencial" ], modificadores: [ 0, 0, 0, 0, 0, 0], movimiento: 12 },
						{ nombre: "Elfo", peso: 5, habilidades: [ "Longevo", "Feérico" ], habilidadesInfravision: [ "Infravisión" ], modificadores: [ 0, 1, -1, 0, 1, 0], movimiento: 12 },
						{ nombre: "Enano", peso: 5, habilidades: [ "Rotundo", "Sentidos pétreos" ], habilidadesInfravision: [ "Infravisión" ], modificadores: [ 0, 1, -1, 0, 1, 0], movimiento: 8 },
						{ nombre: "Gnomo", peso: 5, habilidades: [ "Pequeño", "Comprender a los animales" ], habilidadesInfravision: [ "Infravisión" ], modificadores: [ -1, 0, 1, 1, 0, 0], movimiento: 8 },
						{ nombre: "Mediano", peso: 5, habilidades: [ "Pequeño", "Sigilo natural" ], modificadores: [ -1, 1, 0, 0, 0, 1], movimiento: 8 },
						{ nombre: "Semielfo", peso: 3, habilidades: [ "Herencia feérica" ], habilidadesInfravision: [ "Vivaz" ], modificadores: [ 0, 1, 0, 0, 0, 0], movimiento: 12 },
						{ nombre: "Semiorco", peso: 2, habilidades: [ "Infravisión" ], habilidadesInfravision: [ "Vivaz" ], modificadores: [ 1, 0, 0, 0, 0, 0], movimiento: 12 }
					 ];
		this.razasTotal = this.razasOriginal.clone();
		this.razasTotal.push ( { nombre: "Goblin", peso: 1, habilidades: [ "Pequeño", "Emboscar" ], habilidadesInfravision: [ "Infravisión" ], modificadores: [ 0, 1, 0, -1, 1, 0], movimiento: 8 } );

		this.razas = this.razasOriginal.clone();
	}
	raza() {
		var n = Comun.random(100,1);
		var i = 0;
		var peso = 0;
		for (i=0; i<this.razas.length; i++) {
			if ( peso + this.razas[i].peso > n ) {
				return this.razas[i];
			}
			peso += this.razas[i].peso;
		}
		return this.razas[0];
	}
	
	cambiaRaza(nuevaraza) {
		if ( nuevaraza == "" ) {
			this.razas = this.razasOriginal.clone();
		}
		else {
			var i=0;
			for (i=0; i<this.razasTotal.length; i++) {
				if ( this.razasTotal[i].nombre == nuevaraza ) {
					this.razas = [] ;
					this.razas.push(this.razasTotal[i]);
					break;
				}
			}
			if ( i==this.razasTotal.length ) {
				this.razas = this.razasOriginal.clone();
			}
		}
	}
	
	desplegableRazas(nbFuncSel) {
		var srazas=" <strong>Raza:</strong> <select class='w3-select'  name='raza' onchange='" + nbFuncSel + "(this)'><option>--Aleatorio--</option>";
		var iraza=0;
		for (iraza=0; iraza< this.razasTotal.length; iraza++) {
			srazas += "<option>" + this.razasTotal[iraza].nombre + "</option>";
		}
		srazas += "</select>";
		return srazas;
	}
}

let nombres = new Nombres();
let rasgos = new Rasgos();
let habilidades = new Habilidades();
let razas = new Razas();
