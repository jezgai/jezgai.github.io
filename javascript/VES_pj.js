class PJVES extends PJBase {

	constructor(nivel) {
		super(nivel);
		this._raza = 'random';
		this._pod = 0;
		this._din = 0;
		this._trasfondo = "";
		this._objClase = null;
		this._objBioforma = null;
	}

	
	get raza() {
		return this._raza;
	}
	set raza(value) {
		this._raza = value;
	}
	
	get pod() {
		return this._pod;
	}	
	set pod(value) {
		this._pod = value;
	}
	
	
	get trasfondo() {
		return this._trasfondo;
	}
	set trasfondo(value) {
		this._trasfondo = value;
	}
	
	get din() {
		return this._din;
	}
	
	get plantillaPDF() {
		return "pdf/ViejaEstrella.pdf";
	}
	
	calculaPOD() {
		this._pod = this._objClase.pod(this._nivel);
	}
	
	calculaDefensa() {
		this._def = 10 + this.modifAtributo(this._atributos[atributos.atributoMod("DES")]);
	}
	
	calculaPV() {
		this._pv = this._objClase.pv(this._nivel, this.modifAtributo(this._atributos[atributos.atributoMod("CON")]));
	}
	
	tablaRasgos() {
		return "<table class='w3-table  w3-striped  w3-border'><tr><td><strong>DA:</strong> d" + pj.daguante +
													  " </td></tr><tr><td><strong>Atq:</strong> " + pj.atq +
            		                                  " </td></tr><tr><td><strong>Pod:</strong> " + pj.pod + 
													  " </td></tr><tr><td><strong>Ins:</strong> " + pj.ins + 
													  " </td></tr><tr><td><strong>Def:</strong> " + pj.defn + 
													  " </td></tr><tr><td><strong>PV:</strong> " + pj.pv + 
													  " </td></tr><tr><td><strong>Mov:</strong> " + pj.mov + "</td></tr></table";
	}
	
	modifAtributo(valorAtributo) {
		return Atributos.modif(valorAtributo);
	}
	
	calculaHabilidades() {
		this._habilidades = habilidades.puntuaciones1(this._nivel, this.modifAtributo(this._atributos[atributos.atributoMod("INT")]));
	}
	
	
	calculaRasgosDerivados() {
		this.calculaPV();
		this.calculaDefensa();
		this.calculaHabilidades();
	}
	
	
	calculaRasgosDerivados(atributo) {
		this.calculaRasgosDerivadosBase(atributo);
		if ( (atributo == 2 || atributo == 3) && this.modifAtributo(this.atributos[atributo]) != this.modifAtributo(this.atributos[atributo+1]) ) {
			this.calculaHabilidades();
		}
	}
	
	genera() {
		habilidades.habilidadesVES();
		habilidades.ptos_niv = 2;
		atributos.ntiradasextras = 0;
		atributos.excesoatributos = 1;
		this._objBioforma = bioformas.raza(this._raza);
		this._objClase = clasesVES.clase(this._clase);
		this._daguante = this._objClase.daguante;
		this._raza = this._objBioforma.nombre;
		this._clase = this._objClase.nombre;
		this._atributos = atributos.valores(this._objClase.atrs);
		this._habilidades = habilidades.puntuaciones1(this._nivel, this.modifAtributo(this._atributos[atributos.atributoMod("INT")]));
		this._atq = this._objClase.atq(this._nivel);
		this._ins = this._objClase.ins(this._nivel);
		this._din = (Comun.random(6,1) + Comun.random(6,1) + Comun.random(6,1)) * 10;
		
		this.calculaPOD();
		//this._pod = clase.pod(this._nivel) + Atributos.modif(this._atributos[atributos.atributoMod("INT")]);
		
		this.calculaDefensa();
		//this._def = 10 + Atributos.modif(this._atributos[atributos.atributoMod("DES")]);
		
		this.calculaPV();
		//this._pv = clase.pv(this._nivel) + Atributos.modif(this._atributos[atributos.atributoMod("CON")]);
		
		this._nombre = this._objBioforma.nombrepj();
		this._mov = this._objBioforma.mov;
		this._trasfondo = trasfondos.trasfondo();
		
		var ital = 0;
		this._talentos = [];
		
		var talentosBioforma = this._objBioforma.talentos.clone();
		if ( talentosBioforma.length > 2 ) {
			talentosBioforma = Comun.shuffle(talentosBioforma);
		}
		
		for (ital = 0; ital < 2 && ital < talentosBioforma.length; ital++) {
			this._talentos.push(talentosBioforma[ital]);
		}
		
		var talentosclase = this._objClase.talentos(this._nivel);
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
					'Nombre' : [ this._nombre ],
					'Clase' : [ this._objClase.nombre ],
					'Bioforma' : [ this._objBioforma.nombre ],
					'DAguante' : [ this._objClase.daguante ],
					'FUE' : [ this.atributos[0] ],
					'DES' : [ this.atributos[1] ],
					'CON' : [ this.atributos[2] ],
					'INT' : [ this.atributos[3] ],
					'SAB' : [ this.atributos[4] ],
					'CAR' : [ this.atributos[5] ],
					'FUE_mod' : [ Atributos.modif(this.atributos[0]) ],
					'DES_mod' : [ Atributos.modif(this.atributos[1]) ],
					'CON_mod' : [ Atributos.modif(this.atributos[2]) ],
					'INT_mod' : [ Atributos.modif(this.atributos[3]) ],
					'SAB_mod' : [ Atributos.modif(this.atributos[4]) ],
					'CAR_mod' : [ Atributos.modif(this.atributos[5]) ],
					'Nivel' : [ this._nivel ],
					'ATQ' : [ this.atq ],
					'INS' : [ this.ins ],
					'MOV' : [ this.mov ],
					'DEF' : [ this.defn ],
					'POD' : [ this.pod ],
				    'PV' : [ this.pv ],
				    'PV_total' : [ this.pv ],
					'ALERTA' : [ this.habilidades[0] ],
					'COMUNICACION' : [ this.habilidades[1] ],
					'ERUDICION' : [ this.habilidades[2] ],
					'SUBTERFUGIO' : [ this.habilidades[3] ],
					'SUPERVIVENCIA' : [ this.habilidades[4]],
					'TECNOLOGIA' : [ this.habilidades[5] ],
					'TALENTOS' : [ stalentos ],
					'EQUIPO' : [ this._din + " créditos" ],
		};
		return fields;
	}
}
