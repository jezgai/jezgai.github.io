class Habilidades {
	constructor() {
		this.habilidades = [ "Disciplinas sombrías y Disimulo", "Duelo mágico y Pelea", "Imbuir y Artesanía", "Mentalismo y Comunicación", "Pócimas y Saber Squabble", 
								"Transformar y Erudición", "Translocar y Lex Mágica", "Vuelo y Alerta", "Zoomancia y Medio natural" ];
		this.pdfhabilidades = [ "cDisimulo", "cPelea", "cArtesania", "cComunicacion", "cPocimas",
								"cErudicion", "cTranslocar", "cAlerta", "cZoomancia" ];
	}
	
	habilidad(nombre) {
		var ihb=0;
		for (ihb=0; ihb < this.habilidades.length; ihb++) {
			if (this.habilidades[ihb] == nombre ) {
				return ihb;
			}
		}
		return -1;
	}
	
	puntuacioneshab(ptos_ini, max_ptos, numero_habilidades) {
		var phab = [];
		var ptos = []
		var ihab=0;
		
		var numhabptos = [];
		var indice=0;
		for ( indice=1; indice<=max_ptos; indice++) {
			var numero = Math.trunc(ptos_ini/indice);
			if ( numero > 0 ) {
				numhabptos.push(numero);
			}
		}
		
		var ptos1 = Comun.random(numhabptos.length,1);
		var totalptos = 0;
		for (ihab=0; ihab<numhabptos[ptos1-1]; ihab++) {
			phab.push(ptos1);
			totalptos += ptos1;
		}
		
		if ( totalptos < ptos_ini ) {
			var max_ptos2 = max_ptos-1
			if ( ptos_ini - totalptos < max_ptos2 ) {
				max_ptos2 = ptos_ini - totalptos;
			}
			var phab2 = this.puntuacioneshab(ptos_ini - totalptos, max_ptos2, numero_habilidades-phab.length);
			for (indice=0; indice<phab2.length && ihab<numero_habilidades; indice++, ihab++) {
				phab.push(phab2[indice]);
			}
		}
		
		for (indice=ihab; indice < numero_habilidades; indice++) {
			phab.push(0);
		}
		
		return phab;
	}
	
	puntuaciones(ptos_ini, max_ptos) {
		var phab = this.puntuacioneshab(ptos_ini, max_ptos, this.habilidades.length);
		phab = Comun.shuffle(phab);		
		return phab;
	}
	
	
}


let habilidades = new Habilidades();


