class PJJ extends PJBase {

	constructor(nivel) {
		super(nivel);
		this._hon = 0;
		this._din = 0;
		this._nombres = [ "Akio", "Natsuki", "Daiki", "Sachiko", "Hiroto", "Teiko", "Kaito", "Yoko", "Kazuki", "Fumiko", "Kenzo", "Aimi" ];
		this._apellidos = [ "Akiyama","Fujimoto","Fujioka","Fukui","Hamasaki","Hashimoto","Hayashi","Himura","Hisakawa","Inoue","Ito","Kagome","Kawaguchi","Kimura","Kobayashi","Koizumi","Matsumoto","Matsuoka","Matsushita","Minami","Miyamoto" ];
		this._objClase = null;
	}
	
	get hon() {
		return this._hon;
	}	
	set hon(value) {
		this._hon = value;
	}
	
	get din() {
		return this._din + " Ryō";
	}
	
	get plantillaPDF() {
		return "pdf/VEJF.pdf";
	}
	
	calculaDefensa() {
		this._def = 10 + this.modifAtributo(this._atributos[atributos.atributoMod("DES")]);
		//this._def = 10 + Atributos.modifmas(this._atributos[atributos.atributoMod("DES")]);
	}
	calculaPV() {
		this._pv = this._objClase.pv(this._nivel) + this.modifAtributo(this._atributos[atributos.atributoMod("CON")]);
		//this._pv = this._objClase.pv(this._nivel) + Atributos.modifmas(this._atributos[atributos.atributoMod("CON")]);
	}
	
	tablaRasgos() {
		return "<table  class='w3-table  w3-striped w3-border'><tr><td><strong>DA:</strong> d" + this.daguante +
													  " </td></tr><tr><td><strong>Atq:</strong> " + this.atq +
													  " </td></tr><tr><td><strong>Ins:</strong> " + this.ins + 
													  " </td></tr><tr><td><strong>Def:</strong> " + this.defn + 
													  " </td></tr><tr><td><strong>Honor:</strong> " + this.hon + 
													  " </td></tr><tr><td><strong>PV:</strong> " + this.pv + "</td></tr></table";
	}
	
	modifAtributo(valorAtributo) {
		return Atributos.modifmas(valorAtributo);
	}
	
	genera() {
		habilidades.habilidadesJap();
		habilidades.ptos_niv = 1;
		atributos.ntiradasextras = 1;
		atributos.excesoatributos = 0;
		this._objClase = clasesJ.clase(this._clase);
		this._daguante = this._objClase.daguante;
		this._clase = this._objClase.nombre;
		this._habilidades = habilidades.puntuaciones(this._nivel);
		this._atributos = atributos.valores(this._objClase.atrs);
		this._atq = this._objClase.atq(this._nivel);
		this._ins = this._objClase.ins(this._nivel);
		this._hon = this._objClase.hon;
		this.calculaDefensa();
		//this._def = 10 + Atributos.modifmas(this._atributos[atributos.atributoMod("DES")]);
		this.calculaPV();
		//this._pv = clase.pv(this._nivel) + Atributos.modifmas(this._atributos[atributos.atributoMod("CON")]);
		this._nombre = this._nombres[Comun.random( this._nombres.length ,0)] + " " + this._apellidos[Comun.random( this._apellidos.length ,0)];
		this._talentos = [];
		this._din = this._objClase.din;
		var talentosclase = this._objClase.talentos(this._nivel);
		var ital = 0;
		for (ital = 0; ital < talentosclase.length; ital++) {
			this._talentos.push(talentosclase[ital]);
		}
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
					'ATQ' : [ this.atq ],
					'DEF' : [ this.defn ],
					'INS' : [ this.ins ],
					'MOV' : [ 10 ],
					'Honor' : [ this.hon ],
					'Alerta' : [ this.habilidades[0] ],
					'Callejeo' : [ this.habilidades[1] ],
					'Corte' : [ this.habilidades[2] ],
					'Guerra' : [ this.habilidades[3] ],
					'Manipulacion' : [ this.habilidades[4] ],
					'Supervivencia' : [ this.habilidades[5] ],
					'Talentos' : [ stalentos ],
					'DA' : [ this.daguante ],
					'Equipo' : [ this.din ],
				};
		return fields;
	}
		
	
}
