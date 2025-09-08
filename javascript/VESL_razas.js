class RazaSL extends Especie {
	
	
	constructor(nombre, talentos, mov, nombres) {
		super(nombre, talentos, mov);
		this._nombres = nombres;
	}
	
	get nombres() {
		return this._nombres;
	}
	
	nombrepj() {
		return this._nombres[ Comun.random(this._nombres.length, 0) ];
	}
	
	talentospj(nivel) {
		var _talentosaux = [];
		var _restotalentos = [];
		if ( this.talentos.NumeroIniciales == this.talentos.Iniciales.length ) {
			_talentosaux = this.talentos.Iniciales.clone();
		}
		else {
			var aux = Comun.shuffle(this.talentos.Iniciales.clone());
			var i=0;
			for(i=0;i<this.talentos.NumeroIniciales; i++) {
				_talentosaux.push(this.talentos.Iniciales[i]);
			}
			for(i=this.talentos.NumeroIniciales;i<this.talentos.Iniciales.length;i++) {
				_restotalentos.push(this.talentos.Iniciales[i]);
			}
		}
		
		if ( this.talentos.Nivel != null && this.talentos.NumPosterior>0 && nivel >= this.talentos.Nivel ) {
			var aux = [];
			var i=0;
			for (i=0;i<_restotalentos.length;i++) {
				aux.push(_restotalentos[i]);
			}
			for (i=0;i<this.talentos.Posteriores.length;i++) {
				aux.push(this.talentos.Posteriores[i]);
			}
			aux = Comun.shuffle(aux);
			for(i=0;i<this.talentos.NumPosterior && i<aux.length;i++) {
				_talentosaux.push(aux[i]);
			}
		}
		return _talentosaux;
	}
}



class RazasSL {
	constructor() {
		this._razas = [];
		this._razas.push( new RazaSL("Enano", { "NumeroIniciales": 2, "Iniciales": [ "Imparable" , "Infravisión", "Trasfondo enfocado" ], "NumPosterior": 0, "Nivel": null, "Posteriores": [ ] }, 10, [ "Brom", "Grorea", "Dumgal", "Moregard", "Rundhas" ]) );
		this._razas.push( new RazaSL("Elfo", { "NumeroIniciales": 2, "Iniciales": [ "Visión en luz tenue" , "Pies ligeros" ], "NumPosterior": 0, "Nivel": null, "Posteriores": [  ] }, 14, [ "Gharil", "Siriel", "Mitindel", "Varsil", "Deasing", "Gilead" ]) );
		this._razas.push( new RazaSL("Semielfo", { "NumeroIniciales": 2, "Iniciales": [ "Visión en luz tenue" , "Superviviente" ], "NumPosterior": 0, "Nivel": null, "Posteriores": [  ] }, 14, [ "Gharil", "Siriel", "Mitindel", "Varsil", "Deasing", "Gilead" ]) );
		this._razas.push( new RazaSL("Semigigante", { "NumeroIniciales": 2, "Iniciales": [ "Sangre de gigante" , "Grande" ], "NumPosterior": 0, "Nivel": null, "Posteriores": [  ] }, 12, [ "Grama", "Thrum", "Gorrum", "Agra", "Karg", "Dragga", "Wanla" ]) );
		this._razas.push( new RazaSL("Mediano", { "NumeroIniciales": 2, "Iniciales": [ "Cazador" , "Gente pequeña" ], "NumPosterior": 1, "Nivel": 6, "Posteriores": [  "Tácticas aprendidas" ] }, 10, [ "Senda", "Seraphin", "Resa", "Muf", "Milena" ]) );
		this._razas.push( new RazaSL("Humano", { "NumeroIniciales": 2, "Iniciales": [ "Ímpetu Emprendedor",  "Adaptable", "Ojos en la nuca", "Diplomacia"  ], "NumPosterior": 1, "Nivel": 6, "Posteriores": [ ] }, 12, [ "Nat", "Patia", "Belf", "Sinta", "Wanla" ]) );
		this._razas.push( new RazaSL("Mul", { "NumeroIniciales": 2, "Iniciales": [ "Terquedad" , "Puro músculo" ], "NumPosterior": 0, "Nivel": null, "Posteriores": [  ] }, 12, [ "Grama", "Thrum", "Gorrum", "Agra", "Karg", "Dragga", "Wanla" ]) );
		this._razas.push( new RazaSL("Thri-Kreen", { "NumeroIniciales": 4, "Iniciales": [ "Extraño" , "Exoesqueleto", "Cuatro brazos", "Sueño ligero" ], "NumPosterior": 0, "Nivel": null, "Posteriores": [  ] }, 12, [ "Grama", "Thrum", "Gorrum", "Agra", "Karg", "Dragga", "Wanla" ]) );
	}
	
	get razas() {
		return this._razas;
	}
	
	raza(nombre) {
		var iraza=0;
		for ( iraza = 0; iraza < this._razas.length; iraza++ ) {
			if ( this._razas[iraza].nombre == nombre ) {
				return new RazaSL(this._razas[iraza].nombre, this._razas[iraza].talentos, this._razas[iraza].mov, this._razas[iraza].nombres);
			}
		}
		var r = this.razas[ Comun.random(this._razas.length, 0)];
		return new RazaSL(r.nombre, r.talentos, r.mov, r.nombres);
	}
}


let razasSL = new RazasSL();

