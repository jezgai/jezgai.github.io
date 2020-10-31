class Mascara {

	constructor(mascara) {
		this._nombre = mascara.nombre;
		this._talento = mascara.talento;
		this._incrpv = mascara.incrpv;
		this._atq = mascara.atq;
		this._ins = mascara.ins;
		this._def = mascara.def;
		this._atrs = mascara.atrs;
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
	
	get talento() {
		return this._talento;
	}
	set talento(value) {
		this._talento = value;
	}
	
	get incrpv() {
		return this._incrpv;
	}
	set incrpv(value) {
		this._incrpv = value;
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

	
	pv(nivel) {
		var incr=0;
		if ( nivel >= 3 )
			incr += this._incrpv;
		if ( nivel >= 5 )
			incr += this._incrpv;
		if ( nivel >= 7 )
			incr += this._incrpv;
		if ( nivel >= 9 )
			incr += this._incrpv;
		return incr;
	}

}

class Mascaras {
	
	constructor() {
		this._mascaras =
		[
			{
			  nombre : "Torre",
			  talento : "Fuerza de flaqueza",
			  incrpv : 4,
			  atq : [ 1, 2, 2, 3, 3, 4, 4, 5, 6, 7],
			  ins : [ 0, 0, 1, 1, 2, 2, 3, 3, 3, 4],
			  def : [ 0, 1, 2, 3, 4, 5, 5, 5, 5, 6],
			  atrs : [ "FUE" , "CON" ],
			},
			{
			  nombre : "Alfil",
			  talento : "Lo leí en un libro",
			  incrpv : 2,
			  atq : [ 0, 1, 1, 2, 2, 3, 3, 4, 4, 5],
			  ins : [ 1, 2, 2, 3, 3, 4, 4, 5, 6, 7],
			  def : [ -1, 0, 1, 1, 2, 2, 3, 3, 4, 4],
			  atrs : [ "INT" , "SAB" ],
			},
			{
			  nombre : "Caballo",
			  talento : "La herramienta adecuada",
			  incrpv : 3,
			  atq : [ 0, 1, 2, 3, 4, 5, 5, 5, 5, 5],
			  ins : [ 0, 0, 1, 1, 2, 2, 3, 3, 3, 4],
			  def : [ 1, 1, 2, 2, 3, 3, 4, 4, 5, 5],
			  atrs : [ "DES" , "CAR" ],
			},
		]
	}
	
	get mascaras() {
		return this._mascaras;
	}

	set mascaras(value) {
		this._mascaras = value;
	}
	
	mascara(nombre) {
		var imascaras=0;
		for (imascaras=0; imascaras<this._mascaras.length; imascaras++) {
			if ( this._mascaras[imascaras].nombre == nombre ) {
				return new Mascara(this._mascaras[imascaras]);
			}
		}
		return new Mascara(this._mascaras[Comun.random(this._mascaras.length, 0)]);
	}
	
	desplegableMascaras(nbFuncSel) {
		
		var smascaras=" <strong>Máscara:</strong> <select class='w3-select'  name='clase' onchange='" + nbFuncSel + "(this)'><option>--Aleatorio--</option>";
		var imascara=0;
		for (imascara=0; imascara< this._mascaras.length; imascara++) {
			smascaras += "<option>" + this._mascaras[imascara].nombre + "</option>";
		}
		smascaras += "</select>";
		return smascaras;
	}
}

let mascaras = new Mascaras();
