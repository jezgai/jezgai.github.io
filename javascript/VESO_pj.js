class PJSO {

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
		this._nombres = [ "Mary Jane", "Tadeus", "Duncan", "Sally", "Steve", "Marcus", "John", "Arnold", "Bethesda", "Abigail" ];
		this._apellidos = [ "Taylor", "O'Sullivan", "Slick", "Jackson", "Moore", "McMardiggan", "Whitman", "Flushing", "Zhao" ];
		this._niveleseconomicos = [ "Vagabundo", "Pobre", "Propietario", "Acomodado", "Pudiente", "Rico" ];
		this._niveladq = "";
		this._objClase = null;
	}

	get niveladq() {
		return this._niveladq;
	}
	set niveladq(value) {
		this._niveladq = value;
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
	
	get plantillaPDF() {
		return "pdf/VESO.pdf";
	}
		
	calculaDefensa() {
		this._def = 14 + this.modifAtributo(this._atributos[atributos.atributoMod("DES")]);
	}
	
	calculaPV() {
		this._pv = this._objClase.pv(this._nivel) + this.modifAtributo(this._atributos[atributos.atributoMod("CON")]);
	}
	
	tablaRasgos() {
		return "<table  class='w3-table  w3-striped w3-border'><tr><td><strong>DA:</strong> d" + pj.daguante +
													  " </td></tr><tr><td><strong>Atq:</strong> " + pj.atq +
													  " </td></tr><tr><td><strong>Ins:</strong> " + pj.ins + 
													  " </td></tr><tr><td><strong>Def:</strong> " + pj.defn +
													  " </td></tr><tr><td><strong>PV:</strong> " + pj.pv + "</td></tr></table";
	}
	
	modifAtributo(valorAtributo) {
		return Atributos.modif(valorAtributo);
	}
	
	genera() {
		habilidades.habilidadesGen();
		habilidades.ptos_niv = 2;
		atributos.ntiradasextras = 1;
		atributos.excesoatributos = 0;
		this._objClase = clasesSO.clase(this._clase);
		this._daguante = this._objClase.daguante;
		this._clase = this._objClase.nombre;
		this._habilidades = habilidades.puntuaciones(this._nivel);
		this._atributos = atributos.valores(this._objClase.atrs);
		this._atq = this._objClase.atq(this._nivel);
		this._ins = this._objClase.ins(this._nivel);
		
		this.calculaDefensa();
		//this._def = 14 + Atributos.modif(this._atributos[atributos.atributoMod("DES")]);
		
		this.calculaPV();
		//this._pv = clase.pv(this._nivel) + Atributos.modif(this._atributos[atributos.atributoMod("CON")]);
		
		this._nombre = this._nombres[Comun.random( this._nombres.length ,0)] + " " + this._apellidos[Comun.random( this._apellidos.length ,0)];
		this._talentos = [];
		var talentosclase = this._objClase.talentos(this._nivel);
		var ital = 0;
		for (ital = 0; ital < talentosclase.length; ital++) {
			this._talentos.push(talentosclase[ital]);
		}
		this._niveladq = this._niveleseconomicos[Comun.random(6,0)];
	}
	
	rellenaCamposPDF() {
		var stalentos = "";
		if ( this.talentos.length > 0 ) {
			stalentos = this.talentos[0];
			var itals = 0;
			for (itals = 1; itals < this.talentos.length; itals++) {
				stalentos += ", " + this.talentos[itals];
			}
		}

		var fields = {
					'Nombre' : [ this.nombre ],
					'Clase' : [ this.clase + " (d" + this.daguante + ")" ],
					'Nivel' : [ this._nivel ],
					'Fuerza' : [ this.atributos[0] ],
					'Destreza' : [ this.atributos[1] ],
					'Constitucion' : [ this.atributos[2] ],
					'Inteligencia' : [ this.atributos[3] ],
					'Sabiduria' : [ this.atributos[4] ],
					'Carisma' : [ this.atributos[5] ],
					'FUE' : [ Atributos.modif(this.atributos[0]) ],
					'DES' : [ Atributos.modif(this.atributos[1]) ],
					'CON' : [ Atributos.modif(this.atributos[2]) ],
					'INT' : [ Atributos.modif(this.atributos[3]) ],
					'SAB' : [ Atributos.modif(this.atributos[4]) ],
					'CAR' : [ Atributos.modif(this.atributos[5]) ],
					'PVTot' : [ this.pv ],
					'PVAct' : [ this.pv ],
					'ATQ' : [ this.atq ],
					'DEF' : [ this.defn ],
					'INS' : [ this.ins ],
					'MOV' : [ 10 ],
					'NivelAdquisitivo' : [ this.niveladq ],
					'Alerta' : [ this.habilidades[0] ],
					'Comunicacion' : [ this.habilidades[1] ],
					'Erudicion' : [ this.habilidades[2] ],
					'Manipulacion' : [ this.habilidades[3] ],
					'Subterfugio' : [ this.habilidades[4] ],
					'Supervivencia' : [ this.habilidades[5] ],
					'Talentos' : [ stalentos ],
		};
		return fields;
	}
}
