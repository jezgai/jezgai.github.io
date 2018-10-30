class PJP {

	constructor(nivel) {
		this._nombre = '';
		this._nivel = nivel;
		this._clase = 'random';
		this._atributos = [];
		this._talentos = [];
		this._habilidades = [];
		this._atq = 0;
		this._pP = 0;
		this._ins = 0;
		this._pv = 0;
		this._def = 0;
		this._daguante = 4;
	}

	get nombre() {
		return this._nombre;
	}
	set nombre(value) {
		this._nombre = value;
	}
	
	get clase() {
		return this._clase;
	}
	set clase(value) {
		this._clase = value;
	}
	
	get atributos() {
		return this._atributos;
	}
	set atributos(value) {
		this._atributos = value;
	}
	
	get talentos() {
		return this._talentos;
	}
	set talentos(value) {
		this._talentos = value;
	}
	
	get habilidades() {
		return this._habilidades;
	}
	set habilidades(value) {
		this._habilidades = value;
	}
	
	get atq() {
		return this._atq;
	}
	set atq(value) {
		this._atq = value;
	}
	
	get pP() {
		return this._pP;
	}	
	set pP(value) {
		this._pP = value;
	}
	
	get ins() {
		return this._ins;
	}
	set ins(value) {
		this._ins = value;
	}
		
	get defn() {
		return this._def;
	}
	set defn(value) {
		this._def = value;
	}
		
	get pv() {
		return this._pv;
	}
	set pv(value) {
		this._pv = value;
	}
	
	get daguante() {
		return this._daguante;
	}
	set daguante(value) {
		this._daguante = value;
	}
	
	genera() {
		atributos.ntiradasextras = 1;
		atributos.excesoatributos = 0;
		var clase = clasesP.clase(this._clase);
		this._daguante = clase.daguante;
		this._clase = clase.nombre;
		this._habilidades = habilidades.puntuaciones(this._nivel);
		this._atributos = atributos.valores(clase.atrs);
		this._atq = clase.atq(this._nivel);
		this._ins = clase.ins(this._nivel);
		this._pP = clase.pP(this._nivel); // + AtributosP.modif(this._atributos[atributosP.atributoMod("INT")]);
		this._defn = 10 + Atributos.modif(this._atributos[atributos.atributoMod("DES")]);
		this._pv = clase.pv(this._nivel);
		//this._nombre = raza.nombrepj();
		this._talentos = [];
		var talentosclase = clase.talentos(this._nivel);
		var ital = 0;
		for (ital = 0; ital < talentosclase.length; ital++) {
			this._talentos.push(talentosclase[ital]);
		}
	}
	
}