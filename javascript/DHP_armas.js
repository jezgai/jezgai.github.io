class Armaduras {
	constructor() {
		
		this.armaduras = 
		[
			{
				nombre: "Acolchada",
				absorcion: "d4", 
				du: "d4",
				precio: 5,
			},
			{
				nombre: "Cuero",
				absorcion: "d6", 
				du: "d6",
				precio: 10,
			},
			{
				nombre: "Piel",
				absorcion: "d6", 
				du: "d6",
				precio: 10,
			},
			{
				nombre: "Cuero tachonado",
				absorcion: "d6", 
				du: "d8",
				precio: 45,
			},
		];
	}
	
	
	armadura(nombre) {
		var indice=0;
		for (indice=0; indice<this.armaduras.length; indice++) {
			if ( this.armaduras[indice].nombre == nombre ) {
				return this.armaduras[indice];
			}
		}
		return null;
	}
}


class Armas {
	constructor() {
		this.armas = 
		[
			{
				nombre: "Arcabuz",
				tipo: "AD", 
				alcance: "160 pies",
				dano: "1d10+2",
				du: "d8",
				recarga: "2 asaltos",
				descarga: "1-3",
				municion: "Bolas de plomo",
				precio: 80,
			},
			{
				nombre: "Mosquete",
				tipo: "AD", 
				alcance: "200 pies",
				dano: "1d12+2",
				du: "d8",
				recarga: "3 asaltos",
				descarga: "1-3",
				municion: "Cartuchos",
				precio: 125,
			},
			{
				nombre: "Pistola",
				tipo: "AD", 
				alcance: "60 pies",
				dano: "1d8+2",
				du: "d6",
				recarga: "2 asaltos",
				descarga: "1-2",
				municion: "Balas",
				precio: 50,
			},
			{
				nombre: "Trabuco",
				tipo: "AD", 
				alcance: "90 pies",
				dano: "1d8+2",
				du: "d6",
				recarga: "2 asaltos",
				descarga: "1-3",
				municion: "Balas",
				precio: 70,
			},
			{
				nombre: "Cuchillo",
				tipo: "CaC", 
				alcance: "",
				dano: "1d3",
				du: "",
				recarga: "30",
				descarga: "",
				municion: "",
				precio: 0.5,
			},
			{
				nombre: "Navaja",
				tipo: "CaC", 
				alcance: "30",
				dano: "1d3",
				du: "",
				recarga: "",
				descarga: "",
				municion: "",
				precio: 0.5,
			},
			{
				nombre: "Daga",
				tipo: "CaC", 
				alcance: "30",
				dano: "1d4",
				du: "",
				recarga: "",
				descarga: "",
				municion: "",
				precio: 2,
			},
			{
				nombre: "Hacha de mano",
				tipo: "CaC", 
				alcance: "30",
				dano: "1d6",
				du: "",
				recarga: "",
				descarga: "",
				municion: "",
				precio: 5,
			},
			{
				nombre: "Arpón",
				tipo: "CaC", 
				alcance: "40",
				dano: "1d6",
				du: "",
				recarga: "",
				descarga: "",
				municion: "",
				precio: 1,
			},
			{
				nombre: "Lanza",
				tipo: "CaC", 
				alcance: "40",
				dano: "1d6",
				du: "",
				recarga: "",
				descarga: "",
				municion: "",
				precio: 1,
			},
			{
				nombre: "Bastón",
				tipo: "CaC", 
				alcance: "",
				dano: "1d6",
				du: "",
				recarga: "",
				descarga: "",
				municion: "",
				precio: 0.2,
			},
			{
				nombre: "Espada ropera",
				tipo: "CaC", 
				alcance: "",
				dano: "1d8",
				du: "",
				recarga: "",
				descarga: "",
				municion: "",
				precio: 25,
			},
			{
				nombre: "Estoque",
				tipo: "CaC", 
				alcance: "",
				dano: "1d6",
				du: "",
				recarga: "",
				descarga: "",
				municion: "",
				precio: 20,
			},
			{
				nombre: "Alfanje",
				tipo: "CaC", 
				alcance: "",
				dano: "1d6",
				du: "",
				recarga: "",
				descarga: "",
				municion: "",
				precio: 25,
			},
			{
				nombre: "Sable",
				tipo: "CaC", 
				alcance: "",
				dano: "1d8",
				du: "",
				recarga: "",
				descarga: "",
				municion: "",
				precio: 25,
			},
			{
				nombre: "Alabarda",
				tipo: "CaC", 
				alcance: "",
				dano: "1d10",
				du: "",
				recarga: "",
				descarga: "",
				municion: "",
				precio: 20,
			},
			{
				nombre: "Ballesta de mano",
				tipo: "AD", 
				alcance: "60 pies",
				dano: "1d6",
				du: "d8",
				recarga: "2 asaltos",
				descarga: "",
				municion: "Virotes",
				precio: 75,
			},
		];
	}

	arma(nombre) {
		var indice=0;
		for (indice=0; indice<this.armas.length; indice++) {
			if ( this.armas[indice].nombre == nombre ) {
				return this.armas[indice];
			}
		}
		return null;
	}
}
