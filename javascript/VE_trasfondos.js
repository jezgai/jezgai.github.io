class Trasfondo {
	constructor(numinferior, numsuperior, nombretrasfondo) {
		this._nombretrasfondo = nombretrasfondo;
		this._numinferior = numinferior;
		this._numsuperior = numsuperior;
	}
	
	enIntervalo(numero) {
		if ( numero >= this._numinferior && numero <= this._numsuperior ) {
			return true;
		}
		else {
			return false;
		}
	}
	
	get NombreTrasfondo() {
		return this._nombretrasfondo;
	}

}

class Trasfondos {

	constructor() {
		this._trasfondos = [];
		this._trasfondos.push( new Trasfondo(1,4,"Armero"));
		this._trasfondos.push( new Trasfondo(5,8,"Flechero"));
		this._trasfondos.push( new Trasfondo(9,12,"Jardinero"));
		this._trasfondos.push( new Trasfondo(13,16,"Pescador"));
		this._trasfondos.push( new Trasfondo(17,20,"Leñador"));
		this._trasfondos.push( new Trasfondo(21,24,"Jugador"));
		this._trasfondos.push( new Trasfondo(25,28,"Escriba"));
		this._trasfondos.push( new Trasfondo(29,32,"Agricultor"));
		this._trasfondos.push( new Trasfondo(33,36,"Joyero"));
		this._trasfondos.push( new Trasfondo(37,40,"Curtidor"));
		this._trasfondos.push( new Trasfondo(41,44,"Pintor"));
		this._trasfondos.push( new Trasfondo(45,48,"Albañil"));
		this._trasfondos.push( new Trasfondo(49,52,"Minero"));
		this._trasfondos.push( new Trasfondo(53,56,"Asistente"));
		this._trasfondos.push( new Trasfondo(57,60,"Marinero"));
		this._trasfondos.push( new Trasfondo(61,64,"Carpintero"));
		this._trasfondos.push( new Trasfondo(65,68,"Sastre"));
		this._trasfondos.push( new Trasfondo(69,72,"Pastor"));
		this._trasfondos.push( new Trasfondo(73,76,"Tendero"));
		this._trasfondos.push( new Trasfondo(77,78,"Informador"));
		this._trasfondos.push( new Trasfondo(79,80,"Interrogador"));
		this._trasfondos.push( new Trasfondo(81,82,"Guardia"));
		this._trasfondos.push( new Trasfondo(83,84,"Escudero"));
		this._trasfondos.push( new Trasfondo(85,86,"Bibliotecario"));
		this._trasfondos.push( new Trasfondo(87,88,"Artista callejero"));
		this._trasfondos.push( new Trasfondo(89,90,"Cantero"));
		this._trasfondos.push( new Trasfondo(91,93,"Curandero"));
		this._trasfondos.push( new Trasfondo(94,96,"Recaudador"));
		this._trasfondos.push( new Trasfondo(97,98,"Estibador"));
		this._trasfondos.push( new Trasfondo(99,100,"Matón"));	
	}
	
	trasfondo() {
		let numero = Comun.random(100, 1);
		var itras = 0;
		for (itras = 0; itras < this._trasfondos.length; itras++) {
			if ( this._trasfondos[itras].enIntervalo(numero) == true ) {
				return this._trasfondos[itras].NombreTrasfondo;
			}
		}
		return this._trasfondos[Comun.random(this._trasfondos.length, 0)].NombreTrasfondo;
	}
}

let trasfondos = new Trasfondos();
