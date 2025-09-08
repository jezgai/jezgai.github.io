class RazaDj extends Especie {
	
	
	constructor(nombre, talentos, mov, nombres) {
		super(nombre, talentos, mov);
		this._nombres = nombres;
	}
	
	get nombres() {
		return this._nombres;
	}
	
	nombrepj() {
		return this._nombres[ Comun.random(this._nombres.length, 0) ];
	}
}


class RazasDj {
	constructor() {
		this._razas = [];
		this._razas.push( new Raza("Elfo",     [ "Vista Aguda" , "Infravisión élfica" ],         12, [ "Gharil", "Siriel", "Mitindel", "Varsil", "Deasing", "Gilead" ]) );
		this._razas.push( new Raza("Enano",    [ "Resistencia al desierto" , "Infravisión enana" ],    10, [ "Brom", "Grorea", "Dumgal", "Moregard", "Rundhas" ])             );
		this._razas.push( new Raza("Mediano",  [ "Escurridizo" , "Certero"  ],             8, [ "Senda", "Seraphin", "Resa", "Muf", "Milena" ])                  );
		this._razas.push( new Raza("Humano",   [ "Ímpetu Emprendedor",  "Adaptable" ],    12, [ "Nat", "Patia", "Belf", "Sinta", "Wanla" ])                      );
		this._razas.push( new Raza("Semielfo", [ "Vista Aguda" , "Ímpetu Emprendedor" ],  12, [ "Gharil", "Siriel", "Mitindel", "Varsil", "Deasing", "Gilead" ]) );
		this._razas.push( new Raza("Gnomo",    [ "Pillo" , "Certero"  ],      8, [ "Senda", "Seraphin", "Resa", "Muf", "Milena" ])                  );
		this._razas.push( new Raza("Trasgo",   [ "Escurridizo" , "Odio a la luz solar"  ], 8, [ "Grom", "Hargu", "Drog", "Igrim", "Harg", "Thurg", "Grima" ])    );
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


let razasDj = new RazasDj();

