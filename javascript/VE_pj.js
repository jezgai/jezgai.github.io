class PJ {

	constructor(nivel) {
		this._nombre = '';
		this._nivel = nivel;
		this._raza = 'random';
		this._clase = 'random';
		this._atributos = [];
		this._talentos = [];
		this._habilidades = [];
		this._atq = 0;
		this._pod = 0;
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
	
	get raza() {
		return this._raza;
	}
	set raza(value) {
		this._raza = value;
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
	
	get pod() {
		return this._pod;
	}	
	set pod(value) {
		this._pod = value;
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
		atributos.ntiradasextras = 0;
		atributos.excesoatributos = 1;
		var raza = razas.raza(this._raza);
		var clase = clases.clase(this._clase);
		this._daguante = clase.daguante;
		this._raza = raza.nombre;
		this._clase = clase.nombre;
		this._habilidades = habilidades.puntuaciones(this._nivel);
		this._atributos = atributos.valores(clase.atrs);
		this._atq = clase.atq(this._nivel);
		this._ins = clase.ins(this._nivel);
		this._pod = clase.pod(this._nivel) + Atributos.modif(this._atributos[atributos.atributoMod("INT")]);
		this._defn = 10 + Atributos.modif(this._atributos[atributos.atributoMod("DES")]);
		this._pv = clase.pv(this._nivel);
		this._nombre = raza.nombrepj();
		this._talentos = raza.talentos;
		var talentosclase = clase.talentos(this._nivel);
		var ital = 0;
		for (ital = 0; ital < talentosclase.length; ital++) {
			this._talentos.push(talentosclase[ital]);
		}
	}
	
}