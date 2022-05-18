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
		return "pdf/VEFicha.pdf";
	}
	
	get plantillaPDFExpandido() {
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
	
	rellenaCamposPDFExpandido() {
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
					'Tipo' : [ this.clase + " " + this._raza ],
					'Nivel' : [ this._nivel ],
					'VFUE' : [ this.atributos[0] ],
					'VDES' : [ this.atributos[1] ],
					'VCON' : [ this.atributos[2] ],
					'VINT' : [ this.atributos[3] ],
					'VSAB' : [ this.atributos[4] ],
					'VCAR' : [ this.atributos[5] ],
					'BFUE' : [ this.modifAtributo(this.atributos[0]) ],
					'BDES' : [ this.modifAtributo(this.atributos[1]) ],
					'BCON' : [ this.modifAtributo(this.atributos[2]) ],
					'BINT' : [ this.modifAtributo(this.atributos[3]) ],
					'BSAB' : [ this.modifAtributo(this.atributos[4]) ],
					'BCAR' : [ this.modifAtributo(this.atributos[5]) ],
					'Instintos' : [ this.ins ],
					'IFUE' : [ (this.ins + this.modifAtributo(this.atributos[0])) ],
					'IDES' : [ (this.ins + this.modifAtributo(this.atributos[1])) ],
					'ICON' : [ (this.ins + this.modifAtributo(this.atributos[2])) ],
					'IINT' : [ (this.ins + this.modifAtributo(this.atributos[3])) ],
					'ISAB' : [ (this.ins + this.modifAtributo(this.atributos[4])) ],
					'ICAR' : [ (this.ins + this.modifAtributo(this.atributos[5])) ],
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
	
	
	rellenaCamposPDF() {
		var stalentos1 = "";
		var stalentos2 = "";
		var stalentos3 = "";
		if ( this.talentos.length > 0 ) {
			stalentos1 = this.talentos[0];
			if ( this.talentos.length > 1 ) {
				stalentos1 += ", " + this.talentos[1];
			}
			if ( this.talentos.length > 2 ) {
				stalentos2 = this.talentos[2];
			}
			if ( this.talentos.length > 3 ) {
				stalentos2 += ", " + this.talentos[3];
			}
			if ( this.talentos.length > 4 ) {
				stalentos3 = this.talentos[4];
			}
		}

		var fields = {
					'Nombre' : [ this.nombre ],
					'Clase' : [ this.clase ],
					'Raza' : [ this._raza ],
					'Nivel' : [ this._nivel ],
					'FUE' : [ this.atributos[0] ],
					'DES' : [ this.atributos[1] ],
					'CON' : [ this.atributos[2] ],
					'INT' : [ this.atributos[3] ],
					'SAB' : [ this.atributos[4] ],
					'CAR' : [ this.atributos[5] ],
					'Mod_FUE' : [ this.modifAtributo(this.atributos[0]) ],
					'Mod_DES' : [ this.modifAtributo(this.atributos[1]) ],
					'Mod_CON' : [ this.modifAtributo(this.atributos[2]) ],
					'Mod_INT' : [ this.modifAtributo(this.atributos[3]) ],
					'Mod_SAB' : [ this.modifAtributo(this.atributos[4]) ],
					'Mod_CAR' : [ this.modifAtributo(this.atributos[5]) ],
					'PV' : [ this.pv ],
					'POD' : [ this.pod ],
					'ATQ' : [ this.atq ],
					'DEF' : [ this.defn ],
					'INS' : [ this.ins ],
					'MOV' : [ this.mov ],
					'Alerta' : [ this.habilidades[0] ],
					'Comunicacion' : [ this.habilidades[1] ],
					'Erudicion' : [ this.habilidades[2] ],
					'Manipulacion' : [ this.habilidades[3] ],
					'Subterfugio' : [ this.habilidades[4] ],
					'Supervivencia' : [ this.habilidades[5] ],
					'Talentos1' : [ stalentos1 ],
					'Talentos2' : [ stalentos2 ],
					'Talentos3' : [ stalentos3 ],
					'Trasfondo1' : [ this.trasfondo ],
					'equipo1' : [ "Dinero: " + this.din + " mo" ],
		};
		return fields;
	}
	
	
	
	static rellenaCamposPDFCero() {
		var stalentos1 = pj.pjs[0].talentos[0];
		if ( pj.pjs[0].talentos.length > 1 ) {
			stalentos1 += ", " + pj.pjs[0].talentos[1]; 
		}
		
		var stalentos2 = pj.pjs[1].talentos[0];
		if ( pj.pjs[1].talentos.length > 1 ) {
			stalentos2 += ", " + pj.pjs[1].talentos[1]; 
		}

		var stalentos3 = pj.pjs[2].talentos[0];
		if ( pj.pjs[2].talentos.length > 1 ) {
			stalentos3 += ", " + pj.pjs[2].talentos[1]; 
		}
		
		var stalentos4 = pj.pjs[3].talentos[0];
		if ( pj.pjs[3].talentos.length > 1 ) {
			stalentos4 += ", " + pj.pjs[3].talentos[1]; 
		}
		var fields = {
					'Nombre1' : [ "PJ 1" ],
					'Oficio1' : [ pj.pjs[0].oficio ],
					'Raza1' : [ pj.pjs[0].raza ],
					'FUE1' : [ pj.pjs[0].atributos[0] ],
					'DES1' : [ pj.pjs[0].atributos[1] ],
					'CON1' : [ pj.pjs[0].atributos[2] ],
					'INT1' : [ pj.pjs[0].atributos[3] ],
					'SAB1' : [ pj.pjs[0].atributos[4] ],
					'CAR1' : [ pj.pjs[0].atributos[5] ],
					'mFUE1' : [ Atributos.modif(pj.pjs[0].atributos[0]) ],
					'mDES1' : [ Atributos.modif(pj.pjs[0].atributos[1]) ],
					'mCON1' : [ Atributos.modif(pj.pjs[0].atributos[2]) ],
					'mINT1' : [ Atributos.modif(pj.pjs[0].atributos[3]) ],
					'mSAB1' : [ Atributos.modif(pj.pjs[0].atributos[4]) ],
					'mCAR1' : [ Atributos.modif(pj.pjs[0].atributos[5]) ],
					'PV1' : [ pj.pjs[0].pv ],
					'PVAct1' : [ pj.pjs[0].pv ],
					'ATQ1' : [ 0 ],
					'DEF1' : [ pj.pjs[0].defensa ],
					'INS1' : [ 0 ],
					'MOV1' : [ pj.pjs[0].movimiento ],
					'Equipo1' : [ pj.pjs[0].equipo ],
					'Talentos1' : [ stalentos1 ],
					'Nombre2' : [ "PJ 2" ],
					'Oficio2' : [ pj.pjs[1].oficio ],
					'Raza2' : [ pj.pjs[1].raza ],
					'FUE2' : [ pj.pjs[1].atributos[0] ],
					'DES2' : [ pj.pjs[1].atributos[1] ],
					'CON2' : [ pj.pjs[1].atributos[2] ],
					'INT2' : [ pj.pjs[1].atributos[3] ],
					'SAB2' : [ pj.pjs[1].atributos[4] ],
					'CAR2' : [ pj.pjs[1].atributos[5] ],
					'mFUE2' : [ Atributos.modif(pj.pjs[1].atributos[0]) ],
					'mDES2' : [ Atributos.modif(pj.pjs[1].atributos[1]) ],
					'mCON2' : [ Atributos.modif(pj.pjs[1].atributos[2]) ],
					'mINT2' : [ Atributos.modif(pj.pjs[1].atributos[3]) ],
					'mSAB2' : [ Atributos.modif(pj.pjs[1].atributos[4]) ],
					'mCAR2' : [ Atributos.modif(pj.pjs[1].atributos[5]) ],
					'PV2' : [ pj.pjs[1].pv ],
					'PVAct2' : [ pj.pjs[1].pv ],
					'ATQ2' : [ 0 ],
					'DEF2' : [ pj.pjs[1].defensa ],
					'INS2' : [ 0 ],
					'MOV2' : [ pj.pjs[1].movimiento ],
					'Equipo2' : [ pj.pjs[1].equipo ],
					'Talentos2' : [ stalentos2 ],
					'Nombre3' : [ "PJ 3" ],
					'Oficio3' : [ pj.pjs[2].oficio ],
					'Raza3' : [ pj.pjs[2].raza ],
					'FUE3' : [ pj.pjs[2].atributos[0] ],
					'DES3' : [ pj.pjs[2].atributos[1] ],
					'CON3' : [ pj.pjs[2].atributos[2] ],
					'INT3' : [ pj.pjs[2].atributos[3] ],
					'SAB3' : [ pj.pjs[2].atributos[4] ],
					'CAR3' : [ pj.pjs[2].atributos[5] ],
					'mFUE3' : [ Atributos.modif(pj.pjs[2].atributos[0]) ],
					'mDES3' : [ Atributos.modif(pj.pjs[2].atributos[1]) ],
					'mCON3' : [ Atributos.modif(pj.pjs[2].atributos[2]) ],
					'mINT3' : [ Atributos.modif(pj.pjs[2].atributos[3]) ],
					'mSAB3' : [ Atributos.modif(pj.pjs[2].atributos[4]) ],
					'mCAR3' : [ Atributos.modif(pj.pjs[2].atributos[5]) ],
					'PV3' : [ pj.pjs[2].pv ],
					'PVAct3' : [ pj.pjs[2].pv ],
					'ATQ3' : [ 0 ],
					'DEF3' : [ pj.pjs[2].defensa ],
					'INS3' : [ 0 ],
					'MOV3' : [ pj.pjs[2].movimiento ],
					'Equipo3' : [ pj.pjs[2].equipo ],
					'Talentos3' : [ stalentos3 ],
					'Nombre4' : [ "PJ 4" ],
					'Oficio4' : [ pj.pjs[3].oficio ],
					'Raza4' : [ pj.pjs[3].raza ],
					'FUE4' : [ pj.pjs[3].atributos[0] ],
					'DES4' : [ pj.pjs[3].atributos[1] ],
					'CON4' : [ pj.pjs[3].atributos[2] ],
					'INT4' : [ pj.pjs[3].atributos[3] ],
					'SAB4' : [ pj.pjs[3].atributos[4] ],
					'CAR4' : [ pj.pjs[3].atributos[5] ],
					'mFUE4' : [ Atributos.modif(pj.pjs[3].atributos[0]) ],
					'mDES4' : [ Atributos.modif(pj.pjs[3].atributos[1]) ],
					'mCON4' : [ Atributos.modif(pj.pjs[3].atributos[2]) ],
					'mINT4' : [ Atributos.modif(pj.pjs[3].atributos[3]) ],
					'mSAB4' : [ Atributos.modif(pj.pjs[3].atributos[4]) ],
					'mCAR4' : [ Atributos.modif(pj.pjs[3].atributos[5]) ],
					'PV4' : [ pj.pjs[3].pv ],
					'PVAct4' : [ pj.pjs[3].pv ],
					'ATQ4' : [ 0 ],
					'DEF4' : [ pj.pjs[3].defensa ],
					'INS4' : [ 0 ],
					'MOV4' : [ pj.pjs[3].movimiento ],
					'Equipo4' : [ pj.pjs[3].equipo ],
					'Talentos4' : [ stalentos4 ],
		};
		return fields;
	}
	
	
	static creapersonajenivelcero() {
		
		atributos.ntiradasextras = 0;
		atributos.excesoatributos = 1;
		
		var pjembudo = {};
		pjembudo.pjs = [];
		var indice=0;
		for (indice=0; indice<4; indice++) {
			var oficio = oficios.oficio();
			var pjcero = {};
			pjcero.raza = oficio.raza;
			pjcero.oficio = oficio.profesion;
			pjcero.equipo = oficio.equipo;
			var raza = razas.raza(oficio.raza);
			pjcero.movimiento = raza.mov;
			pjcero.talentos = raza.talentos;
			
			pjcero.atributos = atributos.valores([]);
			pjcero.pv = Comun.random(4,1) + Atributos.modif(pjcero.atributos[2]);
			pjcero.defensa = 10 + Atributos.modif(pjcero.atributos[1]);
			pjembudo.pjs.push(pjcero);
		}
		return pjembudo
		
	}
	
	
	static tablaPJCero(ipj) {
		var indice = 0;
		var spj = "<b>Raza: </b>" + pj.pjs[ipj].raza + " <b>Oficio:</b> " + pj.pjs[ipj].oficio + "<br/>";
		spj += "<table class='w3-table  w3-striped w3-border'><tr><th>Atributo</th><th>Valor (mod)</th></tr>";
		for (indice = 0; indice < pj.pjs[ipj].atributos.length; indice++) {
			spj += "<tr><td>" + atributos.atributos[indice].nbatr + " (" + atributos.atributos[indice].nbmod + ")</td><td align='center'>" + pj.pjs[ipj].atributos[indice] + " (" + Atributos.modif(pj.pjs[ipj].atributos[indice]) + ")</td><td></button><button class=\"w3-button w3-circle w3-teal w3-padding-small w3-tiny\" onclick=\"abajoatrcero('" + ipj + "','" + indice + "')\">&#9660;</button></td></tr>";
		}
		spj += "</table>";
		spj += "<table class='w3-table  w3-striped w3-border'><tr><th>Característica</th><th>Valor</th></tr>";
		spj += "<tr><td>PV</td><td align='center'>" + pj.pjs[ipj].pv + "</td></tr>";
		spj += "<tr><td>Defensa</td><td align='center'>" + pj.pjs[ipj].defensa + "</td></tr>";
		spj += "<tr><td>Movimiento</td><td align='center'>" + pj.pjs[ipj].movimiento + "</td></tr>";
		spj += "</table>";
		spj += "<table class='w3-table  w3-striped w3-border'><tr><th>Talento</th></tr>";
		
		for (indice = 0; indice < pj.pjs[ipj].talentos.length; indice++) {
			spj += "<tr><td>" + pj.pjs[ipj].talentos[indice] + "</td></tr>";
		}
		spj += "</table>";
		return spj;
	}
	
}
