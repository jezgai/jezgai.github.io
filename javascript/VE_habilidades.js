class Habilidades {
	constructor() {
		this._ptos_ini = 4;
		this._ptos_niv = 2;
		this._habilidades = [ "Alerta", "Comunicacion", "Manipulacion", "Erudicion", "Subterfugio", "Supervivencia" ];
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
	
	get habilidades() {
		return this._habilidades;
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
}


let habilidades = new Habilidades();


