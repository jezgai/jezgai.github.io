class DH_PJ {

	constructor(nivel) {
		this._FUE = 0;
		this._DES = 0;
		this._CON = 0;
		this._INT = 0;
		this._SAB = 0;
		this._CAR = 0;
		
		this.inicializamod();
		
		/*this._Salud = 0;
		this._Energia = 0;
		this._Atributo = "";
		
		this._Cordura = "";
		
		this._Competencias = [];
		this._Ventajas = [];
		this._Habilidades = [];*/
		
		this._Clase = null;
	}
	
	
	get Clase() {
		return this._Clase;
	}
	set Clase(value) {
		this._Clase = value;
	}
	
	/*get Competencias() {
		return this._Competencias;
	}
	set Competencias(value) {
		this._Competencias = value;
	}
	
	get Ventajas() {
		return this._Ventajas;
	}
	set Ventajas(value) {
		this._Ventajas = value;
	}
	
	get Habilidades() {
		return this._Habilidades;
	}
	set Habilidades(value) {
		this._Habilidades = value;
	}*/
	

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
	
	get mFUE() {
		return this._mFUE;
	}
	set mFUE(value) {
		if ( value != 0 )
			this.inicializamod();
		this._mFUE = value;
	}
	
	get mDES() {
		return this._mDES;
	}
	set mDES(value) {
		if ( value != 0 )
			this.inicializamod();
		this._mDES = value;
	}
	
	get mCON() {
		return this._mCON;
	}
	set mCON(value) {
		if ( value != 0 )
			this.inicializamod();
		this._mCON = value;
	}
	
	get mINT() {
		return this._mINT;
	}
	set mINT(value) {
		if ( value != 0 )
			this.inicializamod();
		this._mINT = value;
	}
	
	get mSAB() {
		return this._mSAB;
	}
	set mSAB(value) {
		if ( value != 0 )
			this.inicializamod();
		this._mSAB = value;
	}
	
	get mCAR() {
		return this._mCAR;
	}
	set mCAR(value) {
		if ( value != 0 )
			this.inicializamod();
		this._mCAR = value;
	}

	/*
	get Salud() {
		return this._Salud; // En función de la clase
	}
	set Salud(value) {
		this._Salud = value;
	}
	
	get Energia() {
		return this._Energia; // En función de la clase
	}
	set Energia(value) {
		this._Energia = value;
	}*/
	
	calculaCordura(valorAtributo) {
		if ( valorAtributo  >= 16)
			return "d6";
		else if ( valorAtributo >= 13 )
			return "d8";
		else if ( valorAtributo >= 10 )
			return "d10";
		else
			return "d12";
	}
	
	get Cordura() {
		var valoratr = 20;
		if ( this._Clase.cordura == "FUE" )
			valoratr = this._FUE + this._mFUE;
		else if ( this._Clase.cordura == "DES" )
			valoratr = this._DES + this._mDES;
		else if ( this._Clase.cordura == "CON" )
			valoratr = this._CON + this._mCON;
		else if ( this._Clase.cordura == "INT" )
			valoratr = this._INT + this._mINT;
		else if ( this._Clase.cordura == "SAB" )
			valoratr = this._SAB + this._mSAB;
		else if ( this._Clase.cordura == "CAR" )
			valoratr = this._CAR + this._mCAR;
		return this.calculaCordura(valoratr);
	}
	/*set Cordura(value) {
		this._Cordura = value;
	}*/
	
	
	get Atributo() {
		return this._Atributo;
	}
	set Atributo(value) {
		this._Atributo = value;
	}
	
	inicializamod() {
		this._mFUE = 0;
		this._mDES = 0;
		this._mCON = 0;
		this._mINT = 0;
		this._mSAB = 0;
		this._mCAR = 0;
	}
	
	genera() {
		
		this._FUE = Comun.atributo();
		this._DES = Comun.atributo();
		this._CON = Comun.atributo();
		this._INT = Comun.atributo();
		this._SAB = Comun.atributo();
		this._CAR = Comun.atributo();
		
	}
	
}
