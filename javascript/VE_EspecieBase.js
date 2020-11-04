class Especie {
	constructor(nombre, talentos, mov) {
		this._nombre = nombre;
		this._talentos = talentos;
		this._mov = mov;
	}
	
	get nombre() {
		return this._nombre;
	}
	get talentos() {
		return this._talentos;
	}
	get mov() {
		return this._mov;
	}
	
}

