class PJCP extends PJBase {

	constructor(nivel) {
		super(nivel);
		this._pU = 0;;
		this._din = 0;
		this._nombres = [ "Mary", "Arina", "Jarek", "Andrey", "Natacha", "Dimitri", "Kumiko", "Konrad", "Duncan", "Lyudmila", "Sally", "Gerek", "Alka", "Steve", "Yuri", "Marcus", "John", "Xia", "Arnold", "Tom" ];
		this._apellidos = [ "Fedorov", "Vasiliev", "Volkov", "Gomolka", "Slick", "Izumi", "Jackson", "Petrov", "Bukowski", "Moore", "McMardiggan", "Li", "Whitman", "Flushing", "Zhao", "Kovaks" ];
		this._objClase = null;
	}
	
	get din() {
		return this._din + " bityens";
	}
	
	get Pow() {
		return this._pU;
	}
	
	get plantillaPDF() {
		return "pdf/VECyber.pdf";
	}
	
	equipo() {
		var eq = "<strong>Equipo: </strong>" + this.strEquipo();
		return eq;
	}
	
	strEquipo() {
		var ieq = 0;
		var eq = "";
		for (ieq = 0; ieq < this._equipo.equipo.length; ieq++) {
				if ( ieq > 0 ) {
					eq += ", ";
				}
				eq += this._equipo.equipo[ieq];
		}
		return eq;
	}
	
	calculaDefensa() {
		this._def = 10 + this.modifAtributo(this._atributos[atributos.atributoMod("DES")]);
	}
	calculaPV() {
		this._pv = this._objClase.pv(this._nivel) + this.modifAtributo(this._atributos[atributos.atributoMod("CON")]);
	}
	
	tablaRasgos() {
		return "<table  class='w3-table  w3-striped w3-border'><tr><td><strong>DA:</strong> d" + this.daguante +
													  " </td></tr><tr><td><strong>Atq:</strong> " + this.atq +
													  " </td></tr><tr><td><strong>Ins:</strong> " + this.ins + 
													  " </td></tr><tr><td><strong>Def:</strong> " + this.defn + 
													  " </td></tr><tr><td><strong>Pow:</strong> " + this.Pow + 
													  " </td></tr><tr><td><strong>PV:</strong> " + this.pv + "</td></tr></table";

	}
	
	modifAtributo(valorAtributo) {
		return Atributos.modifmas(valorAtributo);
	}
	
	genera() {
		habilidades.habilidadesCyb();
		habilidades.ptos_niv = 2;
		atributos.ntiradasextras = 0;
		atributos.excesoatributos = 1;
		this._objClase = clasesCP.clase(this._clase);
		this._daguante = this._objClase.daguante;
		this._clase = this._objClase.nombre;
		this._habilidades = habilidades.puntuacionesCP(this._nivel);
		this._atributos = atributos.valores(this._objClase.atrs);
		this._atq = this._objClase.atq(this._nivel);
		this._ins = this._objClase.ins(this._nivel);
		this._pU = this._objClase.pU;
		this.calculaDefensa();
		//this._def = 10 + Atributos.modifmas(this._atributos[atributos.atributoMod("DES")]);
		this.calculaPV();
		//tthis._pv = clase.pv(this._nivel) + Atributos.modifmas(this._atributos[atributos.atributoMod("CON")]);
		this._nombre = this._nombres[Comun.random( this._nombres.length ,0)] + " \"" + this._objClase.apodos[Comun.random(this._objClase.apodos.length, 0)] + "\" " + this._apellidos[Comun.random( this._apellidos.length ,0)];
		this._talentos = [];
		var talentosclase = this._objClase.talentos(this._nivel);
		var ital = 0;
		for (ital = 0; ital < talentosclase.length; ital++) {
			this._talentos.push(talentosclase[ital]);
		}
		this._equipo = this._objClase.equipo();
		this._din = (Comun.dadosMultiples(this._equipo.dinero.aleatorio, 6, 1) * 100) + this._equipo.dinero.inicial;
		//this._din = this._equipo.dinero.inicial + (100 * Comun.random(6,1) * this._equipo.dinero.aleatorio );
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
			'Clase' : [ this.clase ],
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
			'PV' : [ this.pv ],
			'PVAct' : [ this.pv ],
			'ATQ' : [ this.atq ],
			'DEF' : [ this.defn ],
			'INS' : [ this.ins ],
			'MOV' : [ 10 ],
			'POW' : [ this.Pow ],
			'POWAct' : [ this.Pow ],
			'Alma' : [ 4 ],
			'Corporate' : [ this.habilidades[0] ],
			'Cyber' : [ this.habilidades[1] ],
			'Hardware' : [ this.habilidades[2] ],
			'Punk' : [ this.habilidades[3] ],
			'Savage' : [ this.habilidades[4] ],
			'Urban' : [ this.habilidades[5] ],
			'Talentos' : [ stalentos ],
			'DA' : [ this.daguante ],
			'Equipo1' : [ this.din ],
			'Equipo2' : [ this.strEquipo() ],
		};
		return fields;
	}
}
