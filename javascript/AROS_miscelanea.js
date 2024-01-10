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

class Nombres {
    constructor() {
        this.nombresF = [ "Agune", "Beatriz", "Breagan", "Bronwyn", "Cannora",
                            "Drelil", "Elgile", "Esme", "Griya", "Henaine",
                            "Lirann", "Lirathil", "Lisabeth", "Moralil", "Morgwen",
                            "Sybil", "Theune", "Wenain", "Ygwal", "Yslen" ];
        this.nombresM = [ "Arwel", "Bevan", "Boroth", "Borrid", "Breagle",
                            "Breglor", "Canhoreal", "Emrys", "Ethex", "Gringle",
                            "Grinwit", "Gruwid", "Gruwth", "Gwestin", "Mannog",
                            "Melnax", "Orthax", "Triunein", "Wenlan", "Yirmeor" ];
        this.apellidos = [ "Abernathy", "Addercap", "Burl", "Candlewick", "Cormick",
                            "Crumwaller", "Dunswallow", "Getri", "Glass", "Harkness",
                            "Harper", "Loomer", "Malksmilk", "Smythe", "Sunderman",
                            "Swinney", "Thatcher", "Tolmen", "Weaver", "Wolder" ];
    }
    
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
	}
    
}


class Rasgos {
	constructor() {
		this.fisico = [ "Demacrado", "Flaco", "Esbelto", "Enjuto", "Fofo", "Normal",
						"Normal", "Atlético", "Robusto", "Musculoso", "Mazado", "Enorme" ];
		this.rostro = [ "Aguileño", "Alargado", "Contraído", "Cincelado", "Contundente", "Cuadrado",
						"Delicado", "Huesudo", "Hundido", "Lobuno", "Ratonil", "Redondo"];
		this.altura = [ "Pequeño", "Bajo", "Normal", "Normal", "Alto", "Imponente" ];
		this.pelo = [ "Calvo", "Coleta", "Despeinado", "Encrespado", "Engominado",
						"Erizado", "Graso", "Lacio", "Largo", "Lujoso",
						"Mohicano", "Ondulado", "Ralo", "Rastas", "Recogido",
						"Recortado", "Rizado", "Sedoso", "Sucio", "Trenzado" ];
		this.ropaje = [ "Antigua", "Ceremonial", "Decorada", "Excéntrica", "Elegante", "De moda",
						"Sucia", "Manchada", "Rajada", "Raída", "Parcheada", "Simple" ];
		this.habla = [ "Directa", "Resonante", "Velada", "Críptica", "Monótona", "Florida",
						"Formal", "Grave", "Murmurante", "Pintoresca", "Chirriante", "Susurrante" ];
		this.pasion = [ "Vago (N/A)", "Atletismo (FUE)", "Acrobacias (DES)", "Trabajar duro (CON)", "Aprender (INT)",
						"Experiencia (SAB)", "Socializar (CAR)", "Artes marciales (FUE)", "Artesanía (DES)", "Cocinar (CON)",
						"Magia (INT)", "Espiritualidad (SAB)", "Música (CAR)", "Nadar (FUE)", "Viajar (CON)",
						"Bailar (DES)", "Ciencia (INT)", "Tiro al blanco (SAB)", "Arte (CAR)", "Prodigio (escoge 2)" ];
	}
	
	
	rasgos() {
		var rasgospj = [];
		rasgospj.push(this.fisico[Comun.random(this.fisico.length,0)]);
		rasgospj.push(this.rostro[Comun.random(this.rostro.length,0)]);
		rasgospj.push(this.altura[Comun.random(this.altura.length,0)]);
		rasgospj.push(this.pelo[Comun.random(this.pelo.length,0)]);
		rasgospj.push(this.ropaje[Comun.random(this.ropaje.length,0)]);
		rasgospj.push(this.habla[Comun.random(this.habla.length,0)]);
		rasgospj.push(this.pasion[Comun.random(this.pasion.length,0)]);
		return rasgospj;
	}
	
	lrasgos() {
		var literales = [];
		literales.push("Físico");
		literales.push("Rostro");
		literales.push("Altura");
		literales.push("Pelo");
		literales.push("Vestimenta");
		literales.push("Habla");
		literales.push("Pasión");
		return literales;
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

let nombres = new Nombres();
let rasgos = new Rasgos();
