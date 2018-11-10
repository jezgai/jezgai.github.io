class Habilidades {
	constructor() {
		this._ptos_ini = 4;
		this._ptos_niv = 2;
		this._habilidadesGen = [ "Alerta", "Comunicación", "Manipulación", "Erudición", "Subterfugio", "Supervivencia" ];
		this._habilidadesJap = [ "Alerta", "Callejeo", "Corte", "Guerra", "Manipulación", "Supervivencia" ];
		this._habilidadesCyb = [ "Corporate", "Cyber", "Hardware", "Punk", "Savage", "Urban" ];
		this._habilidades = this._habilidadesGen.slice(0);
	}
	
	habilidad(nombre) {
		var ihb=0;
		for (ihb=0; ihb < this._habilidades.length; ihb++) {
			if (this._habilidades[ihb] == nombre ) {
				return ihb;
			}
		}
		return -1;
	}
	
	get ptos_niv() {
		return this._ptos_niv;
	}
	
	set ptos_niv(value) {
		this._ptos_niv = value;
	}
	
	get habilidades() {
		return this._habilidades;
	}
	
	habilidadesGen() {
		this._habilidades = this._habilidadesGen.slice(0);
	}
	
	habilidadesJap() {
		this._habilidades = this._habilidadesJap.slice(0);
	}
	
	habilidadesCyb() {
		this._habilidades = this._habilidadesCyb.slice(0);
	}
	
	puntuaciones(nivel) {
		var phab = [];
		var ptos = []
		var ihab=0;
		for (ihab = 0; ihab < this._habilidades.length; ihab++) {
			if ( ihab < this._ptos_ini ) {
				phab.push(1);
			}
			else {
				phab.push(0);
			}
			ptos.push(0);
		}
		var iniv=0;
		for (iniv = 1; iniv < nivel; iniv++) {
			phab = Comun.shuffle(phab);
			for (ihab = 0; ihab < this._ptos_niv; ihab++) {
				phab[ihab] ++;
			}
		}
		
		phab = Comun.shuffle(phab);
		var hab = []; 
		
		for (ihab = 0; ihab < this._habilidades.length; ihab++) {
			hab.push(this._habilidades[ihab]);
		}
		hab = Comun.shuffle(hab);
		for (ihab = 0; ihab < hab.length; ihab++) {
			ptos[this.habilidad(hab[ihab])] = phab[ihab];
		}
		return ptos;
	}


	puntuacionesCP(nivel) {
		var phab = [];
		var ptos = []
		var ihab=0;
		
		// Numero de habilidades con puntuación 2 => 3, 2, 1, ó 0
		var numHabPtos2 = Comun.random(4, 0);
		var numHabPtos1 = 6 - (2 * numHabPtos2);
		
		for (ihab = 0; ihab < this._habilidades.length;  ihab++) {
			if ( ihab < numHabPtos2 ) {
				phab.push(2);
			}
			else if ( ihab < (numHabPtos2 + numHabPtos1) ) {
				phab.push(1);
			}
			else {
				phab.push(0);
			}
			ptos.push(0);
		}
		
		var iniv=0;
		for (iniv = 1; iniv < nivel; iniv++) {
			phab = Comun.shuffle(phab);
			for (ihab = 0; ihab < this._ptos_niv; ihab++) {
				phab[ihab] ++;
			}
		}
		
		phab = Comun.shuffle(phab);
		var hab = []; 
		
		for (ihab = 0; ihab < this._habilidades.length; ihab++) {
			hab.push(this._habilidades[ihab]);
		}
		hab = Comun.shuffle(hab);
		for (ihab = 0; ihab < hab.length; ihab++) {
			ptos[this.habilidad(hab[ihab])] = phab[ihab];
		}
		return ptos;
	}	
	
}


let habilidades = new Habilidades();


