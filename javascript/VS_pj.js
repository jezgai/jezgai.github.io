class VS_PJ {

	constructor(nivel) {
		this._FUE = 0;
		this._DES = 0;
		this._CON = 0;
		this._INT = 0;
		this._SAB = 0;
		this._CAR = 0;
		
		this._Alerta = 0;
		this._Comunicacion = 0;
		this._Erudicion = 0;
		this._Subterfugio = 0;
		this._Supervivencia = 0;
		this._Tecnologia = 0;
		
		this._DEF = 0;
		this._PV = 0;

		this._Talentos = [];
		
		this._Clase = null;
		this._Bioforma = null;
	}
	
	get ATQ() {
		return (this._Clase == null) ? 0 : this._Clase._atq[0];
	}
	
	get INS() {
		return (this._Clase == null) ? 0 : this._Clase._ins[0];
	}
	
	get POD() {
		return (this._Clase == null) ? 0 : this._Clase._pod[0];
	}
	
	get MOV() {
		return (this._Bioforma == null) ? 0 : this._Bioforma.movimiento;
	}
	
	get Clase() {
		return this._Clase;
	}
	set Clase(value) {
		this._Clase = value;
		this.calculaTalentos();
	}
	
	get Bioforma() {
		return this._Bioforma;
	}
	set Bioforma(value) {
		this._Bioforma = value;
	}
	
	
	
	get Alerta() {
		return this._Alerta;
	}
	set Alerta(value) {
		this._Alerta = value;
	}
	
	
	get Comunicacion() {
		return this._Comunicacion;
	}
	set Comunicacion(value) {
		this._Comunicacion = value;
	}
	
	
	get Erudicion() {
		return this._Erudicion;
	}
	set Erudicion(value) {
		this._Erudicion = value;
	}
	
	
	get Subterfugio() {
		return this._Subterfugio;
	}
	set Subterfugio(value) {
		this._Subterfugio = value;
	}
	
	
	get Supervivencia() {
		return this._Supervivencia;
	}
	set Supervivencia(value) {
		this._Supervivencia = value;
	}
	
	
	get Tecnologia() {
		return this._Tecnologia;
	}
	set Tecnologia(value) {
		this._Tecnologia = value;
	}
	
	
	get FUE() {
		return this._FUE;
	}
	set FUE(value) {
		this._FUE = value;
	}
	
	get DES() {
		return this._DES;
	}
	set DES(value) {
		this._DES = value;
	}
	
	get CON() {
		return this._CON;
	}
	set CON(value) {
		this._CON = value;
	}
	
	get INT() {
		return this._INT;
	}
	set INT(value) {
		this._INT = value;
	}
	
	get SAB() {
		return this._SAB;
	}
	set SAB(value) {
		this._SAB = value;
	}
	
	get CAR() {
		return this._CAR;
	}
	set CAR(value) {
		this._CAR = value;
	}
	
	get DEF() {
		return this._DEF;
	}
	
	calculaMod(atributo) {
		var modificador = 2;
		if ( atributo <= 3 )
			modificador = -2;
		else if ( atributo <= 6 )
			modificador = -1;
		else if ( atributo <= 14 )
			modificador = 0;
		else if (atributo <= 17 )
			modificador = 1;
		return modificador;
	}
	
	get mFUE() {
		return this.calculaMod(this._FUE);
	}
	
	get mDES() {
		return this.calculaMod(this._DES);
	}
	
	get mCON() {
		return this.calculaMod(this._CON);
	}
	
	get mINT() {
		return this.calculaMod(this._INT);
	}
	
	get mSAB() {
		return this.calculaMod(this._SAB);
	}
	
	get mCAR() {
		return this.calculaMod(this._CAR);
	}
	
	get PV() {
		return this._PV;
	}
	set PV(value) {
		this._PV = value;
	}
	
	get Talentos() {
		var talentos = [];
		var ital=0;
		if ( this._Bioforma != null ) {
			if ( this._Bioforma.talentos.length > 2 ) {
				var talentosbioforma = Comun.shuffle(this._Bioforma.talentos.tlnrandom);
				for (ital = 0; ital< talentosbioforma.length; ital++) {
					talentos.push(talentosbioforma[ital]);
				}
			}
			else {
				for (ital = 0; ital< this._Bioforma.talentos.length; ital++) {
					talentos.push(this._Bioforma.talentos[ital]);
				}
			}
		}
		if ( this._Talentos != null ) {
			for (ital = 0; ital< this._Talentos.length; ital++) {
				talentos.push(this._Talentos[ital]);
			}
		}
		return talentos;
	}
	
	strTalentos() {
		var aTalentos = this.Talentos;
		var ital=0;
		var sTalentos = "";
		if ( aTalentos.length > 0 )
		{
			sTalentos = aTalentos[0];
			for (ital=1; ital < aTalentos.length; ital++) {
				sTalentos += ", " + aTalentos[ital];
			}
		}
		return sTalentos;
	}
	
	calculaTalentos() {
		this._Talentos = [];
		if ( this._Clase != null ) {
			var n=2;
			if ( this._Clase._talentos.tlnfijo != "" ) {
				this._Talentos.push(this._Clase._talentos.tlnfijo);
				n=1;
			}
			
			var tal1 = Comun.shuffle(this._Clase._talentos.tlnrandom);
			var ital = 0;
			for(ital=0; ital<n; ital++) {
				this._Talentos.push(tal1[ital]);
			}
		}
	}
	
	modificaAtributo(indice, valor) {
		if ( indice == 0 )
			this._FUE = valor;
		else if ( indice == 1 )
			this._DES = valor;
		else if ( indice == 2 )
			this._CON = valor;
		else if ( indice == 3 )
			this._INT = valor;
		else if ( indice == 4 )
			this._SAB = valor;
		else if ( indice == 5 )
			this._CAR = valor;
	}
	
	indiceAtributo(nombreatributo) {
		var indice = 5;
		if ( nombreatributo == "FUE" ) {
			indice = 0;
		}
		else if ( nombreatributo == "DES" ) {
			indice = 1;
		}
		else if ( nombreatributo == "CON" ) {
			indice = 2;
		}
		else if ( nombreatributo == "INT" ) {
			indice = 3;
		}
		else if ( nombreatributo == "SAB" ) {
			indice = 4;
		}
		return indice;
	}
	
	modificaHabilidad(indice, valor) {
		if ( indice == 0 )
			this._Alerta = valor;
		else if ( indice == 1 )
			this._Comunicacion = valor;
		else if ( indice == 2 )
			this._Erudicion = valor;
		else if ( indice == 3 )
			this._Subterfugio = valor;
		else if ( indice == 4 )
			this._Supervivencia = valor;
		else if ( indice == 5 )
			this._Tecnologia = valor;
	}
	
	calculaAtributos() {
		
		var ivalatr = 0;
		var valatr = [];
		for (ivalatr=0; ivalatr<7; ivalatr++ ) {
			valatr.push(Comun.random(6, 1) + Comun.random(6, 1) + Comun.random(6, 1));
		}
		valatr.sort(function(a, b){return b-a});
		valatr = valatr.splice(0, 6);
		
		for ( ivalatr = 0; ivalatr < this._Clase.atrs.length; ivalatr++) {
			this.modificaAtributo( this.indiceAtributo(this._Clase.atrs[ivalatr]), valatr[ivalatr]);
		}
		
	}
	
	calculaPV() {
		this._PV = this._Clase.daguante + this.mCON;;
	}
	
	calculaDef() {
		this._DEF = 10 + this.mDES;;
	}
	
	calculaHabilidades() {
		var ivalhab = 0;
		var valhab = [];
		for (ivalhab=0; ivalhab<4; ivalhab++ ) {
			valhab.push(1);
		}
		for (ivalhab=4; ivalhab<6; ivalhab++ ) {
			valhab.push(0);
		}
		valhab = Comun.shuffle(valhab);
		for (ivalhab=0; ivalhab<6; ivalhab++ ) {
			this.modificaHabilidad(ivalhab, valhab[ivalhab]);
		}
		
		
	}
	
	genera() {
		
		this.calculaAtributos();
		this.calculaPV();
		this.calculaDef();
		this.calculaHabilidades();
	}
	
}
