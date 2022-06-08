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
	
}

class Rasgos {
	constructor() {
		this.alineamientos = [ { alineamiento: "Legal", valor: 5},
							   { alineamiento: "Neutral", valor: 15},
							   { alineamiento: "Caótico", valor: 20}];
		this.fisico = [ "Atlético", "Cimbreño", "Corpulento", "Corto", "Delicado",
						"Demacrado", "Descarnado", "Destacado", "Enérgico", "Esbelto", 
						"Escultural", "Flácido", "Fuerte", "Grueso", "Larguirucho",
						"Musculoso", "Nervioso", "Pequeño", "Rasgado", "Resistente" ];
		this.cara = [ "Aguda", "Alargada", "Ancha", "Cincelada", "De rata",
					"Cuadrada", "De halcón", "De halcón", "Delicada", "Embotada",
					"Estrecha", "Hinchada", "Huesuda", "Hundida", "Imbécil",
					"Patricio", "Pellizcada", "Redonda", "Rota", "Suave" ];
		this.piel = [ "Aceitosa", "Apestosa", "Bronceada", "Cetriza", "Cicatriz de batalla",
						"Cicatriz de látigo", "Cicatriz quemadura", "Curtida", "Maquillaje", "Marca nacimiento",
						"Oscura", "Pálida", "Perfecta", "Perforada", "Picada de viruela",
						"Pintura de Guerra", "Quemada por el sol", "Rosada", "Rugosa", "Tatuada" ];
		this.pelo = [ "Aceitoso", "Calvo", "Cola de caballo", "Cresta", "Despeinado",
						"Engrasado", "Hirsuto", "Lacio", "Largo", "Lujoso",
						"Moño", "Muy rizado", "Ondulado", "Rastas", "Recortado",
						"Rizado", "Sedoso", "Sucio", "Tenue", "Trenzado" ];
		this.vestimenta = [ "A la moda", "Antiguas", "Ceremoniales", "Decoradas", "Desaliñadas",
							"Desgarradas", "Deshilachadas", "De talla inferior", "De talla mayor", "Elegantes",
							"Ensangrentadas", "Excéntricas", "Extranjeras", "Extravagantes", "Librea",
							"Manchadas", "Parcheadas", "Perfumadas", "Rancias", "Sucias" ];
		this.habla = [ "Arrastrada", "Balbuceante", "Ceceante", "Chillona", "Contundente",
						"Críptica", "Dialectal", "Entrecortada", "Explosiva", "Florida",
						"Formal", "Grave", "Incoherente", "Lenta", "Pintoresca",
						"Precisa", "Rápida", "Ronca", "Susurrante", "Tartamuda" ];
		this.virtud = [ "Ambición", "Atención", "Cautela", "Corrección", "Curiosidad",
						"Disciplina", "Educación", "Estoicismo", "Generosidad", "Honestidad",
						"Honorabilidad", "Humildad", "Idealismo", "Justicia", "Lealtad",
						"Misericordia", "Serenidad", "Sociabilidad", "Tolerancia", "Valentía" ];
		this.trasfondo = [ "Alquimista", "Carnicero", "Carterista", "Charlatán", "Clérigo",
							"Cocinero", "Comerciante", "Contrabandista", "Cultista", "Estudiante",
							"Forajido", "Herbolario", "Intérprete", "Jugador", "Ladrón",
							"Mago", "Marinero", "Mendigo", "Mercenario", "Rastreador" ];
		this.vicio = [ "", "", "", "", "", 
							"", "", "", "", "",
							"", "", "", "", "",
							"", "", "", "", "" ];
		this.desdicha = [ "", "", "", "", "", 
							"", "", "", "", "",
							"", "", "", "", "",
							"", "", "", "", "" ];
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
		rasgospj.push("Alineamiento: " + this.alineamiento());
		
		rasgospj.push("Físico: " + this.fisico[Comun.random(20,0)]);
		rasgospj.push("Cara: " + this.cara[Comun.random(20,0)]);
		rasgospj.push("Piel: " + this.piel[Comun.random(20,0)]);
		rasgospj.push("Pelo: " + this.pelo[Comun.random(20,0)]);
		
		rasgospj.push("Vestimenta: " + this.vestimenta[Comun.random(20,0)]);
		rasgospj.push("Habla: " + this.habla[Comun.random(20,0)]);
		rasgospj.push("Virtud: " + this.virtud[Comun.random(20,0)]);
		rasgospj.push("Trasfondo: " + this.trasfondo[Comun.random(20,0)]);
		rasgospj.push("Vicio: " + this.vicio[Comun.random(20,0)]);
		rasgospj.push("Desdicha: " + this.desdicha[Comun.random(20,0)]);
		
		return rasgospj;
		
	}
	
}

let rasgos = new Rasgos();
