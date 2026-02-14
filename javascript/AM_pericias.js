class Pericia {
	constructor(pericia) {
		this.pericia = pericia.nombre;
		this.valorbase = pericia.valorbase;
		this.tipo = pericia.tipo;
		this.puntos = 0;
		this.puntosbase = 0;
		this.especial = false;
		this.puntosespecial = 0;
	}
	
	calculapuntos(atributospj, modifadicional) {
		this.puntosbase = this.valorbase.valor;
		if ( this.valorbase.atributo != null ) {
			var valor = Atributos.modificador(atributospj[this.valorbase.atributo].valor + modifadicional[this.valorbase.atributo]);
			if ( valor + this.puntosbase < 1 ) {
				this.puntosbase = 1;
			}
			else {
				this.puntosbase +=  valor;
			}
		}
	}
}

class Pericias {
	constructor() {
		this._pericias = [
			{
				nombre: "Alerta",
				valorbase: { atributo: 4, valor: 2 },
				tipo: "Básica"
			},
			{
				nombre: "Arquitectura",
				valorbase: { atributo: null, valor: 1 },
				tipo: "Básica"
			},
			{
				nombre: "Escalada",
				valorbase: { atributo: 2, valor: 1 },
				tipo: "Básica"
			},
			{
				nombre: "Detectar",
				valorbase: { atributo: null, valor: 1 },
				tipo: "Básica"
			},
			{
				nombre: "Forzar puertas",
				valorbase: { atributo: 0, valor: 1 },
				tipo: "Básica"
			},
			{
				nombre: "Idiomas",
				valorbase: { atributo: 3, valor: 0 },
				tipo: "Básica"
			},
			{
				nombre: "Sigilo",
				valorbase: { atributo: 1, valor: 2 },
				tipo: "Básica"
			},
			{
				nombre: "Apuñalar",
				valorbase: { atributo: null, valor: 0 },
				tipo: "Avanzada"
			},
			{
				nombre: "Detectar trampas",
				valorbase: { atributo: null, valor: 1 },
				tipo: "Avanzada"
			},
			{
				nombre: "Juego de manos",
				valorbase: { atributo: null, valor: 0 },
				tipo: "Avanzada"
			},
			{
				nombre: "Mecanismos",
				valorbase: { atributo: null, valor: 0 },
				tipo: "Avanzada"
			},
			{
				nombre: "Arcanista aficionado",
				valorbase: { atributo: null, valor: 0 },
				tipo: "Avanzada"
			},
			{
				nombre: "Curar",
				valorbase: { atributo: null, valor: 0 },
				tipo: "Avanzada"
			},
			{
				nombre: "Historia antigua",
				valorbase: { atributo: null, valor: 1 },
				tipo: "Avanzada"
			},
			{
				nombre: "Ojo para la magia",
				valorbase: { atributo: null, valor: 1 },
				tipo: "Avanzada"
			},
			{
				nombre: "Juego de Manos",
				valorbase: { atributo: null, valor: 0 },
				tipo: "Avanzada"
			},
			{
				nombre: "Señor de las bestias",
				valorbase: { atributo: null, valor: 0 },
				tipo: "Avanzada"
			},
			{
				nombre: "Supervivencia",
				valorbase: { atributo: null, valor: 0 },
				tipo: "Avanzada"
			},
			{
				nombre: "Reciclaje (Armas)",
				valorbase: { atributo: null, valor: 0 },
				tipo: "Avanzada"
			},
			{
				nombre: "Reciclaje (Armaduras)",
				valorbase: { atributo: null, valor: 0 },
				tipo: "Avanzada"
			},
			{
				nombre: "Reciclaje (Munición)",
				valorbase: { atributo: null, valor: 0 },
				tipo: "Avanzada"
			},
			{
				nombre: "Reciclaje (____)",
				valorbase: { atributo: null, valor: 0 },
				tipo: "Avanzada"
			},
			{
				nombre: "Reciclaje (_____)",
				valorbase: { atributo: null, valor: 0 },
				tipo: "Avanzada"
			},
			{
				nombre: "Uso de armas de fuego",
				valorbase: { atributo: null, valor: 0 },
				tipo: "Avanzada"
			}
		];
	}
	
	buscapericia(nombre) {
		var i=0;
		for (i=0;i<this._pericias.length; i++) {
			if ( this._pericias[i].nombre == nombre ) {
				return new Pericia(this._pericias[i]);
			}
		}
		return null;
	}
	basicas(atributospj, modifadicional) {
		var periciasbasicas = [];
		var i=0;
		for (i=0;i<this._pericias.length; i++) {
			if ( this._pericias[i].tipo == "Básica" ) {
				var pericia = new Pericia(this._pericias[i]);
				pericia.calculapuntos(atributospj, modifadicional);
				periciasbasicas.push(pericia);
			}
		}
		return periciasbasicas;
	}
}



let pericias = new Pericias();

