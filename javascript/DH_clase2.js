class Clase extends ClaseBase {
	constructor(clase) {
		super(clase);
	}
	
}


class Clases extends ClasesBases {
	
	constructor() {
		super();
	}
	/*
	get clases() {
		return this._clases;
	}

	set clases(value) {
		this._clases = value;
	}
	*/
	clase(nombre) {
		var iclases=0;
		for (iclases=0; iclases<this._clases.length; iclases++) {
			if ( this._clases[iclases].nombre == nombre ) {
				return new Clase(this._clases[iclases]);
			}
		}
		return new Clase(this._clases[Comun.random(this._clases.length, 0)]);
	}
}


