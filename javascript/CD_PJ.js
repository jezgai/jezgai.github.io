class CD_PJ {

	constructor(nivel) {
		this._FUE = 0;
		this._CON = 0;
		this._DES = 0;
		this._POD = 0;
		this._CAR = 0;
		this._EST = 0;
		this._TAM = 0;
		this._INT = 0;
		this._profesion = "";
		this._em1 = 9;
		this._em2 = 9;
		
		this._lhabprofesion = [];
		this._lhabresto = [];
		this._puntosProfesion = [];
		this._puntosResto = [];
	}
	
	setprofesion(objprofesion) {
		this._profesion = objprofesion.nombre;
		
		this._lhabprofesion = objprofesion._lhabilidades;
		this._lhabresto = objprofesion._lresto;
		
	}

	get FUE() {
		return this._FUE;
	}
	set FUE(value) {
		this._FUE = value;
	}
	
	get CON() {
		return this._CON;
	}
	set CON(value) {
		this._CON = value;
	}
	
	get DES() {
		return this._DES;
	}
	set DES(value) {
		this._DES = value;
	}
	
	get POD() {
		return this._POD;
	}
	set POD(value) {
		this._POD = value;
	}
	
	get CAR() {
		return this._CAR;
	}
	set CAR(value) {
		this._CAR = value;
	}
	
	get EST() {
		return this._EST;
	}
	set EST(value) {
		this._EST = value;
	}
	
	get TAM() {
		return this._TAM;
	}
	set TAM(value) {
		this._TAM = value;
	}
	
	get INT() {
		return this._INT;
	}
	set INT(value) {
		this._INT = value;
	}
	
	get PV() {
		return Math.ceil((this._TAM + this._CON)/2);
	}
	
	get UmbralHerida() {
		return Math.ceil(this.PV/2);
	}
	
	get FuerzaVoluntad	() {
		return Math.trunc(this._POD/2);
	}
	get PM() {
		return this._POD;
	}
	
	get Suerte() {
		return this._POD*5;
	}	
	
	get Idea() {
		return this._INT*5;
	}
	
	get CulturaGeneral() {
		return this._EST*5;
	}
	
	
	get MD() {
		var md="+1d6";
		var fuetam = this._FUE + this._TAM;
		if ( fuetam <= 15 )
			md = "-1d4";
		else if ( fuetam <= 20 )
			md = "-1d2";
		else if ( fuetam <= 25 )
			md = "0";
		else if ( fuetam <= 30 )
			md = "+1d2";
		else if ( fuetam <= 35 )
			md = "+1d4";
		return md;
	}
	
	get DSimplificado() {
		var dsimp="+4";
		var fuetam = this._FUE + this._TAM;
		if ( fuetam <= 15 )
			dsimp = "-2";
		else if ( fuetam <= 20 )
			dsimp = "-1";
		else if ( fuetam <= 25 )
			dsimp = "0";
		else if ( fuetam <= 30 )
			dsimp = "+1";
		else if ( fuetam <= 35 )
			dsimp = "+2";
		return dsimp;
	}
	
	get PtosProfesion() {
		return this._EST * 20;
	}
	
	get PtosResto() {
		return this._INT * 10;
	}
	
	valor(atributo) {
		var retorno = 0;
		switch (atributo) {
			case "FUE" : retorno = this._FUE;
						 break;
			case "CON" : retorno = this._CON;
						 break;
			case "DES" : retorno = this._DES;
						 break;
			case "POD" : retorno = this._POD;
						 break;
			case "CAR" : retorno = this._CAR;
						 break;
			case "EST" : retorno = this._EST;
						 break;
			case "TAM" : retorno = this._TAM;
						 break;
			case "INT" : retorno = this._INT;
						 break;
		}
		return retorno;
		
	}
	
	
	
	genera() {
		
		this._FUE = Comun.atributo();
		this._CON = Comun.atributo();
		this._DES = Comun.atributo();
		this._POD = Comun.atributo();
		this._CAR = Comun.atributo();
		this._EST = Comun.atributo3();
		this._TAM = Comun.atributo6();
		this._INT = Comun.atributo6();
		
	}
	
}
