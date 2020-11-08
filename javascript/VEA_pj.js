class PJAr extends PJBase {

	constructor(nivel) {
		super(nivel);
		this._pod = 0;
		this._nombres = [ "Mary", "Jack", "Francis", "Sally", "Bartholomew", "Roger", "John", "Arnold", "Charlotte", "Elizabeth", "Grace", "Jules", "Anne", "Edward", "Kathy", "Jerry", "Henry" ];
		this._apellidos = [ "Kidd", "Tew", "Silver", "Jackson", "Vane", "Roberts", "Sparrow", "Parker", "Bonnet", "Bonny", "England", "Turner", "Rackham", "Morgan", "LeChuck", "Read", "De Graff" ];
		this._objClase = null;
		this._niveleseconomicos = [ "Vagabundo", "Pobre", "Propietario", "Acomodado", "Pudiente", "Rico" ];
		this._doblones = 0;
	}
	
	
	get pod() {
		return this._pod;
	}	
	set pod(value) {
		this._pod = value;
	}
		
	get din() {
		return this._din;
	}
	
	get plantillaPDF() {
		return "pdf/VEArrr.pdf";
	}
		
	calculaDefensa() {
		this._def = 14 + this.modifAtributo(this._atributos[atributos.atributoMod("DES")]);
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
													  " </td></tr><tr><td><strong>Nivel adquisitivo:</strong> " + pj._niveladq + 
													  " </td></tr><tr><td><strong>Doblones:</strong> " + pj._doblones + "</td></tr></table";
	}
	
	modifAtributo(valorAtributo) {
		return Atributos.modifArr(valorAtributo);
	}
	
	
	tablaTalentos() {
		var itals = 0;
		var stals = "";
		
		for (itals = 0; itals < this._talentos.length; itals++) {
			stals += "<br/><br/>" + clasesArr.dTalentos(this._talentos[itals]);
		}
		
		return stals;
	}
	
	calculaHabilidades() {
		this._habilidades = habilidades.puntuaciones1(this._nivel, this.modifAtributo(this._atributos[atributos.atributoMod("INT")]));
	}
	
	calculaPOD() {
		this._pod = this._objClase.pod(this._nivel) + this.modifAtributo(this._atributos[atributos.atributoMod("INT")]);
	}
	
	calculaDoblones() {
		this._doblones = 3 + this.modifAtributo(this._atributos[atributos.atributoMod("CAR")]);
	}
	
	calculaRasgosDerivados(atributo) {
		this.calculaRasgosDerivadosBase(atributo);
		if ( (atributo == 2 || atributo == 3) && this.modifAtributo(this.atributos[atributo]) != this.modifAtributo(atributo+1) ) {
			this.calculaPOD();
			this.calculaHabilidades();
		}
		if ( (atributo == 4 || atributo == 4) && this.modifAtributo(this.atributos[atributo]) != this.modifAtributo( (atributo+1)%6 ) ) {
			this.calculaDoblones();
		}
	}
	
	genera() {
		habilidades.habilidadesGen();
		habilidades.ptos_niv = 2;
		atributos.ntiradasextras = 1;
		atributos.excesoatributos = 0;
		this._objClase = clasesArr.clase(this._clase);
		this._daguante = this._objClase.daguante;
		this._clase = this._objClase.nombre;
		this._atributos = atributos.valores(this._objClase.atrs);
		this.calculaHabilidades();
		this._atq = this._objClase.atq(this._nivel);
		this._ins = this._objClase.ins(this._nivel);
		this.calculaPOD(); 
		this.calculaDefensa();
		
		this.calculaPV();
		
		this._nombre = this._nombres[Comun.random( this._nombres.length ,0)] + " " + this._apellidos[Comun.random( this._apellidos.length ,0)];
		this._talentos = this._objClase.talentos(this._nivel);
		
		this._niveladq = this._niveleseconomicos[Comun.random(6,0)];
		
		this.calculaDoblones();
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
					'mFUE' : [ Atributos.modif(this.atributos[0]) ],
					'mDES' : [ Atributos.modif(this.atributos[1]) ],
					'mCON' : [ Atributos.modif(this.atributos[2]) ],
					'mINT' : [ Atributos.modif(this.atributos[3]) ],
					'mSAB' : [ Atributos.modif(this.atributos[4]) ],
					'mCAR' : [ Atributos.modif(this.atributos[5]) ],
					'PV' : [ this.pv ],
					'ATQ' : [ this.atq ],
					'DEF' : [ this.defn ],
					'INS' : [ this.ins ],
					'MOV' : [ 10 ],
					'POD' : [ this.pod ],
					'Alerta' : [ this.habilidades[0] ],
					'Comunicacion' : [ this.habilidades[1] ],
					'Erudicion' : [ this.habilidades[2] ],
					'Manipulacion' : [ this.habilidades[3] ],
					'Subterfugio' : [ this.habilidades[4] ],
					'Supervivencia' : [ this.habilidades[5] ],
					'Talentos' : [ stalentos ],
					'NivelAdquisitivo' : [ this._niveladq ],
					'Doblones' : [ this._doblones ],
		};
		return fields;
	}
}
