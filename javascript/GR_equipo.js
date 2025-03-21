
class ArmasyArmaduras {
	constructor() {
		this.armaduras = [ { armadura: "Escudo", da: 1, huecos: 1, calidad: 1 },
						   { armadura: "Casco", da: 1, huecos: 1, calidad: 1 },
						   { armadura: "Gambesón", da: 12, huecos: 1, calidad: 3 },
						   { armadura: "Brigantina", da: 13, huecos: 2, calidad: 4 },
						   { armadura: "Cota", da: 14, huecos: 3, calidad: 5 },
						   { armadura: "Placas", da: 15, huecos: 4, calidad: 6 },
						   { armadura: "Placas completa", da: 16, huecos: 5, calidad: 7 } ];
						   
		this.armas = [ { arma: "Cuchillo", tipo: "CaC", dañoAD: 4, dañoCaC: 4, manos: 1, huecos: 0.5, calidad: 3, rasgos: [ "Ligera", "Burda" ] },
					   { arma: "Porra", tipo: "CaC", dañoAD: null, dañoCaC: 6, manos: 1, huecos: 1, calidad: 3, rasgos: [ "Burda" ] },
					   { arma: "Porra reforzada", tipo: "CaC", dañoAD: null, dañoCaC: 8, manos: 1, huecos: 2, calidad: 3, rasgos: [ "Burda" ] },
					   { arma: "Gran porra", tipo: "CaC", dañoAD: null, dañoCaC: 10, manos: 2, huecos: 3, calidad: 3, rasgos: [ "Burda" ] },
					   { arma: "Daga", tipo: "CaC", dañoAD: 4, dañoCaC: 6, manos: 1, huecos: 0.5, calidad: 3, rasgos: [ "Ligera" ] },
					   { arma: "Látigo", tipo: "CaC", dañoAD: null, dañoCaC: 4, manos: 1, huecos: 0.5, calidad: 3, rasgos: [ "Ligera", "Larga" ] },
					   { arma: "Maza", tipo: "CaC", dañoAD: null, dañoCaC: 6, manos: 1, huecos: 1, calidad: 3, rasgos: [ "Brutal" ] },
					   { arma: "Lanza corta", tipo: "CaC", dañoAD: null, dañoCaC: 6, manos: 1, huecos: 1, calidad: 3, rasgos: [ "Larga" ] },
					   { arma: "Hacha", tipo: "CaC", dañoAD: null, dañoCaC: 6, manos: 1, huecos: 1, calidad: 3, rasgos: [ "Pesada" ] },
					   { arma: "Espada corta", tipo: "CaC", dañoAD: null, dañoCaC: 6, manos: 1, huecos: 1, calidad: 3, rasgos: [ "Defensiva" ] },
					   { arma: "Vara reforzada", tipo: "CaC", dañoAD: null, dañoCaC: 6, manos: 2, huecos: 1, calidad: 3, rasgos: [ "Defensiva", "Larga" ] },
					   { arma: "Horca", tipo: "CaC", dañoAD: null, dañoCaC: 6, manos: 2, huecos: 1, calidad: 3, rasgos: [ "Brutal", "Larga" ] },
					   { arma: "Hacha de batalla", tipo: "CaC", dañoAD: null, dañoCaC: 8, manos: 1, huecos: 2, calidad: 3, rasgos: [ "Pesada" ] },
					   { arma: "Espada larga", tipo: "CaC", dañoAD: null, dañoCaC: 8, manos: 1, huecos: 2, calidad: 3, rasgos: [ "Defensiva" ] },
					   { arma: "Lanza larga", tipo: "CaC", dañoAD: null, dañoCaC: 8, manos: 1, huecos: 2, calidad: 3, rasgos: [ "Larga" ] },
					   { arma: "Lucero del alba", tipo: "CaC", dañoAD: null, dañoCaC: 8, manos: 1, huecos: 2, calidad: 3, rasgos: [ "Brutal" ] },
					   { arma: "Sable", tipo: "CaC", dañoAD: null, dañoCaC: 8, manos: 1, huecos: 1, calidad: 3, rasgos: [ "Ligera" ] },
					   { arma: "Guja", tipo: "CaC", dañoAD: null, dañoCaC: 8, manos: 2, huecos: 2, calidad: 3, rasgos: [ "Brutal", "Larga" ] },
					   { arma: "Alabarda", tipo: "CaC", dañoAD: null, dañoCaC: 10, manos: 2, huecos: 3, calidad: 3, rasgos: [ "Larga" ] },
					   { arma: "Espadón", tipo: "CaC", dañoAD: null, dañoCaC: 10, manos: 2, huecos: 3, calidad: 3, rasgos: [ "Defensiva" ] },
					   { arma: "Gran Hacha", tipo: "CaC", dañoAD: null, dañoCaC: 10, manos: 2, huecos: 3, calidad: 3, rasgos: [ "Pesada" ] },
					   { arma: "Gran maza", tipo: "CaC", dañoAD: null, dañoCaC: 10, manos: 2, huecos: 3, calidad: 3, rasgos: [ "Brutal" ] },
					   { arma: "Alfanjón", tipo: "CaC", dañoAD: null, dañoCaC: 10, manos: 2, huecos: 2, calidad: 3, rasgos: [ "Ligera" ] },
					   { arma: "Honda", tipo: "AD", dañoAD: 4, dañoCaC: null, manos: 1, huecos: 0.5, calidad: 3, rasgos: [ "Ligera" ] },
					   { arma: "Cuchillos", tipo: "AD", dañoAD: 4, dañoCaC: null, manos: 1, huecos: 0.5, calidad: 4, rasgos: [ "Arrojadiza" ] },
					   { arma: "Arco", tipo: "AD", dañoAD: 6, dañoCaC: null, manos: 2, huecos: 1, calidad: 3, rasgos: [ "Ligera" ] },
					   { arma: "Ballesta ligera", tipo: "AD", dañoAD: 6, dañoCaC: null, manos: 2, huecos: 1, calidad: 3, rasgos: [ "Recarga" ] },
					   { arma: "Ballesta pesada", tipo: "AD", dañoAD: 8, dañoCaC: null, manos: 2, huecos: 2, calidad: 3, rasgos: [ "Recarga" ] },
					   { arma: "Dardos", tipo: "AD", dañoAD: 6, dañoCaC: null, manos: 1, huecos: 0.5, calidad: 2, rasgos: [ "Arrojadiza" ] },
					   { arma: "Hachuelas", tipo: "AD", dañoAD: 6, dañoCaC: null, manos: 1, huecos: 0.5, calidad: 2, rasgos: [ "Arrojadiza" ] },
					   { arma: "Arco compuesto", tipo: "AD", dañoAD: 8, dañoCaC: null, manos: 2, huecos: 2, calidad: 3, rasgos: [ "Ligera" ] },
					   { arma: "Arbalesta", tipo: "AD", dañoAD: 10, dañoCaC: null, manos: 2, huecos: 3, calidad: 3, rasgos: [ "Recarga" ] },
					   { arma: "Jabalinas", tipo: "AD", dañoAD: 8, dañoCaC: null, manos: 1, huecos: 1, calidad: 2, rasgos: [ "Arrojadiza" ] } ];
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
		this.armas         = [  { arma: "Cuchillo", valor: 2 },
								{ arma: "Porra", valor: 5 },
								{ arma: "Daga", valor: 15 },
								{ arma: "Látigo", valor: 17 },
								{ arma: "Maza", valor: 20 },
								{ arma: "Lanza corta", valor: 23 },
								{ arma: "Hacha", valor: 40 },
								{ arma: "Espada corta", valor: 60 },
								{ arma: "Honda", valor: 70 },
								{ arma: "Arco", valor: 80 },
								{ arma: "Vara reforzada", valor: 85 },
								{ arma: "Horca", valor: 87 },
								{ arma: "Jabalinas", valor: 90 },
								{ arma: "Hacha de batalla", valor: 92 },
								{ arma: "Espada larga", valor: 94 },
								{ arma: "Sable", valor: 96 },
								{ arma: "Espadón", valor: 97 },
								{ arma: "Gran Hacha", valor: 98 },
								{ arma: "Gran maza", valor: 99 },
								{ arma: "Ballesta ligera", valor: 100 } ];
							   
		this.armaduras     = [ { armadura: "Sin armadura", valor: 3},
							   { armadura: "Gambesón", valor: 14},
							   { armadura: "Brigantina", valor: 19},
							   { armadura: "Cota", valor: 20}];

		this.yelmosescudos = [ { nombre: "Ninguno", valor: 13},
							   { nombre: "Yelmo", valor: 16},
							   { nombre: "Escudo", valor: 19},
							   { nombre: "Yelmo y escudo", valor: 20}];
		this.mazmorreo = [ "Aceite de lámpara", "Antorchas, 5", "Cadena, 3 metros", "Candado", "Cuerda, 15 metros", 
						   "Espejo", "Gancho de escalada", "Grilletes", "Linterna", "Martillo",
						   "Palanca", "Palo, 3 metros", "Pellejo de agua", "Piquetas, 5", "Poleas", 
						   "Saco", "Tienda de campaña", "Tiza, 10", "Velas, 5", "Yesca y pedernal" ];
						   
	    this.general1 = [ "Abrojos", "Canicas", "Caña de pescar", "Cincel",  "Clavos", 
						  "Cubo", "Fuelle", "Ganzúas", "Grasa", "Lima de metal",
						  "Pala", "Pegamento", "Pico", "Pinzas", "Red", 
						  "Reloj de arena", "Sierra", "Taladro", "Trampa para osos", "Vejiga de aire" ];
	    this.general2 = [ "Baraja de cartas", "Botella", "Campaña pequeña", "Catalejo", "Cordel", 
						  "Cuerno", "Esponja", "Incienso", "Instrumento", "Jabón", 
						  "Joyas falsas", "Juego de dados", "Lente", "Libro en blanco", "Ollas de cocina", 
						  "Perfume", "Pintura facial", "Pluma y tinta", "Silbato", "Tarro de alquitrán" ];
	}
	maximoarmas() {
		return 100;
	}
	
	arma(maximo) {
		var varma = Comun.random(maximo,1);
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
