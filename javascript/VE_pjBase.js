class PJBase {

	constructor(nivel) {
		this._nombre = '';
		this._nivel = nivel;
		this._clase = 'random';
		this._atributos = [];
		this._talentos = [];
		this._habilidades = [];
		this._atq = 0;
		this._ins = 0;
		this._pv = 0;
		this._def = 0;
		this._daguante = 4;
		this._mov = 12;
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
	
	get mov() {
		return this._mov;
	}
	set mov(value) {
		this._mov = value;
	}
	
	generaTalentos(clase) {
		var talentosclase = clase.talentos(this._nivel);
		for (ital = 0; ital < talentosclase.length; ital++) {
			this._talentos.push(talentosclase[ital]);
		}
	}
	
	atributoMod(nbatributo) {
		return Atributos.modif(this._atributos[atributos.atributoMod(nbatributo)]);
	}
}