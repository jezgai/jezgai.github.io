
class Clase {

	constructor(clase) {
		this._nombre = clase.nombre;
		this._talentos = clase.talentos;
		this._daguante = clase.daguante;
		this._atrs = clase.atrs;
		this._atq = clase.atq;
		this._pod = clase.pod;
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
	get pod() {
		return this._pod;
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
	set pod(value) {
		this._pod = value;
	}
	set ins(value) {
		this._ins = value;
	}

	talentos(nivel) {
		var tal = [];
		var intal=0;
		for (intal=0; intal<this._talentos.length && nivel>=this._talentos[intal].niv; intal++) {
			var ital=0;
			for (ital=0; ital < this._talentos[intal].tln.length; ital++) {
				tal.push(this._talentos[intal].tln[ital]);
			}
		}
		return tal;
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

	pod(nivel) {
		var ipod = nivel - 1;
		if ( nivel > this._pod.length ) {
			ipod = this._pod.length - 1;
		}
		return this._pod[ipod];
	}

	ins(nivel) {
		var iins = nivel - 1;
		if ( nivel > this._ins.length ) {
			iins = this._ins.length - 1;
		}
		return this._ins[iins];
	}

}

class Clases {
	
	constructor() {
		this._clases =
		[
			{
			  nombre : "Guerrero",
			  talentos : [ { niv : 1, tln : ["Lucha con X", "Ataques Multiples"]}, { niv : 6, tln : ["Ataque certero"]} ],
			  daguante : 8,
			  atrs : [ "FUE" , "CON", "DES" ],
			  atq : [ 0, 1, 1, 2, 2, 3, 4, 5, 6, 7, 7, 8, 9, 9],
			  pod : [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			  ins : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10],
			},
			{
			  nombre : "Hechicero",
			  talentos : [ { niv : 1, tln : ["Sensibilidad Magica", "Transferir Esencia"]}, { niv : 6, tln : ["Sirviente animal"]} ],
			  daguante : 4,
			  atrs : [ "INT" , "SAB", "CAR" ],
			  atq : [ 0, 0, 0, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5],
			  pod : [ 1, 2, 4, 5, 7, 8, 10, 12, 14, 15, 17, 19, 20, 22],
			  ins : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10],
			},
			{
			  nombre : "Bribon",
			  talentos : [ { niv : 1, tln : ["Emboscar" , "Dedos Agiles"]}, { niv : 6, tln : ["Leer magia"]} ],
			  daguante : 6,
			  atrs : [ "DES" , "INT", "CAR" ],
			  atq : [ 0, 0, 1, 1, 2, 2, 3, 3, 4, 5, 6, 6, 7, 7],
			  pod : [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			  ins : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 11],
			},
			{
			  nombre : "Bardo",
			  talentos : [ { niv : 1, tln : ["Leer lenguajes" , "Encantar persona/monstruo"]}, { niv : 6, tln : ["Sensibilidad Magica"]} ],
			  daguante : 6,
			  atrs : [ "DES" , "INT", "CAR" ],
			  atq : [ 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6],
			  pod : [ 1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10, 10, 11, 12],
			  ins : [ 0, 1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10],
			},
			{
			  nombre : "Clerigo",
			  talentos : [ { niv : 1, tln : ["Sensibilidad a la fe", "Expulsar muertos"]}, { niv : 6, tln : ["Manos sanadoras"]} ],
			  daguante : 6,
			  atrs : [ "INT" , "SAB", "CON" ],
			  atq : [ 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6],
			  pod : [ 1, 2, 4, 5, 7, 8, 10, 12, 14, 15, 17, 19, 20, 22],
			  ins : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10],
			},
			{
			  nombre : "Multiforme",
			  talentos : [ { niv : 1, tln : ["Transformacion" , "Guardabosques"]}, { niv : 6, tln : ["Habla animal"]} ],
			  daguante : 6,
			  atrs : [ "DES" , "SAB", "FUE" ],
			  atq : [ 0, 0, 1, 1, 2, 2, 3, 4, 5, 6, 6, 7, 7, 7],
			  pod : [ 1, 2, 3, 4, 5, 6, 7, 7, 8, 8, 9, 9, 10, 10],
			  ins : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 11, 11, 11],
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
				return new Clase(this._clases[iclases]);
			}
		}
		return new Clase(this._clases[Comun.random(this._clases.length, 0)]);
	}
}

let clases = new Clases();



