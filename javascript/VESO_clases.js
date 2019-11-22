
class ClaseSO {

	constructor(clase) {
		this._nombre = clase.nombre;
		this._talentos = clase.talentos;
		this._ntalentos = clase.ntalentos;
		this._daguante = clase.daguante;
		this._atrs = clase.atrs;
		this._atq = clase.atq;
		this._ins = clase.ins;
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

class ClasesSO {
	
	constructor() {
		this._clases =
		[
			{
			  nombre : "Explorador",
			  talentos : [ "Nacido salvaje", "Hermano caballo", "Cazador nocturno", "Ojo de águila" ],
			  ntalentos : [ 2, 2, 2, 2, 3, 3, 3, 3, 3, 3 ],
			  daguante : 6,
			  atrs : [ "SAB" , "DES" ],
			  atq : [ 1, 1, 2, 2, 3, 3, 4, 5, 6, 7 ],
			  ins : [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ],
			},
			{
			  nombre : "Pistolero",
			  talentos : [ "El más rápido del oeste", "La tumba puede esperar", "Le llamaban Dos pistolas", "Matador" ],
			  ntalentos : [ 2, 2, 2, 2, 3, 3, 3, 3, 3, 3 ],
			  daguante : 8,
			  atrs : [ "DES" , "FUE" ],
			  atq : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
			  ins : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
			},
			{
			  nombre : "Predicador",
			  talentos : [ "Más sabe el diablo...", "La palabra de Dios", "El buen pastor", "Justicia divina" ],
			  ntalentos : [ 2, 2, 2, 2, 3, 3, 3, 3, 3, 3 ],
			  daguante : 4,
			  atrs : [ "INT" , "CON" ],
			  atq : [ 0, 0, 1, 1, 2, 2, 3, 3, 4, 4 ],
			  ins : [ 0, 0, 1, 2, 3, 4, 5, 6, 7, 8 ],
			},
			{
			  nombre : "Tahur",
			  talentos : [ "Un as bajo la manga", "La mano del muerto", "No es nada personal", "Nunca juegues de espaldas a la puerta" ],
			  ntalentos : [ 2, 2, 2, 2, 3, 3, 3, 3, 3, 3 ],
			  daguante : 6,
			  atrs : [ "CAR" , "SAB" ],
			  atq : [ 0, 1, 1, 2, 2, 3, 3, 4, 4, 5 ],
			  ins : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
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
		return new ClaseSO(this._clases[Comun.random(this._clases.length, 0)]);
	}
}

let clasesSO = new ClasesSO();



