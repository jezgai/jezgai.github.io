class ClaseSL extends ClaseBase {

	constructor(clase) {
		super(clase);
		this._pgniv6 = clase.pgniv6;
		this._randomposteriores = clase.randomposteriores;
		this._numtalentosniveles = clase.numtalentosniveles;
		this._talentosposteriores = clase.talentosposteriores;
		this._pod = clase.pod;
	}
	
	get pgniv6() {
		return this._pgniv6;
	}
	
	get randomposteriores() {
		return this._randomposteriores;
	}
	
	get numtalentosniveles() {
		return this._numtalentosniveles;
	}
		
	get talentosposteriores() {
		return this._talentosposteriores;
	}
	
	get pod() {
		return this._pod;
	}
	set pod(value) {
		this._pod = value;
	}

	talentos(nivel) {
		var tal = this._talentos.clone();
		var restotalentos = this._talentosposteriores.clone();
		if ( this._randomposteriores == true )
			restotalentos = Comun.shuffle(restotalentos);
		var ntalentosraza = tal.length;
		var ital = nivel-1;
		if ( nivel > this._numtalentosniveles.length )
			ital = this._numtalentosniveles.length-1;
		var i=0;
		for (i=0; i < this._numtalentosniveles[ital]-ntalentosraza && i<restotalentos.length; i++) {
			tal.push(restotalentos[i]);
		}
		return tal;
	}

	pod(nivel) {
		var ipod = nivel - 1;
		if ( nivel > this._pod.length ) {
			ipod = this._pod.length - 1;
		}
		return this._pod[ipod];
	}

}

class ClasesSL {
	
	constructor() {
		this._clases =
		[
			{
			  nombre : "Guerrero",
			  daguante : 8,
			  pgniv6 : 3,
			  talentos : [ "Lucha con X", "Ataques múltiples" ],
			  randomposteriores: true,
			  numtalentosniveles : [ 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6 ],
			  talentosposteriores : [ "Encontrar el punto débil", "Salvaje", "Matón", "Maestro de armas", "Bruto", "Desesperado", "Púgil" ],
			  atrs : [ "FUE" , "CON", "DES" ],
			  atq : [ 0, 1, 1, 2, 2, 3, 4, 5, 6, 7, 7, 8, 9, 9],
			  pod : [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			  ins : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 11, 11],
			},{
			  nombre : "Pícaro",
			  daguante : 6,
			  pgniv6 : 2,
			  talentos : [ "Emboscar", "Dedos ágiles" ],
			  randomposteriores: true,
			  numtalentosniveles : [ 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6 ],
			  talentosposteriores : [ "Reflejos", "Acróbata", "Bufón", "Leer magia", "Diestro", "Nocturno", "Superviviente", "Culebrilla", "Bardo" ],
			  atrs : [ "DES", "SAB", "CAR" ],
			  atq : [ 0, 0, 1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 7, 7],
			  pod : [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			  ins : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 11 ],
			},
			{
			  nombre : "Hechicero",
			  daguante : 4,
			  pgniv6 : 2,
			  talentos : [ "Senda del poder", "Transferir esencia" ],
			  randomposteriores: false,
			  numtalentosniveles : [ 2, 2, 2, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4 ],
			  talentosposteriores : [ "Idioma adicional", "Aliado" ],
			  atrs : [ "INT", "SAB", "DES" ],
			  atq : [ 0, 0, 0, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4 ],
			  pod : [ 1, 2, 4, 5, 7, 8, 10, 12, 14, 15, 17, 19, 20, 22 ],
			  ins : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10],
			},
		]
	}
	
	get clases() {
		return this._clases;
	}

	set clases(value) {
		this._clases = value;
	}
	
	clase(nombre) {
		var iclases=0;
		for (iclases=0; iclases<this._clases.length; iclases++) {
			if ( this._clases[iclases].nombre == nombre ) {
				return new ClaseSL(this._clases[iclases]);
			}
		}
		return new ClaseSL(this._clases[Comun.random(this._clases.length, 0)]);
	}
}

let clasesSL = new ClasesSL();

