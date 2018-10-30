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
		this._razas.push( new Raza("Elfo",     [ "Vista Aguda" , "Infravisión" ],         12, [ "Gharil", "Siriel", "Mitindel", "Varsil", "Deasing", "Gilead" ]) );
		this._razas.push( new Raza("Enano",    [ "Afin a la Piedra" , "Infravisión" ],     9, [ "Brom", "Grorea", "Dumgal", "Moregard", "Rundhas" ])             );
		this._razas.push( new Raza("Mediano",  [ "Escurridizo" , "Certero"  ],             9, [ "Senda", "Seraphin", "Resa", "Muf", "Milena" ])                  );
		this._razas.push( new Raza("Humano",   [ "Ímpetu Emprendedor",  "Adaptable" ],    12, [ "Nat", "Patia", "Belf", "Sinta", "Wanla" ])                      );
		this._razas.push( new Raza("Semielfo", [ "Vista Aguda" , "Ímpetu Emprendedor" ],  12, [ "Gharil", "Siriel", "Mitindel", "Varsil", "Deasing", "Gilead" ]) );
		this._razas.push( new Raza("Gnomo",    [ "Don de lenguas" , "Infravisión"  ],      9, [ "Senda", "Seraphin", "Resa", "Muf", "Milena" ])                  );
		this._razas.push( new Raza("Orco",     [ "Agresivo" , "Odio a la luz solar"  ],   12, [ "Grama", "Thrum", "Gorrum", "Agra", "Karg", "Dragga" ])          );
		this._razas.push( new Raza("Trasgo",   [ "Escurridizo" , "Odio a la luz solar"  ], 9, [ "Grom", "Hargu", "Drog", "Igrim", "Harg", "Thurg", "Grima" ])    );
		this._razas.push( new Raza("Semiorco", [ "Agresivo" , "Ímpetu Emprendedor" ],     12, [ "Grama", "Thrum", "Gorrum", "Agra", "Karg", "Dragga", "Wanla" ]) );
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

