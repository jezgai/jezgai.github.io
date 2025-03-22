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
										"M": [ "Curufinwe", "Aegnor", "Legolas", "Lómion", "Lindirion", "Gael", "Aeron", "Vardamir", "Thranduil", "Eölon", "Angrod", "Duilin", "Ancalimon", "Arminas", "Faelar", "Thalion", "Lindir", "Vaelorian", "Glorfindel", "Celeborn", "Hirgon", "Valthor", "Turin", "Anarion", "Dagorhir", "Orodreth", "Voragorn", "Laelon", "Poldon", "Ragnor", "Morfindel", "Elthoron", "Lúthrandir", "Boromir", "Laeron" ], 
										"F": [ "Elentari", "Tharanel", "Galadriel", "Noldorin", "Galadwen", "Melian", "Silanya", "Adunaphel", "Nolwen", "Morwen", "Aerithil", "Nirnaeth", "Aethra", "Hithriel", "Narmiriel", "Arwen", "Aerlinn", "Laerwen", "Aranel", "Lyssora", "Anya", "Aurelin", "Lyra", "Finduilas", "Vanya", "Nimlot", "Nimrodel", "Amarie", "Eleana", "Eirien", "Elenwe", "Faniel", "Aelyndil", "Lómeanor", "Faervel" ], 
										"Apellidos": [ ] 
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
		campos.push("");
		campos.push("Rostro");
		campos.push("Pelo");
		campos.push("Virtud");
		campos.push("");
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
	}
	habilidad() {
		return this.habilidades[Comun.random(this.habilidades.length, 0)];
	}
}

class Razas {
	constructor() {
		this.razas = [
						{ nombre: "Humano", peso: 75, habilidades: [ "Vivaz" ], modificadores: [ 0, 0, 0, 0, 0, 0], movimiento: 12 },
						{ nombre: "Elfo", peso: 5, habilidades: [ "Longevo", "Feérico" ], modificadores: [ 0, 1, -1, 0, 1, 0], movimiento: 12 },
						{ nombre: "Enano", peso: 5, habilidades: [ "Rotundo", "Sentidos pétreos" ], modificadores: [ 0, 1, -1, 0, 1, 0], movimiento: 8 },
						{ nombre: "Gnomo", peso: 5, habilidades: [ "Pequeño", "Comprender a los animales" ], modificadores: [ -1, 0, 1, 1, 0, 0], movimiento: 8 },
						{ nombre: "Mediano", peso: 5, habilidades: [ "Pequeño", "Sigilo natural" ], modificadores: [ -1, 1, 0, 0, 0, 1], movimiento: 8 },
						{ nombre: "Semielfo", peso: 3, habilidades: [ "Herencia feérica" ], modificadores: [ 0, 1, 0, 0, 0, 0], movimiento: 12 },
						{ nombre: "Semiorco", peso: 2, habilidades: [ "Infravisión" ], modificadores: [ 0, 0, 0, 0, 0, 0], movimiento: 12 }
					 ];
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
}

let nombres = new Nombres();
let rasgos = new Rasgos();
let habilidades = new Habilidades();
let razas = new Razas();
