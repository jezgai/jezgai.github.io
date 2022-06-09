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
		
		rasgospj.push("Ropaje: " + this.ropaje[Comun.random(20,0)]);
		rasgospj.push("Habla: " + this.habla[Comun.random(20,0)]);
		rasgospj.push("Virtud: " + this.virtud[Comun.random(20,0)]);
		rasgospj.push("Trasfondo: " + this.trasfondo[Comun.random(20,0)]);
		rasgospj.push("Vicio: " + this.vicio[Comun.random(20,0)]);
		rasgospj.push("Desgracia: " + this.desgracia[Comun.random(20,0)]);
		
		return rasgospj;
		
	}
	
}

let rasgos = new Rasgos();
