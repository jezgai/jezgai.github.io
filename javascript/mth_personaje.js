
class Personaje {
	
	constructor(genero) {
		this._genero = genero;
		if (this._genero == "Masculino" ) {
			var nombres = nombresBritanos.masculinos;
			this._nombre = nombres[0] + "-ap-" + nombres[1];
			this._padre = nombres[1] + "-ap-" + nombres[2];
			nombres = nombresBritanos.femeninos;
			this._madre = nombres[0] + "-an-" + nombres[1];
		}
		else {
			var nombres = nombresBritanos.femeninos;
			this._nombre = nombres[0] + "-an-" + nombres[1];
			this._madre = nombres[1] + "-an-" + nombres[2];
			nombres = nombresBritanos.masculinos;
			this._padre = nombres[0] + "-ap-" + nombres[1];
		}
	}
	
	get Nombre() {
		return this._nombre;
	}
	
	get Genero() {
		return this._genero;
	}
	
	get Padre() {
		return this._padre;
	}
	
	get Madre() {
		return this._madre;
	}
	
}
