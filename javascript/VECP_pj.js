class PJCP {

	constructor(nivel) {
		this._nombre = '';
		this._nivel = nivel;
		this._clase = 'random';
		this._atributos = [];
		this._talentos = [];
		this._habilidades = [];
		this._atq = 0;
		this._pU = 0;
		this._ins = 0;
		this._pv = 0;
		this._def = 0;
		this._din = 0;
		this._daguante = 4;
		this._nombres = [ "Mary", "Arina", "Jarek", "Andrey", "Natacha", "Dimitri", "Kumiko", "Konrad", "Duncan", "Lyudmila", "Sally", "Gerek", "Alka", "Steve", "Yuri", "Marcus", "John", "Xia", "Arnold", "Tom" ];
		this._apellidos = [ "Fedorov", "Vasiliev", "Volkov", "Gomolka", "Slick", "Izumi", "Jackson", "Petrov", "Bukowski", "Moore", "McMardiggan", "Li", "Whitman", "Flushing", "Zhao", "Kovaks" ];
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
	
	get pS() {
		return this._pS;
	}	
	set pS(value) {
		this._pS = value;
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
	
	get din() {
		return this._din + " bityens";
	}
	
	get Pow() {
		return this._pU;
	}
	
	equipo() {
		var ieq = 0;
		var eq = "<strong>Equipo: </strong>";
		for (ieq = 0; ieq < this._equipo.equipo.length; ieq++) {
				if ( ieq > 0 ) {
					eq += ", ";
				}
				eq += this._equipo.equipo[ieq];
		}
		return eq;
	}
	
	genera() {
		habilidades.habilidadesCyb();
		habilidades.ptos_niv = 2;
		atributos.ntiradasextras = 0;
		atributos.excesoatributos = 1;
		var clase = clasesCP.clase(this._clase);
		this._daguante = clase.daguante;
		this._clase = clase.nombre;
		this._habilidades = habilidades.puntuacionesCP(this._nivel);
		this._atributos = atributos.valores(clase.atrs);
		this._atq = clase.atq(this._nivel);
		this._ins = clase.ins(this._nivel);
		this._pU = clase.pU;
		this._def = 10 + Atributos.modifmas(this._atributos[atributos.atributoMod("DES")]);
		this._pv = clase.pv(this._nivel) + Atributos.modifmas(this._atributos[atributos.atributoMod("CON")]);
		this._nombre = this._nombres[Comun.random( this._nombres.length ,0)] + " \"" + clase.apodos[Comun.random(clase.apodos.length, 0)] + "\" " + this._apellidos[Comun.random( this._apellidos.length ,0)];
		this._talentos = [];
		var talentosclase = clase.talentos(this._nivel);
		var ital = 0;
		for (ital = 0; ital < talentosclase.length; ital++) {
			this._talentos.push(talentosclase[ital]);
		}
		this._equipo = clase.equipo();
		this._din = this._equipo.dinero.inicial + (100 * Comun.random(6,1) * this._equipo.dinero.aleatorio );
	}
	
}
