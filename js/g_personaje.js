
class Personaje {

	constructor(nombre, genero, divinidad) {
		this._nombre = nombre;
		this._genero = genero;
		this._divinidad = divinidad;
	}
	
	get Nombre() {
		return this._nombre;
	}
	
	get Genero() {
		return this._genero;
	}
	
	get Divinidad() {
		return this._divinidad;
	}
}
