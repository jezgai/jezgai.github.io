
class ArmasyArmaduras {
	constructor() {
		this.armaduras = [ { armadura: "Escudo", da: 1, huecos: 1, calidad: 1 },
						   { armadura: "Casco", da: 1, huecos: 1, calidad: 1 },
						   { armadura: "Sin armadura", da: 11, huecos: 0, calidad: 0 },
						   { armadura: "Túnica de lienzo", da: 12, huecos: 1, calidad: 3 },
						   { armadura: "Cuero de foca", da: 13, huecos: 1, calidad: 4 },
						   { armadura: "Malla de escamas de hierro", da: 14, huecos: 1, calidad: 5 } ];
						   
		this.armas = [ { rasgo: "Punzante", arma: "Daga", tipo: "CaC", dañoAD: null, dañoCaC: 6, manos: 1, huecos: 1, calidad: 3 },
					   { rasgo: "Contundente", arma: "Porra", tipo: "CaC", dañoAD: null, dañoCaC: 6, manos: 1, huecos: 1, calidad: 3 },
					   { rasgo: "Cortante", arma: "Hoz", tipo: "CaC", dañoAD: null, dañoCaC: 6, manos: 1, huecos: 1, calidad: 3 },
					   { rasgo: "Contundente", arma: "Maza", tipo: "CaC", dañoAD: null, dañoCaC: 8, manos: 1, huecos: 2, calidad: 3 },
					   { rasgo: "Punzante", arma: "Lanza", tipo: "CaC", dañoAD: null, dañoCaC: 8, manos: 1, huecos: 2, calidad: 3 },
					   { rasgo: "Cortante", arma: "Hacha de mano", tipo: "CaC", dañoAD: null, dañoCaC: 8, manos: 1, huecos: 2, calidad: 3 },
					   { rasgo: "Cortante", arma: "Espada", tipo: "CaC", dañoAD: null, dañoCaC: 8, manos: 1, huecos: 2, calidad: 3 },
					   { rasgo: "Cortante o Contundente", arma: "Eku", tipo: "CaC", dañoAD: null, dañoCaC: 8, manos: 2, huecos: 3, calidad: 3 },
					   { rasgo: "Contundente", arma: "Martillo", tipo: "CaC", dañoAD: null, dañoCaC: 10, manos: 2, huecos: 3, calidad: 3 },
					   { rasgo: "Punzante", arma: "Arpón", tipo: "CaC", dañoAD: null, dañoCaC: 10, manos: 2, huecos: 3, calidad: 3 },
					   { rasgo: "Cortante", arma: "Hacha", tipo: "CaC", dañoAD: null, dañoCaC: 10, manos: 2, huecos: 2, calidad: 3 },
					   { rasgo: "Cortante", arma: "Espada larga", tipo: "CaC", dañoAD: null, dañoCaC: 10, manos: 2, huecos: 2, calidad: 3 },
					   { rasgo: "Cortante", arma: "Hachuela", tipo: "CaC", dañoAD: null, dañoCaC: 8, manos: 1, huecos: 2, calidad: 3 },
					   { rasgo: "Munición N/A", arma: "Honda", tipo: "AD", dañoAD: 4, dañoCaC: null, manos: 1, huecos: 1, calidad: 2 },
					   { rasgo: "Munición Flechas", arma: "Arco", tipo: "AD", dañoAD: 6, dañoCaC: null, manos: 2, huecos: 2, calidad: 3 },
					   { rasgo: "Munición Virotes", arma: "Ballesta", tipo: "AD", dañoAD: 4, dañoCaC: null, manos: 2, huecos: 3, calidad: 3 } ];
	}
	
	recuperaarmadura(nombre) {
		var i=0;
		for (i=0; i<this.armaduras.length; i++) {
			if ( this.armaduras[i].armadura == nombre ) {
				return this.armaduras[i];
			}
		}
		return { armadura: "Sin armadura", da: 11, huecos: 0, calidad: 0};
	}
	
	recuperaarma(nombre) {
		var i=0;
		for (i=0; i<this.armas.length; i++) {
			if ( this.armas[i].arma == nombre ) {
				return this.armas[i];
			}
		}
		return null;
	}
	
}


