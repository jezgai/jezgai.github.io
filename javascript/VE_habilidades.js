class Habilidades {
	constructor() {
		this._ptos_ini = 4;
		this._ptos_niv = 2;
		this._habilidadesGen = [ "Alerta", "Comunicación", "Manipulación", "Erudición", "Subterfugio", "Supervivencia" ];
		this._habilidadesJap = [ "Alerta", "Callejeo", "Corte", "Guerra", "Manipulación", "Supervivencia" ];
		this._habilidadesCyb = [ "Corporate", "Cyber", "Hardware", "Punk", "Savage", "Urban" ];
		this._habilidadesNUV = [ "Al loro", "Empollon", "Manitas", "Ninja", "Palique", "Rambo" ];
		this._habilidadesVC = [ "Ciudadano", "Ocultista", "Político", "Ratero", "Manitas", "Veterano" ];
		this._habilidadesVES = [ "Alerta", "Comunicación", "Erudición", "Subterfugio", "Supervivencia", "Tecnología" ];
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
	
	habilidadesNUV() {
		this._habilidades = this._habilidadesNUV.slice(0);
	}
	
	habilidadesVC() {
		this._habilidades = this._habilidadesVC.slice(0);
	}
	
	habilidadesVES() {
		this._habilidades = this._habilidadesVES.slice(0);
	}
	
	puntuaciones1(nivel, mod_ptos_ini ) {
		var phab = [];
		var ptos = []
		var ihab=0;
		var ptos_ini = this._ptos_ini + mod_ptos_ini;
		for (ihab = 0; ihab < this._habilidades.length; ihab++) {
			if ( ihab < ptos_ini ) {
				phab.push(1);
			}
			else {
				phab.push(0);
			}
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
	
	puntuaciones(nivel) {
		return this.puntuaciones1(nivel, 0);
	}



	puntuaciones2(nivel, mod_ptos_ini) {
		var phab = [];
		var ptos = []
		var ihab=0;
		var ptos_ini = this._ptos_ini + mod_ptos_ini;
		if ( ptos_ini < 4 )
			return this.puntuaciones1(nivel, mod_ptos_ini);
		
		// Numero de habilidades con puntuación 2 => 3, 2, 1, ó 0
		var numMaxPtos2 = this.maximoNumHabilidades(ptos_ini, 2);
		var numHabPtos2 = Comun.random(numMaxPtos2, 0);
		var numHabPtos1 = ptos_ini - (2 * numHabPtos2);
		
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
	
	maximoNumHabilidades(puntos, puntuacion) {
		if ( puntos < puntuacion )
			return 0;
		return Math.trunc(puntos / puntuacion) + 1;
		
	}
	
	
	puntuacionesNUV() {
		var phab = [];
		var ihab=0;
		// Numero de habilidades con puntuación 4 => 1, ó 0
		var puntos = 6;
		var numero = this.maximoNumHabilidades(puntos, 4);
		var numHabPtos4 = Comun.random(numero, 0);
		puntos -= (4 * numHabPtos4);
		numero = this.maximoNumHabilidades(puntos, 3);
		var numHabPtos3 = Comun.random(numero,0);
		puntos -= (3 * numHabPtos3);
		numero = this.maximoNumHabilidades(puntos, 2);
		var numHabPtos2 = Comun.random(numero, 0);
		var numHabPtos1 = puntos - (2 * numHabPtos2);
		
		for (ihab = 0; ihab < this._habilidades.length;  ihab++) {
			if ( ihab < numHabPtos4 ) {
				phab.push(4);
			}
			else if ( ihab < (numHabPtos4 + numHabPtos3) ) {
				phab.push(3);
			}
			else if ( ihab < (numHabPtos4 + numHabPtos3 + numHabPtos2) ) {
				phab.push(2);
			}
			else if ( ihab < (numHabPtos4 + numHabPtos3 + numHabPtos2 + numHabPtos1) ) {
				phab.push(1);
			}
			else {
				phab.push(0);
			}
		}
		
		phab = Comun.shuffle(phab);
		
		return phab;
	}	
	
}


let habilidades = new Habilidades();


