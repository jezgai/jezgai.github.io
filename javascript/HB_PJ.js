class HB_PJ {

	constructor(nivel) {
		this._vigor = 0;
		this._destreza = 0;
		this._perspicacia = 0;
		this._carisma = 0;
		this._suerte = 0;
		this._habprimarias = [];
		this._habsecundarias = [];
		this._pv = 0;
		this._mov = 0;
		this._pegada = 0;
		this._porchabper = 0;
		this._porchabcar = 0;
		this._cordura = 0;
		this._concentracion = 0;
		this._ahorros = 0;
		this._posesiones = 0;
		this._sueldo = 0;
		this._gravementeherido = 0;
		this._tensionmental=0;
		this._tranquilo=0;
		this._intranquilo=0;
		this._tenso=0;
	}
	
	calculaEM() {
		this._tensionmental = Math.trunc(this.perspicacia / 5) - 2;
		this._tranquilo = Math.ceil(this.tensionmental / 2);
		this._intranquilo = Math.trunc(this.tensionmental / 2);
	}
	
	get tensionmental() {
		return this._tensionmental;
	}
	
	get tranquilo() {
		return this._tranquilo;
	}

	get intranquilo() {
		return this._intranquilo;
	}

	calculaEM() {
		this._tensionmental = Math.trunc(this.perspicacia / 5) - 2;
		this._tranquilo = Math.ceil(this.tensionmental / 2);
		this._intranquilo = Math.trunc(this.tensionmental / 2);
	}
	
	get ahorros() {
		return this._ahorros;
	}
	set ahorros(value) {
		this._ahorros = value;
	}
	
	get posesiones() {
		return this._posesiones;
	}
	set posesiones(value) {
		this._posesiones = value;
	}
	
	get sueldo() {
		return this._sueldo;
	}
	set sueldo(value) {
		this._sueldo = value;
	}
	
	get concentracion() {
		return this._concentracion;
	}
	set concentracion(value) {
		this._concentracion = value;
	}
	
	get cordura() {
		return this._cordura;
	}
	set cordura(value) {
		this._cordura = value;
	}
	
	get vigor() {
		return this._vigor;
	}
	set vigor(value) {
		this._vigor = value;
	}
	
	get destreza() {
		return this._destreza;
	}
	set destreza(value) {
		this._destreza = value;
	}
	
	get perspicacia() {
		return this._perspicacia;
	}
	set perspicacia(value) {
		this._perspicacia = value;
	}
	
	get carisma() {
		return this._carisma;
	}
	set carisma(value) {
		this._carisma = value;
	}
	
	get suerte() {
		return this._suerte;
	}
	set suerte(value) {
		this._suerte = value;
	}
	
	get habprimarias() {
		return this._habprimarias;
	}
	set habprimarias(value) {
		this._habprimarias = value;
	}
	
	get habsecundarias() {
		return this._habsecundarias;
	}
	set habsecundarias(value) {
		this._habsecundarias = value;
	}
		
	get pv() {
		return this._pv;
	}
	set pv(value) {
		this._pv = value;
	}
	
	get pegada() {
		return this._pegada;
	}
	set pegada(value) {
		this._pegada = value;
	}
	
	get mov() {
		return this._mov;
	}
	set mov(value) {
		this._mov = value;
	}
	
	get porchabper() {
		return this._porchabper;
	}
	set porchabper(value) {
		this._porchabper = value;
	}
	
	
	get porchabcar() {
		return this._porchabcar;
	}
	set porchabcar(value) {
		this._porchabcar = value;
	}
	
	calculapegadapv() {
		var ndadospv=5;
		var modpv=50;
		this._pegada = 10;
		if ( this._vigor <= 10 ) {
			ndadospv=1;
			modpv=0;
			this._pegada = 1;
		}
		else if (this._vigor <= 20) {
			ndadospv=1;
			modpv=10;
			this._pegada = 2;
		}
		else if (this._vigor <= 30) {
			ndadospv=1;
			modpv=20;
			this._pegada = 3;
		}
		else if (this._vigor <= 40) {
			ndadospv=1;
			modpv=30;
			this._pegada = 4;
		}
		else if (this._vigor <= 50) {
			ndadospv=1;
			modpv=40;
			this._pegada = 5;
		}
		else if (this._vigor <= 60) {
			ndadospv=1;
			modpv=50;
			this._pegada = 6;
		}
		else if (this._vigor <= 70) {
			ndadospv=2;
			modpv=50;
			this._pegada = 7;
		}
		else if (this._vigor <= 80) {
			ndadospv=3;
			modpv=50;
			this._pegada = 8;
		}
		else if (this._vigor <= 90) {
			ndadospv=5;
			modpv=50;
			this._pegada = 9;
		}
		var indados=0;
		this._pv = 0;
		for (indados=0;indados<ndadospv;indados++) {
			this._pv += Comun.random(10,1);
		}
		this._pv += modpv;
		
		this._gravementeherido = Math.round(this._pv / 2);
	}
	
	rangomovimiento() {
		var vigydes = this._vigor + this._destreza;
		if ( vigydes <= 20 ) {
			this._mov = 2;
		}
		else if (vigydes <= 40) {
			this._mov = 3;
		}
		else if (vigydes <= 100) {
			this._mov = 4;
		}
		else if (vigydes <= 140) {
			this._mov = 5;
		}
		else if (vigydes <= 180) {
			this._mov = 6;
		}
		else if (vigydes <= 190) {
			this._mov = 7;
		}
		else {
			this._mov = 8;
		}
	}
	
	porcperspicacia() {
		this._porchabper = 50;
		if ( this._perspicacia <= 20 ) {
			this._porchabper = 10;
		}
		else if ( this._perspicacia <= 40 ) {
			this._porchabper = 20;
		}
		else if ( this._perspicacia <= 60 ) {
			this._porchabper = 30;
		}
		else if ( this._perspicacia <= 80 ) {
			this._porchabper = 40;
		}
		else if ( this._perspicacia <= 90 ) {
			this._porchabper = 45;
		}
	}
	
	porccarisma() {
		this._porchabcar = 30;
		if ( this._carisma <= 20 ) {
			this._porchabcar = 5;
		}
		else if ( this._carisma <= 40 ) {
			this._porchabcar = 10;
		}
		else if ( this._carisma <= 60 ) {
			this._porchabcar = 15;
		}
		else if ( this._carisma <= 80 ) {
			this._porchabcar = 20;
		}
		else if ( this._carisma <= 90 ) {
			this._porchabcar = 25;
		}
	}
	
	calculaconcentracion() {
		this._concentracion = 10;
		if ( this._perspicacia <= 10 ) {
			this._concentracion = 1;
		}
		else if ( this._perspicacia <= 20 ) {
			this._concentracion = 2;
		}
		else if ( this._perspicacia <= 30 ) {
			this._concentracion = 3;
		}
		else if ( this._perspicacia <= 40 ) {
			this._concentracion = 4;
		}
		else if ( this._perspicacia <= 50 ) {
			this._concentracion = 5;
		}
		else if ( this._perspicacia <= 60 ) {
			this._concentracion = 6;
		}
		else if ( this._perspicacia <= 70 ) {
			this._concentracion = 7;
		}
		else if ( this._perspicacia <= 80 ) {
			this._concentracion = 8;
		}
		else if ( this._perspicacia <= 90 ) {
			this._concentracion = 9;
		}
	}
	
	genera(nhabprim, nhabsec) {
		
		this._vigor = Comun.atributo();
		this._destreza = Comun.atributo();
		this._perspicacia = Comun.atributo();
		this._carisma = Comun.atributo();
		this._suerte = Comun.suerte();
		this._cordura = Comun.atributo();
		var ihabp=0;
		for (ihabp=0;ihabp<nhabprim;ihabp++) {
			this._habprimarias.push(Comun.habilidadprimaria());
		}
		var ihabs=0;
		for (ihabs=0;ihabs<nhabsec;ihabs++) {
			this._habsecundarias.push(Comun.habilidadsecundaria());
		}
		
		// Puntos de vida y pegada
		this.calculapegadapv();
		
		// Rango de movimiento
		this.rangomovimiento();
		
		// Porcentaje adicional a habilidades por perspicacia
		this.porcperspicacia();
		
		// Porcentaje adicional a habilidades sociales por carisma
		this.porccarisma();
		
		this.calculaconcentracion();
		
		this.calculaEM();
	}
	
}
