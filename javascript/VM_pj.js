class PJVM extends PJBase {

	constructor(nivel) {
		super(nivel);
		this._ene = 0;
		this._objClase = null;
		this._din = 0;
		this._trasfondo = "";
	}
	
	
	get plantillaPDF() {
		return "pdf/ViejaMascaraEd.pdf";
	}
		
	calculaDefensa() {
		this._def = 10 + this.modifAtributo(this._atributos[atributos.atributoMod("DES")]);
	}
	
	calculaPV() {
		this._pv = this._objClase.pv(this._nivel) + this.modifAtributo(this._atributos[atributos.atributoMod("CON")]);
	}
	
	tablaRasgos() {
		return "<table class='w3-table  w3-striped  w3-border'><tr><td><strong>DA:</strong> d" + pj.daguante +
													  " </td></tr><tr><td><strong>Atq:</strong> " + pj.atq +
            		                                  " </td></tr><tr><td><strong>ENE:</strong> " + pj._ene + 
													  " </td></tr><tr><td><strong>Ins:</strong> " + pj.ins + 
													  " </td></tr><tr><td><strong>Def:</strong> " + pj.defn + 
													  " </td></tr><tr><td><strong>PV:</strong> " + pj.pv + "</td></tr></table";
	}
	
	modifAtributo(valorAtributo) {
		return Atributos.modifVM(valorAtributo);
	}
	
	
	tablaTalentos() {
		var itals = 0;
		var stals = "";
		
		/*for (itals = 0; itals < this._talentos.length; itals++) {
			stals += "<br/><br/>" + clasesP.dTalentos(this._talentos[itals]);
		}*/
		for (itals = 0; itals < this._talentos.length; itals++) {
			stals += "<br/><br/>" + this._talentos[itals];
		}
		
		return stals;
	}
	
	calculaRasgosDerivados(atributo) {
		this.calculaRasgosDerivadosBase(atributo);
	}
	
	genera() {
		habilidades.habilidadesVM();
		habilidades.ptos_niv = 2;
		atributos.ntiradasextras = 0;
		atributos.excesoatributos = 1;
		this._objClase = clasesVM.clase(this._clase);
		this._daguante = this._objClase.daguante;
		this._clase = this._objClase.nombre;
		this._habilidades = habilidades.puntuacionesNUV();
		if ( this._nivel > 1 ) {
			var ptosadicionales = habilidades.puntuacionesAdicionales(this._nivel);
			var indice=0;
			for (indice=0; indice<ptosadicionales.length; indice++) {
				this._habilidades[indice] += ptosadicionales[indice];
			}
		}
		this._atributos = atributos.valores(this._objClase.atrs);
		this._atq = this._objClase.atq(this._nivel);
		this._ins = this._objClase.ins(this._nivel);
		this._ene = 2 + this._objClase.ene(this._nivel);
		
		this.calculaDefensa();
		
		this.calculaPV();
		
		this._nombre = "Heroe";
		
		//this._nombre = this._nombres[Comun.random( this._nombres.length ,0)] + " " + this._apellidos[Comun.random( this._apellidos.length ,0)];
		
		this._talentos = [];
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
					'ModFUE' : [ Atributos.modifVM(this.atributos[0]) ],
					'ModDES' : [ Atributos.modifVM(this.atributos[1]) ],
					'ModCON' : [ Atributos.modifVM(this.atributos[2]) ],
					'ModINT' : [ Atributos.modifVM(this.atributos[3]) ],
					'ModSAB' : [ Atributos.modifVM(this.atributos[4]) ],
					'ModCAR' : [ Atributos.modifVM(this.atributos[5]) ],
					'ActPV' : [ this.pv ],
					'PV' : [ this.pv ],
					'ATQ' : [ this.atq ],
					'DEF' : [ this.defn ],
					'INS' : [ this.ins ],
					'MOV' : [ 10 ],
					'ActENE' : [ this._ene ],
					'ENE' : [ this._ene ],
					'Ciudadano' : [ this.habilidades[0] ],
					'Detective' : [ this.habilidades[1] ],
					'Profesor' : [ this.habilidades[2] ],
					'Ingeniero' : [ this.habilidades[3] ],
					'Idolo' : [ this.habilidades[4] ],
					'Sombra' : [ this.habilidades[5] ],
					'Poderes' : [ stalentos ],
		};
		return fields;
	}
}
