class Puntuaciones
{
	constructor() {
		this._puntuaciones = [ 
			[ 0.27, 0.26, 0.24, 0.23 ],
			[ 0.22, 0.18, 0.18, 0.15, 0.15, 0.12 ],
			[ 0.20, 0.16, 0.16, 0.13, 0.13, 0.11, 0.11 ],
			[ 0.18, 0.14, 0.14, 0.12, 0.12, 0.10, 0.10, 0.10 ],
		]
	}
	
	puntuaciones(numero, numeropuntos) {
		var indice=0;
		var puntos = [];
		for (indice=0;indice<this._puntuaciones.length; indice++) {
			if ( numero == this._puntuaciones[indice].length ) {
				var indice2=0;
				for (indice2=0; indice2<numero; indice2++) {
					puntos[indice2] = Math.round(numeropuntos * this._puntuaciones[indice][indice2]);
				}
				break;
			}
		}
		return puntos;
	}
}

