
class ClaseJ {

	constructor(clase) {
		this._nombre = clase.nombre;
		this._talentos = clase.talentos;
		this._ntalentos = clase.ntalentos;
		this._daguante = clase.daguante;
		this._atrs = clase.atrs;
		this._atq = clase.atq;
		this._ins = clase.ins;
		this._hon = clase.hon;
		this._din = clase.din;
	}
		
	get nombre() {
		return this._nombre;
	}
	get talentos() {
		return this._talentos;
	}
	get daguante() {
		return this._daguante;
	}
	get atrs() {
		return this._atrs;
	}
	get atq() {
		return this._atq;
	}
	get ins() {
		return this._ins;
	}
	get hon() {
		return this._hon;
	}
	get din() {
		return (Comun.random(6,1) * this._din * 10);
	}
	
	set nombre(value) {
		this._nombre = value;
	}
	set talentos(value) {
		this._talentos = value;
	}
	set daguante(value) {
		this._daguante = value;
	}
	set atrs(value) {
		this._atrs = value;
	}
	set atq(value) {
		this._atq = value;
	}
	set ins(value) {
		this._ins = value;
	}
	set hon(value) {
		this._hon = value;
	}
	set din(value) {
		this._din = value;
	}

	talentos(nivel) {
		var intal = nivel - 1;
		if ( nivel > this._ntalentos.length ) {
			intal = this._ntalentos.length - 1;
		}
		var tal1 = [];
		var ital = 0;
		for (ital = 0; ital < this._talentos.length ; ital++ ) {
			tal1.push(this._talentos[ital]);
		}
		tal1 = Comun.shuffle(tal1);
		var taln = [];
		for (ital = 0; ital < this._ntalentos[intal]; ital++ ) {
			taln.push(tal1[ital]);
		}
		
		return taln;
	}

	pv(nivel) {
		var ptos = this._daguante;
		var ipv=0;
		for (ipv=1; ipv<nivel; ipv++) {
			ptos += Comun.random(this._daguante, 1);
		}
		return ptos;
	}

	atq(nivel) {
		var iatq = nivel - 1;
		if ( nivel > this._atq.length ) {
			iatq = this._atq.length - 1;
		}
		return this._atq[iatq];
	}

	ins(nivel) {
		var iins = nivel - 1;
		if ( nivel > this._ins.length ) {
			iins = this._ins.length - 1;
		}
		return this._ins[iins];
	}

}

class ClasesJ {
	
	constructor() {
		this._clases =
		[
			{
			  nombre : "Campesino",
			  talentos : [ "Artesano/a", "Ashigaru", "Comerciante", "Terco/a como una mula" ],
			  ntalentos : [ 2, 2, 2, 2, 3, 3, 3, 3, 3, 3 ],
			  daguante : 4,
			  hon : 0,
			  din : 2,
			  atrs : [ "CON" , "SAB" ],
			  atq : [ 0, 0, 1, 1, 2, 2, 3, 3, 4, 5 ],
			  ins : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
			},
			{
			  nombre : "Monje",
			  talentos : [ "Bondadoso", "Entrenado en X", "Fervor Fanático", "Palabra divina" ],
			  ntalentos : [ 2, 2, 2, 2, 3, 3, 3, 3, 3, 3 ],
			  daguante : 6,
			  hon : 0,
			  din : 3,
			  atrs : [ "DES" , "SAB" ],
			  atq : [ 0, 0, 1, 1, 2, 2, 3, 3, 4, 5 ],
			  ins : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
			},
			{
			  nombre : "Cortesano",
			  talentos : [ "Buena Reputación", "Bueno con las palabras", "Contactos", "Taimado" ],
			  ntalentos : [ 2, 2, 2, 2, 3, 3, 3, 3, 3, 3 ],
			  daguante : 4,
			  hon : 2,
			  din : 5,
			  atrs : [ "CAR" , "INT" ],
			  atq : [ 0, 0, 0, 1, 1, 2, 2, 3, 3, 3 ],
			  ins : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
			},
			{
			  nombre : "Samurai",
			  talentos : [ "Ataques múltiples", "Buenos sentidos", "Lucha con X", "Ronin" ],
			  ntalentos : [ 2, 2, 2, 2, 3, 3, 3, 3, 3, 3 ],
			  daguante : 8,
			  hon : 2,
			  din : 4,
			  atrs : [ "FUE" , "CON" ],
			  atq : [ 0, 1, 1, 2, 2, 3, 4, 5, 6, 7 ],
			  ins : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
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
				return new ClaseSO(this._clases[iclases]);
			}
		}
		return new ClaseJ(this._clases[Comun.random(this._clases.length, 0)]);
	}
}

let clasesJ = new ClasesJ();



