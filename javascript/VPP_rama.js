class Rama {

	constructor(rama) {
		this._nombre = rama.nombre;
		this._atq = rama.atq;
		this._ins = rama.ins;
		this._def = rama.def;
		this._atrs = rama.atrs;
	}
	
	get atrs() {
		return this._atrs;
	}
	set atrs(value) {
		this._atrs = value;
	}
	
	get nombre() {
		return this._nombre;
	}
	set nombre(value) {
		this._nombre = value;
	}
		
		
	get atq() {
		return this._atq;
	}
	set atq(value) {
		this._atq = value;
	}

	get ins() {
		return this._ins;
	}
	set ins(value) {
		this._ins = value;
	}

	get def() {
		return this._def;
	}
	set def(value) {
		this._def = value;
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
	
	def(nivel) {
		var idef = nivel - 1;
		if ( nivel > this._def.length ) {
			idef = this._def.length - 1;
		}
		return this._def[idef];
	}


}

class Ramas {
	
	constructor() {
		this._ramas =
		[
			{
			  nombre : "Heros Fortis",
			  atq : [ 1, 2, 3, 4, 5 ],
			  ins : [ 1, 2, 2, 3, 3 ],
			  def : [ 1, 1, 2, 2, 3 ],
              atrs: [ "FUE", "CON" ],
			},
			{
			  nombre : "Heros Habilis",
			  atq : [ 0, 1, 1, 2, 2 ],
			  ins : [ 1, 2, 3, 4, 4 ],
			  def : [ 0, 0, 1, 1, 2 ],
              atrs: [ "DES", "CAR" ],
			},
			{
			  nombre : "Heros Felix",
			  atq : [ 0, 0, 1, 1, 1 ],
			  ins : [ 0, 1, 1, 2, 2 ],
			  def : [ 0, 0, 0, 0, 1 ],
              atrs: [ "INT", "SAB" ],
			},
		]
	}
	
	get ramas() {
		return this._ramas;
	}

	set ramas(value) {
		this._ramas = value;
	}
	
	rama(nombre) {
		var iramas=0;
		for (iramas=0; iramas<this._ramas.length; iramas++) {
			if ( this._ramas[iramas].nombre == nombre ) {
				return new Rama(this._ramas[iramas]);
			}
		}
		return new Rama(this._ramas[Comun.random(this._ramas.length, 0)]);
	}
	
	desplegableRamas(nbFuncSel) {
		
		var sramas=" <strong>Máscara:</strong> <select class='w3-select'  name='clase' onchange='" + nbFuncSel + "(this)'><option>--Aleatorio--</option>";
		var irama=0;
		for (irama=0; irama< this._ramas.length; irama++) {
			sramas += "<option>" + this._ramas[irama].nombre + "</option>";
		}
		sramas += "</select>";
		return sramas;
	}
}

let ramas = new Ramas();
