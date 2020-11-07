class PJ extends PJBase {

	constructor(nivel) {
		super(nivel);
		this._raza = 'random';
		this._pod = 0;
		this._din = 0;
		this._trasfondo = "";
		this._objClase = null;
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
		return "pdf/VEExpandido.pdf";
	}
	
	calculaPOD() {
		this._pod = this._objClase.pod(this._nivel) + this.modifAtributo(this._atributos[atributos.atributoMod("INT")]);
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
	
	
	calculaRasgosDerivados(atributo) {
		this.calculaRasgosDerivadosBase(atributo);
		if ( (atributo == 2 || atributo == 3) && this.modifAtributo(this.atributos[atributo]) != this.modifAtributo(atributo+1) ) {
			this.calculaPOD();
		}
	}
	
	genera() {
		habilidades.habilidadesGen();
		habilidades._ptos_ini = 4;
		habilidades.ptos_niv = 2;
		atributos.ntiradasextras = 0;
		atributos.excesoatributos = 1;
		var raza = razas.raza(this._raza);
		this._objClase = clases.clase(this._clase);
		this._daguante = this._objClase.daguante;
		this._raza = raza.nombre;
		this._clase = this._objClase.nombre;
		this._habilidades = habilidades.puntuaciones(this._nivel);
		this._atributos = atributos.valores(this._objClase.atrs);
		this._atq = this._objClase.atq(this._nivel);
		this._ins = this._objClase.ins(this._nivel);
		this._din = Comun.random(6,1) * 100;
		
		this.calculaPOD();
		//this._pod = clase.pod(this._nivel) + Atributos.modif(this._atributos[atributos.atributoMod("INT")]);
		
		this.calculaDefensa();
		//this._def = 10 + Atributos.modif(this._atributos[atributos.atributoMod("DES")]);
		
		this.calculaPV();
		//this._pv = clase.pv(this._nivel) + Atributos.modif(this._atributos[atributos.atributoMod("CON")]);
		
		this._nombre = raza.nombrepj();
		this._mov = raza.mov;
		this._trasfondo = trasfondos.trasfondo();
		
		var ital = 0;
		this._talentos = [];
		for (ital = 0; ital < raza.talentos.length; ital++) {
			this._talentos.push(raza.talentos[ital]);
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
					'Aventurero' : [ this.nombre ],
					'Tipo' : [ this.clase ],
					'Nivel' : [ this._nivel ],
					'VFUE' : [ this.atributos[0] ],
					'VDES' : [ this.atributos[1] ],
					'VCON' : [ this.atributos[2] ],
					'VINT' : [ this.atributos[3] ],
					'VSAB' : [ this.atributos[4] ],
					'VCAR' : [ this.atributos[5] ],
					'BFUE' : [ Atributos.modif(this.atributos[0]) ],
					'BDES' : [ Atributos.modif(this.atributos[1]) ],
					'BCON' : [ Atributos.modif(this.atributos[2]) ],
					'BINT' : [ Atributos.modif(this.atributos[3]) ],
					'BSAB' : [ Atributos.modif(this.atributos[4]) ],
					'BCAR' : [ Atributos.modif(this.atributos[5]) ],
					'IFUE' : [ (this.ins + Atributos.modif(this.atributos[0])) ],
					'IDES' : [ (this.ins + Atributos.modif(this.atributos[1])) ],
					'ICON' : [ (this.ins + Atributos.modif(this.atributos[2])) ],
					'IINT' : [ (this.ins + Atributos.modif(this.atributos[3])) ],
					'ISAB' : [ (this.ins + Atributos.modif(this.atributos[4])) ],
					'ICAR' : [ (this.ins + Atributos.modif(this.atributos[5])) ],
					'PVMax' : [ this.pv ],
					'PVAct' : [ this.pv ],
					'PODMax' : [ this.pod ],
					'PODAct' : [ this.pod ],
					'Arma1' : [ "-A elegir-" ],
					'Atq1' : [ this.atq ],
					'DEF' : [ this.defn ],
					'INS' : [ this.ins ],
					'MOV' : [ this.mov ],
					'Alerta' : [ this.habilidades[0] ],
					'Comunicacion' : [ this.habilidades[1] ],
					'Erudicion' : [ this.habilidades[2] ],
					'Manipulacion' : [ this.habilidades[3] ],
					'Subterfugio' : [ this.habilidades[4] ],
					'Supervivencia' : [ this.habilidades[5] ],
					'Talentos' : [ stalentos ],
					'Trasfondos' : [ this.trasfondo ],
					'Historial' : [ "Dinero: " + this.din + " mo" ],
		};
		return fields;
	}
}
