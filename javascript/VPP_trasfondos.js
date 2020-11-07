class TrasfondoPP {
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

class TrasfondosPP {

	constructor() {
		this._trasfondos = [];
		this._trasfondos.push( new TrasfondoPP(1,4,"Agricultor"));
		this._trasfondos.push( new TrasfondoPP(5,8,"Pastor"));
		this._trasfondos.push( new TrasfondoPP(9,13,"Marinero"));
		this._trasfondos.push( new TrasfondoPP(14,16,"Herrero"));
		this._trasfondos.push( new TrasfondoPP(17,19,"Cocinero"));
		this._trasfondos.push( new TrasfondoPP(20,22,"Albañil"));
		this._trasfondos.push( new TrasfondoPP(23,25,"Leñador"));
		this._trasfondos.push( new TrasfondoPP(26,28,"Pescador"));
		this._trasfondos.push( new TrasfondoPP(29,32,"Mercader"));
		this._trasfondos.push( new TrasfondoPP(33,36,"Carpintero"));
		this._trasfondos.push( new TrasfondoPP(37,40,"Curtidor"));
		this._trasfondos.push( new TrasfondoPP(41,44,"Minero"));
		this._trasfondos.push( new TrasfondoPP(45,48,"Sastre"));
		this._trasfondos.push( new TrasfondoPP(49,53,"Cazador"));
		this._trasfondos.push( new TrasfondoPP(54,55,"Guardia"));
		this._trasfondos.push( new TrasfondoPP(56,58,"Domador"));
		this._trasfondos.push( new TrasfondoPP(59,60,"Zapatero"));
		this._trasfondos.push( new TrasfondoPP(61,62,"Estibador"));
		this._trasfondos.push( new TrasfondoPP(63,64,"Alfarero"));
		this._trasfondos.push( new TrasfondoPP(65,66,"Sacerdote"));
		this._trasfondos.push( new TrasfondoPP(67,68,"Vagabundo"));
		this._trasfondos.push( new TrasfondoPP(69,70,"Atleta"));
		this._trasfondos.push( new TrasfondoPP(71,73,"Escriba"));
		this._trasfondos.push( new TrasfondoPP(74,75,"Criminal"));
		this._trasfondos.push( new TrasfondoPP(76,77,"Ermitaño"));
		this._trasfondos.push( new TrasfondoPP(78,79,"Recaudador"));
		this._trasfondos.push( new TrasfondoPP(80,82,"Bibliotecario"));
		this._trasfondos.push( new TrasfondoPP(83,84,"Filósofo"));
		this._trasfondos.push( new TrasfondoPP(85,86,"Jurista"));
		this._trasfondos.push( new TrasfondoPP(87,88,"Científico"));	
		this._trasfondos.push( new TrasfondoPP(89,91,"Curandero"));	
		this._trasfondos.push( new TrasfondoPP(92,93,"Ingeniero"));	
		this._trasfondos.push( new TrasfondoPP(94,95,"Prostituto"));	
		this._trasfondos.push( new TrasfondoPP(96,97,"Artista"));	
		this._trasfondos.push( new TrasfondoPP(98,99,"Político"));	
		this._trasfondos.push( new TrasfondoPP(100,100,"Profeta"));	
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

let trasfondosPP = new TrasfondosPP();
