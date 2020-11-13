class PJF {

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
		this._nombres = [ "Mary Jane", "Tadeus", "Duncan", "Sally", "Steve", "Marcus", "John", "Arnold", "Bethesda", "Abigail", "Elinor", "Jules", "Mia", "Winston", "Kathy", "Jerry" ];
		this._apellidos = [ "Taylor", "O'Sullivan", "Slick", "Jackson", "Crawley", "Moore", "McMardiggan", "Parker", "Whitman", "Flushing", "Zhao", "Wallace" ];
		this._objClase = null;
		this._din = 0;
		this._trasfondos = [];
	}
	
	get trasfondo() {
		return this._trasfondos;
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
	set pP(value) {
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
		return this._din;
	}
	
	get plantillaPDF() {
		return "pdf/VAgencia.pdf";
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
            		                                  " </td></tr><tr><td><strong>pS:</strong> " + pj.pS + 
            		                                  " </td></tr><tr><td><strong>Ptos Investigación:</strong> " + pj._pI + 
													  " </td></tr><tr><td><strong>Ins:</strong> " + pj.ins + 
													  " </td></tr><tr><td><strong>Def:</strong> " + pj.defn + 
													  " </td></tr><tr><td><strong>PV:</strong> " + pj.pv + "</td></tr></table";
	}
	
	modifAtributo(valorAtributo) {
		return Atributos.modif(valorAtributo);
	}
	
	
	tablaTalentos() {
		var itals = 0;
		var stals = "";
		for (itals = 0; itals < this._objClase.dtalentos.length; itals++) {
			stals += "<br/><br/>" + this._objClase.dtalentos[itals];
		}
		
		return stals;
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
	
	
	
	calculaSuerte() {
		this._pS = this._objClase.pS(this._nivel); 
		var mCAR = this.modifAtributo( this._atributos[5] );
		if ( mCAR + this._pS < 0 )
			this._pS = 0;
		else
			this._pS += mCAR;
	}
	
	calculaPtosInvestigacion() {
		this._pI = 2 + this.modifAtributo( this._atributos[4] );
		if ( this._pI < 1 )
			this._pI = 1;
	}
	
	calculaTrasfondo() {
		this._trasfondos = [];
		this._trasfondos.push(Comun.shuffle(trasfondos.clone())[0]);
	}
	
	genera() {
		habilidades.habilidadesGen();
		habilidades.ptos_niv = 2;
		atributos.ntiradasextras = 1;
		atributos.excesoatributos = 0;
		this._objClase = clasesF.clase(this._clase);
		this._daguante = this._objClase.daguante;
		this._clase = this._objClase.nombre;
		this._habilidades = habilidades.puntuaciones(this._nivel);
		this._atributos = atributos.valores(this._objClase.atrs);
		this._atq = this._objClase.atq(this._nivel);
		this._ins = this._objClase.ins(this._nivel);
		this.calculaSuerte();
		
		this._equipo = this._objClase.equipo();
		this._din = (Comun.dadosMultiples(this._equipo.dinero.aleatorio, this._equipo.dinero.dado, 1) * 100) + this._equipo.dinero.inicial;
		
		this.calculaDefensa();
		//this._def = 10 + Atributos.modif(this._atributos[atributos.atributoMod("DES")]);
		
		this.calculaPV();
		//this._pv = clase.pv(this._nivel) + Atributos.modif(this._atributos[atributos.atributoMod("CON")]);
		
		this._nombre = this._nombres[Comun.random( this._nombres.length ,0)] + " " + this._apellidos[Comun.random( this._apellidos.length ,0)];
		this._talentos = [];
		var talentosclase = this._objClase.talentos(this._nivel);
		var ital = 0;
		for (ital = 0; ital < talentosclase.length; ital++) {
			this._talentos.push(talentosclase[ital]);
		}
		
		this.calculaPtosInvestigacion();
		
		this.calculaTrasfondo();
		/*if ( this._objClase.trasfondos.length > 0 )
		{
			this._trasfondo = this._objClase.trasfondos[Comun.random(this._objClase.trasfondos.length, 0)];
		}*/
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
		var strasfondos = "";
		if ( this._trasfondos.length > 0 ) {
			strasfondos = this._trasfondos[0];
			var itrasf = 0;
			for (itrasf = 1; itrasf < this._trasfondos.length; itrasf++) {
				strasfondos += ", " + this._trasfondos[itrasf];
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
					'PVTotal' : [ this.pv ],
					'PVActual' : [ this.pv ],
					'Atq' : [ this.atq ],
					'Def' : [ this.defn ],
					'Ins' : [ this.ins ],
					'PITotal' : [ this._pI ],
					'PIActual' : [ this._pI ],
					'PSTotal' : [ this.pS ],
					'PSActual' : [ this.pS ],
					'Alerta' : [ this.habilidades[0] ],
					'Comunicacion' : [ this.habilidades[1] ],
					'Erudicion' : [ this.habilidades[2] ],
					'Manipulacion' : [ this.habilidades[3] ],
					'Subterfugio' : [ this.habilidades[4] ],
					'Supervivencia' : [ this.habilidades[5] ],
					'Talentos' : [ stalentos ],
					'Trasfondos' : [ strasfondos ],
					'Equipo' : [ this.strEquipo() ],
					'Notas' : [ "Dinero: " + this._din + "$" ],
		};
		return fields;
	}
}
