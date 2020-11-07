class PJC extends PJBase {

	constructor(nivel) {
		super(nivel);
		this._nombres = [ "Alisa", "Anthony", "Hans", "Sally", "Steve", "Marcus", "Klaus", "Arnold", "Kim", "Kirsten", "Beth", "Jules", "Brianna", "Dylan", "Kathy", "Jerry", "Harry", "Regis", "Kimiko", "Amanda", "Bianca", "Solomon", "Samuel", "Sarah" ];
		this._apellidos = [ "Butcher", "Devon", "Carpenter", "Kane", "Crawley", "Moore", "Murphy", "Parker", "Whitman", "Landon", "Morgan", "Butters", "Herzog", "Shurukhin", "Werthein", "Green", "Allen" ];
		this._objEsencia = null;
		this._objMascara = null;
		this._esencia = 'random';
		this._mascara = 'random';
		this._din = 0;
		this._fmagica = "";
		this._poderes = [];
	}
	
	get esencia() {
		return this._esencia;
	}
	set esencia(value) {
		this._esencia = value;
	}
	
	get mascara() {
		return this._mascara;
	}
	set mascara(value) {
		this._mascara = value;
	}
			
	get din() {
		return this._din;
	}
	
	get plantillaPDF() {
		return "pdf/VECiudad.pdf";
	}
	
	calculaDefensa() {
		this._defn = 10 + this._objMascara.def(this._nivel) + this._atributos[atributos.atributoMod("DES")]);
	}
	
	calculaPV() {
		this._pv = this._objEsencia._daguante + this.modifAtributo(this._atributos[atributos.atributoMod("CON")]) + this._objMascara.pv(this._nivel);
	}
	
	tablaRasgos() {
		return "<table class='w3-table  w3-striped  w3-border'><tr><td><strong>DA:</strong> d" + this._daguante +
													  " </td></tr><tr><td><strong>Atq:</strong> " + this._atq +
													  " </td></tr><tr><td><strong>Ins:</strong> " + this._ins + 
													  " </td></tr><tr><td><strong>Def:</strong> " + this._defn + 
													  " </td></tr><tr><td><strong>PV:</strong> " + this._pv + 
													  " </td></tr><tr><td><strong>Pod:</strong> " + this._pod + 
													  " </td></tr><tr><td><strong>F. Mágica:</strong> " + this._fmagica + "</td></tr></table";
	}
	
	
	tablaTalentos() {
		var itals = 0;
		var stals = "<table class='w3-table  w3-striped w3-border'><tr><th>Talentos</th></tr>";
		stals += "<tr><td>" + this._objEsencia._debilidad + " (debilidad)</td></tr>";
		for (itals = 0; itals < this._talentos.length; itals++) {
			stals += "<tr><td>" + this._talentos[itals] + "</td></tr>";
		}
		stals += "</table>";
		stals += "<table class='w3-table  w3-striped w3-border'><tr><th>Poderes</th></tr>";
		for (itals = 0; itals < this._poderes.length; itals++) {
			stals += "<tr><td>" + this._poderes[itals] + " </td></tr>";
		}
		stals += "</table>";
		
		return stals;
	}
	
	modifAtributo(valorAtributo) {
		return Atributos.modifmas(valorAtributo);
	}
	
	calculaRasgosDerivados(atributo) {
		this.calculaRasgosDerivadosBase(atributo);
	}
	
	genera() {
		habilidades.habilidadesVC();
		habilidades.ptos_niv = 2;
		atributos.ntiradasextras = 0;
		atributos.excesoatributos = 1;
		this._objEsencia = esencias.esencia(this._esencia);
		this._objMascara = mascaras.mascara(this._mascara);
		
		this._daguante = this._objEsencia.daguante;
		this._esencia = this._objEsencia.nombre;
		this._mascara = this._objMascara.nombre;
		
		this._habilidades = habilidades.puntuacionesCP(this._nivel);
		this._atributos = atributos.valores(this._objMascara.atrs);
		
		this._atq = this._objMascara.atq(this._nivel);
		this._ins = this._objMascara.ins(this._nivel);
		
		this.calculaDefensa();
		this.calculaPV();
		this._pod = this._objEsencia.pod(this._nivel);
		
		this._din = (Comun.random(8,1) + Comun.random(8,1)) * 100;
		
		this._nombre = this._nombres[Comun.random( this._nombres.length ,0)] + " " + this._apellidos[Comun.random( this._apellidos.length ,0)];
		this._talentos = [];
		var ital=0;
		for (ital = 0; ital < this._objEsencia._talentos.length; ital++) {
			this._talentos.push(this._objEsencia._talentos[ital]);
		}
		this._talentos.push(this._objMascara._talento);
		
		this._fmagica = this._objEsencia.fmagica(this._nivel);
		
		this._poderes = this._objEsencia.poderes(this._nivel);
		
	}
	
	rellenaCamposPDF() {
		var stalentos = this._objEsencia._debilidad + " (debilidad)";
		if ( this._talentos.length > 0 ) {
			//stalentos = this._talentos[0];
			var itals = 0;
			for (itals = 0; itals < this._talentos.length; itals++) {
				stalentos += ", " + this._talentos[itals];
			}
		}
		
		var spoderes = "";
		if ( this._poderes.length > 0 ) {
			spoderes = this._poderes[0];
			for (itals = 1; itals < this._poderes.length; itals++) {
				spoderes += ", " + this._poderes[itals];
			}
		}
		var fields = {
					'Nombre' : [ this.nombre ],
					'Esencia' : [ this.esencia ],
					'Mascara' : [ this.mascara ],
					'Nivel' : [ this._nivel ],
					'FUE' : [ this.atributos[0] ],
					'DES' : [ this.atributos[1] ],
					'CON' : [ this.atributos[2] ],
					'INT' : [ this.atributos[3] ],
					'SAB' : [ this.atributos[4] ],
					'CAR' : [ this.atributos[5] ],
					'mFUE' : [ this.modifAtributo(this.atributos[0]) ],
					'mDES' : [ this.modifAtributo(this.atributos[1]) ],
					'mCON' : [ this.modifAtributo(this.atributos[2]) ],
					'mINT' : [ this.modifAtributo(this.atributos[3]) ],
					'mSAB' : [ this.modifAtributo(this.atributos[4]) ],
					'mCAR' : [ this.modifAtributo(this.atributos[5]) ],
					'PVAct' : [ this._pv ],
					'PVMax' : [ this._pv ],
					'ATQ' : [ this._atq ],
					'ATQCAC' : [ (this._atq + Atributos.modif(this.atributos[0])) ],
					'ATQDIS' : [ (this._atq + Atributos.modif(this.atributos[1])) ],
					'DEF' : [ this._defn ],
					'INS' : [ this._ins ],
					'PODAct' : [ this._pod ],
					'PODMax' : [ this._pod ],
					'INI' : [ Atributos.modif(this.atributos[1]) ],
					'RAT' : [ this.habilidades[0] ],
					'POL' : [ this.habilidades[1] ],
					'MAN' : [ this.habilidades[2] ],
					'CIU' : [ this.habilidades[3] ],
					'OCU' : [ this.habilidades[4] ],
					'VET' : [ this.habilidades[5] ],
					'FMAG' : [ this.habilidades[5] ],
					'Talentos' : [ stalentos ],
					'Poderes1' : [ spoderes ],
					'Notas' : [ document.getElementById("dinero").innerText ],
		};
		return fields;
	}
}
