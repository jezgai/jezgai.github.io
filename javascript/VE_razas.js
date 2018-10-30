class Raza {
	constructor(nombre, talentos, mov, nombres) {
		this._nombre = nombre;
		this._talentos = talentos;
		this._mov = mov;
		this._nombres = nombres;
	}
	
	get nombre() {
		return this._nombre;
	}
	get talentos() {
		return this._talentos;
	}
	get mov() {
		return this._mov;
	}
	get nombres() {
		return this._nombres;
	}
	
	nombrepj() {
		return this._nombres[ Comun.random(this._nombres.length, 0) ];
	}
}

class Razas {
	constructor() {
		this._razas = [];
		this._razas.push( new Raza("Elfo",     [ "Vista Aguda" , "Infravision" ],         12, [ "El1", "El2", "El3", "El4" ])               );
		this._razas.push( new Raza("Enano",    [ "Afin a la Piedra" , "Infravision" ],     9, [ "En1", "En2", "En3" ])                      );
		this._razas.push( new Raza("Mediano",  [ "Escurridizo" , "Certero"  ],             9, [ "Me1", "Me2", "Me3", "Me4" ])               );
		this._razas.push( new Raza("Humano",   [ "impetu Emprendedor",  "Adaptable" ],    12, [ "Hu1", "Hu2", "Hu3", "Hu4", "Hu5" ])        );
		this._razas.push( new Raza("Semielfo", [ "Vista Aguda" , "Impetu Emprendedor" ],  12, [ "Se1", "Se2", "Se3", "Se4", "Se5", "Se6" ]) );
		this._razas.push( new Raza("Gnomo",    [ "Don de lenguas" , "Infravision"  ],      9, [ "Gn1", "Gn2", "Gn3" ])                      );
		this._razas.push( new Raza("Orco",     [ "Agresivo" , "Odio a la luz solar"  ],   12, [ "Or1", "Or2", "Or3", "Or4" ])               );
		this._razas.push( new Raza("Trasgo",   [ "Escurridizo" , "Odio a la luz solar"  ], 9, [ "Tr1", "Tr2", "Tr3", "Tr4" ])               );
		this._razas.push( new Raza("Semiorco", [ "Agresivo" , "Impetu Emprendedor" ],     12, [ "So1", "So2", "So3", "So4", "So5", "So6" ]) );
	}
	
	get razas() {
		return this._razas;
	}
	
	raza(nombre) {
		var iraza=0;
		for ( iraza = 0; iraza < this._razas.length; iraza++ ) {
			if ( this._razas[iraza].nombre == nombre ) {
				return this._razas[iraza];
			}
		}
		return this.razas[ Comun.random(this._razas.length, 0)];
	}
}


let razas = new Razas();

