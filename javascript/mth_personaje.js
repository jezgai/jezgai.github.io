
class Personaje {
	
	
	constructor(genero, origen) {
		this._genero = genero;
		if ( origen == "Britano" )
			this.nombreBritano();
		else
			this.nombreSajon();
		this._trasfondos = trasfondos.trasfondo();
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
	
	get Trasfondos() {
		return this._trasfondos;
	}
	
	nombreBritano() {
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
	
	nombreSajon() {
		if (this._genero == "Masculino" ) {
			var nombres = nombresSajones.masculinos;
			this._nombre = nombres[0] + " " + nombres[1] + "son";
			this._padre = nombres[1] + " " + nombres[2] + "son";
			nombres = nombresSajones.femeninos;
			this._madre = nombres[0] + " " + nombres[1] + "dotter";
		}
		else {
			var nombres = nombresSajones.femeninos;
			this._nombre = nombres[0] + " " + nombres[1] + "dotter";
			this._madre = nombres[1] + " " + nombres[2] + "dotter";
			nombres = nombresSajones.masculinos;
			this._padre = nombres[0] + " " + nombres[1] + "son";
		}
	}
	
	
}
