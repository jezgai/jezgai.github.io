class PJZ {

	constructor(nivel) {
		this._nombre = '';
		this._nivel = nivel;
		this._clase = 'random';
		this._atributos = [];
		this._talentos = [];
		this._habilidades = [];
		this._atq = 0;
		this._pS = 0;
		this._ins = 0;
		this._pv = 0;
		this._def = 0;
		this._daguante = 4;
		this._nombres = [ "Mary Jane", "Tadeus", "Duncan", "Sally", "Steve", "Marcus", "John", "Arnold", "Bethesda", "Abigail" ];
		this._apellidos = [ "Taylor", "O'Sullivan", "Slick", "Jackson", "Moore", "McMardiggan", "Whitman", "Flushing", "Zhao" ];
		this._objClase = null;
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
		return this._din + " Ryō";
	}
	
	
	get plantillaPDF() {
		return "pdf/VEZombies.pdf";
	}
			
	calculaDefensa() {
		this._def = 10 + this.modifAtributo(this._atributos[atributos.atributoMod("DES")]);
	}
	
	calculaPV() {
		this._pv = this._objClase.pv(this._nivel) + this.modifAtributo(this._atributos[atributos.atributoMod("CON")]);
	}
	
	tablaRasgos() {
		return "<table  class='w3-table  w3-striped w3-border'><tr><td><strong>DA:</strong> d" + pj.daguante +
													  " </td></tr><tr><td><strong>Atq:</strong> " + pj.atq +
													  " </td></tr><tr><td><strong>Ins:</strong> " + pj.ins + 
													  " </td></tr><tr><td><strong>Def:</strong> " + pj.defn + 
													  " </td></tr><tr><td><strong>PS:</strong> " + pj.pS + 
													  " </td></tr><tr><td><strong>PV:</strong> " + pj.pv + "</td></tr></table";
	}
	
	modifAtributo(valorAtributo) {
		return Atributos.modifmas(valorAtributo);
	}
	
	genera() {
		habilidades.habilidadesGen();
		habilidades.ptos_niv = 1;
		atributos.ntiradasextras = 1;
		atributos.excesoatributos = 0;
		this._objClase = clasesZ.clase(this._clase);
		this._daguante = this._objClase.daguante;
		this._clase = this._objClase.nombre;
		this._habilidades = habilidades.puntuaciones(this._nivel);
		this._atributos = atributos.valores(this._objClase.atrs);
		this._atq = this._objClase.atq(this._nivel);
		this._ins = this._objClase.ins(this._nivel);
		this._pS = this._objClase.pS(this._nivel);
		
		this.calculaDefensa();
		// this._def = 10 + Atributos.modifmas(this._atributos[atributos.atributoMod("DES")]) + clase.defn(this._nivel);
		
		this.calculaPV();
		//this._pv = clase.pv(this._nivel) + Atributos.modifmas(this._atributos[atributos.atributoMod("CON")]);
		
		this._nombre = this._nombres[Comun.random( this._nombres.length ,0)] + " " + this._apellidos[Comun.random( this._apellidos.length ,0)];
		this._talentos = [];
		var talentosclase = this._objClase.talentos(this._nivel);
		var ital = 0;
		for (ital = 0; ital < talentosclase.length; ital++) {
			this._talentos.push(talentosclase[ital]);
		}
	}
	
	rellenaCamposPDF() {
		var talentos1 = "";
		var talentos2 = "";
		if ( this.talentos.length > 0 ) {
			talentos1 = this.talentos[0];
			if ( this.talentos.length > 1 ) {
				talentos1 += ", " + this.talentos[1];
				if ( this.talentos.length > 2 ) {
					talentos2 = this.talentos[2];
					
					if ( this.talentos.length > 3 ) {
						talentos2 += ", " + this.talentos[3];
					}
				}
			}
		}

		var fields = {
					'Nombre' : [ this.nombre ],
					'Clase' : [ this.clase + " (d" + this.daguante + ")" ],
					'Nivel' : [ this._nivel ],
					'FUE' : [ this.atributos[0] ],
					'DES' : [ this.atributos[1] ],
					'CON' : [ this.atributos[2] ],
					'INT' : [ this.atributos[3] ],
					'SAB' : [ this.atributos[4] ],
					'CAR' : [ this.atributos[5] ],
					'mFUE' : [ Atributos.modifmas(this.atributos[0]) ],
					'mDES' : [ Atributos.modifmas(this.atributos[1]) ],
					'mCON' : [ Atributos.modifmas(this.atributos[2]) ],
					'mINT' : [ Atributos.modifmas(this.atributos[3]) ],
					'mSAB' : [ Atributos.modifmas(this.atributos[4]) ],
					'mCAR' : [ Atributos.modifmas(this.atributos[5]) ],
					'PVTot' : [ this.pv ],
					'PVAct' : [ this.pv ],
					'ATQ' : [ this.atq ],
					'DEF' : [ this.defn ],
					'INS' : [ this.ins ],
					'MOV' : [ 10 ],
					'PSAct' : [ this.pS ],
					'PSTot' : [ this.pS ],
					'Alerta' : [ this.habilidades[0] ],
					'Comunicacion' : [ this.habilidades[1] ],
					'Erudicion' : [ this.habilidades[2] ],
					'Manipulacion' : [ this.habilidades[3] ],
					'Subterfugio' : [ this.habilidades[4] ],
					'Supervivencia' : [ this.habilidades[5] ],
					'Talento1' : [ talentos1 ],
					'Talento2' : [ talentos2 ],
		};
		return fields;
	}
}
