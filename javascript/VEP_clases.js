
class ClaseP {

	constructor(clase) {
		this._nombre = clase.nombre;
		this._talentos = clase.talentos;
		this._daguante = clase.daguante;
		this._atrs = clase.atrs;
		this._atq = clase.atq;
		this._pP = clase.pP;
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
	get pP() {
		return this._pP;
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
	set pP(value) {
		this._pP = value;
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

	pP(nivel) {
		var ipP = nivel - 1;
		if ( nivel > this._pP.length ) {
			ipP = this._pP.length - 1;
		}
		return this._pP[ipP];
	}

	ins(nivel) {
		var iins = nivel - 1;
		if ( nivel > this._ins.length ) {
			iins = this._ins.length - 1;
		}
		return this._ins[iins];
	}

}

class ClasesP {
	
	constructor() {
		this._clases =
		[
			{
			  nombre : "Profesor/a",
			  talentos : [ { niv : 1, tln : ["Lo leí en un libro", "Camaleón social"]} ],
			  daguante : 6,
			  atrs : [ "INT" , "SAB" ],
			  atq : [ 0, 0, 1, 2, 2],
			  pP : [ 1, 3, 5, 7, 9],
			  ins : [ 0, 0, 1, 2, 3],
			},
			{
			  nombre : "Tipo/a duro/a",
			  talentos : [ { niv : 1, tln : ["Con un par", "Resistente"]} ],
			  daguante : 8,
			  atrs : [ "FUE" , "CON" ],
			  atq : [ 2, 3, 4, 5, 6],
			  pP : [ 0, 0, 0, 0, 0],
			  ins : [ 0, 1, 2, 3, 4],
			},
			{
			  nombre : "Cazatesoros",
			  talentos : [ { niv : 1, tln : ["Sonrisa angelical", "Ideas frescas"]} ],
			  daguante : 6,
			  atrs : [ "DES" , "FUE" ],
			  atq : [ 1, 2, 3, 4, 5],
			  pP : [ 0, 0, 0, 0, 0],
			  ins : [ 1, 2, 3, 4, 5],
			},
			{
			  nombre : "Mecenas",
			  talentos : [ { niv : 1, tln : ["Herencia", "Contactos"]} ],
			  daguante : 4,
			  atrs : [ "CAR" , "INT" ],
			  atq : [ 1, 2, 3, 4, 5],
			  pP : [ 1, 2, 3, 4, 5],
			  ins : [ 0, 1, 2, 3, 4],
			},
			{
			  nombre : "Colega",
			  talentos : [ { niv : 1, tln : ["Suerte", "Compañero/a fiel"]} ],
			  daguante : 4,
			  atrs : [ "SAB" , "CON" ],
			  atq : [ 0, 0, 1, 2, 3],
			  pP : [ 0, 0, 1, 2, 3],
			  ins : [ 2, 3, 4, 5, 6],
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
				return new ClaseP(this._clases[iclases]);
			}
		}
		return new ClaseP(this._clases[Comun.random(this._clases.length, 0)]);
	}
}

let clasesP = new ClasesP();



