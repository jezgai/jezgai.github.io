class ClaseBase {

	constructor(clase) {
		this._nombre = clase.nombre;
		this._talentos = clase.talentos;
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
	
	pv(nivel, modif=0) {
		var ptos = this._daguante + modif;
		var ipv=0;
		for (ipv=1; ipv<nivel; ipv++) {
			var incremento = Comun.random(this._daguante, 1) + modif;
			if ( incremento < 1 || ipv > 9 )
				incremento = 1;
			ptos += incremento;
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
