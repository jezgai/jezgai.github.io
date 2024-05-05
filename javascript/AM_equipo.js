class Escudos {
	constructor() {
		
		this.escudos = 
		[
			{
				nombre: "Escudo ligero",
				cacac: 1, 
				caad: 2,
				precio: 15,
				peso: 5,
			},
			{
				nombre: "Escudo pesado",
				cacac: 2, 
				caad: 3,
				precio: 40,
				peso: 10,
			},
		];
	}
	
	
	escudo(nombre) {
		var indice=0;
		for (indice=0; indice<this.escudos.length; indice++) {
			if ( this.escudos[indice].nombre == nombre ) {
				return this.escudos[indice];
			}
		}
		return null;
	}
}


class Armaduras {
	constructor() {
		
		this.armaduras = 
		[
			{
				nombre: "Sin Armaduda",
				ca: 10, 
				precio: 0,
				peso: 0,
			},
			{
				nombre: "Cuero",
				ca: 11, 
				precio: 10,
				peso: 5000,
			},
			{
				nombre: "Acolchada",
				ca: 11, 
				precio: 10,
				peso: 5000,
			},
			{
				nombre: "Cuero tachonado",
				ca: 12, 
				precio: 25,
				peso: 10000,
			},
			{
				nombre: "Cota de escamas",
				ca: 13, 
				precio: 50,
				peso: 20000,
			},
			{
				nombre: "Cota de mallas",
				ca: 14, 
				precio: 100,
				peso: 15000,
			},
			{
				nombre: "Armadura de bandas",
				ca: 15, 
				precio: 500,
				peso: 18000,
			},
			{
				nombre: "Coraza",
				ca: 15, 
				precio: 500,
				peso: 18000,
			},
			{
				nombre: "Armadura de placas",
				ca: 16, 
				precio: 1000,
				peso: 25000,
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
		this.tiposCaC = 
		[
			{
				nombre: "Guantelete",
				tipo: "CaC",
				dano: 4,
				peso: 1000,
				precio: 150
			},
			{
				nombre: "Lanza de caballería",
				tipo: "CaC",
				dano: 10,
				peso: 8000,
				precio: 300,
			},
			{
				nombre: "Arma de asta",
				tipo: "CaC",
				dano: 8,
				peso: 8000,
				precio: 300,
			},
			{
				nombre: "Lanza",
				tipo: "CaC",
				dano: 6,
				peso: 3000,
				precio: 50,
			},
			{
				nombre: "Vara",
				tipo: "CaC",
				dano: 4,
				peso: 2000,
				precio: 50,
			},
			{
				nombre: "Arma pequeña",
				tipo: "CaC",
				dano: 4,
				peso: 500,
				precio: 50,
			},
			{
				nombre: "Arma media",
				tipo: "CaC",
				dano: 6,
				peso: 1000,
				precio: 100,
			},
			{
				nombre: "Arma a 2 manos",
				tipo: "CaC",
				dano: 8,
				peso: 2000,
				precio: 200,
			},
			{
				nombre: "Arma enorme",
				tipo: "CaC",
				dano: 10,
				peso: 4000,
				precio: 500,
			},
		];
		this.tiposAD = 
		[
			{
				nombre: "Arco corto",
				tipo: "AD",
				dano: 6,
				peso: 1000,
				precio: 250,
				alcance: 100,
			},
			{
				nombre: "Arco largo",
				tipo: "AD",
				dano: 8,
				peso: 2000,
				precio: 750,
				alcance: 200,
			},
			{
				nombre: "Ballesta ligera",
				tipo: "AD",
				dano: 6,
				peso: 2000,
				precio: 250,
				alcance: 50,
			},
			{
				nombre: "Ballesta pesada",
				tipo: "AD",
				dano: 8,
				peso: 4000,
				precio: 300,
				alcance: 65,
			},
			{
				nombre: "Honda",
				tipo: "AD",
				dano: 4,
				peso: 100,
				precio: 1,
				alcance: 100,
			},
			{
				nombre: "Arrojadiza",
				tipo: "AD",
				dano: 4,
				peso: 500,
				precio: 50,
				alcance: 6,
			},
			{
				nombre: "Arrojadiza media",
				tipo: "AD",
				dano: 6,
				peso: 1000,
				precio: 100,
				alcance: 5,
			},
			{
				nombre: "Dardo",
				tipo: "AD",
				dano: 4,
				peso: 100,
				precio: 1,
				alcance: 10,
			},
			{
				nombre: "Venablo",
				tipo: "AD",
				dano: 6,
				peso: 2000,
				precio: 50,
				alcance: 6,
			},
			{
				nombre: "Cerbatana",
				tipo: "AD",
				dano: 0,
				peso: 100,
				precio: 5,
				alcance: 15,
			},
			{
				nombre: "Piedra",
				tipo: "AD",
				dano: 2,
				peso: 0,
				precio: 0,
				alcance: 4,
			},
			{
				nombre: "Arma de pólvora pequeña",
				tipo: "AD",
				dano: 6,
				peso: 2000,
				precio: 500,
				alcance: 25,
			},
			{
				nombre: "Arma de pólvora media",
				tipo: "AD",
				dano: 8,
				peso: 5000,
				precio: 1500,
				alcance: 50,
			},
			{
				nombre: "Arma de pólvora grande",
				tipo: "AD",
				dano: 10,
				peso: 7000,
				precio: 2000,
				alcance: 100,
			},
		];
		this.armas = 
		[
			{
				nombre: "Cimitarra",
				tipo: "CaC",
				tipoCaC: "Arma media", 
				tipoAD: ""
			},
			{
				nombre: "Alfanje",
				tipo: "CaC",
				tipoCaC: "Arma media", 
				tipoAD: "",
			},
			{
				nombre: "Sable",
				tipo: "CaC",
				tipoCaC: "Arma media", 
				tipoAD: "",
			},
			{
				nombre: "Sable dao",
				tipo: "CaC",
				tipoCaC: "Arma media", 
				tipoAD: "",
			},
			{
				nombre: "Daga",
				tipo: "CaC",
				tipoCaC: "Arma pequeña", 
				tipoAD: "Arrojadiza",
			},
			{
				nombre: "Clava",
				tipo: "CaC",
				tipoCaC: "Arma pequeña", 
				tipoAD: "",
			},
			{
				nombre: "Sai",
				tipo: "CaC",
				tipoCaC: "Arma pequeña", 
				tipoAD: "Arrojadiza",
			},
			{
				nombre: "Espada corta",
				tipo: "CaC",
				tipoCaC: "Arma media", 
				tipoAD: "",
			},
			{
				nombre: "Hoz",
				tipo: "CaC",
				tipoCaC: "Arma media", 
				tipoAD: "",
			},
			{
				nombre: "Kusarigama",
				tipo: "CaC",
				tipoCaC: "Arma media", 
				tipoAD: "Arrojadiza media",
			},
			{
				nombre: "Hacha de mano",
				tipo: "CaC", 
				tipoCaC: "Arma pequeña", 
				tipoAD: "Arrojadiza",
			},
			{
				nombre: "Hacha",
				tipo: "CaC", 
				tipoCaC: "Arma media", 
				tipoAD: "",
			},
			{
				nombre: "Hacha arrojadiza",
				tipo: "CaC", 
				tipoCaC: "Arma media", 
				tipoAD: "Arrojadiza media",
			},
			{
				nombre: "Martillo ligero",
				tipo: "CaC",
				tipoCaC: "Arma pequeña", 
				tipoAD: "",
			},
			{
				nombre: "Bastón",
				tipo: "CaC",
				tipoCaC: "Vara", 
				tipoAD: "",
			},
			{
				nombre: "Jō (bastón)",
				tipo: "CaC",
				tipoCaC: "Vara", 
				tipoAD: "",
			},
			{
				nombre: "Jian (espada)",
				tipo: "CaC",
				tipoCaC: "Arma media", 
				tipoAD: "",
			},
			{
				nombre: "Espada larga",
				tipo: "CaC",
				tipoCaC: "Arma a 2 manos", 
				tipoAD: "",
			},
			{
				nombre: "Estoque",
				tipo: "CaC",
				tipoCaC: "Arma media", 
				tipoAD: "",
			},
			{
				nombre: "Espada ropera",
				tipo: "CaC",
				tipoCaC: "Arma media", 
				tipoAD: "",
			},
			{
				nombre: "Hacha de batalla",
				tipo: "CaC",
				tipoCaC: "Arma a 2 manos", 
				tipoAD: "",
			},
			{
				nombre: "Jabalina",
				tipo: "AD",
				tipoCaC: "Lanza", 
				tipoAD: "Venablo",
			},
			{
				nombre: "Lanza",
				tipo: "CaC",
				tipoCaC: "Lanza", 
				tipoAD: "Venablo",
			},
			{
				nombre: "Pudao (lanza)",
				tipo: "CaC", 
				tipoCaC: "Lanza", 
				tipoAD: "",
			},
			{
				nombre: "Martillo de guerra",
				tipo: "CaC",
				tipoCaC: "Arma a 2 manos", 
				tipoAD: "",
			},
			{
				nombre: "Maza",
				tipo: "CaC",
				tipoCaC: "Arma media", 
				tipoAD: "",
			},
			{
				nombre: "Maza Xi Gua Chui",
				tipo: "CaC",
				tipoCaC: "Arma media", 
				tipoAD: "",
			},
			{
				nombre: "Lucero del alba",
				tipo: "CaC",
				tipoCaC: "Arma media", 
				tipoAD: "",
			},
			{
				nombre: "Alabarda",
				tipo: "CaC",
				tipoCaC: "Arma de asta", 
				tipoAD: "",
			},
			{
				nombre: "Dadao (sable)",
				tipo: "CaC",
				tipoCaC: "Arma a 2 manos", 
				tipoAD: "",
			},
			{
				nombre: "Espadón",
				tipo: "CaC",
				tipoCaC: "Arma enorme", 
				tipoAD: "",
			},
			{
				nombre: "Gran hacha",
				tipo: "CaC",
				tipoCaC: "Arma enorme", 
				tipoAD: "",
			},
			{
				nombre: "Guadaña",
				tipo: "CaC",
				tipoCaC: "Arma enorme", 
				tipoAD: "",
			},
			{
				nombre: "Tridente",
				tipo: "CaC",
				tipoCaC: "Arma a 2 manos", 
				tipoAD: "",
			},
			{
				nombre: "Machete",
				tipo: "CaC", 
				tipoCaC: "Arma pequeña", 
				tipoAD: "",
			},
			{
				nombre: "Bayoneta",
				tipo: "CaC", 
				tipoCaC: "Arma media", 
				tipoAD: "",
			},
			{
				nombre: "Cuchillo",
				tipo: "CaC",
				tipoCaC: "Arma pequeña", 
				tipoAD: "Arrojadiza",
			},
			{
				nombre: "Arco corto",
				tipo: "AD",
				tipoCaC: "", 
				tipoAD: "Arco corto",
			},
			{
				nombre: "Arco largo",
				tipo: "AD",
				tipoCaC: "", 
				tipoAD: "Arco largo",
			},
			{
				nombre: "Ballesta ligera",
				tipo: "AD",
				tipoCaC: "", 
				tipoAD: "Ballesta ligera",
			},
			{
				nombre: "Ballesta pesada",
				tipo: "AD",
				tipoCaC: "", 
				tipoAD: "Ballesta pesada",
			},
			{
				nombre: "Cerbatana",
				tipo: "AD", 
				tipoCaC: "", 
				tipoAD: "Cerbatana",
			},
			{
				nombre: "Dardo",
				tipo: "AD", 
				tipoCaC: "", 
				tipoAD: "Cerbatana",
			},
			{
				nombre: "Honda",
				tipo: "AD", 
				tipoCaC: "", 
				tipoAD: "Honda",
			},
			{
				nombre: "Pistola",
				tipo: "AD",
				tipoCaC: "Arma pequeña", 
				tipoAD: "Arma de pólvora pequeña",
			},
			{
				nombre: "Trabuco",
				tipo: "AD",
				tipoCaC: "Arma media", 
				tipoAD: "Arma de pólvora pequeña",
			},
			{
				nombre: "Arcabuz",
				tipo: "AD",
				tipoCaC: "Arma media", 
				tipoAD: "Arma de pólvora media",
			},
			{
				nombre: "Mosquete",
				tipo: "AD",
				tipoCaC: "Arma grande", 
				tipoAD: "Arma de pólvora media",
			},
			{
				nombre: "Carabina",
				tipo: "AD",
				tipoCaC: "Arma pequeña", 
				tipoAD: "Arma de pólvora media",
			},
			{
				nombre: "Fusil",
				tipo: "AD",
				tipoCaC: "Arma grande", 
				tipoAD: "Arma de pólvora grande",
			},
		];
	}
	
	tipoarmaCaC(nombre) {
		if ( nombre != "" ) {
			var indice=0;
			for (indice=0; indice<this.tiposCaC.length; indice++) {
				if ( this.tiposCaC[indice].nombre == nombre ) {
					return this.tiposCaC[indice];
				}
			}
		}
		return null;
	}
	tipoarmaAD(nombre) {
		if ( nombre != "" ) {
			var indice=0;
			for (indice=0; indice<this.tiposAD.length; indice++) {
				if ( this.tiposAD[indice].nombre == nombre ) {
					return this.tiposAD[indice];
				}
			}
		}
		return null;
	}

	arma(nombre) {
		var indice=0;
		var objarma = {}
		for (indice=0; indice<this.armas.length; indice++) {
			if ( this.armas[indice].nombre == nombre ) {
				objarma.nombre = this.armas[indice].nombre;
				objarma.tipo = this.armas[indice].tipo;
				var tipoarmaAD = this.tipoarmaAD(this.armas[indice].tipoAD);
				var tipoarmaCaC = this.tipoarmaCaC(this.armas[indice].tipoCaC);
				if ( this.armas[indice].tipo == "AD" ) {
					objarma.danoAD = tipoarmaAD.dano;
					objarma.peso = tipoarmaAD.peso;
					objarma.precio = tipoarmaAD.precio;
					objarma.alcance = tipoarmaAD.alcance;
					if ( tipoarmaCaC != null ) {
						objarma.danoCaC = tipoarmaCaC.dano;
					}
					else {
						objarma.danoCaC = 0;
					}
				}
				else {
					objarma.danoCaC = tipoarmaCaC.dano;
					objarma.peso = tipoarmaCaC.peso;
					objarma.precio = tipoarmaCaC.precio;
					if ( tipoarmaAD != null ) {
						objarma.danoAD = tipoarmaAD.dano;
						objarma.alcance = tipoarmaAD.alcance;
					}
					else {
						objarma.danoAD = 0;
						objarma.alcance = 0;
					}
					
				}
				break;
			}
		}
		return objarma;
	} 
}


let listaarmas = new Armas();