class Equipo {
	constructor() {
		this.armas         = [ { arma: "Daga", valor: 10},
							   { arma: "Porra", valor: 14},
							   { arma: "Hoz", valor: 16},
							   { arma: "Maza", valor: 20},
							   { arma: "Lanza", valor: 28},
							   { arma: "Hacha de mano", valor: 29},
							   { arma: "Espada", valor: 30},
							   { arma: "Eku", valor: 32},
							   { arma: "Martillo", valor: 34},
							   { arma: "Arpón", valor: 38},
							   { arma: "Hacha", valor: 39},
							   { arma: "Espada larga", valor: 40} ];
							   
		this.armaduras     = [ { armadura: "Sin armadura", valor: 3},
							   { armadura: "Túnica de lienzo", valor: 14},
							   { armadura: "Cuero de foca", valor: 19},
							   { armadura: "Malla de escamas de hierro", valor: 20}];

		this.yelmosescudos = [ { nombre: "Ninguno", valor: 13},
							   { nombre: "Yelmo", valor: 16},
							   { nombre: "Escudo", valor: 19},
							   { nombre: "Yelmo y escudo", valor: 20}];
		this.mazmorreo = [ "Cuerda 15 m.", "Poleas", "Cadena, 10 m.", "10 tizas", "Palanca", 
						   "2 antorchas", "Gancho de escalada", "Martillo", "Candado", "Grilletes",
						   "Espejo", "Palo, 3 m.", "Saco", "Machete", "5 Piquetas",
						   "Pergamino", "Linterna y aceite de ballena", "Orbe de algas brillantes", "Babosa", "Perla de conjuro" ];
						   
	    this.general1 = [ "2 antorchas", "Cepo", "Pala", "Fuelle",  "Grasa", 
						  "Sierra", "Cubo", "Abrojos", "Cincel", "Taladro",
						  "Caña de pescar", "Canicas", "Pegamento", "Pico", "Reloj de arena", 
						  "Red", "Tenazas", "Ganzúa", "Lima de metal", "Arma" ];
	    this.general2 = [ "2 antorchas", "Esponja", "Lente", "Perfume", "Cuerno", 
						  "Botella", "Jabón", "Catalejo", "Bote de brea", "Cordel", 
						  "Joyas falsas", "Baraja de cartas", "Dados", "Pintura facial", "Silbato", 
						  "Instrumento", "Pluma y tinta", "Campana pequeña", "Vejiga de aire", "Arma" ];
	}
	
	arma() {
		var varma = Comun.random(40,1);
		var i=0;
		for (i=0; i<this.armas.length; i++) {
			if ( this.armas[i].valor >= varma ) {
				return this.armas[i].arma;
			}
		}
		return this.armas[0].arma;
	}
	
	armadura() {
		var varmadura = Comun.random(20,1);
		var i=0;
		for (i=0; i<this.armaduras.length; i++) {
			if ( this.armaduras[i].valor >= varmadura ) {
				return this.armaduras[i].armadura;
			}
		}
		return this.armaduras[0].armadura;
	}
	
	yelmos() {
		var vyelmo = Comun.random(20,1);
		var i=0;
		for (i=0; i<this.yelmosescudos.length; i++) {
			if ( this.yelmosescudos[i].valor >= vyelmo ) {
				return this.yelmosescudos[i].nombre;
			}
		}
		return this.yelmosescudos[0].nombre;
	}
	
	equipomazmorreo() {
		var vequipo1 = Comun.random(20,1);
		var vequipo2 = Comun.random(20,1);
		var equipopj = [];
		equipopj.push(this.mazmorreo[vequipo1-1]);
		equipopj.push(this.mazmorreo[vequipo2-1]);
		return equipopj;
	}
	
	equipogeneral() {
		var vequipo1 = Comun.random(20,1);
		var vequipo2 = Comun.random(20,1);
		var equipopj = [];
		equipopj.push(this.general1[vequipo1-1]);
		equipopj.push(this.general2[vequipo2-1]);
		return equipopj;
	}
	
}

let armas = new ArmasyArmaduras();

let equipos = new Equipo();
