class PJNUV extends PJBase {

	constructor() {
		super(1);
		this._nombres = [ "Jacobo", "Borja", "Ana", "Clara", "Maria", "Hector", "Pablo", "Susana", "Alex", "Africa", "Carlos", "Garai" ];
		this._apellidos = [ "Arrieta", "Tejedero", "Gil", "Vega", "Ortiz", "Torres", "Blanco", "Valle", "Soto", "Granda", "Montes" ];
		this._objClase = null;
		this._din = 0;
	}
	
	get plantillaPDF() {
		return "pdf/" + this._objClase.plantillaPDF;
	}
	
	calculaDefensa() {
		return "";
	}
		
	calculaPV() {
		this._pv = this._objClase.daguante + this.modifAtributo(this._atributos[atributos.atributoMod("CON")]);
		return this._pv;
	}
	
	tablaRasgos() {
		return "<table class='w3-table  w3-striped  w3-border'><tr><td><strong>PV:</strong> " + this.calculaPV() + 
													  "</td></tr><tr><td><strong>Mov:</strong> " + this._objClase.mov + 
													  " </td></tr><tr><td><strong>Ins:</strong> " + this._objClase._ins + 
													  " </td></tr></table";
	}
	
	modifAtributo(valorAtributo) {
		return Atributos.modifmas(valorAtributo);
	}
	
	
	tablaTalentos() {
		var itals = 0;
		var stals = "<table class='w3-table  w3-striped w3-border'><tr><th>Talentos</th></tr>";
		for (itals = 0; itals < pj.talentos.length; itals++) {
			if ( this.talentos[itals] == true )
				stals += "<tr><td>" + this._objClase.talentos[itals] + " </td></tr>";
		}
		stals += "</table>";
		return stals;
	}
	
	
	genera() {
		habilidades.habilidadesNUV();
		atributos.ntiradasextras = 1;
		atributos.excesoatributos = 0;
		this._objClase = clasesNUV.clase(this._clase);
		this._daguante = this._objClase.daguante;
		this._clase = this._objClase.nombre;
		this._habilidades = habilidades.puntuacionesNUV();
		this._atributos = atributos._atributos;
		this._atributos = atributos.valores(this._objClase.atrs);
		
		this.calculaPV();
		
		this._nombre = this._nombres[Comun.random( this._nombres.length ,0)] + " " + this._apellidos[Comun.random( this._apellidos.length ,0)];
		this._talentos = [ true, true, true, false, false, false];
		this._talentos = Comun.shuffle(this._talentos);
		
		var idadospaga=0;
		for ( idadospaga=0; idadospaga < this._objClase.paga; idadospaga++)
			this._din += Comun.random(6,1);
		this._din *= 10;
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
					'FUE' : [ this.atributos[0] ],
					'DES' : [ this.atributos[1] ],
					'CON' : [ this.atributos[2] ],
					'INT' : [ this.atributos[3] ],
					'SAB' : [ this.atributos[4] ],
					'CAR' : [ this.atributos[5] ],
					'mFUE' : [ this.modifAtributo(this._atributos[0]) ],
					'mDES' : [ this.modifAtributo(this._atributos[1]) ],
					'mCON' : [ this.modifAtributo(this._atributos[2]) ],
					'mINT' : [ this.modifAtributo(this._atributos[3]) ],
					'mSAB' : [ this.modifAtributo(this._atributos[4]) ],
					'mCAR' : [ this.modifAtributo(this._atributos[5]) ],
					'PV' : [ this.calculaPV() ],
					'PVAct' : [ this.calculaPV() ],
					'Ins' : [ this._objClase._ins ],
					'Mov' : [ this._objClase.mov ],
					'AlLoro' : [ this.habilidades[0] ],
					'Empollon' : [ this.habilidades[1] ],
					'Manitas' : [ this.habilidades[2] ],
					'Ninja' : [ this.habilidades[3] ],
					'Palique' : [ this.habilidades[4] ],
					'Rambo' : [ this.habilidades[5] ],
					'Talento1' : [ this.talentos[0] ],
					'Talento2' : [ this.talentos[1] ],
					'Talento3' : [ this.talentos[2] ],
					'Talento4' : [ this.talentos[3] ],
					'Talento5' : [ this.talentos[4] ],
					'Talento6' : [ this.talentos[5] ],
					'Notas1' : [ this._objClase.equipo ],
					'Notas2' : [ this._din + " duros." ],
		};
		return fields;
	}
}
